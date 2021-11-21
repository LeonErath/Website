import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import classes from "./Nav.module.scss";
import { ThemeToggle } from "./theme-toggle/ThemeToggle";

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const renderLinks = () => {
    return (
      <>
        <Link href="/resume/Leon_Erath_Resume_2019.pdf">
          <a onClick={() => setMenuOpen(false)}>Resume</a>
        </Link>
        <Link href="/#projects">
          <a onClick={() => setMenuOpen(false)}>Projects</a>
        </Link>
        <Link href="/blog">
          <a onClick={() => setMenuOpen(false)}>Blog</a>
        </Link>
      </>
    );
  };

  return (
    <div>
      <div className={classNames(classes.container, classes.mobileNav)}>
        <div className={classes.left}>
          <button aria-label="Menu" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <img
                src="/icons/cancel(24x24)@1x.svg"
                alt=""
                data-theme="invert"
              />
            ) : (
              <img
                src="/icons/menu-2(24x24)@1x.svg"
                alt=""
                data-theme="invert"
              />
            )}
          </button>
        </div>
        <div className={classes.right}>
          <ThemeToggle />
          <Link href="/">
            <a className={classes.logo}>
              <span className={classes.small}>Le</span>
              <span className={classes.large}>Leon Erath</span>
            </a>
          </Link>
        </div>
        <div
          className={classNames(classes.popupNav, {
            [classes.open]: isMenuOpen,
          })}
        >
          {renderLinks()}
        </div>
      </div>
      <div className={classNames(classes.container, classes.desktopNav)}>
        <div className={classes.left}>
          <Link href="/">
            <a className={classes.logo}>
              <span className={classes.small}>Le</span>
              <span className={classes.large}>Leon Erath</span>
            </a>
          </Link>
          {renderLinks()}
        </div>
        <div className={classes.right}>
          <ThemeToggle />
          <Link href="/#contact">
            <a className={classes.fakeButton}>contact me</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
