import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  flex: 1;
`;
const AboutText = styled.div`
  letter-spacing: 1px;
  margin: 8px;
  line-height: 2;
  font-size: 15px;
`;

const InfoTilte = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  font-size: 14px;
  font-weight: 100;
`;
const Div = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-family: "Open Sans";
`;
const List = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
  direction: row;
  flex-wrap: wrap;
`;
const Topic = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 30px;
  width: 250px;
  flex-grow: 1;
  line-height: 2;
  letter-spacing: 1px;
  font-size: 14px;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TopicTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Email = styled.div`
  margin-top: 20px;
  width: 250px;
  flex-grow: 1;
`;

const Telephone = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 250px;
  flex-grow: 1;
`;
const Image = styled.img`
  margin: 8px;
  max-height: 500px;
  max-width: 600px;
  flex: 1;
  object-fit: cover;
`;

class About extends Component {
  render() {
    return (
      <Div>
        <AboutSection>
          <Section>
            <AboutText>
              Hey, I'm Leon. I am 20 years old, living in Mannheim Germany. I'm
              young Guy, who wants to share my ideas and concepts. I love
              developing Apps and want to take you with me, on my way to become
              a Developer. I know it is hard to learn something new and get
              successful with it, but I will try it. Hope you are having a great
              day and share my enthusiasm for creating something new. If so
              please contact me.
            </AboutText>
            <ContactInfo>
              <Email>
                <InfoTilte>EMAIL</InfoTilte>
                <InfoText>leon-erath@hotmail.de</InfoText>
              </Email>
              <Telephone>
                <InfoTilte>CALL</InfoTilte>
                <InfoText>+49 176 81215974</InfoText>
              </Telephone>
            </ContactInfo>
            <ContactInfo>
              <Link to={`/github`}>
                <img
                  alt="github"
                  style={{
                    margin: "8px",
                    width: "20px",
                    objectFit: "contain"
                  }}
                  src="./brand/github_black.svg"
                />
              </Link>

              <Link to={`/linkedin`}>
                {" "}
                <img
                  alt="linkedin"
                  style={{
                    margin: "8px",
                    width: "18px",
                    objectFit: "contain"
                  }}
                  src="./brand/linkedin_black.svg"
                />
              </Link>

              <Link to={`/xing`}>
                {" "}
                <img
                  alt="xing"
                  style={{
                    margin: "8px",
                    width: "18px",
                    objectFit: "contain"
                  }}
                  src="./brand/xing_black.svg"
                />
              </Link>
            </ContactInfo>
          </Section>

          <Image src="./profile.jpg" />
        </AboutSection>
        <List>
          <Topic>
            <TopicTitle>Programming</TopicTitle>
            In my studies in Mannheim, I develop apps. I'm currently learning
            Apple's new programming language "Swift". In my short 20 years, I
            learned Java (over 2 years experience), JavaScript (1 year), and a
            bit SQL. Follow my Blog, if you are interested in my Story of
            becoming an actual developer.
            <br />
          </Topic>
          <div style={{ margin: "16px" }} />
          <Topic>
            <TopicTitle>Travel</TopicTitle>I love to explore. To seek new
            adventures and meet people all around the world. I really enjoy
            getting to know new cultures, cities and beautiful landscapes.
            Whenever I can I travel around the world. I love the Europeans
            cities, the Asian culture and the American lifestyle. I hope I can
            see more of it in the future.
            <br />
          </Topic>
          <div style={{ margin: "16px" }} />
          <Topic>
            <TopicTitle>Inventing</TopicTitle>
            As a young Guy, who recently started exploring the developers world,
            I really like the idea of creating my own stuff. I'm curious,
            ambitious and focused. My head is full of ideas of projects, that I
            want to realize. I look forward to the presenting you my concepts
            and exchange our ideas.
          </Topic>
        </List>
      </Div>
    );
  }
}

export default About;
