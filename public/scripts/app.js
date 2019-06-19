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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Akinleye Timilehin"
  ),
  React.createElement(
    "p",
    null,
    "Age: 24"
  ),
  React.createElement(
    "p",
    null,
    "Location: Lagos"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
