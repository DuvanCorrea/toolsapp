import React, { Component } from 'react';

export default class FormAddProduct extends Component {

    state = {
        product: "",
        cloth: "",
        size: "",
        gender: "",
        quiantity: 0,
        details: ""
    }


    onSubmint = (e) => {
        let productTemp = {
            product: this.state.product,
            cloth: this.state.cloth,
            size: this.state.size,
            gender: this.state.gender,
            quantity: this.state.quiantity,
            details: this.state.details,
        }
        this.props.addProduct(productTemp);
        e.preventDefault();
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h5 className="card-title"><i className="fa fa-plus"></i> Agregar producto</h5>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={this.onSubmint}>

                        <div className="form-group">
                            <h6>Producto</h6>
                            <select name="product" className="form-control form-control-sm" onChange={this.onchange}>
                                <option selected="">Seleccionar</option>
                                <option values="buzo">Buzo</option>
                                <option values="sudadera">Sudadera</option>
                                <option values="pantaloneta">Pantaloneta</option>
                                <option values="camisa">Camisa</option>
                                <option values="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <h6>Tela</h6>
                            <select name="cloth" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                <option selected="">Seleccionar</option>
                                <option values="algodon">Algodón</option>
                                <option values="contaVientos">Corta vientos</option>
                                <option values="bioto">Bioto</option>
                                <option values="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <h6>Talla</h6>
                            <select name="size" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                <option selected="">Seleccionar</option>
                                <option values="xs">XS</option>
                                <option values="s">S</option>
                                <option values="m">M</option>
                                <option values="l">L</option>
                                <option values="xl">XL</option>
                                <option values="xxl">XXL</option>
                                <option values="xxxl">XXXL</option>
                                <option values="otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <h6>Género</h6>
                            <select name="gender" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                <option selected="">Seleccionar</option>
                                <option selected="true" values="masculino">Masculino</option>
                                <option values="femenino">Femenino</option>
                                <option values="alien">Alien</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <h6>Cantidad</h6>
                            <input name="quantity" className="form-control form-control-sm" type="number" placeholder="Cantidad" onChange={this.onchange}></input>
                        </div>
                        <div className="form-group">
                            <h6>Detalles</h6>
                            <textarea name="details" className="form-control form-control-sm" rows="2" placeholder="Detalles" onChange={this.onchange}></textarea>
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-primary btn-block" >Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
