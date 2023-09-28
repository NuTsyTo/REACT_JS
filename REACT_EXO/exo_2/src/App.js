// import { Component } from 'react';
// import Greeting from './components/Greeting';
// import './App.css';

// class App extends Component {

//         render(){
//         return(
//             <div>
//                 <Greeting />
//             </div>
//         )
//         }
//     }

// export default App

import React, { Component } from 'react';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      Name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.Name}
          onChange={this.handleInputChange}
          placeholder="Entrez votre nom"
        />
        <Greeting name={this.state.Name} />
      </div>
    );
  }
}

export default App;
