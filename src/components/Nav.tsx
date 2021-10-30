import Link from "next/link";
import classes from "./Nav.module.scss";

export const Nav = () => (
  <div className={classes.container}>
    <div className={classes.left}>
      <Link href="/resume/Leon_Erath_Resume_2019.pdf">
        <a>Resume</a>
      </Link>
      <Link href="/#projects">
        <a>Projects</a>
      </Link>
      <Link href="/#about">
        <a>About</a>
      </Link>
    </div>
    <div className={classes.right}>
      <Link href="/#contact">
        <div className={classes.fakeButton}>contact me</div>
      </Link>
    </div>
  </div>
);
