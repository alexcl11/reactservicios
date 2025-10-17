import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import ServicioApiCustomers from './ServicioApiCustomers'
import ServiceApiSuppliers from './ServiceApiSuppliers'
import EmpleadosDepartamento from './EmpleadosDepartamento'
import EmpleadosDepartamentov2 from './EmpleadosDepartamentov2'
import EmpleadosOficios from './EmpleadosOficios'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/serviciocustomers" element={<ServicioApiCustomers/>}/>
                <Route path="/serviciosuppliers" element={<ServiceApiSuppliers/>}/>
                <Route path="/servicioempleados" element={<EmpleadosDepartamento/>}/>
                <Route path="/servicioempleadosv2" element={<EmpleadosDepartamentov2/>}/>
                <Route path="/servicioempleadosoficios" element={<EmpleadosOficios/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
