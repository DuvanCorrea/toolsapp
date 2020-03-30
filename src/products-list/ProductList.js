import React, { Component } from 'react'
import Product from './Product.js'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                {this.props.products.map(e => {
                    return <Product key={e.id} product={e} deleteProduct={this.props.deleteProduct} />
                })}
            </div>
        )
    }
}
