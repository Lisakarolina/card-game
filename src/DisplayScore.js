import React from "react";
import { useState, useRef, useEffect } from "react";

function DisplayScore(props) {
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const startNewGame = useRef(false);

  useEffect(() => {
    //history.forEach((obj) => {})
    if (history.indexOf(props.clickedImg.img) !== -1) {
      console.log("already there");
      setScore(0);
      setHistory([]);
      return;
    }
    history.push(props.clickedImg.img);
    console.log("history", history);
    setScore((value) => value + 1);
    //allocateImages();
  }, [props.clickedImg]);
  return <div id="score">Score: {score}</div>;
}

export default DisplayScore;
