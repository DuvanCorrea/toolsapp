import React, { Component } from "react";

export default class formulario extends Component {
  state = {
    proveedores: {
      alonso: {
        areaCercana: [
          "la estrella",
          "caldas",
          "sabaneta",
          "itagui",
          "envigado",
        ],
      },
      alonso: {
        areaCercana: [
          "la estrella",
          "caldas",
          "sabaneta",
          "itagui",
          "envigado",
        ],
      },
    },
    gananciaPrenda: 0.49,
    EnvioIncluido: 5000,

    valorPrenda: 0,
    valorDomicilio: 0,
  };

  render() {
    console.log("valor: ", this.props.cotizacion);
    if (this.props.cotizacion !== null) {
      return (
        <div>
          <form className="form mt-4">
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <h6 className="subtitles">
                    Valor en que compramos la prenda
                  </h6>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="valor de compra"
                  ></input>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 mt-2">
                <div className="form-group">
                  <h6 className="subtitles">Valor del domicilio</h6>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="domicilio"
                  ></input>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-2 col-4 mt-2">
                <div className="form-group">
                  <h6 className="subtitles">Ganacias</h6>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value="49%"
                  ></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-2">
                <button className="btn btn-outline-success btn-block">
                  GENERAR
                </button>
              </div>
            </div>
          </form>

          <div className="card mt-3">
            <div className="card-header">
              <h5>Resumen</h5>
              <div className="row">
                <div className="col-5">
                  <p></p>
                </div>
                <div className="col-6"></div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <form className="form mt-4">
          <div className="row ">
            <div className="col-md-12">
              <div className="form-group">
                <h6 className="subtitles">Valor en que compramos la prenda</h6>
                <input
                  type="number"
                  className="form-control"
                  placeholder="valor de compra"
                ></input>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12 mt-2">
              <div className="form-group">
                <h6 className="subtitles">Valor del domicilio</h6>
                <input
                  type="number"
                  className="form-control"
                  placeholder="domicilio"
                ></input>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-2 col-4 mt-2">
              <div className="form-group">
                <h6 className="subtitles">Ganacias</h6>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  value="49%"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2">
              <button className="btn btn-outline-success btn-block">
                GENERAR
              </button>
            </div>
          </div>
        </form>
      );
    }
  }
}
