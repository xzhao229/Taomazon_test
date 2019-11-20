import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';  //not /Cart/Cart due to package.json
import Default from './component/Default';
import Modal from './component/Modal';
import Footer from './component/Footer';
import Account from './component/Account';
import LogIn from './component/LogIn';




class App extends Component{
  render(){
    return(
      <React.Fragment>

        <Navbar />

        <Switch>
          <Route exact path = "/" component = {ProductList} />
          <Route path = "/Details" component = {Details} />
          <Route path = "/Account" component = {Account} />
          <Route path = "/Cart" component = {Cart} />
          <Route component = {Default} />
        </Switch>

        <Footer /> 
                
        <Modal />
        <LogIn />

      </React.Fragment>
    );
  } 
}
export default App;
