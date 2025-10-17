import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class EmpleadosDepartamentov2 extends Component {
  urlEmpleados = Global.urlEmpleados;
  urlDepartamentos = Global.urlDepartamentos;

    selectDepartamento = React.createRef();

    state = {
        empleados: [], 
        departamentos: []
    }

    loadEmpleadosDepartamento = (event) => {
        event.preventDefault();
        let idDepartamento = parseInt(this.selectDepartamento.current.value)
        let request = `api/Empleados/EmpleadosDepartamento/${idDepartamento}`;
        axios.get(this.urlEmpleados+request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentosSelect = () => {
        let request = "webresources/departamentos";
        axios.get(this.urlDepartamentos+request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentosSelect()
    }

  render() {
    return (
      <div>
        <h1>Empleados por Departamento</h1>
        <hr></hr>
        <form>
            <label>Introduce ID: </label>
            <br></br>
            <select onChange={this.loadEmpleadosDepartamento} ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return (<option key={index} value={departamento.numero}>{departamento.nombre}</option>)
                    })
                }
            </select>
        </form>
        <hr></hr>
        <table  className = "text-center border" >
            <thead>
                <tr>
                    <th className='border p-1'>ID Empleado</th>
                    <th className='border p-1'>Apellido</th>
                    <th className='border p-1'>Oficio</th>
                    <th className='border p-1'>Salario</th>
                    <th className='border p-1'>ID Departamento</th>
                </tr>
            </thead>
            <tbody >
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<tr key={index}>
                                    <td className='p-1 border'>{empleado.idEmpleado}</td>
                                    <td className='p-1 border'>{empleado.apellido}</td>
                                    <td className='p-1 border'>{empleado.oficio}</td>
                                    <td className='p-1 border'>{empleado.salario} €</td>
                                    <td className='p-1 border'>{empleado.departamento}</td>
                                </tr>)
                    })
                }
            </tbody>            
        </table>
      </div>
    )
  }
}
