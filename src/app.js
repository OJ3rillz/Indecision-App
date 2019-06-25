console.log("app is running");

 
const app = {
      title: 'Help Me Decide',
      subtitle: 'Life or Death? Put it in my hands',
      options: ['One', 'Two']
};
const template = (
 <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
      <ol>
         <li>Item one</li>
         <li>Item two</li>
      </ol>

      <form>
      
      </form>

      </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

