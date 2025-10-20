import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import ServicioApiCustomers from './ServicioApiCustomers'
import ServiceApiSuppliers from './ServiceApiSuppliers'
import EmpleadosDepartamento from './EmpleadosDepartamento'
import EmpleadosDepartamentov2 from './EmpleadosDepartamentov2'
import EmpleadosOficios from './EmpleadosOficios'
import Departamento from './maestrodetalle/Departamento'
import Cursos from './ejemplocomunicacion/Cursos'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'
import Collatz from './Collatz'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARÁMETROS RECIBIDOS EN UNA RUTA
      //Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
      //VOY ANEVIAR UN PARAMETRO LLAMADO minumero
      let {minumero} = useParams();
      //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SUS PROPS
      return (<TablaMultiplicar numero={minumero}/>)
    }

    function CollatzElement() {
      let {numero} = useParams();
      return (<Collatz numero={numero}/>) 
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*PARA INCLUIR LAS RUTAS QUE NO EXISTEN POR UNA PÁGINA 404 
                PERSONALIZADA DEBEMOS UTILIZAR EL ASTERISCO Y SIEMPRE
                 DEBE SER LA ULTIMA RUTA */}
                <Route path="/serviciocustomers" element={<ServicioApiCustomers/>}/>
                <Route path="/serviciosuppliers" element={<ServiceApiSuppliers/>}/>
                <Route path="/servicioempleados" element={<EmpleadosDepartamento/>}/>
                <Route path="/servicioempleadosv2" element={<EmpleadosDepartamentov2/>}/>
                <Route path="/servicioempleadosoficios" element={<EmpleadosOficios/>}/>
                <Route path="/departamento" element={<Departamento/>}/>
                <Route path="/cursos" element={<Cursos/>}/>
                <Route path="/tablamultiplicar/:minumero" element={<TablaMultiplicarElement/>}/>
                <Route path="/collatz/:numero" element={<CollatzElement/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
