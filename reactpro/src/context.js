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
		detailProduct: detailProduct,
		cart: [],
		modalOpen: true,	//for pop up before adding in cart
		modalProduct: detailProduct, 
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

	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	}

	//after product is (onClick)ed, handleDetail will be called from Product.js (onClick)
	//and this function will find the item using getItem() above
	handleDetail = (id) => {
		const product = this.getItem(id);
		//get the product
		this.setState(() => {
			return {detailProduct:product};
		})
	}

	addToCart = (id) => {
		let tempProducts = [...this.state.products]; //give access to all products
		const index = tempProducts.indexOf(this.getItem(id));	//get index
		const product = tempProducts[index];	//get the specific product
		product.inCart = true;	//change boolean inCart
		product.count = 1;
		const price = product.price;	//get device price
		product.total = price;

		this.setState(() => {
			return { products: tempProducts, cart: [...this.state.cart, product] };
		}, () => {console.log(this.state)})
	}

	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return {modalProduct: product, modalOpen: true}
		})
	}

	closeModal = () => {
		this.setState(() => {
			return {modalOpen: false}
		})
	}

	render() {
		return (
			//provide should be on top of the component tree, 
			//value is the thing that we render, can be an object	
			<ProductContext.Provider value = {{
				/*products: this.state.products;*/
				...this.state, 
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal
			}}>

				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 