import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';
export default class Empleados extends Component {
    urlEmpleados = Global.urlEmpleados;

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let request = `api/empleados/empleadosdepartamento/${this.props.iddepartamento}`
        axios.get(this.urlEmpleados+request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados()
    }

    componentDidUpdate = (oldProps) => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        // console.log("Current: "+this.props.iddepartamento)
        // console.log("Old: "+oldProps.iddepartamento)
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO
        if(oldProps.iddepartamento!=this.props.iddepartamento){
            this.loadEmpleados()
        }
    }

  render() {
    return (
      <tbody>
        {
            this.state.empleados.map((empleado, index) => {
                return(<tr key={index}><td>{empleado.apellido}</td><td>{empleado.oficio}</td><td>{empleado.salario} €</td></tr>)
            })
        }
      </tbody>
    )
  }
}
