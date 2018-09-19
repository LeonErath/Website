import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Main,
  List,
  SectionTitle,
  IntroTitle,
  Introduction,
  ImageList,
  Image,
  SecurityList,
  Feature,
  FeatureText,
  FeatureTitle,
  ImageContainer,
  Emphasize,
  Fact,
  FactList
} from "../modules/styles.js";

import ProjectHeader from "./ProjectHeader.js";
import PineappleGallery from "./PineappleGallery.js";
import Navbar from "../modules/navbar.js";
import ImageButton from "../modules/ImageButton.js";

const SECTION_COLOR = "#162238";
const EMPHASIZE_COLOR = "#162238";
const FACT_COLOR = "#f2f2f0";

class Pineapple extends Component {
  render() {
    return (
      <Main>
        <Navbar color="#162238" />
        <div
          style={{
            position: "relative"
          }}
        >
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src="./images/pineapple/PineappleBanner.png"
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <ImageButton
              text="Get started"
              color={"#ffffff"}
              textcolor={"#000"}
              link="/pineappleandroid"
            />
          </div>
        </div>

        <ProjectHeader
          information={[
            {
              title: "Dream Team",
              text:
                "Gero Embser (iOS-App), Leon Erath (Android App), Florian Brandt (Server)"
            },
            {
              title: "AWARDS",
              text: "Top 10 of 1600 Projects"
            },
            {
              title: "PROJECT",
              text: "1 year."
            }
          ]}
        />

        <List>
          <SectionTitle color={SECTION_COLOR}>PROBLEM</SectionTitle>
        </List>
        <List>
          <IntroTitle>
            We want to use the spirit of the times and use the features of the
            smartphone to help students organize their everyday school life.
          </IntroTitle>
          <Introduction>
            The computer science and especially the use of the smartphone is
            increasing more and more. Nowadays, it is hard to think away. The
            smartphone is now a must for many students, but many schools are
            still reluctant to actively integrate the smartphone into everyday
            school life.
            <br />
            <br />
            Our project is about a school planner, which should{" "}
            <Emphasize color={EMPHASIZE_COLOR}>
              make the school day easier
            </Emphasize>{" "}
            for the pupils. The planner should remember as an app to the
            homework or also to practice time for exams. The goal of the project
            is to develop a fully functional app for Android and iOS that can be{" "}
            <Emphasize color={EMPHASIZE_COLOR}>
              actively integrated into the everyday life of the school.
            </Emphasize>
            <br />
          </Introduction>
          <ImageContainer>
            <img
              style={{
                height: "260px",
                height: "260px",

                objectFit: "contain"
              }}
              src="./images/pineapple/stress.png"
              alt="Stress"
            />
          </ImageContainer>
        </List>

        <FactList color={FACT_COLOR}>
          <Fact>
            More than{" "}
            <Emphasize color={EMPHASIZE_COLOR}>85% of all students</Emphasize>{" "}
            uses a smartphones. <br />
            98% of all smartphones use the android or ios operating system.
            <br />
            Therefore, an{" "}
            <Emphasize color={EMPHASIZE_COLOR}>
              android and iOS app
            </Emphasize>{" "}
            ist the perfect solution!
          </Fact>
        </FactList>

        <List>
          <SectionTitle color={SECTION_COLOR}>SOLUTION</SectionTitle>
        </List>

        <List>
          <IntroTitle>
            For each student, his or her own timetable, substitution plan, exam
            plan are put together and suitable articles of the website are
            dynamically displayed to him/her on the basis of his personal
            subjects and courses.
          </IntroTitle>
          <IntroTitle right>
            {" "}
            <ImageButton text="Android" link="/pineappleios" />
            <ImageButton text="iOS" link="/pineappleandroid" />
          </IntroTitle>
        </List>

        <PineappleGallery />

        <ImageList color="#f2f2f0">
          <Image
            src="./images/pineapple/grades_pineapple.png"
            alt="Pineapple"
          />
          <Image
            src="./images/pineapple/loginscreen_pineapple.png"
            alt="Pineapple"
          />

          <Image src="./images/pineapple/exams_pineapple.png" alt="Pineapple" />
          <Image
            src="./images/pineapple/class_selection_pineapple.png"
            alt="Pineapple"
          />

          <Image
            src="./images/pineapple/exam_detail_pineapple.png"
            alt="Pineapple"
          />
          <Image
            src="./images/pineapple/course_pineapple.png"
            alt="Pineapple"
          />

          <Image src="./images/pineapple/quiz_pineapple.png" alt="Pineapple" />
          <Image
            src="./images/pineapple/homework_pineapple.png"
            alt="Pineapple"
          />
        </ImageList>
        <List>
          <SectionTitle color={SECTION_COLOR}>SECURITY</SectionTitle>
        </List>

        <List>
          <IntroTitle>
            Data protection is the most important factor for a successfull
            school app.
          </IntroTitle>
          <Introduction>
            The data will be treated with the utmost confidence and the personal
            data will be protected against possible attackers. The app is only
            available to students of the Episcopal Marienschule Mönchengladbach
            and represents a project from students to students pose.
          </Introduction>
        </List>

        <SecurityList>
          <Feature>
            <FeatureTitle> Eine App ein User </FeatureTitle>
          </Feature>
          <Feature>
            <FeatureTitle> SSL / TLS Verschlüsselung </FeatureTitle>
            <FeatureText />
          </Feature>
          <Feature>
            <FeatureTitle>Zugang nur für authentifizierte Nutzer </FeatureTitle>
            <FeatureText>
              - Face-to-Face Authentication
              <br />- Moodle/ILIAS <br />- LDAP/Active Directory
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureTitle>Datensparsamkeit (§3a BDSG) </FeatureTitle>
            <FeatureText>
              - Minimaler Datenaustausch mit dem Server <br />- Individuelle
              Datenrückgabe für jeden Server
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureTitle> Jede Schule hat eigenen Server </FeatureTitle>
            <FeatureText>
              - Schuldaten werden auf eigenen Server gespeichert <br />-
              Alleinige Kontrolle bei der Schule
              <br />- Unabhängigkeit
            </FeatureText>
          </Feature>
          <Feature />
        </SecurityList>
        <List>
          <Feature>
            <img
              src="./images/pineapple/pineapple_security.png"
              alt="Pineapple Security System"
              style={{ maxWidth: "600px" }}
            />
          </Feature>
        </List>

        <List>
          {" "}
          <SectionTitle color={SECTION_COLOR}>LONG TERM</SectionTitle>
        </List>
        <List>
          <IntroTitle>
            To ensure the long-term success of the app, three things have been
            done.
          </IntroTitle>
        </List>

        <List center>
          <Feature center>
            <FeatureTitle>Multigenerational project</FeatureTitle>
            <FeatureText>
              App-AG - Students learn from students to persist over several
              generations
            </FeatureText>
          </Feature>
          <Feature center>
            <FeatureTitle>OpenSource</FeatureTitle>
            <FeatureText>
              sustainable and long-term community development free use for
              everyone
            </FeatureText>
          </Feature>
          <Feature center>
            <FeatureTitle>Easy Integration</FeatureTitle>
            <FeatureText>
              Basis: Untis adaptation to any school possible
            </FeatureText>
          </Feature>
        </List>
      </Main>
    );
  }
}

export default Pineapple;
