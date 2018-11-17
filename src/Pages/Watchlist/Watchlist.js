import React, { Component } from "react";
import styled from "styled-components";
import ProjectHeader from "../../Header/ProjectHeader.js";
import WatchlistCover from "./WatchlstCover";
import Section from "../../Section";
import {
  Main,
  ImageContainer,
  Emphasize,
  Fact,
  FactList
} from "../../styles.js";

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

        <Section>
          <Section.Topic color={SECTION_COLOR}>PROBLEM</Section.Topic>
          <Section.Header>
            People all over the world are struggling with their single existence
            and the resulting loneliness.
          </Section.Header>
          <Section.Text>
            In doing so, they often find themselves confronted with the problem
            of addressing other people or even longer having conversations with
            them. To remedy this, there are numerous dating coaches. Help in
            this form, however, is{" "}
            <Emphasize color={EMPHASIZE_COLOR}>
              very expensive and overcomes the need for introverted people to
              seek help.
            </Emphasize>{" "}
            In addition, it is very difficult to provide the counseling service
            for the many victims at any time anywhere in the world.
            <br />
            <br />
            In addition, there are videos as well as books, articles in various
            magazines and lectures, which can be seen on Youtube. However, there
            is the problem that listeners and readers can only get theoretical
            solutions to their problems, but can not do practical exercises. In
            addition, the information media are tailored to the masses and offer
            no individual advice.
            <br />
          </Section.Text>

          <ImageContainer>
            <img
              style={{
                maxHeight: "80%",
                maxWidth: "80%",
                flexGrow: "1",
                objectFit: "contain"
              }}
              src="./images/eve/Chatbot.png"
              alt="Chatbot"
            />
          </ImageContainer>
        </Section>
      </div>
    );
  }
}

export default Watchlist;
