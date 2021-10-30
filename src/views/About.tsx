import styled from "styled-components";
import classes from "./About.module.scss";

const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${(props: { inverse?: boolean }) =>
    props.inverse ? "rgba(71, 217, 202, 0.38)" : "rgba(138, 151, 238, 0.38)"};
  width: 20px;
  height: 20px;
  margin-right: 14px;

  div {
    background: ${(props) => (props.inverse ? " #47d9ca" : "#8a97ee")};

    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 2;
  }
`;

export const About = () => (
  <div className={classes.container}>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Programming & Design</h3>
        <img src="/categorie1.svg" alt="" />
        <div className={classes.list}>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>
              Developing Android apps for 5 years
            </div>
          </div>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>
              Developing Fullstack JS Solutions for 2 years{" "}
            </div>
          </div>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>
              Requirements Analysis & Testdriven Development are not foreign
              words to me
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Research</h3>
        <img src="/categorie2.svg" alt="" />
        <div className={classes.list}>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.item}>Computerlinguistics </div>
          </div>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.text}>
              Accessibility (e.g. audio-only games){" "}
            </div>
          </div>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.text}>Artificial Intelligence </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Globally Present</h3>
        <img src="/categorie3.svg" alt="" />
        <div className={classes.list}>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.text}>English C1-certified </div>
          </div>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.text}>
              Joined international Communities{" "}
            </div>
          </div>
          <div className={classes.item}>
            <Point>
              <div></div>
            </Point>
            <div className={classes.text}>
              Attended international conferences and meet-ups{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Searching for a Challenge</h3>
        <img src="/categorie4.svg" alt="" />
        <div className={classes.list}>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>Participated in 2 Hackathons </div>
          </div>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>Award winning Project </div>
          </div>
          <div className={classes.item}>
            <Point inverse>
              <div></div>
            </Point>
            <div className={classes.text}>
              Drive to learn something new everyday{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
