import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import Modal from './component/Modal';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />         
        <Switch>
          <Route exact path = "/" component = {ProductList} />
          <Route path = "/Details" component = {Details} />
          <Route path = "/Cart" component = {Cart} />
          <Route component = {Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  } 
}
export default App;
