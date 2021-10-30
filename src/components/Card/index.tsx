import styled from "styled-components";

const Card = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.33, 0, 0.2, 1);
  box-sizing: border-box;
  justify-content: space-between;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div {
    width: auto;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.2;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Foreground = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
`;

const Background = styled.div`
  overflow: hidden;
  font-size: 6em;
  font-weight: bold;
  color: #f4f4f4;
`;

const Title = styled.div`
  font-size: 3em;
  margin: 16px;
  font-weight: bold;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: row-reverse;
  img {
    margin-left: 16px;
  }
`;

export {
  Main as CardMain,
  Title as CardTitle,
  Foreground as CardForeground,
  Background as CardBackground,
  Stack as CardStack,
  Header as CardHeader,
};

export default Card;
