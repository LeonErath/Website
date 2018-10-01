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

const Div1 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("./images/Watchlist/background.png");
`;

const Div2 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    -45deg,
    rgba(35, 46, 120, 0.7),
    rgba(178, 7, 65, 0.9),
    rgba(215, 12, 81, 0.9)
  );
`;

const H1 = styled.div`
  color: #ffffff;
  font-size: 80px;
  letter-spacing: 20px;
  font-weight: bold;
`;

const Div = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 20px;
  width: 50%;
  height: 70%;
  min-width: 380px;
`;

class Watchlist extends Component {
  render() {
    return (
      <div>
        <Div1>
          <Div2>
            <div>
              <img src="./images/Watchlist/Movies.png" />
              Projects <br />
              Resume <br />
              About Me <br />
            </div>

            <Div>
              <H1>Watchlist</H1>
              <h2>
                See upcoming Movies and save them into your Watchlist to watch
                them later.
              </h2>
              <button>DOWNLOAD</button>
            </Div>
          </Div2>
        </Div1>

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
