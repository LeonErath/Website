import classNames from "classnames";
import Router from "next/router";
import NProgress from "nprogress";
import { useScrollHandler } from "../hooks/useScroll";
import classes from "./Header.module.scss";
import { Nav } from "./Nav";

(Router as any).onRouteChangeStart = () => {
  NProgress.start();
};

(Router as any).onRouteChangeComplete = () => {
  NProgress.done();
};

(Router as any).onRouteChangeError = () => {
  NProgress.done();
};

export const Header = () => {
  const isTop = useScrollHandler();

  return (
    <nav className={classNames(classes.header, { [classes.noScroll]: isTop })}>
      <Nav />
    </nav>
  );
};
