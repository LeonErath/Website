import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div`
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  flex-grow: 1;
`;
const Textarea = styled.textarea`
  padding: 8px;
  display: inline-block;
  border: none;
  border: 1px solid #ccc;
  width: 600px;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 1px;
  outline: none !important;
  resize: none;
  height: 300px;
  :focus {
    outline: none !important;
    border: 1px solid #730000;
  }
`;

const Input = styled.input`
  padding: 8px;
  display: inline-block;
  text-align: center;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 600px;
  font-size: 20px;
  color: #000;
  font-weight: 100;
  letter-spacing: 2px;
  outline: none !important;

  :focus {
    outline: none !important;
    border-bottom: 1px solid #730000;
  }
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;
  letter-spacing: 1px;
  color: white;
  background: #730000;
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #730000;
  border-radius: 20px;
  display: inline-flex;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  transition: all 0.3s ease;
  outline: none !important;
  &:hover {
    transform: scale(1.3);
  }
`;
const Form = styled.div`
  margin: 20px;
  position: relative;
`;

const Div = styled.div``;

const Hint = styled.div`
  width: 100%;
  text-align: center;
  color: gray;
  font-weight: 100;
  margin-top: 4px;
  font-size: 12px;
`;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      text: "",
      title: "",
      preciseSearch: false,
      loading: false,
      musicPath: "",
      success: false
    };

    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest() {
    let title = this.state.title;
    let text = this.state.text;
    let preciseSearch = this.state.preciseSearch;

    if (title.trim() !== "" && text.trim().length > 50) {
      this.setState({ loading: true });

      let that = this;
      axios
        .get("http://leonerath.de:1247/api/submit", {
          params: {
            title: title,
            text: text,
            preciseSearch: preciseSearch
          }
        })
        .then(response => {
          let musicPath = "http://leonerath.de:1247" + response.data;
          console.log(response);
          that.setState({
            loading: false,
            musicPath: musicPath,
            success: true
          });
          that.refs.audio.load();
        })
        .catch(error => {
          console.log(error);
          that.setState({ loading: false, musicPath: "" });
        });
    } else {
      // error
    }
  }

  render() {
    return (
      <Main>
        <Form>
          <br />
          <Div>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              onChange={evt => this.setState({ title: evt.target.value })}
            />
          </Div>
          <br />{" "}
          <Textarea
            placeholder="Enter your text here.."
            onChange={evt => this.setState({ text: evt.target.value })}
          />
          <Hint>
            The request can take up to 20 secconds. Please be aware of that.
          </Hint>
          <br />
          <div style={{ width: "100%", textAlign: "center" }}>
            <label>
              <input
                type="checkbox"
                onChange={evt =>
                  this.setState({ preciseSearch: !this.state.preciseSearch })
                }
              />
              preciseSearch
            </label>
            <br />
            <br />
            <Button onClick={this.makeRequest}>Generate</Button>
          </div>
          <br />
          {this.state.loading && (
            <div
              style={{
                position: "absolute",
                top: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                background: "#ffffff",
                height: "550px"
              }}
            >
              <div>Loading..</div>
            </div>
          )}
          <div style={{ width: "100%", textAlign: "center" }}>
            {this.state.success && (
              <audio controls ref="audio">
                <source src={this.state.musicPath} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
          <br />
          <br />
        </Form>
      </Main>
    );
  }
}

export default Demo;
