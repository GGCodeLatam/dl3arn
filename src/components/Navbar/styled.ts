import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  height: var(--nav-size);

  .wrapper,
  .left,
  .right,
  .avatar {
    height: 100%;
  }

  .wrapper {
    padding: 0 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;

    .link {
      font-size: 0.85rem;
      opacity: 0.5;
    }
    .link:hover {
      opacity: 1;
    }
  }

  .left {
    gap: 1rem;
  }
  .login {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
  .logo {
    font-weight: 500;
    font-size: 1.15rem;
  }

  .logo,
  .link {
    display: grid;
    place-items: center;
    height: 100%;
  }
`;

export const Verify = styled.button`
  position: absolute;
  bottom: 7vh;
  left: 50%;

  transform: translate(-50%, 0);

  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: var(--dark);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  border-radius: 9999px;
`;
