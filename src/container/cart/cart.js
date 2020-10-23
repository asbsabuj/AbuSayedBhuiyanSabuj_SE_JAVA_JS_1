import React, {Component} from 'react';
import classes from './cart.module.css';
import Auxi from '../../Auxi/auxi';

class Cart extends Component{
    state ={
        name : '',
        email : '',
        address : '',
        showCheckOut : false
    }

    handleInput =(event) =>{
        this.setState({ [event.target.name] : event.target.value})
    }

    createOrder = (event) =>{
        event.preventDefault();
        const order = {
            name: this.state.name,
            email : this.state.email,
            address : this.state.address,
            cartItems : this.props.cartItems
        }
        this.props.createOrder(order)
    }
    
    render(){
        const {cartItems} = this.props;
        return(
            <Auxi>
                <div className ={classes.Cart}>
                {cartItems.length === 0 ? ( 
                <div className ='classes.Header'> Cart is empty</div>
                ):(
                <div className ={classes.Header}> you have {cartItems.length} item in the cart {" "} </div>)}
            </div>
            <div>
                    <div>
                        <ul className ={classes.Items}>
                            {cartItems.map(item =>(
                                <li key ={item.id}>
                                    <div>
                                        <img src ={item.image} alt ={item.title}/>
                                    </div>
                                    <div>
                                        <div> {item.title}</div>
                                        <div className ={classes.Right}>
                                            {item.price} x {item.count}{" "}
                                        <button onClick = {()=> this.props.deleteFromCart(item)}>
                                            Delete
                                        </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                        <div className ='classes.Total'>
                            <div>
                                Total :bdt {" "}
                                {cartItems.reduce((a,c) => a + c.price * c.count, 0)}
                            </div>
                            <button onClick ={() =>{ this.setState({showCheckOut :true})}}
                            className ={classes.Button}>Proceed</button>
                        </div>
                            {this.state.showCheckOut && (
                            <form onSubmit ={this.createOrder}>
                                <ul className ={classes.Container}>
                                    <li>
                                        <label>Email</label>
                                        <input
                                        name ='email'  
                                        type = 'email' 
                                        required
                                        onChange ={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <label>className</label>
                                        <input
                                        name ='Name'  
                                        type = 'text' 
                                        required
                                        onChange ={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input
                                        name ='address'  
                                        type = 'text' 
                                        required
                                        onChange ={this.handleInput}></input>
                                    </li>
                                    <li>
                                        <button className={classes.Button} type = 'submit'> Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        )}
                    </div>
                    )}
                        
            </div>
            </Auxi>
            
        )
    }
}

export default Cart;