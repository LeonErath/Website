import Link from "next/link";
import { useState } from "react";
import classes from "./Nav.module.scss";
import { ThemeToggle } from "./theme-toggle/ThemeToggle";

export const Nav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link href="/">
          <a className={classes.logo}>
            <span className={classes.small}>Le</span>
            <span className={classes.large}>Leon Erath</span>
          </a>
        </Link>
        <Link href="/resume/Leon_Erath_Resume_2019.pdf">
          <a>Resume</a>
        </Link>
        <Link href="/#projects">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <div className={classes.right}>
        <ThemeToggle />
        <Link href="/#contact">
          <a className={classes.fakeButton}>contact me</a>
        </Link>
      </div>
    </div>
  );
};
