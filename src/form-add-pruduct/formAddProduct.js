import React, { Component } from 'react';
import "./formAddProduct.css";

export default class FormAddProduct extends Component {

    state = {
        product: "",
        cloth: "",
        size: "",
        gender: "",
        quantity: 0,
        details: "",
        image: "",
        productImage: "https://image.flaticon.com/icons/png/512/14/14407.png"

    }

    onChange = (e) => {

        var reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            this.setState({ productImage: reader.result });
        }

    }


    onSubmint = (e) => {

        if (this.state.productImage !== "https://image.flaticon.com/icons/png/512/14/14407.png") {

            let productTemp = {
                product: this.state.product,
                cloth: this.state.cloth,
                size: this.state.size,
                gender: this.state.gender,
                quantity: this.state.quantity,
                details: this.state.details,
                imgProduct: this.state.productImage
            }
            this.props.addProduct(productTemp);
        } else {
            alert("Agrega una imagen del producto");
        }


        e.preventDefault();
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /*uploadImage = (e) => {
        console.log(e);
    }*/

    render() {
        return (
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h5 className="card-title"><i className="fa fa-plus"></i> Agregar producto</h5>
                </div>
                <div className="card-body">
                    <form className="form" onSubmit={this.onSubmint}>
                        <div className="row">
                            <div className="col-md-6">


                                <div className="div-image">
                                    <input onChange={(e) => this.onChange(e)} id="imageUp" type="file" className="input-image"></input>
                                    <label><img className="img-fluid imgInput rounded" src={this.state.productImage} alt=""></img></label>
                                </div>


                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6 className="subtitles">Producto</h6>
                                    <select defaultValue="DEFAULT" name="product" className="form-control form-control-sm" onChange={this.onchange}>
                                        <option value="DEFAULT">Seleccionar</option>
                                        <option value="Buzo">Buzo</option>
                                        <option value="Sudadera">Sudadera</option>
                                        <option value="Pantaloneta">Pantaloneta</option>
                                        <option value="Camisa">Camisa</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <h6 className="subtitles">Cantidad</h6>
                                    <input
                                        name="quantity"
                                        className="form-control form-control-sm"
                                        type="number"
                                        placeholder="Cantidad"
                                        min="0"
                                        onChange={this.onchange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6 className="subtitles">Tela</h6>
                                    <select defaultValue="DEFAULT" name="cloth" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                        <option value="DEFAULT">Seleccionar</option>
                                        <option value="Algodón">Algodón</option>
                                        <option value="Conta vientos">Corta vientos</option>
                                        <option value="Bioto">Bioto</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6 className="subtitles">Talla</h6>
                                    <select defaultValue="DEFAULT" name="size" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                        <option value="DEFAULT">Seleccionar</option>
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h6 className="subtitles">Género</h6>
                                    <select defaultValue="DEFAULT" name="gender" className="form-control form-control-sm" id="select-product" onChange={this.onchange}>
                                        <option value="DEFAULT">Seleccionar</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="femenino">Femenino</option>
                                        <option value="alien">Alien</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                        </div>
                        <div className="form-group">
                            <h6 className="subtitles">Detalles</h6>
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
