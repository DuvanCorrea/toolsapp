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
    valorTopeParaDescuento: 70000,

    valorPrenda: 0,
    valorDomicilio: 0,
    descuento: 0,
    domicilioEstacion: 6000,
  };

  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onclick = async (e) => {
    e.preventDefault();

    /*if (
      parseInt(this.state.valorDomicilio) + parseInt(this.state.valorPrenda) >=
      parseInt(this.state.valorTopeParaDescuento)
    ) {
      this.setState({
        descuento: 1000,
      });
    }*/

    await this.setState({
      valorPrenda: parseInt(this.state.valorPrenda, 10),
      valorDomicilio: parseInt(this.state.valorDomicilio, 10),
      EnvioIncluido: parseInt(this.state.EnvioIncluido, 10),
      gananciaPrenda: parseFloat(this.state.gananciaPrenda, 10),
    });

    this.props.cotizarEnvioPrenda1(this.state);
    console.log(this.state);
  };

  render() {
    if (this.props.cotizacion !== null) {
      return (
        <div>
          <div className="form mt-4">
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <h6 className="subtitles">
                    Valor en que compramos la prenda
                  </h6>
                  <input
                    onChange={(e) => this.onchange(e)}
                    name="valorPrenda"
                    type="number"
                    className="form-control"
                    placeholder="valor de compra"
                  ></input>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row ">
              <div className="col-md-12 mt-2">
                <div className="form-group">
                  <h6 className="subtitles">Valor del domicilio</h6>
                  <input
                    onChange={(e) => this.onchange(e)}
                    name="valorDomicilio"
                    type="number"
                    className="form-control"
                    placeholder="domicilio"
                  ></input>
                </div>
              </div>
            </div>
            <hr></hr>
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
            <hr></hr>
            <div className="row">
              <div className="col-12 mt-2">
                <button
                  onClick={(e) => this.onclick(e)}
                  className="btn btn-outline-success btn-block"
                >
                  GENERAR
                </button>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h5>Resumen</h5>
              <div className="row"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <h6 className="text-muted">Prenda</h6>
                </div>
                <div className="col-6">
                  <p>${this.props.cotizacion.valorPrenda}</p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-5">
                  <h6 className="text-muted">Domicilio</h6>
                </div>
                <div className="col-6">
                  <p>${this.props.cotizacion.valorDomicilio}</p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-5">
                  <h6 className="text-muted">Ganancia%</h6>
                </div>
                <div className="col-6">
                  <p>{this.props.cotizacion.gananciaPrenda * 100}%</p>
                </div>
              </div>
              <hr></hr>

              <div className="row">
                <div className="col-5">
                  <h6 className="text-muted">Descuento</h6>
                </div>
                <div className="col-6">
                  <p>$0</p>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-5">
                  <h6 className="">Valor de venta normal</h6>
                </div>
                <div className="col-6">
                  <p>
                    $
                    {this.props.cotizacion.valorPrenda +
                      this.props.cotizacion.valorPrenda *
                        this.props.cotizacion.gananciaPrenda}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-5">
                  <h6 className="">Valor de venta con domicilio</h6>
                </div>
                <div className="col-6">
                  <p>
                    $
                    {this.props.cotizacion.valorPrenda +
                      this.props.cotizacion.valorPrenda *
                        this.props.cotizacion.gananciaPrenda +
                      this.props.cotizacion.valorDomicilio}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-5">
                  <h6 className="">Valor de venta en estacion</h6>
                  <label className="text-muted">(Solo si es necesario)</label>
                </div>
                <div className="col-6">
                  <p>
                    $
                    {this.props.cotizacion.valorPrenda +
                      this.props.cotizacion.valorPrenda *
                        this.props.cotizacion.gananciaPrenda +
                      6000}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-5">
                  <h6 className="">Ganancia</h6>
                </div>
                <div className="col-6">
                  <p>
                    $
                    {this.props.cotizacion.valorPrenda *
                      this.props.cotizacion.gananciaPrenda}
                  </p>
                </div>
              </div>
              <hr></hr>
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
