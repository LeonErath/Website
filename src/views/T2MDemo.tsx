import axios from "axios";
import React, { useRef, useState } from "react";
import classes from "./T2MDemo.module.scss";

export const T2MDemo = () => {
  const myRef = useRef<HTMLAudioElement | null>(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [preciseSearch, setPreciseSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState<null | string>(null);

  const makeRequest = (e: any) => {
    e.preventDefault();

    if (title.trim().length === 0 || text.trim().length === 0) {
      return;
    }

    setLoading(true);

    const api = "https://erath.dev/api/t2m";

    axios
      .get(api + "/submit", {
        params: {
          title: title,
          text: text,
          preciseSearch: preciseSearch,
        },
      })
      .then((response) => {
        const musicPath = api + response.data;

        setLoading(false);

        setPath(musicPath);
        if (myRef && myRef.current) {
          myRef.current.load();
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setPath("");
      });
  };

  return (
    <form className={classes.form} onSubmit={makeRequest}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(evt) => setTitle(evt.target.value)}
      />

      <textarea
        placeholder="Enter your text here.."
        onChange={(evt) => setText(evt.target.value)}
      />
      <span>The request can take up to 20 secconds.</span>

      <label>
        <input
          type="checkbox"
          onChange={() => setPreciseSearch(!preciseSearch)}
        />
        preciseSearch
      </label>

      <button type="submit" onClick={makeRequest}>
        Generate
      </button>

      {loading && (
        <div className={classes.loadingContainer}>
          <div>Loading..</div>
        </div>
      )}
      <div className={classes.audioContainer}>
        <audio controls ref={myRef}>
          <source
            src={path ? path : "./music/t2m/music.wav"}
            type="audio/ogg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </form>
  );
};
