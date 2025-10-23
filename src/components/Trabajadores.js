import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import Swal from 'sweetalert2';
import loading from './../assets/loading.gif'
export default class Trabajadores extends Component {
    url = Global.urlTrabajadores;
    
    state = {
        trabajadores: [], 
        status: false
    }

    loadTrabajadores = () => {
        let request = "api/trabajadores/trabajadoreshospitales?";
        for (let i = 0; i < this.props.idhospitales.length; i++) {
            request += `idhospital=${this.props.idhospitales[i]}&`            
        }

        request = request.substring(0, request.length, -1)

        axios.get(this.url+request).then(response => {
            this.setState({
                trabajadores: response.data,
                status: true
            })
        })
    }

    deleteHospital = (id) => {
        let request = `api/hospitales/${id}`
        console.log(request)
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospitales != this.props.idhospitales)
            this.loadTrabajadores();
    }

    componentDidMount = () => {
        this.loadTrabajadores()
    }

  render() {
    return (
      <>
        { this.state.status ? 
            (<div className='my-3'>
            {
                this.props.idhospitales &&
                (<div>
                    <h1>Trabajadores de los hospitales: 
                        {this.props.idhospitales.map((id, index) => {
                            return (<strong key={index}>| {id} <button className='btn btn-danger' onClick={()=>{
                                Swal.fire({
                                                title: "¿Estás seguro?",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Sí, estoy seguro!",
                                                cancelButtonText: "No, volver"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                this.deleteHospital(id)
                                                Swal.fire({
                                                    title: "¡Eliminado!",
                                                    text: `Se ha eliminado el departamento`,
                                                    icon: "success"
                                                });

                                                }
                                            });
                            }}>Eliminar Hospital</button> |</strong>)
                        })}                
                    </h1>
                
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                        <tr>
                            <th>ID Trabajador</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>ID Hospital</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                            return (<tr key={index}>
                                <td>{trabajador.idTrabajador}</td>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario} €</td>
                                <td>{trabajador.idHospital}</td>
                            </tr>)
                            })
                        }
                        </tbody>            
                    </table>
                </div>
            
                )
            }
            
            </div>) : (<div className='container d-flex align-items-center justify-content-center' style={{minHeight: "10em"}}>
                        <img src={loading} style={{width: "50px"}}/>
                    </div>)
        }
    </>
    )
  }
}
