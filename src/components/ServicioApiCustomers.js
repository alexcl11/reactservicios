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
      <div>
        <h1>Servicio Api Customers</h1>
        <button >
            Load Customers
        </button>
        {
            this.state.customers.map((cliente, index) => {
                return <h3 style={{color:"green"}} key={index}>{cliente.ContactName}</h3>
            })
        }
      </div>
    )
  }
}
