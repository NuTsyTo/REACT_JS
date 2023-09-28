import { Component } from 'react';
import Mycars from './components/Mycars';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Welcome />
        <Mycars />
      </div>
    )
  }
}

export default App;