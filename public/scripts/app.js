'use strict';

console.log("app is running");

//JSK = Javascript XML
var profile = {
      appName: 'Intentional Hustle',
      appInfo: 'My Blog App'
};
var template = React.createElement(
      'div',
      null,
      React.createElement(
            'h1',
            null,
            profile.appName
      ),
      React.createElement(
            'p',
            null,
            profile.appInfo
      )
);

var userName = 'Andrew';
var userAge = '24';
var userLocation = 'Lagos';
var templateTwo = React.createElement(
      'div',
      null,
      React.createElement(
            'h1',
            null,
            userName + '!'
      ),
      React.createElement(
            'p',
            null,
            'Age: ',
            userAge
      ),
      React.createElement(
            'p',
            null,
            'Location: ',
            userLocation
      )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
