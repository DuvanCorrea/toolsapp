import React, { Component } from 'react';
import Navbar from './navbar/navbar.js';
import FormAddProduct from './form-add-pruduct/formAddProduct.js'
import ProductList from './products-list/ProductList.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 3, product: "buzo", cloth: "algodon", size: "l", gender: "masculino", quantity: 8, details: "Holi soy un detalle", image: "../image.png" },
        { id: 2, product: "sudadera", cloth: "bioto", size: "m", gender: "femenino", quantity: 10, details: "Holi soy un detalle", image: "../image.png" },
        { id: 1, product: "camisa", cloth: "conta vientos", size: "xl", gender: "masculino", quantity: 3, details: "Holi soy un detalle", image: "../image.png" }
      ],
      copyProducts: []
    }

  }

  addProduct = (newProduct) => {
    var productTem = [...this.state.products];
    if (productTem.length !== 0) {
      let newID = productTem[0].id;
      newProduct["id"] = newID + 1;
      newProduct["image"] = "../image.png";
      productTem.unshift(newProduct);
      this.setState({
        products: productTem
      });
    } else {
      newProduct["id"] = 1;
      newProduct["image"] = "../image.png";
      productTem.unshift(newProduct);
      this.setState({
        products: productTem
      });
    }
    //console.log(productTem);

  }

  deleteProduct = (id) => {

    var newProducts = this.state.products.filter(product => (product.id !== id));

    this.setState({
      products: newProducts
    });
  }

  componentDidMount() {
    console.log("Updated...");
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-4">
              <FormAddProduct addProduct={this.addProduct} />
            </div>
            <div className="col-md-8">
              <ProductList products={this.state.products} deleteProduct={this.deleteProduct} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
