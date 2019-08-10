// // import './utils.js'

// // import subtract, { square, add } from './utils.js';

// // console.log("app.js is running");
// // console.log(square(4));
// // console.log(add(100, 23)); 
// // console.log(subtract(100, 20));

// import './person.js'
// import isSenior, { isAdult, canDrink} from './person.js'
// console.log (isAdult(20));
// console.log (canDrink(30));
// console.log (isSenior(64));
// const template = <p>This is jsx from webpack</p>
// ReactDom.render(template, document.getElementById('app'));





// import  validator from 'validator';

// console.log(validator.isEmail('test'));
 
import React from 'react';
import ReactDom from 'react-dom';

class IndecisionApp extends React.Component {
      constructor(props) {
            super(props);
            this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
            this.handlePick = this.handlePick.bind(this);
            this.handleAddOption = this.handleAddOption.bind(this);
            this.handleDeleteOption = this.handleDeleteOption.bind(this);
            this.state = {
                  options: []
            };
      }
      componentDidMount() {
        try {  
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);

        if (options) {
        this.setState(() => ({options}));
        }
      }
        catch (e) {
           
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json =JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
      }
      componentWillUnmount() {
        console.log ('componentWillUnmount')
      }
      handleDeleteOptions() {
            // this.setState(() => {
            //       return {
            //             options: []
            //       };
            // });

            this.setState(() => ({
                 options: []
            }));
      }
      handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
      }
      handlePick() {  
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);
      }
      handleAddOption(option) {
            if(!option) {
                return 'Enter valid value to add item';  
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState((prevState) => ({
                 options: prevState.options.concat(option)
            }));
      }

      render() {
            const subtitle = "Life or Death? Put it in my hands"
            
            return (
                  <div>
                    <Header subtitle={subtitle} />
                    <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                    <Options 
                       options={this.state.options} 
                      handleDeleteOptions={this.handleDeleteOptions}
                      handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                      handleAddOption={this.handleAddOption}
                    />
                  </div>
            );
      }
}


const Header = (props) => {
      return (
            <div>     
             <h1>{props.title}</h1>
             {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
           );
};

Header.defaultProps = {
  title: 'Indecision'
}
// class Header extends React.Component{
//       render() {
//           return (
//            <div>     
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//            </div>
//           );
//     }
// }

const Action = (props) => {
      return (
            <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should i do?
            </button>
            </div>
      );
};

// class Action extends React.Component {
//       render() {
//             return (
//                   <div>
//                   <button 
//                   onClick={this.props.handlePick}
//                   disabled={!this.props.hasOptions}
//                   >
//                   What should i do?
//                   </button>
//                   </div>
//             );
//       }
// }

const Options = (props) => {
      return (
            <div>
              <button onClick={props.handleDeleteOptions}>Remove All</button>
              {props.options.length === 0 && <p>Please add an option to get started</p>}
              {
                props.options.map((option) => ( 
                 <Option 
                 key={option} 
                 optionText={option} 
                 handleDeleteOption={props.handleDeleteOption}
                 />
                ))
              }
            </div>
          );
        };
 

// class Options extends React.Component {
//       render() {
//         return (
//           <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//               this.props.options.map((option) => <Option key={option} optionText={option} />)
//             }
//           </div>
//         );
//       }
//     }

    
const Option = (props) => {
      return (
            <div>
              {props.optionText}
              <button 
              onClick={(e) => {
                props.handleDeleteOption(props.optionText)
              }}
              >
              remove
              </button>
            </div>
          );
};
// class Option extends React.Component {
//       render() {
//         return (
//           <div>
//             {this.props.optionText}
//           </div>
//         );
//       }
//     }
    

class AddOption extends React.Component {
      constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined
        };
      }
      handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(() => ({
           error
        }));
        if (!error) {
          e.target.elements.option.value = ''
        }
      }
      render() {
        return (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
              <input type="text" name="option" />
              <button>Add Option</button>
            </form>
          </div>
        );
      }
    }
    

//     const User = (props) => {
//           return (
//                 <div>
//                   <p>Name: {props.name}</p>
//                   <p>Age: </p>
//                 </div>
//           );
//     };
    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
    

