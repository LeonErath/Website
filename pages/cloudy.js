import React, { Component } from "react";

import styled from "styled-components";

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
`;

const ProjectInfo = styled.div`
  margin: 20px;
  width: 140px;
  flex-grow: 1;
  text-align: center;
`;

const List2 = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 20px;
  justify-content: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Cloudy extends Component {
  render() {
    return (
      <div>
        Cloudy
        <List2>
          <ProjectInfo>
            <InfoTilte>Technology</InfoTilte>
            <InfoText>iOS app in Swift</InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Goal</InfoTilte>
            <InfoText>
              {" "}
              An alternative way to look at weather forecast.
            </InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Project</InfoTilte>
            <InfoText>3 months.</InfoText>
          </ProjectInfo>
        </List2>
      </div>
    );
  }
}

export default Cloudy;
