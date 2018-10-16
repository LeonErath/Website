import styled from "styled-components";

const Header = styled.div`
  text-align: ${props => (props.right ? "right" : "left")};
  flex-basis: 100%;
  flex-grow: 1;
  font-size: calc(15px + 1vw);
  font-weight: 200;
  line-height: 2;
  margin: 24px;
`;

export default Header;
