import Script from "next/script";
import styled from "styled-components";

const Container = styled.div`
  &,
  & *,
  .rampp-mintin-container,
  .rampp-minting-button {
    width: 95% !important;
    margin: 0 auto;
  }
`;

interface Props {
  address: string;
}
function RamppButton({ address }: Props) {
  if (!address) return null;
  return (
    <Container>
      <div
        id="rampp-minting-container-1539aa28-b4cb-4e2d-a087-d988afd915ad"
        className="rampp-minting-container"
      >
        <button
          id="rampp-minting-button-1539aa28-b4cb-4e2d-a087-d988afd915ad"
          className="rampp-minting-button"
          style={{ display: "none" }}
          data-merkle-proof-uri="https://us-central1-nft-rampp.cloudfunctions.net/allowlist/fmEalku1Q8BCj1kzgcBC/merkle/verify"
          data-styles="eyJvcGVuIjp7InRleHQiOiJDb21wcmFyJTIwQWNhISUyMCIsInN0eWxlcyI6ImJvcmRlcjpub25lO3dpZHRoOiAxNXJlbTtwYWRkaW5nOjAuNXJlbTtmb250LXNpemU6IDEuMTI1cmVtO2xpbmUtaGVpZ2h0OiAxLjc1cmVtO3RleHQtYWxpZ246IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7Ym9yZGVyLXJhZGl1czowLjM3NXJlbTtjb2xvcjojRkZGRkZGO2JhY2tncm91bmQtY29sb3I6IzUzMjRmZjsifSwicGF1c2VkIjp7InRleHQiOiJDb21wcmElMjBQYXVzYWRhJTIwIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiM2NzY1NjU7YmFja2dyb3VuZC1jb2xvcjojQ0NEQkRDO2N1cnNvcjpub3QtYWxsb3dlZDsifSwic3VwcGx5UmVhY2hlZCI6eyJ0ZXh0IjoiRnVlcmElMjBkZSUyMHN0b2NrIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07Y29sb3I6I2ZmMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI4Yjg7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJjbGFpbVRleHQiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoiY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSk7Zm9udC1zaXplOiAwLjc1cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLXRvcDogMC4yNXJlbTtwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTttYXJnaW46MDtmb250LWZhbWlseTpzYW5zLXNlcmlmOyJ9LCJxdWFudGl0eSI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJ3aWR0aDo0MHB4O2NvbG9yOiM1MzI0ZmY7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOiM1MzI0ZmY7Ym9yZGVyLXJhZGl1czowLjM3NXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9fQ=="
          data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FfmEalku1Q8BCj1kzgcBC%2FLucasWeb3Contract_data-b649eda9-988e-42c1-9ed4-fcca29cd55d0.json?alt=media"
          data-token-id="1"
          data-redirect="null"
          data-contract-address={address}
          data-show-claim-count="false"
          data-network="testnet"
          data-format="single"
        ></button>
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></Script>
      <Script
        type="text/javascript"
        src="https://rampp.xyz/embeds/v2/embed1155.js"
        data-uuid="1539aa28-b4cb-4e2d-a087-d988afd915ad"
      ></Script>
    </Container>
  );
}

export default RamppButton;
