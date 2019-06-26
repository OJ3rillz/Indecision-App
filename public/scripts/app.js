'use strict';

var app = {
      title: 'Visibility Toggle'
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
      visibility = !visibility;
      render();
};

var render = function render() {
      var template = React.createElement(
            'div',
            null,
            React.createElement(
                  'h1',
                  null,
                  app.title
            ),
            React.createElement(
                  'button',
                  { onClick: toggleVisibility },
                  visibility ? 'Hide Details' : 'Show Details'
            ),
            visibility && React.createElement(
                  'div',
                  null,
                  React.createElement(
                        'p',
                        null,
                        'This is what is hidden'
                  )
            )
      );

      ReactDOM.render(template, document.getElementById('app'));
};
render();
