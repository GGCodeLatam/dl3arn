import { useEffect, useState } from "react";

interface Props {
  init?: boolean;
  hideOnChange?: any[];
}
function useShow({ init, hideOnChange }: Props) {
  const [state, setState] = useState<boolean>(!!init);

  const show = () => setState(true);
  const hide = () => setState(false);

  const hideDep = hideOnChange || [];

  useEffect(() => {
    hide();
  }, hideDep);

  return { state, show, hide };
}

export default useShow;
