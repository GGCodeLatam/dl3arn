import { useEffect } from "react";
import styled from "styled-components";
import { RamppModel } from "utils/types/firebase";

const Container = styled.div`
  padding: 0 1rem;
  width: 100% !important;
  button {
    display: block !important;
    width: 100% !important;
  }
`;

interface Props {
  address?: string;
  rampp?: Partial<RamppModel> | null;
}
function RamppButton({ rampp }: Props) {
  const { address, abi_uri, buttonId, proof_uri, network } = rampp || {};

  useEffect(() => {
    if (!address || !buttonId || !proof_uri) return () => {};

    const cdnjs = document.createElement("script");
    const rampp = document.createElement("script");

    cdnjs.src =
      "https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js";
    cdnjs.async = true;
    cdnjs.crossOrigin = "anonymous";
    cdnjs.referrerPolicy = "no-referrer";

    rampp.src = "https://rampp.xyz/embeds/v2/embed1155.js";
    rampp.async = true;
    rampp.setAttribute("data-uuid", buttonId);
    rampp.type = "text/javascript";

    document.body.appendChild(cdnjs);
    document.body.appendChild(rampp);

    return () => {
      document.body.removeChild(cdnjs);
      document.body.removeChild(rampp);
    };
  }, [address, buttonId, proof_uri]);

  if (!network || !abi_uri || !address || !buttonId || !proof_uri) return null;
  return (
    <Container
      className="rampp-minting-container"
      id={`rampp-minting-container-${buttonId}`}
    >
      <button
        className="rampp-minting-button"
        data-abi-link={abi_uri}
        data-contract-address={address}
        data-format="single"
        data-merkle-proof-uri={proof_uri}
        data-network={network}
        data-redirect="null"
        data-show-claim-count="false"
        data-styles="eyJvcGVuIjp7InRleHQiOiJNaW50Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiNGRkZGRkY7YmFja2dyb3VuZC1jb2xvcjojNTMyNGZmOyJ9LCJwYXVzZWQiOnsidGV4dCI6Ik1pbnQlMjBDbG9zZWQiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07Y29sb3I6IzY3NjU2NTtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0RCREM7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJzdXBwbHlSZWFjaGVkIjp7InRleHQiOiJBbGwlMjBUb2tlbnMlMjBNaW50ZWQhIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07Y29sb3I6I2ZmMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI4Yjg7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJjbGFpbVRleHQiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoiY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSk7Zm9udC1zaXplOiAwLjc1cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLXRvcDogMC4yNXJlbTtwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTttYXJnaW46MDtmb250LWZhbWlseTpzYW5zLXNlcmlmOyJ9LCJxdWFudGl0eSI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJ3aWR0aDo0MHB4O2NvbG9yOiM1MzI0ZmY7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOiM1MzI0ZmY7Ym9yZGVyLXJhZGl1czowLjM3NXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9fQ=="
        data-token-id="1"
        id={`rampp-minting-button-${buttonId}`}
        style={{ display: "none" }}
      />
    </Container>
  );
}

export default RamppButton;
