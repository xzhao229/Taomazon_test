import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

import styled from 'styled-components';
import {ButtonContainer} from './Button';
// import App from '../App.css';


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

				{/*Cart*/}
				<Link to="/Cart" className='ml-auto'>
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

