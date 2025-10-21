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

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero){
            this.generarTablaMultilplicar();
        }
    }

  render() {
    return (
            <div className="container mt-4">
                <h1 className="display-4 text-center mb-3">Tabla de Multiplicar</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body text-center">
                                <h5 className="card-title">Número</h5>
                                <p className="card-text fs-4 text-primary">{this.props.numero}</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tabla de multiplicar</h5>
                                <ul className="list-group list-group-flush">
                                    {
                                        this.state.tabla.map((resultado, index) => (
                                            <li className="list-group-item" key={index}>{resultado/(index+1)} &times; {index+1} = {resultado}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
