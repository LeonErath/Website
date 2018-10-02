import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyled = styled.div`
  padding-top: 10px;
  list-style-type: none;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;

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

const Div = styled.div`
  background: ${props => (props.color ? props.color : "#000000")};
  min-height: 57px;
`;

const Main = styled.div`
  font-family: Calibri, sans-serif;
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
  @media (max-width: 920px) {
    display: none;
  }
`;

const NavbarLink2 = styled.li`
  font-family: "Courier New", Courier, monospace;
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
  font-family: "Courier New", Courier, monospace;
  padding: 10px;
  width: 100%;
  float: center;
  text-align: center;
  font-size: 14px;
  letter-spacing: 6px;
  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  padding: 10px;
  color: ${props => (props.textcolor ? props.textcolor : "#ffffff")};
  text-decoration: none;
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 8px;
  width: 100%;
`;

class Navbar extends Component {
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
      <Main>
        <Div color={this.props.color}>
          <NavbarStyled>
            <NavbarLink>
              <LinkStyled textcolor={this.props.textcolor} to="/">
                Leon Erath
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
                Leon Erath
              </LinkStyled>
            </NavbarLink2>
            <NavbarLink2 onClick={this.menuClicked}>
              <img alt="menu" style={{ width: "30px" }} src="./menu.png" />
            </NavbarLink2>
            <br />
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
        </Div>
      </Main>
    );
  }
}

export default Navbar;
