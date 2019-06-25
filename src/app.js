console.log("app is running");

 
const app = {
      title: 'Help Me Decide',
      subtitle: 'Life or Death? Put it in my hands',
      options: [ ]
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
  }
};

const template = (
 <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are you options'  :  'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
         <li>Item one</li>
         <li>Item two</li>
      </ol>

      <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
      </form>

      </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

