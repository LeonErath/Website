import ProjectHeader from "../components/Header/ProjectHeader.js";
import Section from "../components/styles/Section";
import { Main } from "../components/styles/styles.js";

const JournalismFuture = () => (
  <Main>
    <img
      alt="jounalism future banner"
      style={{ width: "100%", objectFit: "contain" }}
      src="/static/images/journalismfuture/JournalismFutureBanner.png"
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
        src="/static/images/journalismfuture/jf_functionality.png"
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
        src="/static/images/journalismfuture/jf_voting.png"
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
        src="/static/images/journalismfuture/jf_payment.png"
      />
    </Section>
  </Main>
);

export default JournalismFuture;
