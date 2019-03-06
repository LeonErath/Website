import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/resume">
      <a>Resume</a>
    </Link>
    <Link href="/about">
      <a>About me</a>
    </Link>
  </NavStyles>
);

export default Nav;
