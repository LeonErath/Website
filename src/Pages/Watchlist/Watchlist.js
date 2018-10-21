import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectHeader from "../../Header/ProjectHeader.js";
import WatchlistCover from "./WatchlstCover";

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
