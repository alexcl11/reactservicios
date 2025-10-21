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
            <div className="container mt-4">
                <h1 className="display-4 text-center mb-3">Collatz</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Número inicial</h5>
                                <p className="card-text fs-4 text-primary">{this.props.numero}</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Secuencia Collatz</h5>
                                <p className="text-muted small">Pasos hasta llegar a 1</p>
                                <ul className="list-group list-group-flush">
                                    {this.state.numeros.map((resultado, index) => (
                                        <li className="list-group-item" key={index}>{resultado}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
