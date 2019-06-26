const app = {
      title: 'Visibility Toggle'
};

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
