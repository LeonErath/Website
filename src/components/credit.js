import React, { Component } from "react";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImpressumBox = styled.div`
  margin: 20px;
  width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 4px;
`;
const ImpressumText = styled.div`
  font-family: Calibri, sans-serif;
  line-height: 2;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 3px;
`;

class Credit extends Component {
  render() {
    return (
      <Div>
        <ImpressumBox>
          <ImpressumText>
            <img
              alt="webapi"
              src="./copyright/webapi.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by mikicon from the Noun Project
            <br />
            <img
              alt="chatbot"
              src="./copyright/chatbot.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by Oksana from the Noun Project
            <br />
            <img
              alt="music"
              src="./copyright/music.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by B Barren from the Noun Project
            <br />
            <img
              alt="network"
              src="./copyright/network.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by gilbert badget from the Noun Project
            <br />
            <img
              alt="smartphone"
              src="./copyright/smartphone.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by Matthias Van Wambeke from the Noun Project
            <br />
            <img
              alt="stress"
              src="./copyright/stress.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by Hare Krishna from the Noun Project
            <br />
            <img
              alt="copyright"
              src="./copyright/text.svg"
              style={{ width: "100px", height: "100px" }}
            />
            Created by Adnen Kari from the Noun Project
          </ImpressumText>
        </ImpressumBox>
      </Div>
    );
  }
}

export default Credit;
