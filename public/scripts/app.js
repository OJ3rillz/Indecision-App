"use strict";

console.log("app is running");

//JSK = Javascript XML
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
