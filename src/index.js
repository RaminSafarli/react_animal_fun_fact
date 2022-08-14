import { animals } from "./animals";
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import "./style.css";

const title = "";
const images = [];
const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const fact = animals[e.target.alt].facts;
  const randomNum = Math.floor(Math.random() * fact.length);
  const facts = fact[randomNum];
  document.getElementById("fact").innerHTML = facts;
}

// ReactDOM.render(animalFacts, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(animalFacts);
