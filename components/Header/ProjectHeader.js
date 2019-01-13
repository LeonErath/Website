import React, { Component } from "react";
import styled from "styled-components";
import Section from "../styles/Section";
import { Main } from "../styles/styles.js";

const InfoTilte = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
`;

const ProjectInfo = styled.div`
  margin: 20px;
  max-width: 400px;
  flex-grow: 1;
  text-align: center;
`;

class ProfileHeader extends Component {
  render() {
    const Information = this.props.information.map(info => {
      return (
        <ProjectInfo>
          <InfoTilte> {info.title}</InfoTilte>
          <InfoText>{info.text}</InfoText>
        </ProjectInfo>
      );
    });

    return (
      <Main>
        <Section center header color={"#f2f2f0"}>
          {Information}
        </Section>
      </Main>
    );
  }
}

export default ProfileHeader;
