"use strict";

console.log("app is running");

//JSK = Javascript XML
var template = React.createElement(
     "div",
     null,
     React.createElement(
          "h1",
          null,
          "Indecision App"
     ),
     React.createElement(
          "p",
          null,
          "This is a info"
     )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
