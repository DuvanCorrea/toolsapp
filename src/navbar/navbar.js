import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar table-dark">
                <div className="navbar-brand" >Tools APP</div>
                <div className="form-group m-0">
                    <button onClick={this.props.generatePDF} type="button" className="btn btn-success btn-block form-control" >Generar PDF</button>
                </div>
            </nav>
        )
    }
}
