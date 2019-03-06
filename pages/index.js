import styled from "styled-components";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const About = styled.div`
  padding-left: 80px;
  padding-top: 100px;
  padding-bottom: 80px;
  max-width: 100%;

  @media (max-width: 1300px) {
  }
  @media (max-width: 700px) {
    padding-top: 30px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 30px;
  }
`;
const AboutTitle = styled.div`
  font-size: 3rem;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }
`;
const AboutText = styled.div`
  margin: 8px;
  line-height: 2;
  font-size: 2rem;
  max-width: 100%;

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

const Div = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Project = styled.div`
  width: 100%;
  max-height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: stretch;
  flex-basis: 40%;
  flex-wrap: wrap;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Project2 = styled.div`
  max-height: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: stretch;
  flex-basis: 40%;
  flex-wrap: wrap-reverse;
`;

const Description = styled.div`
  margin: 10px;
  font-size: 2rem;
  letter-spacing: 2px;
  line-height: 2;

  @media (max-width: 1300px) {
    line-height: 1.8;
    letter-spacing: 1.2px;
  }
  @media (max-width: 700px) {
    line-height: 1.6;
    letter-spacing: 1.2px;
    font-size: 1.6rem;
  }
`;

const Title = styled.div`
  margin: 10px;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 10px;
  @media (max-width: 1300px) {
    letter-spacing: 1.4px;
  }
  @media (max-width: 700px) {
    letter-spacing: 1.2px;
    font-size: 2rem;
  }
`;

const LinkStyled = styled.a`
  margin: 10px;
  font-size: 1.8rem;
  color: #9f9f9f;
  cursor: pointer;
  background: linear-gradient(
    to top,
    #fff 0%,
    ${props => props.backgroundColor || "palevioletred"} 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  color: #000;
  text-decoration: none;
  transition: background-size 0.2s;

  padding: 2px;
  :hover {
    background-size: 4px 50px;
  }

  @media (max-width: 1300px) {
    letter-spacing: 1.2px;
  }
  @media (max-width: 700px) {
    letter-spacing: 1.2px;
    font-size: 1.4rem;
  }
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-basis: 50%;
  flex-grow: 1;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-basis: 46%;
  margin: 16px;
  flex-grow: 1;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const App = () => (
  <div>
    <About>
      <AboutTitle> Hey, I'm Leon.</AboutTitle>
      <AboutText>
        I am 20 years old, living in Mannheim Germany. I love developing Apps
        and want to take you with me, on my way to become a Developer.
      </AboutText>
    </About>
    <List>
      <Project>
        <Element>
          <CoverImage
            alt="JournalismFuture Ad"
            src="/static/images/journalismfuture/journalismfuture.png"
          />
        </Element>
        <TextBox>
          <Fade bottom>
            <Div>
              <Title>JF</Title>
              <Description>Read the news of tomorrow!</Description>
              <Link href="/journalismfuture">
                <LinkStyled backgroundColor="#009587">
                  ➡ View Project ⬅
                </LinkStyled>
              </Link>
            </Div>
          </Fade>
        </TextBox>
      </Project>

      <Project2>
        <TextBox>
          <Fade bottom>
            <Div>
              <Title>PINEAPPLE</Title>
              <Description>
                The ultimate school organizer!
                <br />
                An app from students for students.
              </Description>
              <Link href="/pineapple">
                <LinkStyled backgroundColor="#ff4a42">
                  ➡ View Project ⬅
                </LinkStyled>
              </Link>
            </Div>
          </Fade>
        </TextBox>
        <Element>
          <CoverImage
            alt="Pineapple Ad"
            src="/static/images/pineapple/bmsapp4.png"
          />
        </Element>
      </Project2>

      <Project>
        <Element>
          {" "}
          <CoverImage alt="Eve Ad" src="/static/images/eve/eve.png" />
        </Element>
        <TextBox>
          <Fade bottom>
            <Div>
              <Title>EVE</Title>
              <Description>
                Bot's going on?
                <br />A maschine learning chatbot
                <br />
                Created with Go and Python
              </Description>
              <Link href="/eve">
                <LinkStyled backgroundColor="#49b49c">
                  ➡ View Project ⬅
                </LinkStyled>
              </Link>
            </Div>
          </Fade>
        </TextBox>
      </Project>
      <Project2>
        <TextBox>
          <Fade bottom>
            <Div>
              <Title>Text2Music</Title>
              <Description>
                Create music from text
                <br />
              </Description>
              <Link href="/t2m">
                <LinkStyled backgroundColor="#d662c0">
                  ➡ View Project ⬅
                </LinkStyled>
              </Link>
            </Div>
          </Fade>
        </TextBox>
        <Element>
          {" "}
          <CoverImage alt="T2M Ad" src="/static/images/t2m.png" />
        </Element>
      </Project2>
      {/* <Project>
        <Element>
          <img
            alt="Cloudy Ad"
            src="/static/images/cloudy.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Element>
        <TextBox>
          <Div>
            <Title>CLOUDY</Title>
            <Description>
              An alternative way to look
              <br /> at weather forecast.
            </Description>
            <Link href="/cloudy">
              <LinkStyled>➡ View Project</LinkStyled>
            </Link>
          </Div>
        </TextBox>
      </Project>

      <Project2>
        <TextBox>
          <Div>
            <Title>WATCHLIST</Title>
            <Description>
              See upcoming Movies and <br />
              save them into your Watchlist
              <br /> to watch them later.
              <br />
            </Description>
            <Link href="/watchlist">
              <LinkStyled>➡ View Project</LinkStyled>
            </Link>
          </Div>
        </TextBox>
        <Element>
          <img
            alt="Watchlist Ad"
            src="/static/images/watchlist.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Element>
      </Project2> */}
    </List>
  </div>
);

export default App;
