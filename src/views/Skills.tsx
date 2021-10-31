import React from "react";
import { Skill } from "../components/Skill";

import classes from "./Skills.module.scss";

export const Skills = () => {
  return (
    <div className={classes.skillContainer}>
      <Skill
        name="React"
        time="4+ years"
        progress={100}
        description="redux, jest & cypress"
      />
      <Skill
        name="Typescript"
        time="2+ years"
        progress={90}
        description="(JavaScript 4+ years)"
      />
      <Skill
        name="css & html"
        time="4+ years"
        progress={80}
        description="a11y, form handling, theming"
      />
      <Skill
        name="CI/CD"
        time="3+ years"
        progress={80}
        description="Kubernetes + GCP, Jenkins, Github Actions, Circle CI"
      />
      <Skill
        name="Java"
        time="2+ years"
        progress={60}
        description="Microservices with Spring Boot, Wildfly Swarm"
      />

      <div className={classes.tools}>
        <div>Tools</div>
        <div className={classes.toolsIcons}>
          <img width="40" src="/terminal.svg" data-theme="invert" />
          <img width="40" src="/visual-studio-code.svg" data-theme="invert" />
        </div>
      </div>
    </div>
  );
};
