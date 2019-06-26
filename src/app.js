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
        render();
  }
};
const onRemoveAll = () => {
      app.options =[];
      render();
}


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]
const render =  () => {
const template = (
      <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ? 'Here are you options'  :  'No options'}</p>
           <p>{app.options.length}</p>
           <button onClick={onRemoveAll}>Remove All</button>
           {
                 /*numbers.map((number) => {
                       return <p key={number}>Number: {number}</p>
                 })*/
           }
           
           <ol>
              {
                    app.options.map((option) => {
                          return <li key={option}>{option}</li>
                    })
            }
           </ol>
     
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option"></input>
               <button>Add Option</button>
           </form>
     
           </div>
     );
     





ReactDOM.render(template, appRoot);
};

render();