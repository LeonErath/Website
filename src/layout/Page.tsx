import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Meta } from "../components/Meta";
import classes from "./Page.module.scss";

const theme = {
  darkblue: "#4285F4",
  blue: "#35A0F7",
  gray: "#363636",
  lightblue: "#EBF3FE",
  gradient: "linear-gradient(145deg, #4285F4, #35A0F7)",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

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
        <div className={classes.container}>
          <Meta />

          <Header />

          <main>{this.props.children}</main>

          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}
