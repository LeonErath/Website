import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  margin: 0;
  padding: 0;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

injectGlobal`
   html {
    box-sizing:border-box;
    font-size: 10px;

  }
  *,*:before, *after{
    box-sizing:inherit;
  }
  body{
    
    padding:0;
    margin:0;
    font-size: 1.5rem;
    line-height:1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a{
    text-decoration:none;
    color: ${theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
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

export default Page;
