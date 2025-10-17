import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class EmpleadosDepartamento extends Component {
    url = Global.urlEmpleados;

    cajaID = React.createRef();

    state = {
        empleados: []
    }

    loadEmpleadosDepartamento = (event) => {
        event.preventDefault();
        let idDepartamento = parseInt(this.cajaID.current.value)
        let request = `api/Empleados/EmpleadosDepartamento/${idDepartamento}`;
        axios.get(this.url+request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    
  render() {
    return (
      <div>
        <h1>Empleados por Departamento</h1>
        <hr></hr>
        <form onSubmit={this.loadEmpleadosDepartamento}>
            <label>Introduce ID: </label>
            <input  type='number' ref={this.cajaID}/>
            <button>Buscar Empleados</button>
        </form>
        <hr></hr>
        <table className = "text-center" border = "10">
            <thead>
                <tr>
                    <th>ID Empleado</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>ID Departamento</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<tr key={index}>
                                    <td>{empleado.idEmpleado}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario} €</td>
                                    <td>{empleado.departamento}</td>
                                </tr>)
                    })
                }
            </tbody>            
        </table>
      </div>
    )
  }
}
