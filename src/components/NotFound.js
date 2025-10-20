import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center'>
        <img 
        src='https://t4.ftcdn.net/jpg/01/19/98/29/360_F_119982932_Cv6iHvH4GF7qiTdSDrF37Q0hHIpVbOrd.jpg'
        style={{width: "700px"}}/>
        <a href='/' className='btn btn-primary'>Volver al inicio</a>
        </div>
    )
  }
}
