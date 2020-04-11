import React, { Component } from 'react'
import Product from './Product.js'

import Summary from './Summary.js'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <Summary summaryProducts={this.props.summaryProducts} />
                {this.props.products.map(e => {
                    return <Product key={e.id} product={e} deleteProduct={this.props.deleteProduct} editProduct={this.props.editProduct} />
                })}
            </div>
        )
    }
}
