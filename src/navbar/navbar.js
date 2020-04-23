import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    if (this.props.boton !== "cotizar") {
      return (
        <nav className="navbar table-dark">
          <div className="navbar-brand">Tools APP</div>
          <button
            className="btn btn-outline-light"
            onClick={this.props.cambiarPag}
          >
            Cotizar venta
          </button>
          <div className="form-group m-0">
            <button
              onClick={this.props.generatePDF}
              type="button"
              className="btn btn-success btn-block form-control"
            >
              Generar PDF
            </button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar table-dark">
          <div className="navbar-brand">Tools APP</div>
          <button
            className="btn btn-outline-light ml-0"
            onClick={this.props.cambiarAgenerarPdf}
          >
            Pedidos PDF
          </button>
          <div className="form-group m-0"></div>
        </nav>
      );
    }
  }
}
