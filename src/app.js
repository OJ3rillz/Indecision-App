console.log("app is running");

 
const app = {
      title: 'Help Me Decide',
      subtitle: 'Life or Death? Put it in my hands',
      options: ['One', 'Two']
};
var template = (
 <div>
      <h1>{profile.appName}</h1>
      <p>{profile.appInfo}</p>
</div>
);

let count = 0;
const addOne = () => {
      count++;
   renderCounterApp();
};
const minusOne = () => {
      count--;
      renderCounterApp();
};
const reset = () => {
    count = 0 ;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
const templateTwo = ( 
      <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
      </div>
);


ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();