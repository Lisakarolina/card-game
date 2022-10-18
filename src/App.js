import { useEffect, useState } from "react";
import DisplayScore from "./DisplayScore.js";
import "./App.css";

function importAll(r) {
  r.keys().forEach((elem, ind) => {
    let imgNumber = "img" + (ind + 1).toString();
    window[imgNumber] = require("./img/" + elem.split("/")[1]);
  });
}

importAll(require.context("./img", false, /\.jpg$/));

function App() {
  const [currentImg, setCurrentImg] = useState({ img: "" });
  // attach event listeners
  useEffect(() => {
    document.querySelectorAll("img").forEach((item, index) => {
      item.addEventListener("click", handleClick);
    });
    allocateImages();
  }, []);

  function shuffleImages(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function allocateImages() {
    zipArrays(
      [...Array(31).keys()].slice(1),
      shuffleImages([...Array(31).keys()].slice(1))
    ).forEach(
      (elem) =>
        (document.getElementById("card" + elem[0]).src =
          window["img" + elem[1]])
    );
  }

  function zipArrays(arr1, arr2) {
    return arr1.map((elem, ind) => [elem, arr2[ind]]);
  }

  function handleClick(e) {
    setCurrentImg({ img: e.target.src });
    allocateImages();
  }

  return (
    <div id="container">
      <div id="heading">BRIDGES</div>
      <div id="instructions">
        Instructions: Klick on an image that you haven't seen before. If you're
        right and this image is new you are rewarded a point. If, however, the
        image has already been shown in this game your score is reset and a new
        game starts. You can achieve a maximum of 30 points.
      </div>
      <DisplayScore clickedImg={currentImg} />
      <div id="card-field">
        <img className="card" id="card1" />
        <img className="card" id="card2" />
        <img className="card" id="card3" />
        <img className="card" id="card4" />
        <img className="card" id="card5" />
        <img className="card" id="card6" />
        <img className="card" id="card7" />
        <img className="card" id="card8" />
        <img className="card" id="card9" />
        <img className="card" id="card10" />
        <img className="card" id="card11" />
        <img className="card" id="card12" />
        <img className="card" id="card13" />
        <img className="card" id="card14" />
        <img className="card" id="card15" />
        <img className="card" id="card16" />
        <img className="card" id="card17" />
        <img className="card" id="card18" />
        <img className="card" id="card19" />
        <img className="card" id="card20" />
        <img className="card" id="card21" />
        <img className="card" id="card22" />
        <img className="card" id="card23" />
        <img className="card" id="card24" />
        <img className="card" id="card25" />
        <img className="card" id="card26" />
        <img className="card" id="card27" />
        <img className="card" id="card28" />
        <img className="card" id="card29" />
        <img className="card" id="card30" />
      </div>
    </div>
  );
}

export default App;
