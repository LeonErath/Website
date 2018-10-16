import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = styled.div`
  width: 60%;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 100px;
  margin-bottom: 80px;
  font-family: "Open Sans";
`;
const AboutTitle = styled.div`
  font-size: 28px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;
`;
const AboutText = styled.div`
  margin: 8px;
  line-height: 2;
  font-size: 16px;
`;

const Div = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  font-family: "Open Sans";
`;

const Project = styled.div`
  width: 100%;
  max-height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: stretch;
  flex-basis: 40%;
  flex-wrap: wrap;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Project2 = styled.div`
  max-height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: stretch;
  flex-basis: 40%;
  flex-wrap: wrap-reverse;
`;

const Description = styled.div`
  margin: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 2;
`;

const Title = styled.div`
  margin: 10px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 10px;
`;
const MoreInformation = styled(Link)`
  margin: 10px;
  letter-spacing: 2px;
  font-size: 14px;
  color: #9f9f9f;
  text-decoration: none;
  font-weight: 400;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  flex-basis: 50%;
  flex-grow: 1;
`;

class Main extends Component {
  render() {
    return (
      <div>
        <About>
          <AboutTitle> Hey, I'm Leon.</AboutTitle>
          <AboutText>
            I am 20 years old, living in Mannheim Germany. I love developing
            Apps and want to take you with me, on my way to become a Developer.
          </AboutText>
        </About>
        <List>
          <Project2>
            <Element>
              <img
                alt="JournalismFuture Ad"
                src="./images/journalismfuture/journalismfuture.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
            <Element>
              <Div>
                <Title>JF</Title>
                <Description>Read the news of tomorrow!</Description>
                <MoreInformation to="../journalismfuture">
                  => View Project
                </MoreInformation>
              </Div>
            </Element>
          </Project2>

          <Project>
            <Element>
              <Div>
                <Title>PINEAPPLE</Title>
                <Description>
                  The ultimate school organizer!
                  <br />
                  An app from students for students.
                </Description>
                <MoreInformation to="../pineapple">
                  => View Project
                </MoreInformation>
              </Div>
            </Element>
            <Element>
              <img
                alt="Pineapple Ad"
                src="./images/pineapple/bmsapp4.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
          </Project>

          <Project2>
            <Element>
              {" "}
              <img
                alt="Eve Ad"
                src="./images/eve/eve.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
            <Element>
              <Div>
                <Title>EVE</Title>
                <Description>
                  Bot's going on?
                  <br />A maschine learning chatbot
                  <br />
                  Created with Go and Python
                </Description>
                <MoreInformation to="../eve">=> View Project</MoreInformation>
              </Div>
            </Element>
          </Project2>
          <Project>
            <Element>
              <Div>
                <Title>Text2Music</Title>
                <Description>
                  Create music from text
                  <br />
                </Description>
                <MoreInformation to="../t2m">=> View Project</MoreInformation>
              </Div>
            </Element>
            <Element>
              {" "}
              <img
                alt="T2M Ad"
                src="./images/t2m.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
          </Project>
          <Project2>
            <Element>
              <img
                alt="Cloudy Ad"
                src="./images/cloudy.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
            <Element>
              <Div>
                <Title>CLOUDY</Title>
                <Description>
                  An alternative way to look
                  <br /> at weather forecast.
                </Description>
                <MoreInformation to="../cloudy">
                  => View Project
                </MoreInformation>
              </Div>
            </Element>
          </Project2>

          <Project>
            <Element>
              <Div>
                <Title>WATCHLIST</Title>
                <Description>
                  See upcoming Movies and <br />
                  save them into your Watchlist
                  <br /> to watch them later.
                  <br />
                </Description>
                <MoreInformation to="../watchlist">
                  => View Project
                </MoreInformation>
              </Div>
            </Element>
            <Element>
              <img
                alt="Watchlist Ad"
                src="./images/watchlist.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Element>
          </Project>
        </List>
      </div>
    );
  }
}

export default Main;
