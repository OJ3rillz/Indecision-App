const app = {
      title: 'Visibility Toggle'
};

let visibility = false;

const render = () => {
const template = (
      <div>
        <h1>{app.title}</h1>
        <button></button>
      </div>
);

ReactDOM.render(template, document.getElementById(app));
};
render();
