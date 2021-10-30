import React, { Component } from "react";

import styled from "styled-components";

const FeatureTitle = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  width: 400px;
`;
const FeatureText = styled.div`
  letter-spacing: 0.9px;
  width: 400px;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
`;

const Feature = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 600px;
  margin: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;

  padding-left: 10%;
  padding-right: 10%;
`;
const Div = styled.div`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  display: flex;
`;
const Image = styled.img`
  height: 600px;

  object-fit: cover;
`;

const Button = styled.button`
  background-color: #162238;
  border: none;
  color: white;

  height: 48px;
  width: 48px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50%;
`;

const Gallery = [
  {
    title: "GRADES",
    text: " In the Grade Planner, the student can enter his own notes. So he has a direct overview of his grade point and a grade pre-announcement for his next testimonial.",
    image: " /images/pineapple/grades_pineapple.png",
  },

  {
    title: "QUIZ",
    text: "The app is not only intended to inform, but also to assist students in learning by incorporating a quiz function that queries quiz questions created by the teachers of each class based on the current school material or prepare for the next exam. <br /> <br /> In the quiz, the students can prove their knowledge. The Quizzes are created by the teachers and are meant to be the student help to learn the lesson easier.",
    image: "/images/pineapple/quiz_pineapple.png",
  },
  {
    title: "EXAMS",
    text: "The exam plan is automatically loaded into the app and contains all necessary information for planning the exam phase.",
    image: "/images/pineapple/exams_pineapple.png",
  },
  {
    title: "HOMEWORK",
    text: "With the task scheduler, the student can easily and easily organize and manage their homework.",
    image: "/images/pineapple/homework_pineapple.png",
  },
  {
    title: "TIMETABLE",
    text: "The timetable automatically integrates the customized substitution plan for the student.",
    image: "/images/pineapple/course_pineapple.png",
  },
];

class PineappleGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFeature: 0,
    };

    this.nextFeature = this.nextFeature.bind(this);
  }

  nextFeature(e) {
    console.log("SOME");

    if (this.state.currentFeature + 1 > Gallery.length - 1) {
      this.setState({ currentFeature: 0 });
    } else {
      this.setState({
        currentFeature: this.state.currentFeature + 1,
      });
    }
  }

  render() {
    return (
      <Main>
        <Feature>
          <FeatureTitle>
            {Gallery[this.state.currentFeature].title}{" "}
          </FeatureTitle>
          <FeatureText>
            <td
              dangerouslySetInnerHTML={{
                __html: Gallery[this.state.currentFeature].text,
              }}
            />
          </FeatureText>
        </Feature>
        <Div>
          {" "}
          <Image
            src={Gallery[this.state.currentFeature].image}
            alt="Pineapple"
          />
        </Div>

        <Button onClick={this.nextFeature}>></Button>
      </Main>
    );
  }
}

export default PineappleGallery;
