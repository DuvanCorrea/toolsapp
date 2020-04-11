import React, { Component } from 'react';
import "./ProductList.css";

export default class Summary extends Component {



    render() {
        return (
            <div className="summaryProducts d-none">
                <div className="card align-middle">
                    <div className="d-flex justify-content-around">
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Productos: {this.props.summaryProducts.total}</p>
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Buzos: {this.props.summaryProducts.TBuzo}</p>
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Sudaderas: {this.props.summaryProducts.TSudadera}</p>
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Pantalonetas: {this.props.summaryProducts.TPantaloneta}</p>
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Camisas: {this.props.summaryProducts.TCamisa}</p>
                        <p className="text-muted m-0 tipoLetra breadcrumb-item">Otros: {this.props.summaryProducts.TOtro}</p>
                    </div>
                </div>

            </div>
        )
    }
}
        /*TBuzo: 0,
TSudadera: 0,
TPantaloneta: 0,
TCamisa: 0,
TOtro: 0,
total: 0*/