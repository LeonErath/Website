import React, { Component } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Data from "../data/data.js";

const Div = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-family: "Open Sans";
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
  width: 400px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Project = styled.div`
  margin: 16px;
`;

class Projects extends Component {
  render() {
    const projects = Data.map(project => {
      return (
        <Project>
          <CustomLink to={project.link}>
            <InfoTilte>{project.name}</InfoTilte>
            <InfoText>{project.sub}</InfoText>
            <InfoText>
              {project.year} - {project.duration}
            </InfoText>
            <InfoText>
              {project.programmingLanguage.map(language => {
                return language.name + " ";
              })}
            </InfoText>
          </CustomLink>
        </Project>
      );
    });

    return (
      <Div>
        Projects
        <p />
        {projects}
      </Div>
    );
  }
}

export default Projects;
