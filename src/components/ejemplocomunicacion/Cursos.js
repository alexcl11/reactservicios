import React, { Component } from "react";
import Alumnos from "./Alumnos";
import axios from "axios";
import Global from "../../Global";
export default class Cursos extends Component {
  selectCursos = React.createRef();

  urlAlumnos = Global.urlAlumnos;

  state = {
    cursos: [],
    idCurso: 0,
    alumnoDetalles: null,
  };

  loadCursos = () => {
    let request = "api/Alumnos/Cursos";
    axios.get(this.urlAlumnos + request).then((response) => {
      this.setState({
        cursos: response.data,
      });
    });
  };

  mostrarDetalles = (alumnoDetalle) => {
    this.setState({
      alumnoDetalles: alumnoDetalle,
    });
  };

  buscarAlumno = (event) => {
    event.preventDefault();
    let idcursoSelect = this.selectCursos.current.value;
    this.setState({
      idCurso: idcursoSelect,
    });
  };

  componentDidMount = () => {
    this.loadCursos();
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">Alumnos por Curso</h1>
        {this.state.alumnoDetalles && (
          <div className="row justify-content-center mb-4">
            <div className="col-md-6">
              <div className="card">
                {this.state.alumnoDetalles.imagen && (
                  <img
                    src={this.state.alumnoDetalles.imagen}
                    className="card-img-top"
                    alt={`${this.state.alumnoDetalles.nombre} ${this.state.alumnoDetalles.apellidos}`}
                    style={{ objectFit: "cover", height: "220px" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">
                    {this.state.alumnoDetalles.nombre}{" "}
                    {this.state.alumnoDetalles.apellidos}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>ID:</strong> {this.state.alumnoDetalles.idAlumno}
                  </p>
                  {/* añade más campos aquí si existen */}
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ alumnoDetalles: null })}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="mb-4">
              <div className="form-group">
                <label className="form-label">Seleccione curso:</label>
                <select
                  className="form-select"
                  onChange={this.buscarAlumno}
                  ref={this.selectCursos}
                >
                  {this.state.cursos.map((curso, index) => {
                    return <option key={index}>{curso}</option>;
                  })}
                </select>
              </div>
            </form>
          </div>
        </div>

        {this.state.idCurso !== 0 && (
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID Alumno</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Imagen</th>
                  <th></th>
                </tr>
              </thead>
              <Alumnos
                idcurso={this.state.idCurso}
                mostrarDetalles={this.mostrarDetalles}
              />
            </table>
          </div>
        )}
      </div>
    );
  }
}
