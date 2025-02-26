import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container mb-5">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						{/*clear cart button and go back to store*/}
						<Link to="/">	
							<button 
								className="btn btn-outline-danger text-uppercase mb-3 px-5 font-weight-bold" 
								type="button" 
								onClick={() => clearCart()}
							>
								clear cart
							</button>
						</Link>

						{/*subtotal*/}
						<h5>
							<span className="text-title">subtotal: </span>
							<strong>$ {cartSubTotal}</strong>
						</h5>

						{/*tax*/}
						<h5>
							<span className="text-title">tax: </span>
							<strong>$ {cartTax}</strong>
						</h5>

						{/*total*/}
						<h5>
							<span className="text-title">total: </span>
							<strong>$ {cartTotal}</strong>
						</h5>

					</div>
				</div>
			</div>
		</React.Fragment>
	)
}