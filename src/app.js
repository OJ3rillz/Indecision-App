console.log("app is running")

//JSK = Javascript XML
var template = (
 <div>
      <h1>Indecision App</h1>
      <p>This is a info</p>
</div>
);

 var templateTwo =  (
 <div>
       <h1>Akinleye Timilehin</h1>
       <p>Age: 24</p>
       <p>Location: Lagos</p>
 </div>
 );
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);