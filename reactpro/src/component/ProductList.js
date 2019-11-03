import React, {Component} from 'react'
import Product from './Product'

import Title from './Title';
// import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component{

	render() {
		return(
			<React.Fragment>
			<div className="py-5">
				<div className="container">
					<Title name="our" title="product" />
					<div className="row">
						<ProductConsumer>
							{/*pass in the provider info, and grabbed by consumer, input name doesnt matter*/}
							{(value) => {
								/*traverse the list*/
								return value.products.map( product => {
									/*retrieve each product*/
									return <Product key={product.id} product={product} />
								})
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
			</React.Fragment>
				// <Product /> 


		)
	}
}