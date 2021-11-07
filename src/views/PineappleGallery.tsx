import React, { useState } from "react";
import styled from "styled-components";
import classes from "./PineappleGallery.module.scss";

const Gallery = [
  {
    title: "Grades",
    text: " In the Grade Planner, the student can enter his own notes. So he has a direct overview of his grade point and a grade pre-announcement for his next testimonial.",
    image: " /images/pineapple/grades_pineapple.png",
  },

  {
    title: "Quiz",
    text: "The app is not only intended to inform, but also to assist students in learning by incorporating a quiz function that queries quiz questions created by the teachers of each class based on the current school material",
    image: "/images/pineapple/quiz_pineapple.png",
  },
  {
    title: "Exams",
    text: "The exam plan is automatically loaded into the app and contains all necessary information for planning the exam phase.",
    image: "/images/pineapple/exams_pineapple.png",
  },
  {
    title: "Homework",
    text: "With the task scheduler, the student can easily and easily organize and manage their homework.",
    image: "/images/pineapple/homework_pineapple.png",
  },
  {
    title: "Timetable",
    text: "The timetable automatically integrates the customized substitution plan for the student.",
    image: "/images/pineapple/course_pineapple.png",
  },
];

export const PineappleGallery = () => {
  const [currentPage, setPage] = useState(0);

  const nextFeature = () => {
    if (currentPage + 1 > Gallery.length - 1) {
      setPage(0);
    } else {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.title}>{Gallery[currentPage].title} </div>
        <div
          className={classes.text}
          dangerouslySetInnerHTML={{
            __html: Gallery[currentPage].text,
          }}
        ></div>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.image}>
          <img src={Gallery[currentPage].image} alt="Pineapple" />
        </div>
        <button onClick={nextFeature}>
          <img
            data-theme="invert"
            src="/icons/chevron-double-right(24x24)@1x.svg"
            alt="next image"
          />
        </button>
      </div>
    </div>
  );
};
