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
            app.title
      ),
      app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
      ),
      React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are you options' : 'No options'
      ),
      React.createElement(
            'ol',
            null,
            React.createElement(
                  'li',
                  null,
                  'Item one'
            ),
            React.createElement(
                  'li',
                  null,
                  'Item two'
            )
      ),
      React.createElement('form', null)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
