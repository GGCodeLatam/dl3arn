import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetCourseById } from "utils/types/course";
import { ContractModel } from "utils/types/firebase";
import { useAccount, useContractRead } from "wagmi";
import { NFTabi } from "abis/NFTabi";
import { course as mixpanelCourse } from "utils/mixpanel";

function useCourse({ id }: { id?: string }) {
  const [current, setCurrent] = useState<APIGetCourseById | null>(null);
  const [contract, setContract] = useState<ContractModel | null>(null);
  const [firstTime, setFirstTime] = useState<boolean>(true);
  const [locked, setLocked] = useState(true);
  const [readEnable, setReadEnable] = useState(false);

  useEffect(() => {
    const p = async () => {
      try {
        if (!id) return null;
        const { data } = await TypedFetch<APIGetCourseById>(
          `/api/courses/${id}`
        );
        if (!data) return null;
        data.videos.sort((a, b) => {
          if (!a || !b) return 0;
          return Number(b.free) - Number(a.free);
        });

        setCurrent(data);
        setContract(data.contract);
      } catch (e) {}
    };
    p();
  }, [id]);

  useEffect(() => {
    if (current && firstTime) {
      setFirstTime(false);
      mixpanelCourse({ name: current.name, id: current.id });
    }
  }, [current, firstTime]);

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

  return { current, locked };
}

export default useCourse;
