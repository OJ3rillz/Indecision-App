console.log("app is running");

 

//JSK = Javascript XML
var profile = {
      appName: 'Intentional Hustle',
      appInfo: 'My Blog App'
}
var template = (
 <div>
      <h1>{profile.appName}</h1>
      <p>{profile.appInfo}</p>
</div>
);

let count = 0;
const addOne = () => {
   console.log('addOne');
};
const minusOne = () => {
      console.log('minusOne');
};
const reset = () => {
      console.log('reset')
}

const templateTwo = ( 
      <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
      </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);