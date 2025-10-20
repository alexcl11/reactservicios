import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
export default class Alumnos extends Component {
  urlAlumnos = Global.urlAlumnos;

  state = {
    alumnos: [],
  };

  loadAlumnos = () => {
    let request = `api/Alumnos/FiltrarCurso/${this.props.idcurso}`;
    axios.get(this.urlAlumnos + request).then((response) => {
      this.setState({
        alumnos: response.data,
      });
    });
  };

  mandarAlumnoDetalles = (alumno) => {
    this.props.mostrarDetalles(alumno);
  };

  componentDidMount = () => {
    this.loadAlumnos();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idcurso != this.props.idcurso) {
      this.loadAlumnos();
    }
  };

  render() {
    return (
      <tbody>
        {this.state.alumnos.map((alumno, index) => {
          return (
            <tr key={index}>
              <td>{alumno.idAlumno}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellidos}</td>
              <td>
                <img src={alumno.imagen} style={{ width: "50px" }} />
              </td>
              <td>
                <button
                  onClick={() => this.mandarAlumnoDetalles(alumno)}
                  className="btn btn-primary"
                >
                  Detalles
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
