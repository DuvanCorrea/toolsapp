import React, { Component } from 'react'

export default class Product extends Component {

    state = {
        edit: false,
        classEdit: "btn btn-outline-primary btn-block",
        nameButonEdit: "Editar",

        product: this.props.product.product,
        cloth: this.props.product.cloth,
        size: this.props.product.size,
        gender: this.props.product.gender,
        quantity: this.props.product.quantity,
        details: this.props.product.details,
        productImage: this.props.product.imgProduct,
        image: ""
    }

    refreshState = () => {
        this.product = this.props.product.product;
        this.cloth = this.props.product.cloth;
        this.size = this.props.product.size;
        this.gender = this.props.product.gender;
        this.quantity = this.props.product.quantity;
        this.details = this.props.product.details;
        this.productImage = this.props.product.imgProduct;
    }

    onDelede = () => {
        this.props.deleteProduct(this.props.product.id);
    }

    onEdit = () => {
        if (this.state.edit === false) {
            this.setState({
                edit: true,
                classEdit: "btn btn-success btn-block",
                nameButonEdit: "Guardar"
            });
        } else {
            this.saveChanges();
            this.refreshState();
            this.setState({
                edit: false,
                classEdit: "btn btn-outline-primary btn-block",
                nameButonEdit: "Editar"
            });
        }
    }

    saveChanges = () => {
        let productTemp = {
            id: this.props.product.id,
            product: this.state.product,
            cloth: this.state.cloth,
            size: this.state.size,
            gender: this.state.gender,
            quantity: this.state.quantity,
            details: this.state.details,
            imgProduct: this.state.productImage
        }
        this.props.editProduct(productTemp);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        if (this.state.edit === false) {
            return (
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid rounded" src={this.props.product.imgProduct} alt=""></img>
                            </div>
                            <div className="col-md-5">
                                <div className="input-group-prepend"><strong>id: &nbsp;</strong> {this.props.product.id} <br></br></div>
                                <div className="input-group-prepend"><strong>Product: &nbsp;</strong> {this.state.product} <br></br></div>
                                <div className="input-group-prepend"><strong>Tela: &nbsp;</strong> {this.state.cloth} <br></br></div>
                                <div className="input-group-prepend"><strong>Talla: &nbsp;</strong> {this.state.size} <br></br></div>
                                <div className="input-group-prepend"><strong>Género: &nbsp;</strong> {this.state.gender} <br></br></div>
                                <div className="input-group-prepend"><strong>Cantidad: &nbsp;</strong> {this.state.quantity} <br></br></div>
                                <div className="input-group-prepend"><strong>Detalles: &nbsp;</strong>&nbsp; {this.state.details} </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <button
                                        onClick={this.onEdit}
                                        disabled
                                        className={this.state.classEdit}
                                    >
                                        {this.state.nameButonEdit}
                                    </button>
                                </div>
                                <div className="form-group">
                                    <button onClick={this.onDelede} className="btn btn-outline-danger btn-block">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card mt-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid rounded" src={this.props.product.imgProduct} alt=""></img>
                            </div>
                            <div className="col-md-5">
                                <div className="input-group-prepend"><strong>id: &nbsp;</strong> {this.props.product.id}<br></br></div>

                                <h6>Producto</h6>
                                <select defaultValue={this.state.product} name="product" className="form-control form-control-sm" onChange={this.onChange}>

                                    <option value="Buzo">Buzo</option>
                                    <option value="Sudadera">Sudadera</option>
                                    <option value="Pantaloneta">Pantaloneta</option>
                                    <option value="Camisa">Camisa</option>
                                    <option value="Otro">Otro</option>
                                </select>

                                <h6>Tela</h6>
                                <select defaultValue={this.state.cloth} name="cloth" className="form-control form-control-sm" id="select-product" onChange={this.onChange}>

                                    <option value="Algodón">Algodón</option>
                                    <option value="Conta vientos">Corta vientos</option>
                                    <option value="Bioto">Bioto</option>
                                    <option value="Otro">Otro</option>
                                </select>

                                <h6>Talla</h6>
                                <select defaultValue={this.state.size} name="size" className="form-control form-control-sm" id="select-product" onChange={this.onChange}>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                    <option value="Otro">Otro</option>
                                </select>

                                <h6>Género</h6>
                                <select defaultValue={this.state.gender} name="gender" className="form-control form-control-sm" id="select-product" onChange={this.onChange}>

                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="alien">Alien</option>
                                </select>

                                <h6>Cantidad</h6>
                                <input
                                    name="quantity"
                                    className="form-control form-control-sm"
                                    type="number"
                                    placeholder="Cantidad"
                                    onChange={this.onChange}
                                    value={this.state.quantity}
                                >
                                </input>

                                <h6>Detalles</h6>
                                <textarea
                                    name="details"
                                    className="form-control form-control-sm"
                                    rows="2"
                                    placeholder="Detalles"
                                    onChange={this.onChange}>{this.state.details}
                                </textarea>

                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <button onClick={this.onEdit} className={this.state.classEdit}>{this.state.nameButonEdit}</button>
                                </div>
                                <div className="form-group">
                                    <button onClick={this.onDelede} className="btn btn-outline-danger btn-block">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
