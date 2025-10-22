import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
export default class Trabajadores extends Component {
    url = Global.urlTrabajadores;
    
    state = {
        trabajadores: []   
    }

    loadTrabajadores = () => {
        let request = "api/trabajadores/trabajadoreshospitales?";
        for (let i = 0; i < this.props.idhospitales.length; i++) {
            request += `idhospital=${this.props.idhospitales[i]}&`            
        }

        request = request.substring(0, request.length, -1)

        axios.get(this.url+request).then(response => {
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospitales != this.props.idhospitales)
            this.loadTrabajadores();
    }

    componentDidMount = () => {
        this.loadTrabajadores()
    }

  render() {
    return (
      <div className='my-3'>
        {
            this.props.idhospitales &&
            (<div>
                <h1>Trabajadores de los hospitales: 
                    {this.props.idhospitales.map((id, index) => {
                        return (<strong key={index}>| {id} |</strong>)
                    })}                
                </h1>
            
                <table className="table table-hover table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>ID Trabajador</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>ID Hospital</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.trabajadores.map((trabajador, index) => {
                        return (<tr key={index}>
                            <td>{trabajador.idTrabajador}</td>
                            <td>{trabajador.apellido}</td>
                            <td>{trabajador.oficio}</td>
                            <td>{trabajador.salario} €</td>
                            <td>{trabajador.idHospital}</td>
                        </tr>)
                        })
                    }
                    </tbody>            
                </table>
            </div>
        
            )
        }
        
      </div>
    )
  }
}
