import styled from "styled-components";

const Topic = styled.div`
  padding-right: ${props => (props.right ? "8px" : "30px")};
  padding-left: ${props => (props.right ? "30px" : "8px")};
  font-size: 12px;
  letter-spacing: 3px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 40px;
  display: inline-block;
  background: ${props => (props.color ? props.color : "#000000")};
`;

export default Topic;
