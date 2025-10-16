import React, { Component } from 'react'
import axios from 'axios';
export default class ServiceApiSuppliers extends Component {
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
    state = {
        suppliers : [],
        supplierBuscado: null
    }
    cajaID = React.createRef();
    loadSuppliers = () => { 
        console.log("Antes del servicio")
        axios.get(this.url).then(response => {
            console.log("Leyendo servicio")
            console.log(response.data.value)
            this.setState({
                suppliers : response.data.value
            })
        })
        console.log("Después del servicio")
    }

    componentDidMount = () => {

        this.loadSuppliers();
        console.log(this.state.supplierBuscado)
    }

    buscarSupplier = (event) => {
        event.preventDefault();
        var id = parseInt(this.cajaID.current.value);
        
        this.state.suppliers.map((supplier, index) => {
            if(supplier.SupplierID == id){
                this.setState({
                    supplierBuscado : {id: supplier.SupplierID, nombre: supplier.ContactName}
                })
            }
            
        })
        
    }

  render() {
    return (
      <div class="container-fluid">
        <h1>Servicio API Suppliers</h1>
        <ul class="list-group">
            {
                this.state.suppliers.map((supplier, index) => {
                    return (<li class='list-group-item' key={index}>{supplier.SupplierID} - {supplier.ContactName}</li>)
                })
            }
        </ul>
        <form onSubmit={this.buscarSupplier}>
            <label >Introduce ID: </label>
            <input class="form-control-plaintext border"  type='text' ref={this.cajaID}/>
            <button>Buscar</button>
        </form>
        <ul class="list-group">
            {
                this.state.supplierBuscado != null &&
                <li class="list-group">{this.state.supplierBuscado.id} - {this.state.supplierBuscado.nombre}</li>
            }
        </ul>
      </div>
    )
  }
}
