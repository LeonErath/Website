import { Bubble } from "../components/bubble/Bubble";
import { ListItem } from "../components/list-item/ListItem";
import classes from "./About.module.scss";

export const About = () => (
  <div className={classes.container}>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Work experience</h3>
        <Bubble
          icon="/icons/code(24x24)@1x.svg"
          bubble="/icons/bubbles/bubble4.svg"
        />
        <ul className={classes.list}>
          <ListItem text="Fullstack Developer for 2+ years" />
          <ListItem text="Build multiple web-apps with over 10k daily users" />
          <ListItem text="Maintaining and designing microservices" />
        </ul>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Interests</h3>
        <Bubble
          icon="/icons/headphone-3(24x24)@1x.svg"
          bubble="/icons/bubbles/bubble1.svg"
        />
        <ul className={classes.list}>
          <ListItem text="Computational linguistics (nlp)" inverse />
          <ListItem text="Accessibility (wai aria etc.)" inverse />
          <ListItem text="Software testing" inverse />
        </ul>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Social</h3>
        <Bubble
          icon="/icons/round-chat-dot(24x24)@1x.svg"
          bubble="/icons/bubbles/bubble3.svg"
        />
        <ul className={classes.list}>
          <ListItem text="Organizing and attending meet-ups" inverse />
          <ListItem text="'jugend forscht' alumni" inverse />
          <ListItem text="voluntary work for lernfair.de" inverse />
        </ul>
      </div>
    </div>
    <div className={classes.card}>
      <div className={classes.content}>
        <h3>Personal traits</h3>
        <Bubble
          icon="/icons/idea-on(24x24)@1x.svg"
          bubble="/icons/bubbles/bubble2.svg"
        />
        <ul className={classes.list}>
          <ListItem text="curious & eager to learn" />
          <ListItem text="having real impact motivates me" />
          <ListItem text="something betweeen Pioneer & Settler" />
        </ul>
      </div>
    </div>
  </div>
);
