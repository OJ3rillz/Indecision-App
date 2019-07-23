class IndecisionApp extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  options: ['Thing one', 'Thing two', 'Thing four']
            };
      }
      render() {
            const title = "Indecision";
            const subtitle = "Life or Death? Put it in my hands"
            
            return (
                  <div>
                    <Header title={title} subtitle={subtitle} />
                    <Action />
                    <Options options={this.state.options} />
                    <AddOption />
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
      constructor(props) {
            super(props);
            this.handleRemoveAll = this.handleRemoveAll.bind(this);
      }
      handleRemoveAll() {
            alert('Remove them');
      }
      render() {
            return (
                  <div>
                  <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button> 
                  {
      this.props.options.map((option) => <Option key={option} optionText={option} />)
                        }
            
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
      handleAddOption(e) {
            e.preventDefault();
            const option = e.target.elements.option.value.trim();

            if(option){
            alert(option);
      }
}
      render() {
            return (
                  <div>
                  <form onSubmit={this.handleAddOption}>
                  <input type="text" name="option"></input>
                  <button>Add Option</button>
              </form>
                  </div>
            );
      }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))