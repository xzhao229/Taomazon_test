import React, {Component} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component{
	render(){
		return(
			<section>
				<ProductConsumer>
					{value => {
						const { cart } = value;
						{/*conditional*/}
						if (cart.length > 0) {
							return (
								/*use React.Fragment since we can only return one thing*/
								<React.Fragment>
									<Title name="your" title="cart" />
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value}/>
								</React.Fragment>
							)
						} else {
							return <EmptyCart />;
						}
					}}
				</ProductConsumer>
			</section>

			)
	}
}