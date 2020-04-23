import React, { Component } from "react";
import Navbar from "./navbar/navbar.js";
import FormAddProduct from "./form-add-pruduct/formAddProduct.js";
import ProductList from "./products-list/ProductList.js";
import Cotizar from "./Cotizar/cotizar.js";
import jsPDF from "jspdf";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      copyProducts: [],
      resumenProductos: [
        {
          TBuzo: 0,
          TSudadera: 0,
          TPantaloneta: 0,
          TCamisa: 0,
          TOtro: 0,
          total: 0,
        },
      ],
      pagActual: "cotizar",
      cotizacion: "",
    };
  }

  addProductToSummary = (newProduct) => {
    var resProd = [...this.state.resumenProductos];

    if (newProduct.product === "Buzo") {
      resProd[0].TBuzo += 1;
      resProd[0].total += 1;
    } else if (newProduct.product === "Sudadera") {
      resProd[0].TSudadera += 1;
      resProd[0].total += 1;
    } else if (newProduct.product === "Pantaloneta") {
      resProd[0].TPantaloneta += 1;
      resProd[0].total += 1;
    } else if (newProduct.product === "Camisa") {
      resProd[0].TCamisa += 1;
      resProd[0].total += 1;
    } else if (newProduct.product === "Otro") {
      resProd[0].TOtro += 1;
      resProd[0].total += 1;
    }

    this.setState({
      resumenProductos: resProd,
    });

    console.log("add to sommary");
  };

  deleteProductToSummary = (newProduct) => {
    var resProd = [...this.state.resumenProductos];

    if (newProduct.product === "Buzo") {
      resProd[0].TBuzo -= 1;
      resProd[0].total -= 1;
    } else if (newProduct.product === "Sudadera") {
      resProd[0].TSudadera -= 1;
      resProd[0].total -= 1;
    } else if (newProduct.product === "Pantaloneta") {
      resProd[0].TPantaloneta -= 1;
      resProd[0].total -= 1;
    } else if (newProduct.product === "Camisa") {
      resProd[0].TCamisa -= 1;
      resProd[0].total -= 1;
    } else if (newProduct.product === "Otro") {
      resProd[0].TOtro -= 1;
      resProd[0].total -= 1;
    }

    this.setState({
      resumenProductos: resProd,
    });

    console.log("remove of sommary");
  };

  addProduct = (newProduct) => {
    var productTem = [...this.state.products];
    if (productTem.length !== 0) {
      let newID = productTem[0].id;
      newProduct["id"] = newID + 1;
      productTem.unshift(newProduct);
      this.setState({
        products: productTem,
      });
    } else {
      newProduct["id"] = 1;
      productTem.unshift(newProduct);
      this.setState({
        products: productTem,
      });
    }
    // agregarndo producto a contador de resumen
    this.addProductToSummary(newProduct);
  };

  editProduct = (newProduct) => {
    this.addProductToSummary(newProduct);
    var productTem = [...this.state.products];
    productTem.forEach((e) => {
      if (e.id === newProduct.id) {
        this.deleteProductToSummary(e);
        e = newProduct;
        console.log("Edited :D");
      }
    });
  };

  deleteProduct = (id) => {
    // actualizar en summary
    var productos = this.state.products;
    var prenda;
    productos.map((e) => {
      if (e.id === id) {
        prenda = e;
      }
    });
    this.deleteProductToSummary(prenda);

    // borrar producto

    var newProducts = this.state.products.filter(
      (product) => product.id !== id
    );

    this.setState({
      products: newProducts,
    });
  };

  componentDidMount() {
    console.log("Updated...");
  }

  generatePDF = () => {
    var doc = new jsPDF();

    //texto de la descipcion
    let TamText = 12;
    let xText = 80;
    let yText = 15;
    let yDistText = 7;
    let ySlatoText = 42;

    //imagenes
    let TamX = 60;
    let TamY = 67;
    let xImg = 15;
    let yImg = 10;
    let ySlatImg = 70;
    let nImagesxPage = 4;

    //contador para que se impriman cierta cantidad en una hoja

    if (this.state.products.length !== 0) {
      let productsTem = [...this.state.products];
      doc.setFontSize(TamText);

      productsTem.forEach((e) => {
        if (nImagesxPage !== 0) {
          doc.addImage(e.imgProduct, xImg, yImg, TamX, TamY);
          doc.text(xText, yText, "Producto: " + e.product);
          yText += yDistText;
          doc.text(xText, yText, "Tela: " + e.cloth);
          yText += yDistText;
          doc.text(xText, yText, "Tamaño: " + e.size);
          yText += yDistText;
          doc.text(xText, yText, "Genero: " + e.gender);
          yText += yDistText;
          doc.text(xText, yText, "Cantidad: " + e.quantity);
          yText += yDistText;
          doc.text(xText, yText, "Detalles: " + e.details);
          nImagesxPage--;

          yImg += ySlatImg;
          yText += ySlatoText;
        } else {
          //  agregando pagina y reiniciando contadores
          doc.addPage();

          //texto de la descipcion
          TamText = 12;
          xText = 80;
          yText = 15;
          yDistText = 7;
          ySlatoText = 42;

          //imagenes
          TamX = 60;
          TamY = 67;
          xImg = 15;
          yImg = 10;
          ySlatImg = 70;
          nImagesxPage = 4;

          // volviendo a hacer la interacccion para que no se pierda con el objeto actual
          doc.addImage(e.imgProduct, xImg, yImg, TamX, TamY);
          doc.text(xText, yText, "Producto: " + e.product);
          yText += yDistText;
          doc.text(xText, yText, "Tela: " + e.cloth);
          yText += yDistText;
          doc.text(xText, yText, "Tamaño: " + e.size);
          yText += yDistText;
          doc.text(xText, yText, "Genero: " + e.gender);
          yText += yDistText;
          doc.text(xText, yText, "Cantidad: " + e.quantity);
          yText += yDistText;
          doc.text(xText, yText, "Detalles: " + e.details);
          nImagesxPage--;

          yImg += ySlatImg;
          yText += ySlatoText;
        }
      });
    } else {
      doc.text(15, 15, "Dios mio!!! agrega productos primero :D ");
    }
    doc.save("Fer Te Amo.pdf");
  };

  cambiarPag = () => {
    this.setState({
      pagActual: "cotizar",
    });
  };

  render() {
    switch (this.state.pagActual) {
      case "/":
        return (
          <div className="app">
            <Navbar
              generatePDF={this.generatePDF}
              cambiarPag={this.cambiarPag}
            />
            <div className="container pt-3">
              <div className="row">
                <div className="col-md-4">
                  <FormAddProduct addProduct={this.addProduct} />
                </div>
                <div className="col-md-8">
                  <ProductList
                    products={this.state.products}
                    deleteProduct={this.deleteProduct}
                    editProduct={this.editProduct}
                    summaryProducts={this.state.resumenProductos[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "cotizar":
        return (
          <div className="app">
            <Navbar
              generatePDF={this.generatePDF}
              cambiarPag={this.cambiarPag}
              boton={this.state.pagActual}
            />
            <Cotizar cotizacion={this.state.cotizacion} />
          </div>
        );

      default:
        return;
    }
  }
}
