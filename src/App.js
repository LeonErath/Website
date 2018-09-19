import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styled from "styled-components";

import About from "./components/about.js";
import Projects from "./components/projects.js";
import Resume from "./components/resume.js";
import Main from "./components/main.js";
import Impressum from "./components/impressum.js";
import Eve from "./components/projects/Eve.js";
import T2M from "./components/projects/T2M.js";
import JournalismFuture from "./components/projects/JournalismFuture.js";
import Pineapple from "./components/projects/Pineapple.js";
import Watchlist from "./components/projects/Watchlist.js";
import Cloudy from "./components/projects/Cloudy.js";
import DataProtection from "./components/dataprotection";
import Credit from "./components/credit";

const Navbar = styled.div`
  padding-top: 10px;
  list-style-type: none;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
`;

const Div = styled.div`
  padding-top: 100px;
`;

const NavbarLink = styled.li`
  font-family: "Courier New", Courier, monospace;
  padding: 10px;
  float: right;
  font-size: 14px;
  letter-spacing: 6px;
  :first-child {
    font-size: 24px;
    letter-spacing: 10px;
    float: left;
  }
`;

const NavbarLinkBottom = styled.div`
  font-family: "Courier New", Courier, monospace;
  padding: 10px;
`;

const LinkStyled2 = styled(Link)`
  width: 20px;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  :hover {
    background: #000;
    color: #fff;
  }
`;

const LinkStyled = styled(Link)`
  padding: 10px;
  color: #000;
  text-decoration: none;
  :hover {
    background: #000;
    color: #fff;
  }
`;

const Bottombar = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #333;
  overflow: hidden;
  bottom: 0;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Switch>
                <Route path="/journalismfuture" component={JournalismFuture} />
                <Route path="/pineapple" component={Pineapple} />
                <Route path="/eve" component={Eve} />
                <Route path="/t2m" component={T2M} />
                <Route path="/watchlist" component={Watchlist} />
                <Route path="/cloudy" component={Cloudy} />

                <div>
                  <Navbar>
                    <NavbarLink>
                      <LinkStyled to="/">Leon Erath</LinkStyled>
                    </NavbarLink>
                    <NavbarLink>
                      <LinkStyled to={`/aboutme`}>ABOUT ME</LinkStyled>
                    </NavbarLink>
                    <NavbarLink>
                      <LinkStyled to={`/resume`}>RESUME</LinkStyled>
                    </NavbarLink>
                    <NavbarLink>
                      <LinkStyled to={`/projects`}>PROJECTS</LinkStyled>
                    </NavbarLink>
                  </Navbar>
                  <Div>
                    <Route exact path="/" component={Main} />
                    <Route path="/aboutme" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/dataprotection" component={DataProtection} />
                    <Route path="/impressum" component={Impressum} />
                    <Route path="/credit" component={Credit} />
                    <Route
                      path="/github"
                      component={() =>
                        (window.location = "https://github.com/LeonErath")
                      }
                    />
                    <Route
                      path="/linkedin"
                      component={() =>
                        (window.location =
                          "https://www.linkedin.com/in/leon-erath/")
                      }
                    />
                    <Route
                      path="/xing"
                      component={() =>
                        (window.location =
                          "https://www.xing.com/profile/Leon_Erath/cv")
                      }
                    />

                    <Route
                      path="/githubeve"
                      component={() =>
                        (window.location =
                          "https://github.com/AAA-Intelligence/eve")
                      }
                    />
                    <Route
                      path="/documentationeve"
                      component={() =>
                        (window.location =
                          "https://github.com/AAA-Intelligence/eve/wiki/EVE-API")
                      }
                    />
                    <Route
                      path="/githubt2m"
                      component={() =>
                        (window.location =
                          "https://github.com/AudiophileDev/T2M")
                      }
                    />
                    <Route
                      path="/pineappleios"
                      component={() =>
                        (window.location =
                          "https://github.com/geroembser/der-ultimative-Schulplaner")
                      }
                    />
                    <Route
                      path="/pineappleandroid"
                      component={() =>
                        (window.location =
                          "https://github.com/LeonErath/Pineapple")
                      }
                    />
                  </Div>
                  <Bottombar>
                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/impressum`}>impressum</LinkStyled2>
                    </NavbarLinkBottom>
                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/dataprotection`}>privacy</LinkStyled2>
                    </NavbarLinkBottom>
                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/credit`}>credit</LinkStyled2>
                    </NavbarLinkBottom>

                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/github`}>
                        <img
                          style={{
                            width: "20px",
                            objectFit: "contain"
                          }}
                          src="./brand/github.svg"
                        />
                      </LinkStyled2>
                    </NavbarLinkBottom>
                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/linkedin`}>
                        {" "}
                        <img
                          style={{
                            width: "18px",
                            objectFit: "contain"
                          }}
                          src="./brand/linkedin.svg"
                        />
                      </LinkStyled2>
                    </NavbarLinkBottom>
                    <NavbarLinkBottom>
                      <LinkStyled2 to={`/xing`}>
                        {" "}
                        <img
                          style={{
                            width: "18px",
                            objectFit: "contain"
                          }}
                          src="./brand/xing.svg"
                        />
                      </LinkStyled2>
                    </NavbarLinkBottom>
                  </Bottombar>
                </div>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
