import React, { Component } from "react";
import ProjectHeader from "../../Header/ProjectHeader.js";
import Section from "../../Section";
import { Main } from "../../styles.js";

class JournalismFuture extends Component {
  render() {
    return (
      <Main>
        <img
          alt="jounalism future banner"
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
                " - World map as the basis for the presentation- Connection between Events can be easily displayed- Easy to understand"
            },
            {
              title: "PROJECT",
              text: "In Progress."
            }
          ]}
        />
        <Section center>
          <Section.Header>Functionality</Section.Header>
          <img
            style={{
              maxHeight: "800px",
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Functionality"
            src="./images/journalismfuture/jf_functionality.png"
          />
        </Section>

        <Section center>
          <Section.Header>Democratic Voting System</Section.Header>
          <img
            style={{
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Democratic Voting System"
            src="./images/journalismfuture/jf_voting.png"
          />
        </Section>
        <Section center>
          <Section.Header>Payment System</Section.Header>
          <img
            style={{
              width: "70%",
              height: "70%"
            }}
            alt="JournalismFuture Payment System"
            src="./images/journalismfuture/jf_payment.png"
          />
        </Section>
      </Main>
    );
  }
}

export default JournalismFuture;
