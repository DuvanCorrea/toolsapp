import React, { Component } from 'react'

export default class Product extends Component {

    onDelede = () => {
        this.props.deleteProduct(this.props.product.id);
    }

    render() {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid rounded" src={this.props.product.image} alt=""></img>
                        </div>
                        <div className="col-md-5">
                            <div className="input-group-prepend"><strong>id: &nbsp;</strong> {this.props.product.id}<br></br></div>
                            <div className="input-group-prepend"><strong>Product: &nbsp;</strong> {this.props.product.product}<br></br></div>
                            <div className="input-group-prepend"><strong>Tela: &nbsp;</strong> {this.props.product.cloth}<br></br></div>
                            <div className="input-group-prepend"><strong>Talla: &nbsp;</strong> {this.props.product.size}<br></br></div>
                            <div className="input-group-prepend"><strong>Género: &nbsp;</strong> {this.props.product.gender}<br></br></div>
                            <div className="input-group-prepend"><strong>Cantidad: &nbsp;</strong> {this.props.product.quantity}<br></br></div>
                            <div className="input-group-prepend"><strong>Detalles: &nbsp;</strong> {this.props.product.details}<br></br></div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <button className="btn btn-outline-primary btn-block">Editar</button>
                            </div>
                            <div className="form-group">
                                <button onClick={this.onDelede} className="btn btn-outline-danger btn-block">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
