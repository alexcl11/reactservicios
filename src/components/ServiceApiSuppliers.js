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
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Servicio API Suppliers</h1>
        
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.buscarSupplier} className="mb-3">
                  <div className="mb-3">
                    <label className="form-label">Introduce ID:</label>
                    <input 
                      type='text' 
                      className="form-control" 
                      ref={this.cajaID}
                      placeholder="Ingrese ID del proveedor"
                    />
                  </div>
                  <button className="btn btn-primary w-100">Buscar Supplier</button>
                </form>
                
                {this.state.supplierBuscado && (
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title text-primary mb-3">Supplier Encontrado</h5>
                      <p className="card-text mb-2"><strong>ID:</strong> {this.state.supplierBuscado.id}</p>
                      <p className="card-text mb-2"><strong>Nombre:</strong> {this.state.supplierBuscado.nombre}</p>
                      <p className="card-text mb-2"><strong>Dirección:</strong> {this.state.supplierBuscado.direccion}</p>
                      <p className="card-text mb-2"><strong>Ciudad:</strong> {this.state.supplierBuscado.ciudad}</p>
                      <p className="card-text mb-0"><strong>Título:</strong> {this.state.supplierBuscado.titulo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="h3 text-center mb-3">Lista de Suppliers</h2>
        <div className="row">
          <div className="col">
            <div className="list-group">
              {
                this.state.suppliers.map((supplier, index) => {
                  return (
                    <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index}>
                      <div>
                        <strong className="me-2">#{supplier.SupplierID}</strong>
                        {supplier.ContactName}
                      </div>
                      <span className="badge bg-primary rounded-pill">{supplier.City}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
