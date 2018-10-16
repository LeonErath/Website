import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styled from "styled-components";

import About from "./Pages/About/about.js";
import Projects from "./Pages/Projects/projects.js";
import Resume from "./Pages/Resume/resume.js";
import Main from "./Pages/Main/main.js";
import Impressum from "./Pages/Impressum/impressum.js";
import Eve from "./Pages/Eve/Eve.js";
import T2M from "./Pages/T2M/T2M.js";
import JournalismFuture from "./Pages/JournalismFuture/JournalismFuture.js";
import Pineapple from "./Pages/Pineapple/Pineapple.js";
import Watchlist from "./Pages/Watchlist/Watchlist.js";
import Cloudy from "./Pages/Cloudy/Cloudy.js";
import DataProtection from "./Pages/PrivacyPolicy/dataprotection.js";
import Credit from "./Pages/Credit/credit.js";

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
                      path="/githubjournalismfuture"
                      component={() =>
                        (window.location =
                          "https://github.com/JournalismFuture")
                      }
                    />
                    <Route
                      path="/playstorewatchlist"
                      component={() =>
                        (window.location =
                          "https://play.google.com/store/apps/details?id=com.leon.app.watchlist")
                      }
                    />
                    <Route
                      path="/githubwatchlist"
                      component={() =>
                        (window.location =
                          "https://github.com/LeonErath/Watchlist")
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
                    <Route
                      path="/githubcloudy"
                      component={() =>
                        (window.location =
                          "https://github.com/LeonErath/Cloudy")
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
                          alt="github"
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
                          alt="linkedin"
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
                          alt="xing"
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
