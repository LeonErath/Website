import styled from "styled-components";

const Topic = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 40px;

  background: ${props => (props.color ? props.color : "#000000")};
  @media (max-width: 700px) {
    margin: 12px;
  }
`;

export default Topic;
