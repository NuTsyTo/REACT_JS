import { Component } from 'react'
import Cars from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {vehicule: 'AUDI', model: 'RS6', color: 'Black', year: 2018},
            {vehicule: 'MERCEDES',model: 'A45 AMG', color: 'Green', year: 2010},
            {vehicule: 'BMW', model: 'M3', color: 'Yellow', year: 2022},
        ],
        titre: 'Mon Catalogue Voitures 2'
    }

    addTenYears = () => {
        
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedState
        })
    }

    getAge = year =>{
        const now = new Date().getFullYear();
        const age = now - year;

        // ans, an,
        let frenchYearStr;
        if (age === 1){
            frenchYearStr = "an";
        } else if(age > 1){
            frenchYearStr = "ans";
        } 
        return `${age} ${frenchYearStr}`
    }
    render(){
        const year = new Date().getFullYear();
        // const [audi, mercedes, bmw] = this.state.voitures;
        return (
            <div>
                <h1>{this.state.titre}</h1>
                
                <button onClick={this.addTenYears} className='button'> + 10 ans </button>

                {/* <Cars
                    vehicule={audi.vehicule}
                    color={audi.color}
                    model={audi.model}
                    age={audi.age}
                    year={audi.year}
                    />
                <Cars
                    vehicule={bmw.vehicule}
                    color={bmw.color}
                    model={bmw.model}
                    age={bmw.age}
                    year={bmw.year}
                    /> */}
                {
                    this.state.voitures.map(({vehicule, model, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Cars 
                                color={color}
                                 year={year}
                                  model={model}
                                   age={this.getAge(year)}
                                    vehicule={vehicule}
                                     />
                            </div>
                        )
                    })
                }
               
            </div>
        )
    }
}

export default Mycars