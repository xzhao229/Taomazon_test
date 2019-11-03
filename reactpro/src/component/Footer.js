import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

import styled from 'styled-components';
import {ButtonContainer} from './Button';
import App from '../App.css';


export default class Footer extends Component{
	render(){
		return(
			<FooterWrapper className = "navbar navbar-expand-sm navbar-dark justify-content-center bg-dark align-text-bottom">
				{/*footer info*/}

				{/*copyright*/}
				<div className="navbar-nav">
    				<li>
        				&copy;2019 - All rights reserved 
        				<Link to="/">
        					<span> Taomazon</span>
        				</Link>
        				<span> | Designed by <a href="https://www.google.com"> First Last </a></span>
    				</li>
				</div>
			</FooterWrapper>
		)
	}
}

const FooterWrapper = styled.footer`
	background: var(--mainBlue);
	color: var(--mainWhite);
`

