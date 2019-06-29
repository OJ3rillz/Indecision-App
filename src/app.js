class Header extends React.Component{
      render() {
          return (
           <div>     
            <h1>Help Me Decide</h1>
            <h2>Life or Death? Put it in my hands</h2>
           </div>
          );
    }
}

class Action extends React.Component {
      render() {
            return (
                  <div>
                  <button>What should i do?</button>
                  </div>
            )
      }
}



const jsx = (
      <div>
         <Header />
         <Action />
      </div>
);

ReactDOM.render(jsx, document.getElementById('app'))