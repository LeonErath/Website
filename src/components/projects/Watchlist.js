import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 8px;
  width: 100%;
`;

const NavbarStyled = styled.div`
  padding-top: 10px;
  list-style-type: none;
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 920px) {
    display: none;
  }
`;

const NavbarStyled2 = styled.div`
  padding-top: 10px;
  list-style-type: none;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;

  @media (min-width: 920px) {
    display: none;
  }
`;

const NavbarLink = styled.li`
  padding: 10px;
  float: right;
  font-size: 14px;
  letter-spacing: 6px;

  :first-child {
    font-size: 24px;
    letter-spacing: 10px;
    float: left;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;

const NavbarLink2 = styled.li`
  padding: 10px;
  float: right;
  font-size: 14px;
  letter-spacing: 6px;
  cursor: pointer;

  :first-child {
    font-size: 14px;
    letter-spacing: 10px;
    float: left;
  }
  @media (min-width: 920px) {
    display: none;
  }
`;

const NavbarLink3 = styled.li`
  padding: 10px;
  width: 100%;
  float: center;
  text-align: center;

  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${props => (props.textcolor ? props.textcolor : "#ffffff")};
  text-decoration: none;
`;

const InfoTilte = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  font-size: 14px;
  font-weight: 100;
`;

const ProjectInfo = styled.div`
  margin: 20px;
  width: 140px;
  flex-grow: 1;
  text-align: center;
`;

const List2 = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 20px;
  justify-content: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("./images/Watchlist/background.png");
`;

const GradientDiv = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: linear-gradient(
    -45deg,
    rgba(35, 46, 120, 0.94),
    rgba(178, 7, 65, 0.94),
    rgba(215, 12, 81, 0.94)
  );
`;

const H1 = styled.div`
  color: #ffffff;
  font-size: calc(38px + 4vw);
  letter-spacing: 2.4vw;
  display: inline-flex;
  font-weight: bold;
`;

const H2 = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: inline-block;
  color: #ffffff;
  font-size: calc(12px + 1.5vw);
  letter-spacing: 2px;
  line-height: 2;
  font-weight: 400;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Left = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  padding: 10px 10px 10px calc(10px + 5vw);
  flex-direction: column;
  justify-content: center;
  align-items: left;
  flex: 40%;
  min-width: 400px;
  margin-top: 60px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 50%;
  min-width: 300px;
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;
  letter-spacing: 1px;
  color: ${props => (props.textcolor ? props.textcolor : "white")};
  background: ${props => (props.color ? props.color : "black")};
  font-size: 16px;
  font-weight: bold;
  margin: 0.5em;
  width: 140px;
  text-align: center;
  padding: 8px 4px 8px 4px;
  border: 2px solid ${props => (props.color ? props.color : "black")};
  border-radius: 20px;
  display: inline-block;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const Seperator = styled.div`
  position: relative;
  height: 48px;

  ::after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23fff'/%3E%3C/svg%3E");
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
  }
`;

class Watchlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true
    };

    this.menuClicked = this.menuClicked.bind(this);
  }

  menuClicked() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <div>
        <ImageDiv>
          <GradientDiv>
            <Navbar>
              <NavbarStyled>
                <NavbarLink>
                  <LinkStyled textcolor={this.props.textcolor} to="/watchlist">
                    <img src="./images/Watchlist/Movies.png" alt="movies" />
                  </LinkStyled>
                </NavbarLink>
                <NavbarLink>
                  <LinkStyled textcolor={this.props.textcolor} to={`/aboutme`}>
                    ABOUT ME
                  </LinkStyled>
                </NavbarLink>
                <NavbarLink>
                  <LinkStyled textcolor={this.props.textcolor} to={`/resume`}>
                    RESUME
                  </LinkStyled>
                </NavbarLink>
                <NavbarLink>
                  <LinkStyled textcolor={this.props.textcolor} to={`/projects`}>
                    PROJECTS
                  </LinkStyled>
                </NavbarLink>
              </NavbarStyled>

              <NavbarStyled2>
                <NavbarLink2>
                  <LinkStyled textcolor={this.props.textcolor} to="/">
                    <img src="./images/Watchlist/Movies.png" alt="movies" />
                  </LinkStyled>
                </NavbarLink2>
                <NavbarLink2 onClick={this.menuClicked}>
                  {" "}
                  <img alt="menu" style={{ width: "30px" }} src="./menu.png" />
                </NavbarLink2>

                {!this.state.closed && (
                  <VerticalList>
                    <NavbarLink3>
                      <LinkStyled
                        textcolor={this.props.textcolor}
                        to={`/aboutme`}
                      >
                        ABOUT ME
                      </LinkStyled>
                    </NavbarLink3>
                    <NavbarLink3>
                      <LinkStyled
                        textcolor={this.props.textcolor}
                        to={`/resume`}
                      >
                        RESUME
                      </LinkStyled>
                    </NavbarLink3>
                    <NavbarLink3>
                      <LinkStyled
                        textcolor={this.props.textcolor}
                        to={`/projects`}
                      >
                        PROJECTS
                      </LinkStyled>
                    </NavbarLink3>
                  </VerticalList>
                )}
              </NavbarStyled2>
            </Navbar>
            <DivContent>
              <Left>
                <H1>Watchlist</H1>
                <H2>
                  See upcoming Movies and save them into your Watchlist to watch
                  them later.
                </H2>
                <Button color="white" textcolor="black">
                  DOWNLOAD
                </Button>
              </Left>
              <Right>
                <img
                  src="./images/Watchlist/movie_covers.png"
                  style={{
                    objectFit: "contain",
                    width: "50%",
                    height: "auto",
                    margin: "100px 100px 100px 0px"
                  }}
                />
              </Right>
            </DivContent>
            <Seperator />
          </GradientDiv>
        </ImageDiv>

        <List2>
          <ProjectInfo>
            <InfoTilte>Technology</InfoTilte>
            <InfoText>Android App in Kotlin</InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Goal</InfoTilte>
            <InfoText>
              {" "}
              See upcoming Movies and save them into your Watchlist to watch
              them later.
            </InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Project</InfoTilte>
            <InfoText>1 month.</InfoText>
          </ProjectInfo>
        </List2>
      </div>
    );
  }
}

export default Watchlist;
