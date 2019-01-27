import React, { Component } from "react";
import styled from "styled-components";
import ProjectHeader from "../components/Header/ProjectHeader.js";
import WatchlistCover from "../components/Watchlist/WatchlstCover";
import Section from "../components/styles/Section";

import ImageButton from "../components/styles/ImageButton.js";
import {
  Main,
  ImageContainer,
  Emphasize,
  Fact,
  FactList
} from "../components/styles/styles.js";

const FACT_COLOR = "#f2f2f0";
const EMPHASIZE_COLOR = "#4f4f4f";
const NAVBAR_COLOR = "#7fd0c0";
const SECTION_COLOR = "#6eb29d";

class Watchlist extends Component {
  render() {
    return (
      <div>
        <WatchlistCover />
        <ProjectHeader
          information={[
            {
              title: "TECHNOLOGY",
              text: "Android App in Kotlin"
            },
            {
              title: "GOAL",
              text:
                "See upcoming Movies and save them into your Watchlist to watch them later."
            },
            {
              title: "DURATION",
              text: "1 month"
            }
          ]}
        />
      </div>
    );
  }
}

export default Watchlist;
