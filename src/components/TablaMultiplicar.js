import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultilplicar = () => {
        let aux = []
        let numero = this.props.numero;
        for (let i = 1; i <= 10; i++) {
            var resultado = numero*i;
            aux.push(resultado)
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablaMultilplicar();
    }

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar Rutas</h1>
        <hr></hr>
        <h3>Numero {this.props.numero}</h3>

        <ul>
            {
                this.state.tabla.map((resultado, index) => {
                    return (<li key={index}>{resultado/(index+1)} · {index+1} = {resultado}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
