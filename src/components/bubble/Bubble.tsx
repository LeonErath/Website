import { url } from "inspector";
import classes from "./Bubble.module.scss";

interface Props {
  icon: string;
  bubble: string;
}

export const Bubble = (props: Props) => {
  return (
    <div
      className={classes.bubble}
      style={{ backgroundImage: `url("${props.bubble}")` }}
    >
      <img src={props.icon} alt="" />
    </div>
  );
};
