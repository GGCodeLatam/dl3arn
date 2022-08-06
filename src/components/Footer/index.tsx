import styled from "styled-components";

const Container = styled.footer`
  background-color: #1e1e20;
  color: #fff;
  padding: 5vh 0;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <h3>DL3arn</h3>
      </div>
    </Container>
  );
}

export default Footer;
