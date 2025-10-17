import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Servicios React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/serviciosuppliers">Servicio Suppliers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/serviciocustomers">Servicio Customers</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/servicioempleados">Servicio Empleados</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/servicioempleadosv2">Servicio Empleados v2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}
