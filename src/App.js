import React, {Component} from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import data from './data.json';
import Auxi from './Auxi/auxi'
import Products from './component/products/products';
import Cart from './container/cart/cart';


class App extends Component {
  state = {
    products : data.products,
    cartItems :[]
  }

  addToCart =(product) =>{
    const cartItems =this.state.cartItems.slice()
    let inCart =false
    cartItems.forEach(item =>{
      if(item.id=== product.id){
        item.count++;
        inCart =true;
      }
    });
    if (!inCart){
      cartItems.push({...product, count :1})
    }
    this.setState({cartItems: cartItems})
  }

  createOrder = (order) =>{
    alert ('need to save order' + order.name )
  }

  deleteFromCart = (product) =>{
    const cartItems = this.state.cartItems
    this.setState({cartItems :cartItems.filter((x)=> x.id !== product.id) })
    
  }

  render(){
    return (
      <Auxi>
        <div className="container">
        <Header/>
        <main>
          <div className = 'content'>
            <div className = 'main'>
              <Products 
                products ={this.state.products} 
                addToCart = {this.addToCart}
                /> 
            </div>
            <div className = 'sideBar'> 
                  <Cart cartItems ={this.state.cartItems}
                  deleteFromCart ={this.deleteFromCart}
                  createOrder ={this.createOrder} />
                  </div>
            </div>
        </main>
        <Footer/>
      </div>
      </Auxi>
    );
  }
}

export default App;
