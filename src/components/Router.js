import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import ServicioApiCustomers from './ServicioApiCustomers'
import ServiceApiSuppliers from './ServiceApiSuppliers'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/serviciocustomers" element={<ServicioApiCustomers/>}/>
                <Route path="/serviciosuppliers" element={<ServiceApiSuppliers/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
