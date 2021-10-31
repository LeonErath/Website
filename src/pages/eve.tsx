import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "../components/avatar/Avatar";
import { EveDemo } from "../components/demos/eve/EveDemo";
import Github from "../components/svg/github";
import Tech from "../components/svg/tech";
import classes from "./eve.module.scss";

const AIContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: -100px;
  @media (min-width: 320px) and (max-width: 1024px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const eve = () => {
  const [isDemoOpen, setDemoOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Head>
        <title>Leon Erath | Eve</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <EveDemo isDemoOpen={isDemoOpen} setDemoOpen={setDemoOpen}></EveDemo>
      <div className={classes.header}>
        <div className={classes.headerItem}>
          <h1>Eve</h1>
          <h2>A virtual dating assistant</h2>
          <div className={classes.headerActionContainer}>
            <button
              className={classes.button}
              onClick={() => setDemoOpen(true)}
            >
              Demo
            </button>
            <Link href="https://github.com/AAA-Intelligence/eve/wiki/EVE-API">
              <a className={classNames(classes.button, classes.outline)}>
                Documentation
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.headerItem}>
          <img src="/darting_assistant.svg" alt="assistant" />
        </div>
      </div>

      <div className={classes.banner}>
        <div className={classes.avatarContainer}>
          <Avatar name="Daniel Salomon" short="DS" />
          <Avatar name="Niklas Korz" short="NK" />
          <Avatar name="Daniel Scholz" short="DS" />
          <Avatar name="Simon Niedermayr" short="SN" />
          <Avatar name="Leon Erath" short="LE" />
        </div>
        <div className={classes.item}>
          <img src="/icons/certificate(24x24)@1x.svg" data-theme="invert" />
          <span>DHBW</span>
          <span>University</span>
        </div>
        <div className={classes.item}>
          <img src="/icons/calendar(24x24)@1x.svg" data-theme="invert" />
          <span>3 months</span>
          <span>2017</span>
        </div>
        <div className={classes.item}>
          <img src="/icons/keyboard(24x24)@1x.svg" data-theme="invert" />
          <span>Go, Python</span>
          <span>Tech</span>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.textContainer}>
          <h3>Solving a Problem</h3>
          <span>
            99% of Men don’t approach women, because they are waiting for the
            right moment. To remedy this, there are numerous dating coaches.
            Help in this form, however, is very expensive and overcomes the need
            for introverted people to seek help. In addition, it is very
            difficult to provide the counselling service for the many victims at
            any time anywhere in the world.
          </span>
          <h3>Using artificial intelligence</h3>
          <span>
            “Eve” gives the possibility of communicating with a chatbot through
            a chat client. The user interacts with a daily used and thus already
            known chat interface. The user receives answers in German, which are
            influenced by his messages. This allows him to practice what it
            would be like in reality to communicate with a real potential
            partner.
          </span>
          <h3>Our tech stack</h3>
          <span>
            With the help of Google’s library tensorflow, we have developed a
            state of the art chatbot. We also use Go to provide a WebSocket
            connection to the bot. If you also want to integrate Eve into your
            platform, we offer a REST API.
          </span>

          <a href="https://github.com/AAA-Intelligence/eve" target="_blank">
            <Github fill="#000000" style={{ width: "50px" }}></Github>
          </a>
        </div>
        <div className={classes.imageContainer}>
          <img src="/opinion.svg" alt="dark_alley" width="400"></img>
        </div>
      </div>

      <AIContainer>
        <Tech style={{ maxWidth: "1200px", width: "90%" }}></Tech>
      </AIContainer>
    </div>
  );
};

export default eve;
