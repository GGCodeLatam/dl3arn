import { useEffect, useState } from "react";
import { APIGetCourseById } from "utils/types/course";
import { ContractModel } from "utils/types/firebase";
import { useAccount, useContractRead } from "wagmi";
import { NFTabi } from "abis/NFTabi";
import { course as mixpanelCourse } from "utils/mixpanel";

function useCourse({ course }: { course: APIGetCourseById }) {
  const [contract, setContract] = useState<ContractModel | null>(null);
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const [locked, setLocked] = useState(true);
  const [readEnable, setReadEnable] = useState(false);

  useEffect(() => {
    const p = async () => {
      try {
        if (!course?.id) return null;
        setContract(course.contract);
      } catch (e) {}
    };
    p();
  }, [course]);

  useEffect(() => {
    if (course && firstTime) {
      setFirstTime(false);
      mixpanelCourse({ name: course.name, id: course.id });
    }
  }, [course, firstTime]);

  const { address, isConnected } = useAccount({
    onDisconnect() {
      setReadEnable(false);
      setLocked(true);
    },
    onConnect() {
      setReadEnable(true);
    },
  });

  const { data: hasNft, error: fetchError } = useContractRead({
    addressOrName: contract?.address || "",
    contractInterface: NFTabi,
    functionName: "balanceOf",
    watch: true,
    args: [address, 1],
    enabled: readEnable,
    chainId: contract?.chainId,
  });

  useEffect(() => {
    if (isConnected) {
      let result = hasNft?.toNumber();
      if (!!result) {
        setLocked(false);
      } else {
        setLocked(true);
      }
    }
  }, [address, isConnected, hasNft]);

  return { course, locked };
}

export default useCourse;
