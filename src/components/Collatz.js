import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numeros: []
    }

    generarCollatz = () => {
        let numero = this.props.numero
        let aux = [];
        while(numero!=1){
            if(numero%2==0){
                numero/=2
            }else {
                numero=(numero*3)+1
               
            }
            aux.push(numero)            
        }
        this.setState({
            numeros: aux
        })
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

  render() {
    return (
      <div>
        <h1>Collatz</h1>
        <hr></hr>
        <h3>Número {this.props.numero}</h3>
        <ul>
            {   
                this.state.numeros.map((resultado, index) => {
                    return (<li key={index}>{resultado}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
