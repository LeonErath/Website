import React, { Component } from "react";

import ProjectHeader from "./ProjectHeader.js";
import Navbar from "../modules/navbar.js";
import styled from "styled-components";
import {
  Main,
  List,
  SectionTitle,
  IntroTitle,
  Introduction,
  ImageContainer,
  Emphasize,
  Fact,
  FactList
} from "../modules/styles.js";

import ImageButton from "../modules/ImageButton.js";
import Chatbot from "../modules/chatbot";

const FACT_COLOR = "#f2f2f0";
const EMPHASIZE_COLOR = "#4f4f4f";
const NAVBAR_COLOR = "#7fd0c0";
const SECTION_COLOR = "#6eb29d";

const Image = styled.img`
  margin: 20px;
  width: 80%;
  object-fit: contain;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  background: #7fd0c0;
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
  color: #ffffff;
`;

const Subtitle = styled.div`
  letter-spacing: 20px;
  font-size: calc(15px + 3vw);
  font-weight: 100;
  margin: 8px;
  color: #ffffff;
`;

class Eve extends Component {
  render() {
    return (
      <Main>
        <Navbar color={NAVBAR_COLOR} />

        <Container>
          <Div>
            <Title>EVE</Title>

            <Subtitle>Bot's going on?</Subtitle>
            <div style={{ marginTop: "20px" }}>
              {" "}
              <ImageButton
                text="Test our Product"
                color={"#4c4c4c"}
                link="/githubeve"
              />
              <ImageButton
                text="Documentation"
                color={"#4c4c4c"}
                link="/documentationeve"
              />
            </div>
          </Div>
          <ImageContainer>
            <Image src="./images/eve/iMac.png" alt="Pineapple" />
          </ImageContainer>
        </Container>

        <ProjectHeader
          information={[
            {
              title: "DREAM TEAM",
              text:
                " Daniel Salomon (Design), \
                Niklas Korz (Python-KI),\
                Simon Niedermayr (Go-Webserver),\
                Daniel Scholz (Python-KI),\
                Leon Erath (Projectmanager)"
            },
            {
              title: "GOAL",
              text: "the simulation of chat parteners with machine learing"
            },
            {
              title: "DURATION",
              text: "3 months"
            }
          ]}
        />

        <List>
          <SectionTitle color={SECTION_COLOR}>PROBLEM</SectionTitle>
        </List>
        <List>
          <IntroTitle>
            People all over the world are struggling with their single existence
            and the resulting loneliness.
          </IntroTitle>
          <Introduction>
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
          </Introduction>

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
        </List>
        <FactList color={FACT_COLOR}>
          <Fact>
            <Emphasize color={EMPHASIZE_COLOR}>99% of Men</Emphasize> don’t
            approach women, because they are waiting for the right moment
            <br />
            Matthew Hussey
          </Fact>
        </FactList>
        <List right>
          <SectionTitle right color={SECTION_COLOR}>
            SOLUTION
          </SectionTitle>
        </List>
        <List right>
          <IntroTitle right>
            The solution to both problems offers the exercise with an artificial
            communication partner.
          </IntroTitle>
          <Introduction>
            However, physical forms of such a partner (e.g., robots) are very
            expensive. An alternative is offered by a virtual partner, which can
            be integrated into the everyday routines of the person concerned.
            While the younger part of the population communicates with "Instant
            Messenger" (WhatsApp, Telegram) day in, day out, the older person is
            mostly confined to the phone. At both endpoints, our bot "Eve" can
            be a great way to communicate and create an excellent platform where
            users can practice communication without pressure or fear of impact
            in reality.
            <br /> <br />
            The main objectives of the project and the associated functionality
            of the project "Eve" is the possibility of{" "}
            <Emphasize>
              communicating with a chatbot through a chat client.
            </Emphasize>{" "}
            The user interacts with a daily used and thus already known chat
            interface. The user receives answers in German, which are influenced
            by his messages. This allows him to practice what it would be like
            in reality to communicate with a real potential partner. Each user
            can create their own artificial partner, which is intended only for
            one user and independent of the bots of the other users. The custom
            adjustments made to the bot are saved and recalled when the bot is
            again in contact. In addition, the learned behavior of the bot is
            stored.
            <br /> <br />
            It is desirable that the user obtains a learning effect and becomes
            safer in dating situations. He could address his own, individual bot
            from different platforms.
          </Introduction>

          <ImageContainer>
            <img
              style={{
                maxHeight: "80%",
                maxWidth: "80%",
                flexGrow: "1",
                objectFit: "contain"
              }}
              src="./images/eve/EveArchitecture.png"
              alt="Chatbot"
            />
          </ImageContainer>
          <IntroTitle right>
            <ImageButton
              text="Test our Product!"
              color={"#6EB29D"}
              link="/githubeve"
            />
            <ImageButton
              text="Documentation!"
              color={"#4c4c4c"}
              link="/documentationeve"
            />
          </IntroTitle>
        </List>
        <FactList color={FACT_COLOR}>
          <Fact>
            <Emphasize color={EMPHASIZE_COLOR}>
              18% of the US population
            </Emphasize>{" "}
            has problems with other people!
          </Fact>
        </FactList>
        <List>
          <SectionTitle color={SECTION_COLOR}>TARGET GROUP</SectionTitle>
        </List>
        <List>
          <IntroTitle>
            The target group are single persons with deficits in verbal
            communication.
          </IntroTitle>
          <Introduction>
            This includes, on the one hand, the fears of shy people approaching
            other people and, on the other hand, problems in the expression and
            content choice of people willing to talk. The application focuses on
            people who are familiar with the handling of an "instant messenger".
            In the German market, this includes above{" "}
            <Emphasize color={EMPHASIZE_COLOR}>
              all people aged 14 to 49
            </Emphasize>
            , but also the age groups from 50 are strongly represented in
            percent (Statista, 2018).
            <br />
            <br />
            Since the customer already has an existing audience through his
            videos and lectures, the age groups from 18 to 30 in particular must
            be considered.
          </Introduction>
          <ImageContainer>
            <img
              style={{
                maxHeight: "60%",
                maxWidth: "60%",
                flexGrow: "1",
                objectFit: "contain"
              }}
              src="./images/eve/network.png"
              alt="Network"
            />
          </ImageContainer>
        </List>
        <List right>
          <SectionTitle right color={SECTION_COLOR}>
            DATA
          </SectionTitle>
        </List>
        <List right>
          <IntroTitle right>
            To ensure the most authentic chat experience possible with the bot,
            both an AI in the form of neural networks and static rules are used.
          </IntroTitle>
          <Introduction>
            <b>Records for speech recognition and general dialogues</b>
            <br /> To ensure answers in German and for a general understanding
            of the text, there must be many datasets with exemplary dialogues,
            each consisting of questions and answers. There are various publicly
            accessible databases containing chat content and the like. However,
            these are mainly available in English. A German copy represents the
            chat corpus of the TU Dortmund. In order to have a response that is
            particularly suitable for this situation in certain situations,
            several smaller data sets separated from the main database are
            additionally made available. Here, for example, greetings, jokes or
            the like are considered.
            <br /> <br />
            <b>Context Recognition</b>
            <br />
            The chatbot must be able to recognize the context of a message to
            some degree. For this purpose, certain terms are stored in a context
            stack, with which an appropriate response to specific, contextual
            messages can be made possible. If, for example, a family member is
            previously spoken and in a subsequent message this family member is
            referenced by a personal pronoun, this connection is recognized. For
            this to be possible, certain information from each message must be
            filtered out. What is important here is regulated by a database.
            With the help of the context recognition is also a classification of
            the affection or affection, as well as the mood of the bot per
            message made. This then influences a total value, which influences
            the following answers of the bot.
            <br />
            <br />
            <b>Predefined answers</b>
            <br />
            Some messages do not require analysis in terms of context or the
            like. Because for these rules for predefined answers are set, which
            are then output in a match. It is possible, however, that depending
            on the nature of the message, the mood and hawk values ​​of the bot
            will still be affected. However, this happens without affecting the
            neural networks.
            <br />
            <br />
            <b>Session data</b>
            <br />
            Any entries made in a session will be saved. Accordingly, each chat
            takes place in a separate session. For each individual session, a
            session key and the data of the bot defined at the beginning of the
            session, such as the name, the profile picture and the like are
            saved. In addition, all direct chat messages are backed up with the
            bot for each session, regardless of the input method (web interface
            or interface). In addition, there is some analysis of this: So in
            each session a kind of profiling of the user is operated, which, for
            example, data such as names of family members, hometown and the like
            are secured. It is also ensured that the data of the different users
            are not mixed together. This ensures the privacy and privacy of the
            individual user and allows, depending on the context, an
            individualized response of the user to the user's request.
          </Introduction>
        </List>
        <div style={{ position: "fixed", bottom: "20px", right: "6%" }}>
          <Chatbot />
        </div>
      </Main>
    );
  }
}

export default Eve;
