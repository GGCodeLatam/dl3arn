import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.button`
  position: relative;
  background-color: transparent;
`;

const Toast = styled.span`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;

  background-color: var(--dark);
  padding: 0.5rem 0.75rem;
  color: #fff;
  border-radius: 2px;
  font-size: 0.75rem;
`;

interface Props {
  children: ReactNode;
  url?: string;
  title?: string;
}
function ShareButton({ url, title, children }: Props) {
  const [copy, setCopy] = useState<{ copied: boolean }>({
    copied: false,
  });

  useEffect(() => {
    const timeout = copy.copied
      ? setTimeout(
          () => setCopy((old) => ({ ...old, copied: false })),
          3.5 * 1000
        )
      : null;

    return () => {
      if (!timeout) return;
      clearTimeout(timeout);
    };
  }, [copy.copied]);

  const share = async () => {
    if (!url) return null;

    try {
      await navigator.share({ url, title });
    } catch (e: any) {
      await navigator.clipboard.writeText(`${title}\n${url}`);
    }

    setCopy((old) => ({
      ...old,
      copied: true,
    }));
    return url;
  };

  return (
    <Container onClick={share}>
      {copy.copied && <Toast>Enlace copiado!</Toast>}
      {children}
    </Container>
  );
}

export default ShareButton;
