import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;

  z-index: 2;
  transform: skew(-20deg);
  a {
    background: black;
    padding: 0.5rem 2rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 8px;

    text-align: center;
    padding: 10px 10px 10px 10px;
  }
  @media (max-width: 700px) {
    margin: 8px;
    font-size: 2rem;
    padding: 10px 10px 10px 10px;
  }
`;

const StyledHeader = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: white;

  .bar {
    border-bottom: 2px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Leon Erath</a>
        </Link>
      </Logo>

      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
