import React , {Component} from 'react';
import classes from './products.module.css';


class Products extends Component {
    render() {
        return(
            <div>
                <ul className ={classes.Products}>
                    {this.props.products.map(product =>(
                        <li className ={classes.List} key = {product.id}>
                            <div className ={classes.Product}>
                            <a href ={'#' + product.id}>
                                <img className ={classes.Image} src = {product.image} alt = {product.title}/>
                                <p>{product.title} </p>
                            </a>
                            <div className ={classes.Price}>
                                <div>
                                    bdt {product.price}
                                </div>
                                <button className ={classes.Button}
                                        onClick ={()=> this.props.addToCart(product)}>
                                    Add product to cart
                                </button>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products;