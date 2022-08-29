import { useEffect, useState } from "react";

interface Props {
  init?: boolean;
  hideOnChange?: any[];
  showOnChange?: any[];
}
function useShow({ init, hideOnChange, showOnChange }: Props) {
  const [state, setState] = useState<boolean>(!!init);

  const show = () => setState(true);
  const hide = () => setState(false);

  const hideDep = hideOnChange || [];
  const showDep = showOnChange || [];

  useEffect(() => {
    hide();
  }, hideDep);
  useEffect(() => {
    show();
  }, showDep);

  return { state, show, hide };
}

export default useShow;
