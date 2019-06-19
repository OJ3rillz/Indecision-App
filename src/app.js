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

var userName = 'Andrew';
var userAge = '24';
var userLocation = 'Lagos'
 var templateTwo =  (
 <div>
       <h1>{userName + '!'}</h1>
       <p>Age: {userAge}</p>
       <p>Location: {userLocation}</p>
 </div>
 );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);