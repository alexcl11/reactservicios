import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import loading from './../assets/loading.gif'
export default class HospitalesMultiples extends Component {
    selectHospital = React.createRef();
    incrementarSalarioBoton = React.createRef();
    url = Global.urlTrabajadores;
    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
        status: false
    }

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url + request).then(response => {
            this.setState({
                hospitales: response.data,
                status: true
            })
        })
    }

    incrementarSalario = (event) => {
        event.preventDefault()
        let incremento = parseInt(this.incrementarSalarioBoton.current.value)
        let request = `api/trabajadores/updatesalariotrabajadoreshospitales?incremento=${incremento}&`;
        for (let i = 0; i < this.state.hospitalesSeleccionados.length; i++) {
            request += "idhospital="+this.state.hospitalesSeleccionados[i]+"&";            
        }
        request = request.substring(0, request.length-1)
        axios.put(this.url+request).then(response => {
            
            this.getHospitalesSeleccionados();

            Swal.fire({
            title: "¡Salario incrementado!",
            icon: "success"
            })
            
        })

    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        if(event){
            event.preventDefault();
        }
        
        let aux = [];
        let options = this.selectHospital.current.options;
        for (const option of options) {
            if(option.selected){
                aux.push(option.value)
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

  render() {
    return (
        <>
            { this.state.status ? 
                (<div className='container'>
                    <h1>Hospitales Múltiples</h1>
                    <form>
                        <label>Selecciona hospitales: </label>
                        <select className='form-control' multiple ref={this.selectHospital}>
                            {
                                this.state.hospitales.map((hospital, index) => {
                                    return(<option key={index} value={hospital.idHospital}>{hospital.nombre}</option>)
                                })
                            }
                        </select>
                        <button className='btn btn-primary my-2' onClick={this.getHospitalesSeleccionados}>Mostrar</button>
                    </form>
                    {
                        this.state.hospitalesSeleccionados.length > 0 &&
                        (<div>
                            <form className='my-2 py-2'>
                                <label>Incrementar salario: </label>
                                <input type='number' defaultValue={0} ref={this.incrementarSalarioBoton} className='form-control my-2 w-25'/>
                                <button className='btn btn-primary' onClick={this.incrementarSalario}>Incrementar</button>
                            </form>
                            <Trabajadores idhospitales = {this.state.hospitalesSeleccionados}/>
                        </div>)
                    }
                </div>
            ) : (
                <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "10em"}}>
                    <img src={loading} style={{width: "50px"}}/>
                </div>
            )
            }
        </>
    )
  }
}
