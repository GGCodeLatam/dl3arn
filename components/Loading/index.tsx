import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  element: ReactNode;
  isLoading: boolean;
}
function Loading({ children, isLoading, element }: Props) {
  return <>{isLoading ? element : children}</>;
}

export default Loading;
