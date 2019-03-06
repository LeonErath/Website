import styled from "styled-components";

import Header from "./Header";
import Icon from "./Icon";
import Image from "./Image";
import Text from "./Text";

const Card = styled.div`
  width: 350px;
  margin: 20px;
  height: 550px;
  background: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
`;

Card.Header = Header;
Card.Text = Text;
Card.Icon = Icon;
Card.Image = Image;

export default Card;
