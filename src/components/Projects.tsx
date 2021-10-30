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
  :hover {
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
  grid-template-rows: repeat(4, 400px);

  @media (min-width: 1024px) {
    padding: 0 10%;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 400px);
  }
`;

export const Projects = () => (
  <ProjectDiv>
    <Item background={"#F4F4F4"}>
      <Link href="/verifica">
        <img width="130" src="/verifica.png"></img>
      </Link>
      <Card>
        <CardHeader>
          <div>solo project</div>
          <div>3 Months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>spellcheck</CardBackground>
          <CardForeground>
            <CardTitle>verifica</CardTitle>

            <div>(coming soon)</div>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/react.svg"></img>
        </CardStack>
      </Card>
    </Item>
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
          <div>3 people</div>
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
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/python.svg"></img>
          <img width="40" src="/gopher.svg"></img>
        </CardStack>
      </Card>
    </Item>
    <Item
      background={"#0F9688"}
      style={{
        backgroundImage: 'url("/3daudio_background.svg")',
      }}
    >
      <Link href="https://niklaskorz.github.io/audio3d/">
        <a target="_blank">
          <img width="300" src="/3daudio.svg"></img>
        </a>
      </Link>
      <Card>
        <CardHeader>
          <div>3 people</div>
          <div>6 Months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>experiment</CardBackground>
          <CardForeground>
            <Link href="https://niklaskorz.github.io/audio3d/">
              <a
                target="_blank"
                style={{ color: "black", textDecoration: "none" }}
              >
                <CardTitle>3D Audio Editor</CardTitle>
              </a>
            </Link>
            <Link href="https://github.com/niklaskorz/audio3d">
              <a target="_blank">
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/react.svg"></img>
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
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/android-icon.svg"></img>
          <img width="40" src="/brand/apple.svg"></img>
        </CardStack>
      </Card>
    </Item>
    <Item background="#303F9F">
      <Link href="journalismfuture">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Backtext
            color="#202C77"
            style={{
              transform: "rotate(-3deg)",
            }}
          >
            Journalism
          </Backtext>
          <img width="200" src="/jf.png" style={{ position: "absolute" }}></img>
        </div>
      </Link>
      <Card>
        <CardHeader>
          <div>Hackathon</div>
          <div>3 days</div>
        </CardHeader>
        <CardMain>
          <CardBackground>Journalism</CardBackground>
          <CardForeground>
            <Link href="journalismfuture">
              <CardTitle>Journalism Future</CardTitle>
            </Link>
            <Link href="https://github.com/JournalismFuture/Journalism-Future-App">
              <a target="_blank">
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/android-icon.svg"></img>
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
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" height="60" src="/java.svg"></img>
        </CardStack>
      </Card>
    </Item>

    <Item background="#B20741">
      <Link href="watchlist">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Backtext
            color="#860430"
            style={{
              transform: "rotate(2deg)",
            }}
          >
            Watchlist
          </Backtext>
          <img
            width="200"
            src="/watchlist.png"
            style={{ position: "absolute" }}
          ></img>
        </div>
      </Link>
      <Card>
        <CardHeader>
          <div>solo project</div>
          <div>6 months</div>
        </CardHeader>
        <CardMain>
          <CardBackground>Movies</CardBackground>
          <CardForeground>
            <Link href="watchlist">
              <CardTitle>Watchlist</CardTitle>
            </Link>
            <Link href="https://github.com/LeonErath/Watchlist">
              <a target="_blank">
                <img src="/github-icon.svg"></img>
              </a>
            </Link>
          </CardForeground>
        </CardMain>
        <CardStack>
          <img width="40" src="/android-icon.svg"></img>
        </CardStack>
      </Card>
    </Item>
  </ProjectDiv>
);
