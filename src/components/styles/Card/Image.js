import styled from "styled-components";

const Image = styled.div`
  height: 240px;
  background-image: ${props => (props.url ? props.url : "")};
  border-radius: 8px 8px 0px 0px;
  display: flex;
  justify-content: center;
  background-size: 350px 240px;
  align-items: center;
`;

export default Image;
