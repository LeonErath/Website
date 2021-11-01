import styled from "styled-components";
import Link from "next/link";
import Card, {
  CardHeader,
  CardBackground,
  CardForeground,
  CardMain,
  CardStack,
  CardTitle,
} from "./Card";

const Item = styled.div`
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props: { background: string }) =>
    props.background ? props.background : "#ffffff"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  :hover,
  :focus-within {
    div {
      opacity: 1;
    }
  }
`;

const Backtext = styled.div`
  position: absolute;
  font-size: 6em;
  color: ${(props) => props.color};
  font-weight: bold;
  display: flex;

  span {
    line-height: 140px;
    margin: 32px;
  }
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 5em;
  }
`;

const ProjectDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 400px);

  @media (min-width: 1024px) {
    padding: 0 10%;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 400px);
  }
`;

export const Projects = () => (
  <ProjectDiv>
    <Item
      background={"#2F2E41"}
      style={{
        backgroundImage: 'url("/eve_background.svg")',
      }}
    >
      <Link href="/eve">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="340"
            src="/eve.svg"
            style={{ position: "absolute" }}
          ></img>
        </div>
      </Link>
      <Card>
        <CardHeader>
          <div>5 people</div>
          <div>3 Months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>chatbot</CardBackground>
          <CardForeground>
            <Link href="/eve">
              <CardTitle>Eve</CardTitle>
            </Link>
            <Link href="https://github.com/AAA-Intelligence/eve">
              <a target="_blank">
                <img src="/github-icon.svg" data-theme="invert"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/python.svg" data-theme="invert" />
          <img width="40" src="/gopher.svg" data-theme="invert" />
        </CardStack>
      </Card>
    </Item>
    <Item
      background={"#0F9688"}
      style={{
        backgroundImage: 'url("/3daudio_background.svg")',
      }}
    >
      <img width="300" src="/3daudio.svg" />
      <Card>
        <CardHeader>
          <div>3 people</div>
          <div>6 Months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>experiment</CardBackground>
          <CardForeground>
            <CardTitle>3D Audio Editor</CardTitle>

            <Link href="https://github.com/niklaskorz/audio3d">
              <a target="_blank">
                <img src="/github-icon.svg" data-theme="invert"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/react.svg" data-theme="invert"></img>
        </CardStack>
      </Card>
    </Item>
    <Item
      background={"#CE5E5E"}
      style={{
        backgroundImage: 'url("/pineapple_background.svg")',
      }}
    >
      <Link href="pineapple">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/pineapple.png"
            style={{ position: "absolute", width: "100%", maxWidth: "400px" }}
          ></img>
        </div>
      </Link>
      <Card>
        <CardHeader>
          <div>3 people</div>
          <div>1 year</div>
        </CardHeader>
        <CardMain>
          <CardBackground>School 4.0</CardBackground>
          <CardForeground>
            <Link href="pineapple">
              <CardTitle>Pineapple</CardTitle>
            </Link>
            <Link href="https://github.com/LeonErath/Pineapple">
              <a target="_blank">
                <img src="/github-icon.svg" data-theme="invert"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/android-icon.svg" data-theme="invert"></img>
          <img width="40" src="/brand/apple.svg" data-theme="invert"></img>
        </CardStack>
      </Card>
    </Item>
    <Item background="#F4F4F4">
      <Link href="t2m">
        <img style={{ width: "100%" }} src="/t2m.png"></img>
      </Link>
      <Card>
        <CardHeader>
          <div>5 people</div>
          <div>3 months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>generation</CardBackground>
          <CardForeground>
            <Link href="t2m">
              <CardTitle>Text2Music</CardTitle>
            </Link>
            <Link href="https://github.com/AudiophileDev/T2M">
              <a target="_blank">
                <img src="/github-icon.svg" data-theme="invert"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" height="60" src="/java.svg" data-theme="invert"></img>
        </CardStack>
      </Card>
    </Item>
  </ProjectDiv>
);
