import React, { Component } from "react";
import ProjectHeader from "./ProjectHeader.js";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "../modules/navbar.js";
import ImageButton from "../modules/ImageButton.js";
import Demo from "../modules/t2m_demo.js";
var LineChart = require("react-chartjs").Line;

const SectionTitle = styled.div`
  padding-right: ${props => (props.right ? "8px" : "30px")};
  padding-left: ${props => (props.right ? "30px" : "8px")};
  font-size: 12px;
  letter-spacing: 3px;

  padding-top: 8px;

  padding-bottom: 8px;
  color: #ffffff;
  margin-left: 20px;
  margin-top: 40px;
  background: #730000;
`;

const Fact = styled.div`
  text-align: center;

  font-size: calc(12px + 1vw);

  font-family: Calibri, sans-serif;
  line-height: 2;
  font-weight: 100;
  margin: 24px;
`;

const Emphasize = styled.b`
  color: #730000;
`;

const IntroTitle = styled.div`
  text-align: ${props => (props.right ? "right" : "left")};
  width: 70%;
  flex-grow: 1;
  font-size: calc(15px + 1vw);

  font-weight: 200;
  line-height: 2;
  margin: 24px;
`;

const Introduction = styled.div`
  flex-grow: 1;
  width: 50%;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
  margin: 24px;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  justify-content: ${props => (props.center ? "center" : "left")};

  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 20px;

  display: flex;
  flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  flex-wrap: wrap;
`;

const FactList = styled(List)`
  justify-content: center;
  background: #f2f2f0;
`;

const Main = styled.div`
  font-family: Calibri, sans-serif;
`;

const Div = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 50%;
  min-width: 380px;
`;

const Title = styled.div`
  font-size: calc(15px + 10vw);
  letter-spacing: 20px;
  font-weight: 100;
  margin: 8px;
  color: #000000;
`;

const Subtitle = styled.div`
  letter-spacing: 20px;
  font-size: calc(15px + 3vw);
  font-weight: 100;
  margin: 8px;
  color: #000000;
`;

const Image = styled.img`
  margin: 20px;
  width: 80%;
  object-fit: contain;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
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
          data: [30, 28, 25, 22, 18]
        }
      ]
    };

    const options = {
      scaleShowGridLines: false,
      datasetFill: false
    };

    return (
      <Main>
        <Navbar color="#ffffff" textcolor="#000000" />
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
            <Image src="./images/t2m/terminal.png" alt="terminal" />
          </ImageContainer>
        </Container>

        <ProjectHeader
          information={[
            {
              title: "DREAM TEAM",
              text:
                "  Simon Niedermayr, Daniel Scholz, Ivan Marchuk, Marcello Eiermann,\
                Leon Erath"
            },
            {
              title: "GOAL",
              text: "Generate music from text"
            },
            {
              title: "DURATION",
              text: "3 moths."
            }
          ]}
        />
        <List>
          <SectionTitle>PROBLEM</SectionTitle>
        </List>
        <List>
          <IntroTitle>
            The classic print medium as a source of news is being used less and
            less in the age of digitization.
          </IntroTitle>
          <Introduction>
            As a result, news service providers are increasingly resorting to
            websites in order to present news quickly and clearly. A new,
            innovative feature for such a news website would be a quick preview
            of the article in the form of music. <br />
            But Problems are:
            <br />
            <li>Copyright issues</li>
            <li>Much effort by searching for suitable music</li>
            <li>Repetition of music</li>
          </Introduction>

          <ImageContainer>
            <LineChart
              data={data}
              options={options}
              width="400px"
              height="300px"
            />
          </ImageContainer>
        </List>

        <FactList>
          <Fact>
            Sold circulation drop <Emphasize>over 40%</Emphasize> in the last 20
            years in Germany.
          </Fact>
        </FactList>
        <List right>
          <SectionTitle right>SOLUTION</SectionTitle>
        </List>
        <List right>
          <IntroTitle right>Generate music based on the article</IntroTitle>
          <Introduction>
            <li>Generating music from texts</li>
            <li>Adaptation of the mood of the text</li>
            <li>Complex algorithms produce harmonic-sounding melodies</li>
            <br />
            We developed the software T2M, which interprets news articles in at
            least 15 seconds long music files (mp3). The mood of the music will
            reflect the content of the text. The music is generated individually
            to the text and is purely instrumental. The software is delivered as
            a simple einzubindes command line tool. For testing purposes, a GUI
            is implemented.
          </Introduction>

          <ImageContainer>
            <img
              style={{
                maxHeight: "80%",
                maxWidth: "80%",
                flexGrow: "1",
                objectFit: "contain"
              }}
              src="./images/t2m/t2marchitecture.png"
              alt="Chatbot"
            />
            <audio controls>
              <source src="./music/t2m/music.wav" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          </ImageContainer>
          <IntroTitle right>
            {" "}
            <ImageButton text="Get started" color={"#000"} link="/githubt2m" />
          </IntroTitle>
        </List>
        <FactList>
          <Fact>Demo</Fact>
        </FactList>

        <Demo />
      </Main>
    );
  }
}

export default T2M;
