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

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

class WatchlistNavbar extends Component {
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
                <LinkStyled textcolor={this.props.textcolor} to={`/aboutme`}>
                  ABOUT ME
                </LinkStyled>
              </NavbarLink3>
              <NavbarLink3>
                <LinkStyled textcolor={this.props.textcolor} to={`/resume`}>
                  RESUME
                </LinkStyled>
              </NavbarLink3>
              <NavbarLink3>
                <LinkStyled textcolor={this.props.textcolor} to={`/projects`}>
                  PROJECTS
                </LinkStyled>
              </NavbarLink3>
            </VerticalList>
          )}
        </NavbarStyled2>
      </Navbar>
    );
  }
}

export default WatchlistNavbar;
