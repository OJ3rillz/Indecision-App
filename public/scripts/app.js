'use strict';

var app = {
      title: 'Visibility Toggle'
};

var visibility = false;

var render = function render() {
      var template = React.createElement(
            'div',
            null,
            React.createElement(
                  'h1',
                  null,
                  app.title
            ),
            React.createElement('button', null)
      );

      ReactDOM.render(template, document.getElementById(app));
};
render();
