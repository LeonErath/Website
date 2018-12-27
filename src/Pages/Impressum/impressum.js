import React, { Component } from "react";

import styled from "styled-components";

const Div = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: "Open Sans";
  line-height: 2;
  letter-spacing: 2px;
`;

const LawText = styled.div`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
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
