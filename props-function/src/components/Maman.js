// import React, { Component } from "react";
// import Toto from './Toto'

// class Maman extends Component {

//     state ={
//         messageMaman: null,
//         messageToto: null,
//     }

//     demandeMaman = () => {
//         this.setState({
//             messageMaman : 'Tu peux ranger ta chambre ?'
//         })
//     }

//     reponseToto =()=>{
//         this.setState({
//             messageToto : "D'accord maman"
//         })
//         console.log('function activated');
//     }
    
//     render() {
//         return(
//         <div>
//             <h1>Maman</h1>
//             <button onClick={this.demandeMaman}>Demande de la mère</button>
//             <p>{this.state.messageMaman}</p>
//             <hr />

//             <Toto name="Toto" reponseToto={this.reponseToto} leState ={this.state} />

//         </div>
//         )
//     }
// }

// export default Maman;

import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    dmdMaman = dmd => this.setState({ messageMaman: dmd, disabled: false });
    reponseToto = msg => this.setState({ messageToto: msg });

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button 
                    onClick={() => this.dmdMaman("Tu peux ranger ta chambre ? s'il te plait ")}
                >Demande de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                />
            </div>
        )
    }
}

export default Maman;