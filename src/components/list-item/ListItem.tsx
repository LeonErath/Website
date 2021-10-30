import styled from "styled-components";
import classes from "./ListItem.module.scss";

const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${(props: { inverse?: boolean }) =>
    props.inverse ? "#38dbff61" : "rgba(138, 151, 238, 0.38)"};
  width: 20px;
  height: 20px;
  margin-right: 14px;

  div {
    background: ${(props) => (props.inverse ? " #38D9FF" : "#8a97ee")};

    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 2;
  }
`;

interface Props {
  text: string;
  inverse?: boolean;
}

export const ListItem = (props: Props) => {
  return (
    <li className={classes.item}>
      <Point inverse={props.inverse}>
        <div />
      </Point>
      <div className={classes.text}>{props.text}</div>
    </li>
  );
};
