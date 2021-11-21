import styled from "styled-components";
import Link from "next/link";
import Card, {
  CardHeader,
  CardBackground,
  CardForeground,
  CardMain,
  CardStack,
  CardTitle,
} from "./card";

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
          alt=""
        ></img>
      </div>

      <Card>
        <CardHeader>
          <div>5 people</div>
          <div>3 Months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>chatbot</CardBackground>
          <CardForeground>
            <Link href="/eve">
              <a>
                <CardTitle>Eve</CardTitle>
              </a>
            </Link>
            <Link href="https://github.com/AAA-Intelligence/eve">
              <a target="_blank" rel="noopener">
                <img
                  src="/github-icon.svg"
                  data-theme="invert"
                  alt="Github"
                ></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img
            width="40"
            src="/python.svg"
            data-theme="invert"
            alt="Python (Programming Language)"
          />
          <img
            width="40"
            src="/gopher.svg"
            data-theme="invert"
            alt="Go (Programming Language)"
          />
        </CardStack>
      </Card>
    </Item>
    <Item
      background={"#0F9688"}
      style={{
        backgroundImage: 'url("/3daudio_background.svg")',
      }}
    >
      <img width="300" src="/3daudio.svg" alt="" />
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
              <a target="_blank" rel="noopener">
                <img
                  src="/github-icon.svg"
                  data-theme="invert"
                  alt="Github"
                ></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img
            width="40"
            src="/react.svg"
            data-theme="invert"
            alt="React"
          ></img>
        </CardStack>
      </Card>
    </Item>
    <Item
      background={"#CE5E5E"}
      style={{
        backgroundImage: 'url("/pineapple_background.svg")',
      }}
    >
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
          alt=""
        ></img>
      </div>

      <Card>
        <CardHeader>
          <div>3 people</div>
          <div>1 year</div>
        </CardHeader>
        <CardMain>
          <CardBackground>School 4.0</CardBackground>
          <CardForeground>
            <Link href="pineapple">
              <a>
                <CardTitle>Pineapple</CardTitle>
              </a>
            </Link>
            <Link href="https://github.com/LeonErath/Pineapple">
              <a target="_blank" rel="noopener">
                <img
                  src="/github-icon.svg"
                  data-theme="invert"
                  alt="Github"
                ></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img
            width="40"
            src="/android-icon.svg"
            data-theme="invert"
            alt="Android"
          ></img>
          <img
            width="40"
            src="/brand/apple.svg"
            data-theme="invert"
            alt="iOS"
          ></img>
        </CardStack>
      </Card>
    </Item>
    <Item background="#F4F4F4">
      <img style={{ width: "100%" }} src="/t2m.png" alt=""></img>

      <Card>
        <CardHeader>
          <div>5 people</div>
          <div>3 months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>generation</CardBackground>
          <CardForeground>
            <Link href="t2m">
              <a>
                <CardTitle>Text2Music</CardTitle>
              </a>
            </Link>
            <Link href="https://github.com/AudiophileDev/T2M">
              <a target="_blank" rel="noopener">
                <img
                  src="/github-icon.svg"
                  data-theme="invert"
                  alt="Github"
                ></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img
            width="40"
            height="60"
            src="/java.svg"
            data-theme="invert"
            alt="Java"
          ></img>
        </CardStack>
      </Card>
    </Item>
  </ProjectDiv>
);
