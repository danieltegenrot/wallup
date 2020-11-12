import React from 'react'

import './cart.css'

class Cart extends React.Component {
    constructor() {
        super()
    }

    thanks = (e) => {
        e.preventDefault() 
        document.getElementById('form').style.visibility = 'hidden'
        document.getElementById('checkout-title').style.visibility = 'hidden'
        document.getElementById('thank-you').style.visibility = 'visible'
    }

    render() {
        return (
            <div>
                <h1 id="checkout-title" className="checkout-title">{this.props.sum} $ is a small price for a new home.</h1>
                <form  id="form" onSubmit={this.thanks}>
                    <label className="checkout-title">Credit card number</label><input type="text" required></input>
                    <label className="checkout-title">Name</label><input type="text" required></input>
                    <div className="exp-cvv">
                        <label className="checkout-title">Expiration Date:</label>
                        <input className="short-input" type="text" required></input>
                        <label className="checkout-title">CVV:</label>
                        <input className="short-input" type="text" required></input>
                    </div>
                    <button type="submit" className="proceed-button">Proceed</button>
                </form>
                <div id="thank-you">
                    <p>Your shipment is on its way. Have a nice day!</p>
                </div>
                
            </div>
        )
    }
}

export default Cart