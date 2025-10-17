import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ServicioApiCustomers extends Component {
    state = {
        customers : []
    }
    url = Global.urlNorthwind

    //CREAMOS UN METODO PARA CARGAR LOS CLIENTES
    loadCustomers = () => {
        let request = "Customers";
        axios.get(this.url + request).then((response)  => {
            this.setState({
                customers : response.data.value
            })
            console.log(response.data)
        })
    }

    componentDidMount = () => {
        console.log("Creando component")
        this.loadCustomers()
    }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Servicio Api Customers</h1>
        
        <div className="row">
          {
            this.state.customers.map((cliente, index) => {
              return (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-success">{cliente.ContactName}</h5>
                      <p className="card-text mb-1"><strong>Company:</strong> {cliente.CompanyName}</p>
                      <p className="card-text mb-1"><strong>Title:</strong> {cliente.ContactTitle}</p>
                      <p className="card-text mb-0"><strong>Country:</strong> {cliente.Country}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
