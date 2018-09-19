import React, { Component } from "react";

import styled from "styled-components";
import ProjectHeader from "./ProjectHeader.js";

const Div = styled.div`
  font-family: "Open Sans";
`;

const Title1 = styled.div`
  font-size: 24px;
  letter-spacing: 4px;
`;
const Title3 = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
`;
const Title2 = styled.div`
  font-size: 16px;
  margin: 16px;
  letter-spacing: 2px;
`;

const InfoTilte = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 100;
`;

const ProjectInfo = styled.div`
  margin: 20px;
  width: 140px;
  flex-grow: 1;
  text-align: center;
`;
const List = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
class JournalismFuture extends Component {
  render() {
    return (
      <Div>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src="./images/journalismfuture/JournalismFutureBanner.png"
        />
        <ProjectHeader
          information={[
            {
              title: "Principle",
              text: " OpenSource Free Democratic"
            },
            {
              title: "IDEA",
              text:
                " - World map as the basis for the presentation \
                 - Connection between Events can be easily displayed \
                 - Easy to understand"
            },
            {
              title: "PROJECT",
              text: "In Progress."
            }
          ]}
        />

        <List>
          <Title3>Functionality</Title3>
        </List>
        <List2>
          {" "}
          <br />
          <img
            style={{
              maxHeight: "800px",
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Functionality"
            src="./images/journalismfuture/jf_functionality.png"
          />
        </List2>
        <List>
          <Title3>Democratic Voting System</Title3>
        </List>
        <List2>
          {" "}
          <br />
          <img
            style={{
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Democratic Voting System"
            src="./images/journalismfuture/jf_voting.png"
          />
        </List2>
        <List>
          <Title3>Payment System</Title3>
        </List>
        <List2>
          {" "}
          <br />
          <img
            style={{
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Payment System"
            src="./images/journalismfuture/jf_payment.png"
          />
        </List2>
      </Div>
    );
  }
}

export default JournalismFuture;
