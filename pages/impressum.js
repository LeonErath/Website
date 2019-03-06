import React, { Component } from "react";

import styled from "styled-components";

const Div = styled.div`
  min-height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    margin-top: 100px;
  }
  @media (max-width: 1300px) {
    margin-top: 40px;
  }
`;
const ImpressumBox = styled.div`
  text-align: center;
  margin-top: -200px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 4px;
`;
const ImpressumText = styled.div`
  line-height: 2;
`;

const LawText = styled.div`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  margin-top: 20px;
  font-size: 10px;
`;

class Impressum extends Component {
  render() {
    return (
      <Div>
        <ImpressumBox>
          <ImpressumText>
            Leon Erath
            <br />
            Oderlandstraße 8<br />
            41564 Kaarst
            <br />
            DE Germany
            <br />
            me@leonerath.de
          </ImpressumText>
          <LawText>
            Information according to §5 of the German TMG. Please always use my
            email address when contacting me if possible.
          </LawText>
        </ImpressumBox>
      </Div>
    );
  }
}

export default Impressum;
