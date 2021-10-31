import classes from "./Avatar.module.scss";

interface Props {
  short: string;
  name: string;
}

export const Avatar = (props: Props) => {
  return (
    <div className={classes.avatar} title={props.name}>
      {props.short}
    </div>
  );
};
