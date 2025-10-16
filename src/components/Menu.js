import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/serviciocustomers'>Servicio Customers</a>
        </li>
        <li>
            <a href='/serviciosuppliers'>Servicio Suppliers</a>
        </li>
      </div>
    )
  }
}
