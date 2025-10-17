import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados;
    selectOficios = React.createRef();
    state = {
        oficios: [],
        empleados: []
    }

    loadOficios = () => {
        let request = "api/Empleados"
        let setOficios = new Set([])
        axios.get(this.urlEmpleados + request).then(response => {
            let empleados = response.data
            for (const empleado of empleados) {
                setOficios.add(empleado.oficio)
            }      
            this.setState({
                oficios: Array.from(setOficios)
            })      
        })
        
    }

    buscarEmpleadosPorOficio = (event) => {
        event.preventDefault();
        let oficio = this.selectOficios.current.value;
        let request = `api/Empleados/EmpleadosOficio/${oficio}`
        axios.get(this.urlEmpleados+request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Empleados por Oficio</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mb-4">
              <div className="form-group">
                <label className="form-label">Seleccione Oficio:</label>
                <select 
                  className="form-select" 
                  onChange={this.buscarEmpleadosPorOficio} 
                  ref={this.selectOficios}>
                  {
                    this.state.oficios.map((oficio, index) => {
                        return (<option key={index}>{oficio}</option>)
                    })
                  }
                </select>
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
