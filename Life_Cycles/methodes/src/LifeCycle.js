import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class LifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Toto',
            step: 1
        }
    }

    render() {
        return (
            <div>
                <p> Chargement: {this.state.step} </p>
                <p> Nom: {this.state.name}</p>
                <ChildComponent />
            </div>
        )
    }
}

export default LifeCycle