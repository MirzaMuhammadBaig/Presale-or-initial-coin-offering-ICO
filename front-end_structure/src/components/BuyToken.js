import React from 'react'
import { Link } from 'react-router-dom'

function BuyToken() {
    return (
        <>
            <div className="card text-center m-3">
                <div className="card-header p-4"></div>
                <div className="card-body">
                    <h5 className="card-title">Buy My ERC20 Token</h5>
                    <p className="card-text">One BWS Token Price Is Equal To 1 ether.</p>
                    <div className="form-floating mb-3 ms-5 me-5 mt-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Put Quantity Of Token</label>
                    </div>
                    <Link to="/" className="btn btn-primary">Buy</Link>
                </div>
                <div className="card-footer text-muted p-4"></div>
            </div>
        </>
    )
}

export default BuyToken