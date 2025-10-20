import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global'
import axios from 'axios';
export default class Departamento extends Component {
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamentos = React.createRef()

    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = 'webresources/departamentos'
        axios.get(this.urlDepartamentos+request).then(response => {
            const deps = response.data || []
            this.setState({
                departamentos: deps,
                idDepartamento: deps.length > 0 ? parseInt(deps[0].numero, 10) : 0
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        const idDepartamentoSelect = parseInt(this.selectDepartamentos.current.value, 10)
        this.setState({
            idDepartamento : idDepartamentoSelect
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Empleados por Departamento</h1>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Seleccione departamento:</label>
                <select 
                  className="form-select" 
                  onChange={this.buscarEmpleados} 
                  ref={this.selectDepartamentos}
                  value={this.state.idDepartamento}
                >
                  {
                    this.state.departamentos.map((departamento, index) => {
                        return (<option key={index} value={departamento.numero}>{departamento.nombre}</option>)
                    })
                  }
                </select>
              </div>
            </form>
          </div>
        </div>

        {
            this.state.idDepartamento !== 0 &&
            (<div className="table-responsive">
              <table className="table table-hover table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                    </tr>
                </thead>
                <Empleados iddepartamento = {this.state.idDepartamento}/>
              </table>
            </div>)
        }
        
      </div>
    )
  }
}
