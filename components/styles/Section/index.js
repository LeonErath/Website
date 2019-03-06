import styled from "styled-components";

import Header from "./Header";
import Topic from "./Topic";
import Text from "./Text";
import Content from "./Content";

const Section = styled.div`
  justify-content: ${props => (props.center ? "center" : "left")};
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: ${props => (props.header ? "0px" : "20px")};
  display: flex;
  background: ${props => (props.color ? props.color : "#FFFFFF")};
  flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
  }

  ${Content} {
    align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  }

  ${Topic} {
    padding-right: ${props => (props.right ? "8px" : "30px")};
    padding-left: ${props => (props.right ? "30px" : "8px")};
  }
  ${Header} {
    text-align: ${props => (props.right ? "right" : "left")};
  }
`;

Section.Content = Content;
Section.Header = Header;
Section.Topic = Topic;
Section.Text = Text;

export default Section;
