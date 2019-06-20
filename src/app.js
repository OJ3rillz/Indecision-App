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

var uaer = { 
      name: 'Andrew',
      age = '24',
      location: 'New York'
};

function getLocation(location) {
      if (location) {
            return <p>Location: {location}</p>;
      } else {
            return undefined;
      }
}
 var templateTwo =  (
 <div>
       <h1>{user.name ? user.name : 'Anonymous' }</h1>
       <p>Age: {user.age}</p>
       {getLocation(user.location)}
 </div>
 );

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);