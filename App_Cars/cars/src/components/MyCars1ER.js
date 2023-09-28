import React, { Component } from 'react';
import Car from './Cars1ER';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

class MyCars extends Component {

    state = {
        cars: ["BMW", "AUDI", "FIAT"]
    }

    noCopy =() =>{
        alert('Merci de ne pas copier le texte');
    }

    addStyle=(e)=>{
        console.log(e);

        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled')
        }
    }

    render(){
        const{cars} =this.state;

        return(
            <div>
                <Wrapper>
                    <MyHeader myStyle={this.props.color}>
                        {this.props.titleP}
                    </MyHeader>
                </Wrapper>

                <h2 onMouseOver={this.addStyle} > Salut c'est Max</h2>

                <h3>{this.props.titreH3}</h3>

                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

                <Car color="Rouge"> {cars[0]} </Car>
                <Car> {cars[1]} </Car>
                <Car color="Bleu"> {cars[2]} </Car>
            </div>
        )  
    }
}

export default MyCars;