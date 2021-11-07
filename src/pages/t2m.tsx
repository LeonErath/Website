import React, { Component } from "react";
import { Avatar } from "../components/avatar/Avatar";
import { T2MDemo } from "../views/T2MDemo";
import classes from "./t2m.module.scss";

class T2M extends Component {
  render() {
    return (
      <div>
        <div className={classes.header}>
          <div className={classes.left}>
            <h1>T2M</h1>
            <h2>Generate music from text</h2>

            <a href="https://github.com/AudiophileDev/T2M" target="_blank">
              Documentation
            </a>
          </div>
          <div className={classes.imageContainer}>
            <img src="/images/t2m/terminal.png" alt="terminal" />
          </div>
        </div>

        <div className={classes.banner}>
          <div className={classes.avatarContainer}>
            <Avatar name="Simon Niedermayr" short="SN" />
            <Avatar name="Daniel Scholz" short="DS" />
            <Avatar name="Ivan Marchuk" short="IM" />
            <Avatar name="Mercello Eiermann" short="ME" />
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
            <span>2017</span>
          </div>
          <div className={classes.item}>
            <img src="/icons/keyboard(24x24)@1x.svg" data-theme="invert" />
            <span>Java</span>
            <span>Tech</span>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.textContainer}>
            <h3>Generate music</h3>

            <span>
              The classic print medium as a source of news is being used less
              and less in the age of digitization. As a result, news service
              providers are increasingly resorting to websites in order to
              present news quickly and clearly. A new, innovative feature for
              such a news website would be a quick preview of the article in the
              form of music. <br />
              But Problems are:
              <br />
              <ul>
                <li>Copyright issues</li>
                <li>Much effort by searching for suitable music</li>
                <li>Repetition of music</li>
              </ul>
              <br />
              <ul>
                <li>Generating music from texts</li>
                <li>Adaptation of the mood of the text</li>
                <li>Complex algorithms produce harmonic-sounding melodies</li>
              </ul>
              <br />
              We developed the software T2M, which interprets news articles in
              at least 15 seconds long music files (mp3). The mood of the music
              will reflect the content of the text. The music is generated
              individually to the text and is purely instrumental. The software
              is delivered as a simple einzubindes command line tool. For
              testing purposes, a GUI is implemented.
            </span>
          </div>

          <div className={classes.demoContainer}>
            <T2MDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default T2M;
