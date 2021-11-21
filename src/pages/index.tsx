import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { About } from "../views/About";
import { Contact } from "../views/Contact";
import { Projects } from "../components/Projects";
import Github from "../views/Github";
import { Skills } from "../views/Skills";
import classes from "./index.module.scss";

const MoveUpDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;
const ScrollDown = styled.a`
  width: 60px;
  margin-left: auto;
  margin-right: auto;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: ${MoveUpDown} 0.6s infinite alternate;
`;

const App = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.landingPage}>
          <div className={classes.textContainer}>
            <h1>Hey, I’m Leon 👋</h1>
            <h2>I’m a Fullstack Developer based in Düsseldorf.</h2>
          </div>

          <div className={classes.profile}>
            <Image src="/profile.png" width={400} height={400} alt="" />
          </div>
        </div>
        <ScrollDown href="#skills" aria-label="Scroll down">
          <Image src="/scroll.svg" width={60} height={60} alt="" />
        </ScrollDown>

        <div className={classes.page}>
          <h2 id="skills" className={classes.headline}>
            Skills & Tools
          </h2>
          <div className={classes.skillPage}>
            <Github></Github>
            <Skills />
          </div>
        </div>

        <h2 id="projects" className={classes.headline}>
          Projects
        </h2>
      </div>
      <Projects />
      <div className={classes.container}>
        <h2 id="about" className={classes.headline}>
          About Me
        </h2>

        <About />

        <div id="contact" className={classes.divider} />
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
