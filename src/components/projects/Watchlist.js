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

class Watchlist extends Component {
  render() {
    return (
      <div>
        Watchlist
        <List2>
          <ProjectInfo>
            <InfoTilte>Technology</InfoTilte>
            <InfoText>Android App in Kotlin</InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Goal</InfoTilte>
            <InfoText>
              {" "}
              See upcoming Movies and save them into your Watchlist to watch
              them later.
            </InfoText>
          </ProjectInfo>
          <ProjectInfo>
            <InfoTilte>Project</InfoTilte>
            <InfoText>1 month.</InfoText>
          </ProjectInfo>
        </List2>
      </div>
    );
  }
}

export default Watchlist;
