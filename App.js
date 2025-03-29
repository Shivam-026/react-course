// const heading = React.createElement("h1", {}, React.createElement("h1", {}, "Hello world from React js"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", { key: "h1" }, "Hello world from ReactJS"),
        React.createElement("h2", { key: "h2" }, "Hello world from ReactJS"),
      ]
    )
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);