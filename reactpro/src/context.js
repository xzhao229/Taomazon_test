import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//provide info to all applications, whenever we need the info, provider will provide to us

//Consumer
//use consumer to grab info by context


class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct
	};

	//store values of objects into a new array, instead of using reference of obj
	componentDidMount() {
		this.setProducts();
	};

	setProducts = () => {
		let tempProducts = [];
		//loop
		storeProducts.forEach(item => {
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];
		})
		this.setState(() => {
			return { products: tempProducts };
		});
	};

	handleDetail = () => {
		console.log('hello from detail');
	}

	addToCart = (id) => {
		console.log(`hello from add to cart, id is ${id}`);
	}

	render() {
		return (
			//provide should be on top of the component tree, 
			//value is the thing that we render, can be an object	
			<ProductContext.Provider value={{
				/*products: this.state.products;*/
				...this.state, 
				handleDetail: this.handleDetail,
				addToCart: this.addToCart
			}}>

				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 