'use strict';

console.log("app is running");

var app = {
      title: 'Help Me Decide',
      subtitle: 'Life or Death? Put it in my hands',
      options: ['One', 'Two']
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
      count++;
      renderCounterApp();
};
var minusOne = function minusOne() {
      count--;
      renderCounterApp();
};
var reset = function reset() {
      count = 0;
      renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

      ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
