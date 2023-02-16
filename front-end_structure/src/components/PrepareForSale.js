import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function PrepareForSale() {
    return (
        <div>
            <div className="card text-center m-3">
                <div className="card-header p-4"></div>
                <div className="card-body">
                    <h5 className="card-title">Prepare For Token Sale</h5>
                    <p className="card-text">One Token Price Is Equal To 1 ether.</p>
                    <div class="row g-1">
                        <div className="col-md-2 form-floating mb-3 me-5 mt-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">set_time</label>
                        </div>
                        <div className="col-md-2 form-floating mb-3 me-5 mt-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">early_bonus</label>
                        </div>
                        <div className="col-md-2 form-floating mb-3 me-5 mt-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">early_users_quantity</label>
                        </div>
                        <div className="col-md-2 form-floating mb-3 me-5 mt-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">set_eth</label>
                        </div>
                        <div className="col-md-2 form-floating mb-3 me-4 mt-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">set_swap_token</label>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-primary">set_sale</Link>
                </div>
                <div className="card-footer text-muted p-4"></div>
            </div>
        </div>
    )
}

export default PrepareForSale
