import React, {Component} from 'react';
import './App.css';
import MyCars from './components/MyCars1ER.js';

class App extends Component {  

state = {
  titre: 'Mon catalogue voitures',
  titleColor: 'pink',
  titreH3: 'Changement du titre'
}

changeTitle = (e) => {
  this.setState({
    titreH3: 'Mon nouveau titre'
  })
  console.log(e);
}

changeViaParam = (titre) =>{
  this.setState({
    titre : param
  })
}

changeViaBind = (titre) =>{
  this.setState({
    titre : bind
  })
}

  render() {
    return (
      <div className="App">
        <MyCars titleP={this.state.titre} color={this.state.titleColor} titreH3={this.state.titreH3}/>

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam('Titre via un param')}> Via Param </button>
        <button onClick={this.changeViaBind.bind(this, 'titre via bind')}> Via Bind </button>      
      </div>
    );
  }
}

export default App;
