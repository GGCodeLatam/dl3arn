import { Container } from "styles/test.styles";

import FullPage from "styles/FullContainer";
import { ChangeEvent, useEffect, useState } from "react";

function Test() {
  const [links, setLinks] = useState("");
  const [ids, setIds] = useState<string[]>([]);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    value && setLinks(value);

  useEffect(() => {
    if (!links) return;

    const sanitized = links.match(/be.+/g)?.map((id) => id.replace("be/", ""));

    setIds(sanitized || []);
  }, [links]);

  return (
    <FullPage>
      <Container>
        <main style={{ margin: "5vh 0 0 0" }}>
          <textarea value={links} onChange={onChange} />
          <ul>
            {ids.map((id) => (
              <li>{id}</li>
            ))}
          </ul>
        </main>
      </Container>
    </FullPage>
  );
}

export default Test;
