import { ProjectBar, SubItem } from "../components/styles/ProjectBar";
import Section from "../components/styles/Section";

const JournalismFuture = () => (
  <div>
    <img
      alt="jounalism future banner"
      style={{ width: "100%", objectFit: "contain" }}
      src="/static/images/journalismfuture/JournalismFutureBanner.png"
    />

    <ProjectBar>
      <SubItem>
        <div>Principle</div>
        <div>OpenSource. Free. Democratic.</div>
      </SubItem>
      <SubItem>
        <div>IDEA</div>
        <div>
          World map as the basis for the presentation. Connection between Events
          can be easily displayed. Easy to understand.
        </div>
      </SubItem>
      <SubItem>
        <div>PROJECT</div>
        <div>In Progress.</div>
      </SubItem>
    </ProjectBar>

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
  </div>
);

export default JournalismFuture;
