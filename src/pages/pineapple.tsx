import React, { Component } from "react";
import { Avatar } from "../components/avatar/Avatar";
import { PineappleGallery } from "../views/PineappleGallery";
import classes from "./pineapple.module.scss";
import Image from "next/image";
import PineappleBanenr from "../../public/images/pineapple/PineappleBanner.png";
class Pineapple extends Component {
  render() {
    return (
      <div>
        <div>
          <Image
            alt="pineapple banner"
            width={1252}
            height={878}
            objectFit={"cover"}
            src={PineappleBanenr}
            placeholder="blur"
          />
        </div>

        <div className={classes.banner}>
          <div className={classes.avatarContainer}>
            <Avatar name="Florian Brand" short="FB" />
            <Avatar name="Gero Embser" short="GE" />
            <Avatar name="Leon Erath" short="LE" />
          </div>
          <div className={classes.item}>
            <img src="/icons/location-2(24x24)@1x.svg" data-theme="invert" />
            <span>BMS</span>
            <span>School</span>
          </div>
          <div className={classes.item}>
            <img src="/icons/certificate(24x24)@1x.svg" data-theme="invert" />
            <span>#7 (out of 1600)</span>
            <span>jugend forscht</span>
          </div>
          <div className={classes.item}>
            <img src="/icons/calendar(24x24)@1x.svg" data-theme="invert" />
            <span>1 year</span>
            <span>2015</span>
          </div>
          <div className={classes.item}>
            <img src="/icons/keyboard(24x24)@1x.svg" data-theme="invert" />
            <span>Kotlin, Swift</span>
            <span>Tech</span>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.contentContainer}>
            <h3>Help students organize their everyday school life.</h3>
            <p>
              There's an app for everything - why not for everyday school life?
              Florian Brandt, Gero Embser and Me developed a digital school
              planner for iOS and Android that automatically displays the
              respective timetable, reminds students of their homework and
              integrates the school's website. To accomplish this, we integrated
              the school's digital planning software Untis. With encrypted data
              transmission and password-protected access, only authenticated
              students can use to the app and view their sensitive data.
            </p>
            <p>
              In addition to developing the mobile app, we also applied to the{" "}
              <a
                href="https://www.jugend-forscht.de/projektdatenbank/einfach-und-sicher-der-ultimative-schulplaner.html"
                target="_blank"
                rel="noopener"
              >
                Jugend Forscht competition
              </a>{" "}
              at the same time. After successfully winning first place in the
              regional and state competition (
              <a
                href="https://www.meine-woche.de/staedte/herausragender-erfolg_aid-36389947"
                target="_blank"
                rel="noopener"
              >
                source
              </a>
              ), we finished the national competition with at 7th place.
            </p>
            <p>
              We wanted not only to develop the ultimate school planner app but
              also run the app successfully in the long run. For this purpose,
              we additionally created a concept for the success of the app:
              <ul>
                <li>
                  Longterm: We founded a school club to allow students to
                  further develop the app
                </li>
                <li>
                  OpenSource: The complete source code of our app is OpenSource
                  and free to use for everyone
                </li>
                <li>
                  Easy Integration: We used the broadly used school planner
                  Untis as our basis so that any school can adopt the mobile app
                </li>
                <li>
                  Data protection: The app meets the requirements of the law of
                  data economy (§3a BDSG). This means only a minimal exchange of
                  data with the server takes place.
                </li>
              </ul>
            </p>
          </div>
          <PineappleGallery />
        </div>

        <div className={classes.imageList}>
          <div className={classes.imageContainer}>
            <img src="/images/pineapple/grades_pineapple.png" alt="Pineapple" />
          </div>
          <div className={classes.imageContainer}>
            <img
              src="/images/pineapple/loginscreen_pineapple.png"
              alt="Pineapple"
            />
          </div>
          <div className={classes.imageContainer}>
            <img src="/images/pineapple/exams_pineapple.png" alt="Pineapple" />
          </div>
          <div className={classes.imageContainer}>
            <img
              src="/images/pineapple/class_selection_pineapple.png"
              alt="Pineapple"
            />
          </div>
          <div className={classes.imageContainer}>
            <img
              src="/images/pineapple/exam_detail_pineapple.png"
              alt="Pineapple"
            />
          </div>
          <div className={classes.imageContainer}>
            <img src="/images/pineapple/course_pineapple.png" alt="Pineapple" />
          </div>
          <div className={classes.imageContainer}>
            <img src="/images/pineapple/quiz_pineapple.png" alt="Pineapple" />
          </div>
          <div className={classes.imageContainer}>
            <img
              src="/images/pineapple/homework_pineapple.png"
              alt="Pineapple"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pineapple;
