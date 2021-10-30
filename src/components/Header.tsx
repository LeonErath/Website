import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { useScrollHandler } from "../hooks/useScroll";
import classes from "./Header.module.scss";
import { Nav } from "./Nav";
import classNames from "classnames";

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
    <div className={classNames(classes.header, { [classes.noScroll]: isTop })}>
      <Link href="/">
        <a>
          <img src="/logo.png" width="60"></img>
        </a>
      </Link>

      <Nav />
    </div>
  );
};
