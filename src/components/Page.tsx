import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "./Header";
import Meta from "./Meta";
import { Footer } from "./Footer";

const theme = {
  darkblue: "#4285F4",
  blue: "#35A0F7",
  gray: "#363636",
  lightblue: "#EBF3FE",
  gradient: "linear-gradient(145deg, #4285F4, #35A0F7)",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const StyledPage = styled.div`
  background: white;

  color: ${(props) => props.theme.black};
  margin: 0;
  padding: 0;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;
const GlobalStyle = createGlobalStyle`
   html {
    box-sizing:border-box;
    font-size: 10px;

  }
  *,*:before, *after{
    box-sizing:inherit;
  }
  body{
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
    padding:0;
    margin:0;
    font-size: 1.5rem;
    line-height:1;
    
  }
  a{
    text-decoration:none;
    color: black;
  }
`;

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    this.setState({ scrollPosition: window.scrollY });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />

          <Header />
          <main>
            <Inner>{this.props.children}</Inner>
          </main>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}
