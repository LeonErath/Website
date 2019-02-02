import styled from "styled-components";

const Text = styled.div`
  flex-grow: 1;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
  margin: 24px;
  @media (max-width: 700px) {
    margin: 12px;
    font-size: 14px;
  }
`;

export default Text;
