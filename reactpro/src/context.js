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
		modalOpen: false,	//for pop up before adding in cart
		modalProduct: detailProduct, 
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
		logInOpen: false
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

		this.setState(
			() => {
				return { products: tempProducts, cart: [...this.state.cart, product] };
			}, 
			() => {
				this.addTotals();	//calculate subtotal, tax, and total => update cart
			}
		)
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

	openLogIn = () => {
		this.setState(() => {
			return {logInOpen: true}
		})
	}

	closeLogIn = () => {
		this.setState(() => {
			return {logInOpen: false}
		})
	}

	//increment/decrement count and price in cart ui
	increment = (id) => {
		let tempCart = [...this.state.cart];	//get current state of cart
		const selectedProduct = tempCart.find(item => item.id == id);	//get target
		const index = tempCart.indexOf(selectedProduct);	//get index
		const product = tempCart[index];
		//at this step, we have access to the specific product
		product.count += 1;
		product.total = product.count * product.price;
		//pass back to state
		this.setState(
			() => {
				return {cart: [...tempCart]}	//update cart
			}, 
			() => {
				this.addTotals();	//always update total!
			}
		)
	}

	decrement = (id) => {
		//same as increment
		let tempCart = [...this.state.cart];	//get current state of cart
		const selectedProduct = tempCart.find(item => item.id == id);	//get target
		const index = tempCart.indexOf(selectedProduct);	//get index
		const product = tempCart[index];
		//at this step, we have access to the specific product
		product.count -= 1;
		//check if decremented to 0
		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.count * product.price;
			//pass back to state
			this.setState(
				() => {
					return {cart: [...tempCart]}	//update cart
				}, 
				() => {
					this.addTotals();	//always update total!
				}
			)
		}
		
	}

	removeItem = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter(item => item.id !== id);	//filter out the unmatch id
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];	//get the target to remove from product state
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		//set new state
		this.setState(
			() => {
				return {
					cart: [...tempCart],
					products: [...tempProducts]
				}
			}, 
			() => {
				this.addTotals();	//always update the cal in cart
			}
		)
	}

	clearCart = () => {
		// this.setState(() => {
		// 	return {cart: []}
		// })
		//above is wrong since when we go back to product list:
		//1. cart button still shows "in cart"
		//2. inside react state is not changed
		//correct version:
		this.setState(
			() => {
				return {cart: []}	//update reference of cart
			}, 
			() => {
				this.setProducts();	//give new obj, otherwise ref is changed, but still using old obj
				this.addTotals(); //update values in cart
			}
		)
	}

	addTotals = () => {
		let subTotal = 0;	//initialize subtotal
		//map to loop the entire cart to get all values
		this.state.cart.map(item => (subTotal += item.total));	//add up
		const tempTax = subTotal * 0.13;
		const tax = parseFloat(tempTax.toFixed(2));	//fix output string into 2 digit decimal
		const total = (subTotal + tax).toFixed(2);	//fix 2 digit decimal
		this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total
			}
		})
	}

	render() {
		return (
			//provide should be on top of the component tree, 
			//value is the thing that we render, can be an object	
			<ProductContext.Provider 
				value = {{
				/*products: this.state.products;*/
				...this.state, 
				//pass all methods so consumer can catch
				handleDetail: this.handleDetail,
				addToCart: this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal,
				increment: this.increment,
				decrement: this.decrement,
				removeItem: this.removeItem,
				clearCart: this.clearCart,
				openLogIn: this.openLogIn,
				closeLogIn: this.closeLogIn
			}}>

				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 