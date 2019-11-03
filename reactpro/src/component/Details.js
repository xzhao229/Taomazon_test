
import React, {Component} from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'; 


export default class Details extends Component{
	render(){
		return(

			<ProductConsumer>
                {/*the "value" refers the target product we clicked*/}
				{(value) => {
					const { id, company, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container py-5">
                           
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}

                            {/*product info*/}
                            <div className="row">
                                {/*img on the left side*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>

                                {/*right side*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>
                                        model: {title}
                                    </h2>
                                    <h4 className="text-muted mt-3 mb-3">
                                        Made by : <span className="text-capitalize">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-1">
                                        detailed info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>

                                    {/*buttons at the bottom*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled = {inCart ? true : false}
                                            onClick = {() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
					   </div>
					)
				}}
			</ProductConsumer>
		);

	}
}