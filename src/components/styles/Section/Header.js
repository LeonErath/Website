import styled from "styled-components";

const Header = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  font-size: calc(15px + 1vw);
  font-weight: 200;
  line-height: 2;
  margin: 24px;

  @media (max-width: 700px) {
    margin: 12px;
  }
`;

export default Header;
