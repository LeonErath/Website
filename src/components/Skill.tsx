import styled from "styled-components";
import classes from "./Skill.module.scss";

interface Props {
  name: string;
  description: string;
  time: string;
  progress: number;
}

const Progress = styled.div`
  position: relative;
  border-radius: 10px;
  height: 6px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: var(--background-3);
`;

const Bar = styled.div`
  border-radius: 10px;
  height: 6px;
  width: ${(props: { progress: number }) => props.progress}%;
  background: linear-gradient(90deg, #9199ee, #35a0f7);
`;

const Time = styled.div`
  width: auto;
  white-space: nowrap;
  font-size: 0.9em;
  color: var(--ui-color-2);
`;

export const Skill = (props: Props) => (
  <div className={classes.container}>
    <div className={classes.progressBar}>
      <div className={classes.name}>{props.name}</div>
      <Progress>
        <Bar progress={props.progress} />
      </Progress>
    </div>
    <div className={classes.description}>
      <div>{props.description}</div>
      <Time>{props.time}</Time>
    </div>
  </div>
);
