import React, { Component } from "react";
import Formulario from "./componentes/formulario.js";

export default class cotizar extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Formulario cotizacion={this.props.cotizacion} />
      </div>
    );
  }
}
