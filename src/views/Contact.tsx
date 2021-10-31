import Link from "next/link";
import classes from "./Contact.module.scss";

export const Contact = () => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <img width="200" src="/email.svg"></img>
      <div className={classes.content}>
        <h2 className={classes.headline}>Have a Question?</h2>
        <div className={classes.text}>
          I’m available for full contract work and would love to get in touch.
        </div>

        <Link href="mailto:contact@erath.dev">
          <a>contact@erath.dev</a>
        </Link>
      </div>
    </div>
  </div>
);
