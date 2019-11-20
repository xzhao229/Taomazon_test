import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

import styled from 'styled-components';
import {ButtonContainer} from './Button';
// import App from '../App.css';
import { Button, Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import { ProductConsumer } from '../context';




export default class Navbar extends Component{

	render(){
		return(


			<NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
			{/* https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */}

				{/*icon*/}
				<Link to='/'>
				<img src={logo} alt="store" className="navbar-brand" />
				</Link>

				{/*Products*/}
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link underline">
							Products
						</Link>
					</li>
				</ul>

				{/*Search bar*/}

				
				{/*My Account*/}	
				<ProductConsumer>
					{value => (
						<Link to="/Account" 
						className='ml-auto' 
						onClick={() => {
							/*if logged in, directed to account page, if not, ask user to log in*/
								value.openLogIn();
							}}
						>
							<ButtonContainer>
								<i className="fa fa-align-justify mx-1"></i> My Account <i className="fa fa-angle-down mx-1"></i>
									
							</ButtonContainer>
						</Link>
					)}			
					
				</ProductConsumer>


				{/*Cart*/}
				<Link to="/Cart" className='ml-3'>
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
			)
	}
}

const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`

