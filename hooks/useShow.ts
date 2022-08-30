import { useEffect, useState } from "react";

interface Props {
  init?: boolean;
  hideOnChange?: any[];
}
function useShow({ init, hideOnChange }: Props) {
  const [state, setState] = useState<boolean>(!!init);

  const show = () => setState(true);
  const hide = () => setState(false);
  const toggle = () => setState((old) => !old);

  const hideDep = hideOnChange || [];

  useEffect(() => {
    hide();
  }, hideDep);

  return { state, show, hide, toggle };
}

export default useShow;
