import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Servicios React</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/serviciosuppliers">Servicio Suppliers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/serviciocustomers">Servicio Customers</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/servicioempleados">Servicio Empleados por Departamento</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/servicioempleadosv2">Servicio Empleados por Departamento Select</NavLink>
                </li>                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/servicioempleadosoficios">Servicio Empleados por Oficio</NavLink>
                </li>              
                <li className="nav-item">
                  <NavLink className="nav-link" to="/departamento">Servicio Empleados por Departamento divididos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cursos">Servicio Alumnos por Curso</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tablamultiplicar/7">Tabla Multiplicar 7</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tablamultiplicar/21">Tabla Multiplicar 21</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/collatz/7">Collatz</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hospitales">Hospitales Múltiples</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}
