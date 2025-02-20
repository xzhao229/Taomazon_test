import React from 'react';

export default function CartItem({item, value}) {
	const {id, title, img, price, total, count} = item;	//get all info from item
	const {increment, decrement, removeItem} = value;
	return (
		<div className="row my-2 text-capitalize text-center justify-content-center">
			{/*image*/}
			<div className="col-10 mx-auto col-lg-2 align-self-center">
				<img 
					src={img} 
					style={{width:'5rem', height:'5rem'}} 
					className="img-fluid" 
					alt="product"
				/>
			</div>

			{/*product*/}
			<div className="col-10 mx-auto col-lg-2 align-self-center">
				<span className="d-lg-none">product: </span>
				{title}
			</div>

			{/*price*/}
			<div className="col-10 mx-auto col-lg-2 align-self-center">
				<span className="d-lg-none">price: </span>
				$ {price}
			</div>

			{/*quantity*/}
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 align-self-center">
				<div className="d-flex justify-content-center">
					<div >
						<span className="btn btn-black mx-1" onClick={() => decrement(id)}> - </span>
						<span className="btn btn-black mx-1">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => increment(id)}> + </span>
					</div>
				</div>
			</div>

			{/*remove*/}
			<div className="col-10 mx-auto col-lg-2 align-self-center">
				<div className="cart-icon" onClick={() => removeItem(id)}>
					<i className="fas fa-trash"></i>
				</div>
			</div>

			{/*total*/}
			<div className="col-10 mx-auto col-lg-2 align-self-center">
				<strong>item total: $ {total}</strong>
			</div>
			
		</div>
	)
}