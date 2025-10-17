import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class ServiceApiSuppliers extends Component {
    url = Global.urlNorthwind;
    
    state = {
        suppliers : [],
        supplierBuscado: null
    }
    
    cajaID = React.createRef();

    loadSuppliers = () => { 
        console.log("Antes del servicio")
        let request = "Suppliers";
        axios.get(this.url + request).then(response => {
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
        //recomendación: hacer una nueva petición por si cambian los datos del servicio. De esta forma:
        // axios.get(this.url).then(response => {
        //     for (const supplier of response.data.value) {
        //         if(supplier.SupplierID == id){
        //         this.setState({
        //             supplierBuscado : {id: supplier.SupplierID, nombre: supplier.ContactName}
        //         })
        //     }    
        //     }
        // })
        this.state.suppliers.map((supplier, index) => {
            if(supplier.SupplierID == id){
                this.setState({
                    supplierBuscado : {
                                        id: supplier.SupplierID, 
                                        nombre: supplier.ContactName, 
                                        direccion: supplier.Address, 
                                        ciudad: supplier.City, 
                                        titulo: supplier.ContactTitle 
                                    }
                })                
            }     
        })        
    }

  render() {
    return (
      <div className="container-fluid">
        <h1>Servicio API Suppliers</h1>
        <form onSubmit={this.buscarSupplier}>
            <label >Introduce ID: </label>
            <input className="form-control-plaintext border"  type='text' ref={this.cajaID}/>
            <button>Buscar</button>
        </form>
        <ul className="list-group">
            {
                this.state.supplierBuscado != null &&
                <li className="list-group">{this.state.supplierBuscado.id} - {this.state.supplierBuscado.nombre} - {this.state.supplierBuscado.direccion} - {this.state.supplierBuscado.ciudad} - {this.state.supplierBuscado.titulo}</li>
            }
        </ul>
        <hr></hr>
        <ul className="list-group">
            {
                this.state.suppliers.map((supplier, index) => {
                    return (<li className='list-group-item' key={index}>{supplier.SupplierID} - {supplier.ContactName}</li>)
                })
            }
        </ul>        
      </div>
    )
  }
}
