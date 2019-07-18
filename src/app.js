class IndecisionApp extends React.Component {
      render() {
            const title = "Indecision";
            const subtitle = "Life or Death? Put it in my hands"
            const options = ['Thing one', 'Thing two', 'Thing Four']
            
            return (
                  <div>
                    <Header title={title} subtitle={subtitle} />
                    <Action />
                    <Options options={options} />
                    <AddOptions />
                  </div>
            )
      }
}

class Header extends React.Component{
      render() {
          return (
           <div>     
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
           </div>
          );
    }
}

class Action extends React.Component {
      handlePick() {
            alert('handlePick');
      }
      render() {
            return (
                  <div>
                  <button onClick={this.handlePick}>What should i do?</button>
                  </div>
            );
      }
}

class Options extends React.Component {
      handleRemoveAll() {
            alert('Remove them');
      }
      render() {
            return (
                  <div>
                  {
      this.props.options.map((option) => <Option key={option} optionText={option} />)
                        }
            <button onClick={this.handleRemoveAll}> I want to remove all</button>
                  </div>
            );
      }
}

class Option extends React.Component {
      render () {
            return (
                  <div>
           {this.props.optionText}          
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