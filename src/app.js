class IndecisionApp extends React.Component {
      render() {
            return (
                  <div>
                    <Header />
                    <Action />
                    <Options />
                    <AddOptions />
                  </div>
            )
      }
}

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
            );
      }
}

class Options extends React.Component {
      render() {
            return (
                  <div>
                  <h1>Options component here</h1>
                  </div>
            );
      }
}

class Option extends React.Component {
      render () {
            return (
                  <div>
                  <h1>Option component here</h1>
                  </div>
            )
      }
}

class AddOptions extends React.Component {
      render() {
            return (
                  <div>
                  <h3>AddOption component here</h3>
                  </div>
            );
      }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))