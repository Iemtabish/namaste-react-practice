import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id: "parent" },

    React.createElement(
      "div",
      { id: "child" },

      [
        React.createElement("h1", {}, "I'm the Header"),
        React.createElement("h2", {}, "I'm the Header2"),
      ]
    ),  React.createElement(
      "div",
      { id: "child" },

      [
        React.createElement("h1", {}, "I'm the Header"),
        React.createElement("h2", {}, "I'm the Header2"),
      ]
    )      
  );



            const heading = React.createElement(
                
                "h1",
                {id: "heading" , xyz: "abc"}, 
                "Hello World from JS!")

            const root = ReactDOM.createRoot(document.getElementById("root"))

            root.render(parent)