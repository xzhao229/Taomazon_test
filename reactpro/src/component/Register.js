import React, {Component} from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import LogIn from './LogIn';


export default class Register extends Component{
	render(){
		return(
			<section className="height-full">
			
				<ProductConsumer>


					{value => (


						/*use React.Fragment since we can only return one thing*/
						<React.Fragment>
							<Title name="Register" title="Now" />
						</React.Fragment>
						
					)}
				</ProductConsumer>
			</section>

		)
	}
}