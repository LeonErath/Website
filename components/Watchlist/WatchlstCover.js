import React, { Component } from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("./images/Watchlist/background.png");
`;

const GradientDiv = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: linear-gradient(
    -45deg,
    rgba(35, 46, 120, 0.94),
    rgba(178, 7, 65, 0.94),
    rgba(215, 12, 81, 0.94)
  );
`;

const H1 = styled.div`
  color: #ffffff;
  font-size: calc(38px + 4vw);
  letter-spacing: 2.4vw;
  display: inline-flex;
  font-weight: bold;
`;

const H2 = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  display: inline-block;
  color: #ffffff;
  font-size: calc(12px + 1.5vw);
  letter-spacing: 2px;
  line-height: 2;
  font-weight: 400;
`;

const DivContent = styled.h2`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Left = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  padding: 10px 10px 10px calc(10px + 5vw);
  flex-direction: column;
  justify-content: center;
  align-items: left;
  flex: 40%;
  min-width: 400px;
  margin-top: 60px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 50%;
  min-width: 300px;
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;
  letter-spacing: 1px;
  color: ${props => (props.textcolor ? props.textcolor : "white")};
  background: ${props => (props.color ? props.color : "black")};
  font-size: 16px;
  font-weight: bold;
  margin: 0.5em;
  width: 140px;
  text-align: center;
  padding: 8px 4px 8px 4px;
  border: 2px solid ${props => (props.color ? props.color : "black")};
  border-radius: 20px;
  display: inline-block;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const Seperator = styled.div`
  position: relative;
  height: 48px;

  ::after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='#f2f2f0'/%3E%3C/svg%3E");
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
  }
`;

const Div = styled.div`
  margin-top: -20px;
`;

class WatchlistCover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true
    };

    this.menuClicked = this.menuClicked.bind(this);
  }

  menuClicked() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <Div>
        <ImageDiv>
          <GradientDiv>
            <DivContent>
              <Left>
                <H1>Watchlist</H1>
                <H2>
                  See upcoming Movies and save them into your Watchlist to watch
                  them later.
                </H2>
                <Button color="white" textcolor="black">
                  DOWNLOAD
                </Button>
              </Left>
              <Right>
                <img
                  src="/static/images/Watchlist/movie_covers.png"
                  style={{
                    objectFit: "contain",
                    width: "50%",
                    height: "auto",
                    margin: "100px 100px 100px 0px"
                  }}
                />
              </Right>
            </DivContent>
            <Seperator />
          </GradientDiv>
        </ImageDiv>
      </Div>
    );
  }
}

export default WatchlistCover;
