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
				<FooterWrapper className="row text-left mx-auto">
					
					<div className="col-lg-2 mt-4 mb-4 mx-3">
						<h5>SERVICES</h5>
						<a href="http://google.com" className="footerBullets"><li>Order Status</li></a>
						<a href="http://google.com" className="footerBullets"><li>Returns & Refunds</li></a>
						<a href="http://google.com" className="footerBullets"><li>FAQ</li></a>
					</div>

					<div className="col-lg-3 mt-4 mb-4">
						<h5>CUSTOMER SUPPORT</h5>
						<a href="http://google.com" className="footerBullets"><li>Help Center</li></a>
						<a href="http://google.com" className="footerBullets"><li>How to Shop on Taomazon</li></a>
						<a href="http://google.com" className="footerBullets"><li>Why Shop on Taomazon</li></a>
					</div>

					<div className="col-lg-3 mt-4 mb-4">
						<h5>ABOUT US</h5>
						<a href="http://google.com" className="footerBullets"><li>About Taomazon</li></a>
						<a href="http://google.com" className="footerBullets"><li>Terms & Conditions</li></a>
						<a href="http://google.com" className="footerBullets"><li>Privacy Policy</li></a>
					</div>	

					<div className="col-lg-3 mt-4 mb-4">
						<h5>CONTACT US</h5>
						<div className="footerBullets">
							<li><i class="fa fa-map-marker"></i> 100 University Ave, City, Province</li>
	                        <li><i class="fa fa-phone"></i> +1(800)888-888</li>
	                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:taomazon@gmail.com">taomazon@gmail.com</a></li>
						</div>
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

