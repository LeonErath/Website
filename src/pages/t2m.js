import React, { Component } from "react";

import styled from "styled-components";
import Demo from "../components/demos/t2m/Demo.js";
import Section from "../components/styles/Section";
import { ProjectBar, SubItem } from "../components/styles/ProjectBar";
import ImageButton from "../components/styles/ImageButton.js";
import {
  ImageContainer,
  Emphasize,
  Fact,
  FactList,
} from "../components/styles/styles.js";

const FACT_COLOR = "#f2f2f0";
const EMPHASIZE_COLOR = "#4f4f4f";
const NAVBAR_COLOR = "#7fd0c0";
const SECTION_COLOR = "#730000";

const IntroTitle = styled.div`
  text-align: ${(props) => (props.right ? "right" : "left")};
  width: 70%;
  flex-grow: 1;
  font-size: calc(15px + 1vw);

  font-weight: 200;
  line-height: 2;
  margin: 24px;
`;

const Div = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 50%;
  flex-basis: 380px;
`;

const Title = styled.div`
  font-size: calc(15px + 10vw);
  letter-spacing: 20px;
  font-weight: 100;
  margin: 8px;
  color: #000000;
  @media (max-width: 700px) {
    letter-spacing: 10px;
  }
`;

const Subtitle = styled.div`
  letter-spacing: 20px;
  font-size: calc(15px + 3vw);
  font-weight: 100;
  margin: 8px;
  color: #000000;
  @media (max-width: 700px) {
    letter-spacing: 4px;
  }
`;

const Image = styled.img`
  margin: 20px;
  width: 80%;
  object-fit: contain;
`;

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  audio {
    margin-top: 30px;
    width: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width: 100%;
`;

class T2M extends Component {
  render() {
    const data = {
      labels: ["1995", "2000", "2005", "2010", "2015"],
      datasets: [
        {
          label: "Statista Numbers",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "#730000",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#57B59C",
          data: [30, 28, 25, 22, 18],
        },
      ],
    };

    const options = {
      scaleShowGridLines: false,
      datasetFill: false,
    };

    return (
      <div>
        <Container>
          <Div>
            <Title>T2M</Title>
            <Subtitle>Generate music from text</Subtitle>
            <div style={{ marginTop: "20px" }}>
              {" "}
              <ImageButton
                text="Get started"
                color={"#000"}
                link="/githubt2m"
              />
            </div>
          </Div>
          <ImageContainer>
            <Image src="/images/t2m/terminal.png" alt="terminal" />
          </ImageContainer>
        </Container>

        <ProjectBar>
          <SubItem>
            <div>Dream Team</div>
            <div>
              Simon Niedermayr, Daniel Scholz, Ivan Marchuk, Marcello Eiermann,
              Leon Erath
            </div>
          </SubItem>
          <SubItem>
            <div>GOAL</div>
            <div>Generate music from text</div>
          </SubItem>
          <SubItem>
            <div>DURATION</div>
            <div>3 months</div>
          </SubItem>
        </ProjectBar>

        <Section>
          <Section.Content>
            <Section.Topic color={SECTION_COLOR}>PROBLEM</Section.Topic>
            <Section.Header>
              The classic print medium as a source of news is being used less
              and less in the age of digitization.
            </Section.Header>
            <Section.Text>
              As a result, news service providers are increasingly resorting to
              websites in order to present news quickly and clearly. A new,
              innovative feature for such a news website would be a quick
              preview of the article in the form of music. <br />
              But Problems are:
              <br />
              <li>Copyright issues</li>
              <li>Much effort by searching for suitable music</li>
              <li>Repetition of music</li>
              <br />
            </Section.Text>
          </Section.Content>
          <ImageContainer></ImageContainer>
        </Section>

        <FactList color={FACT_COLOR}>
          <Fact>
            Sold circulation drop{" "}
            <Emphasize color={EMPHASIZE_COLOR}>over 40%</Emphasize> in the last
            20 years in Germany.
          </Fact>
        </FactList>

        <Section right>
          <Section.Content>
            <Section.Topic color={SECTION_COLOR}>SOLUTION</Section.Topic>
            <Section.Header>Generate music based on the article</Section.Header>
            <Section.Text>
              <li>Generating music from texts</li>
              <li>Adaptation of the mood of the text</li>
              <li>Complex algorithms produce harmonic-sounding melodies</li>
              <br />
              We developed the software T2M, which interprets news articles in
              at least 15 seconds long music files (mp3). The mood of the music
              will reflect the content of the text. The music is generated
              individually to the text and is purely instrumental. The software
              is delivered as a simple einzubindes command line tool. For
              testing purposes, a GUI is implemented.
            </Section.Text>
            <IntroTitle right>
              <ImageButton
                text="Get started"
                color={"#000"}
                link="/githubt2m"
              />{" "}
            </IntroTitle>
          </Section.Content>
          <ImageContainer>
            <MusicContainer>
              <img
                style={{
                  maxHeight: "80%",
                  maxWidth: "80%",
                  flexGrow: "1",
                  objectFit: "contain",
                }}
                src="/images/t2m/t2marchitecture.png"
                alt="Chatbot"
              />
              <audio controls>
                <source src="./music/t2m/music.wav" type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            </MusicContainer>
          </ImageContainer>
        </Section>

        <FactList color={FACT_COLOR}>
          <Fact>Demo</Fact>
        </FactList>

        <Demo />
      </div>
    );
  }
}

export default T2M;
