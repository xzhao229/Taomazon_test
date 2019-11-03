import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import App from '../App.css';


export default class Footer extends Component{
	render(){
		return(
			<React.Fragment>
				
				{/*footer info*/}
				<FooterWrapper className="row text-center mx-auto">
					<div  className="col-lg-4 mt-3 mb-2">
						<h4>Contact Us</h4>
						<ul className="noBullet">
							<li><i class="fa fa-map-marker"></i> 100 A Ave, City, Province</li>
	                        <li><i class="fa fa-phone"></i> +1(800)888-888</li>
	                        <li><i class="fa fa-envelope-o"></i> <a href="taomazon@gmail.com">taomazon@gmail.com</a></li>
						</ul>
					</div>

					<div className="col-lg-4 mt-3 mb-2">
						<h4>Company</h4>
						<ul className="noBullet">
							<li>About Us</li>
							<li>Careers</li>
							<li>Privacy Policy</li>
						</ul>
					</div>

					<div  className="col-lg-4 mt-3 mb-2">
						<h4>Services</h4>
						<ul className="noBullet">
							<li>Order Status</li>
							<li>Item Returns</li>
							<li>FAQ</li>
						</ul>
					</div>	
				</FooterWrapper>

				{/*copyright*/}
				<FooterWrapper className = "navbar navbar-expand-sm navbar-dark justify-content-center bg-dark align-text-bottom">
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

			</React.Fragment>
		)
	}
}

const FooterWrapper = styled.footer`
	background: var(--mainBlue);
	color: var(--mainWhite);
`

