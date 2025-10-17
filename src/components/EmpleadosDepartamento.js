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

        <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Empleados por Departamento</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mb-4" onSubmit={this.loadEmpleadosDepartamento}>
              <div className="form-group">
                <label className="form-label">Seleccione Oficio:</label> 
                <br></br>               
                <input className="form-input"  type='number' ref={this.cajaID}/>
                <button className="btn btn-primary mx-2">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead className="table-dark">
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
      </div>

      
    )
  }
}
