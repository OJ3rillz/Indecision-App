class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
          {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
              <div>
              <p>This is what is hidden</p>
              </div>
        )}
      </div>
    )
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

let visibility = false;

const toggleVisibility = () => {
      visibility = !visibility;
      render();
}

const render = () => {
const template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick={toggleVisibility}>
          {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
              <div>
              <p>This is what is hidden</p>
              </div>
        )}
      </div>
);

ReactDOM.render(template, document.getElementById('app'));
};
render();
