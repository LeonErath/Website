import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar } from "../components/avatar/Avatar";
import { EveDemo } from "../components/demos/eve/EveDemo";
import Github from "../components/svg/github";
import { Tech } from "../components/svg/tech";
import classes from "./eve.module.scss";

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
          <Avatar name="Daniel Salomon" short="DSa" />
          <Avatar name="Niklas Korz" short="NK" />
          <Avatar name="Daniel Scholz" short="DSc" />
          <Avatar name="Simon Niedermayr" short="SN" />
          <Avatar name="Leon Erath" short="LE" />
        </div>
        <div className={classes.item}>
          <img src="/icons/location-2(24x24)@1x.svg" data-theme="invert" />
          <span>DHBW</span>
          <span>University</span>
        </div>
        <div className={classes.item}>
          <img src="/icons/calendar(24x24)@1x.svg" data-theme="invert" />
          <span>3 months</span>
          <span>2018</span>
        </div>
        <div className={classes.item}>
          <img src="/icons/keyboard(24x24)@1x.svg" data-theme="invert" />
          <span>Go, Python</span>
          <span>Tech</span>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.textContainer}>
          <h3>What is eve?</h3>
          <span>
            "Eve" is our chatbot that uses a mix of artificial intelligence and
            static responses to mimic realistic conversations between students.
            The Project was part of the three-month university course "software
            engineering II" and was built by Niklas Korz, Daniel Scholz, Simon
            Niedermayr, Daniel Salomon and Me. The user can ask questions and
            receive, either pre-defined or procedurally generated, answers,
            which are influenced by his previous messages.
          </span>
          <h3>Corpus</h3>
          <span>
            The corpus of the model consists of our own exported chat histories
            from WhatsApp & Co. This helped us to recreate a more realistic
            conversation, which for example also led to our model using emojis
            correctly. The chat exports were then processed by our{" "}
            <a
              href="https://github.com/AAA-Intelligence/parser"
              target="_blank"
            >
              parser
            </a>
            , where the chats were normalized and tokenized and finally exported
            into two files: a vocabulary and a set of questions & answers. For
            the parser, we used a mix of JavaScript and Python.
          </span>
          <h3>Chatbot</h3>
          <span>
            For our chatbot, we used a{" "}
            <b>unidirectional LSTM encoder-decoder model</b>, which is also used
            by{" "}
            <a href="https://github.com/OpenNMT/OpenNMT-tf" target="_blank">
              OpenNMT
            </a>
            . In addition to the chatbot model, we trained two other models. One
            model to recognize predefined patterns (PatternAnalyser) and one
            model to determine the mood of the conversation (MoodAnalyser). The
            pattern analyser allowed us to give predefined answers to certain
            questions depending on the mood. For example, what the chatbot's
            name is or how old it is. Mood dependent questions would be "How are
            you?" or "Do you like me?". A full list of our predefined answers
            can be found{" "}
            <a
              href="https://github.com/AAA-Intelligence/eve/tree/master/bot/predefined_answers"
              target="_blank"
            >
              here
            </a>
            .
          </span>
          <h3>Architecture</h3>
          <span>
            We chose a modular system architecture so that the team could easily
            work on individual components. For our backend, we used Go and
            Python, not only because it is the standard in AI chatbot
            development, but also because some of the team had prior knowledge
            of these programming languages. The WebApp can communicate with the
            WebServer over WebSockets or REST. The WebServer authenticates the
            user, saves the message and relays it to a running bot instance. The
            WebServer can manage multiple instances of chatbots to improve the
            performance of the application.
          </span>

          <a href="https://github.com/AAA-Intelligence/eve" target="_blank">
            <Github fill="#000000" style={{ width: "50px" }}></Github>
          </a>
        </div>
        <div className={classes.imageContainer}>
          <img
            src="/illustrations/eve/eve_arch.svg"
            alt="Architecture Diagram"
            data-theme="invert"
          ></img>
        </div>
      </div>

      <div className={classes.aiContainer}>
        <Tech></Tech>
      </div>
    </div>
  );
};

export default eve;
