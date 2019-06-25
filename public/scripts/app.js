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

var count = 0;
var addOne = function addOne() {
      console.log('addOne');
};
var minusOne = function minusOne() {
      console.log('minusOne');
};
var reset = function reset() {
      console.log('reset');
};

var templateTwo = React.createElement(
      'div',
      null,
      React.createElement(
            'h1',
            null,
            'Count: ',
            count
      ),
      React.createElement(
            'button',
            { onClick: addOne },
            '+1'
      ),
      React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
      ),
      React.createElement(
            'button',
            { onClick: reset },
            'reset'
      )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
