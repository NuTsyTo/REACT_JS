import { Component } from 'react';
import SimpleComponent from './components/SimpleComponent'

class App extends Component {

  render() {
    return (
      <div>
        <SimpleComponent />
      </div>
    )
  }
  // render() {
  //   return( 
  //       <div>
  //           <p> 
  //               "Hello, World !!."
  //           </p>
  //       </div>
  //       )
  //   }
}

export default App;