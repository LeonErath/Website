import styled from "styled-components";

const StyledFooter = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  background: #2d313c;
  padding: 16px;
  margin-top: 16px;
  color: white;
  span {
    margin: 4px;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <span>Made with Mate & Love</span>
  </StyledFooter>
);
