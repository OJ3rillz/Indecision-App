console.log("app is running")

//JSK = Javascript XML
var template = React.createElement("p", null, "This is JSK from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);