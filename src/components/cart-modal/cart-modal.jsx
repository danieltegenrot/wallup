import React from 'react'

import './cart-modal.css'

import Item from './../../components/cart-item/cart-item'
import Cart from './../../components/cart/cart'


class CartList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total : this.props.price
        }
    }

    setPrice = () => {
        this.setState({total : this.props.price})
    }

    removeFromTotal = (myPrice) => {
        this.setState({total : this.state.total - myPrice})
        this.props.remove(myPrice)
    }

    checkout = () => {
        // Open checkout
        var modal = document.getElementById("checkout");
        modal.style.display = "block";
        document.getElementById('form').style.visibility = 'visible'
        document.getElementById('checkout-title').style.visibility = 'visible'
        document.getElementById('thank-you').style.visibility = 'hidden'
    }

    handleClose = () => {
        var modal = document.getElementById("checkout")
        modal.style.display = "none" 
    }

    createItem = (item) => {
        return <Item setPrice={this.setPrice} remove={this.removeFromTotal} list={this.props.array} item={item} remove={this.removeFromTotal}/>;
    }

    createItems = (items) => {
        return ( items.map(this.createItem) )   
    }

    

    render() {
    
        return (
            <div>
                <div className="total-price">
                    <h1>Total: </h1> 
                    <p className="total">{this.state.total} $</p>
                </div>
                <button className="checkout-button" onClick={this.checkout}>Checkout</button> 
                <div>{this.createItems(this.props.array)}</div>

                <div id="checkout" className="checkout">
                    <div className="checkout-content">
                        <span id="close" className="close" onClick={this.handleClose}>&times;</span>
                            <Cart sum={this.state.total} />
                    </div>
                </div>

            </div>
        )
    }


}

            
        
  


export default CartList