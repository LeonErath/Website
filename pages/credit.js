import styled from "styled-components";

const Div = styled.div`
  min-height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImpressumBox = styled.div`
  margin: 20px;
  width: 800px;
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
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Credit = () => (
  <Div>
    <ImpressumBox>
      <ImpressumText>
        <Image alt="webapi" src="/copyright/webapi.svg" />
        Created by mikicon from the Noun Project
        <br />
        <Image alt="chatbot" src="/copyright/chatbot.svg" />
        Created by Oksana from the Noun Project
        <br />
        <Image alt="music" src="/copyright/music.svg" />
        Created by B Barren from the Noun Project
        <br />
        <Image alt="network" src="/copyright/network.svg" />
        Created by gilbert badget from the Noun Project
        <br />
        <Image alt="smartphone" src="/copyright/smartphone.svg" />
        Created by Matthias Van Wambeke from the Noun Project
        <br />
        <Image alt="stress" src="/copyright/stress.svg" />
        Created by Hare Krishna from the Noun Project
        <br />
        <Image alt="copyright" src="/copyright/text.svg" />
        Created by Adnen Kari from the Noun Project
      </ImpressumText>
    </ImpressumBox>
  </Div>
);

export default Credit;
