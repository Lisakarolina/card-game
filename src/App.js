import { useEffect, useState } from "react";
import DisplayScore from "./DisplayScore.js";
import "./App.css";
// require.context("./img", false, /\.jpg$/);
console.log("did it");
//importAll(require.context("./img/", true, /\.jpg$/));
//let img1, img2, img3, img4, img5, img6;

function importAll(r) {
  r.keys().forEach((elem, ind) => {
    //r(elem);
    console.log(elem);
    let imgNumber = "img" + (ind + 1).toString();
    console.log(imgNumber);
    //import "img" + ind.toString() from elem;             //("./img/" + elem.split("/")[1]);
    window[imgNumber] = require("./img/" + elem.split("/")[1]);
    console.log("in window", window[imgNumber]);
    //console.log(r(elem));
  });
  console.log(r);
}

importAll(require.context("./img", false, /\.jpg$/));
//let images = importAll(require.context("./img", false, /\.jpg$/));
//console.log("images", images);

function App() {
  const [currentImg, setCurrentImg] = useState({ img: "" });
  // attach event listeners
  useEffect(() => {
    // Runs once
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
    // zip
    //[shuffleImages(arr), arr].rows[0].map((elem, ind) => [elem, rows[1][ind]]);
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
    console.log("clicked image", e.target.src);
    setCurrentImg({ img: e.target.src });
    allocateImages();
  }

  return (
    <div id="container">
      <div id="heading">Bridges</div>
      <div id="instructions">
        Instructions: Klick on an image that you haven't seen before. If you're
        right and this image is new you are rewarded a point. If, however, the
        image has already been shown in this game your score is reset and a new
        game starts.
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
