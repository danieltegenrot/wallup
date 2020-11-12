import React from 'react'

import './cart-item.css'

import Fruits from './../../assets/fruits.png'
import Cactus from './../../assets/cactus.jpg'
import Cupcakes from './../../assets/cupcakes.jpg'
import Lemons from './../../assets/lemons.jpg'
import Flowers from './../../assets/floral.jpg'
import Confetti from './../../assets/confetti.jpg'
import Deer from './../../assets/deer.png'
import Rocket from './../../assets/space.png'
import Watermelon from './../../assets/watermelon.jpg'
import Leaves from './../../assets/leaves.jpg'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {}
        }
    }   

    componentDidMount() {
        this.props.setPrice()
    }
    
    render() {

        var myPrice = 0

        const swatch = () => {

            switch (this.props.item) {
            case 1 :
                return (
                    <div className="thumb-container">
                        <img className="thumb" src={Fruits} />
                        <p>{myPrice = 12}$</p>
                    </div> )
                break
            case 2 :
                return <div className="thumb-container"><img className="thumb" src={Lemons} /><p>{myPrice = 15}$</p></div> 
                break
            case 3 :
                return <div className="thumb-container"><img className="thumb" src={Cupcakes} /><p>{myPrice = 5}$</p></div>
                break
            case 4 :
                return <div className="thumb-container"><img className="thumb" src={Cactus} /><p>{myPrice = 18}$</p></div>
                break
            case 5 :
                return <div className="thumb-container"><img className="thumb" src={Flowers} /><p>{myPrice = 14}$</p></div>
                break
            case 6 :
                return <div className="thumb-container"><img className="thumb" src={Confetti} /><p>{myPrice = 9}$</p></div>
                break
            case 7 :
                return <div className="thumb-container"><img className="thumb" src={Deer} /><p>{myPrice = 6}$</p></div>
                break
            case 8 :
                return <div className="thumb-container"><img className="thumb" src={Rocket} /><p>{myPrice = 8}$</p></div>
                break
            case 9 :
                return <div className="thumb-container"><img className="thumb" src={Watermelon} /><p>{myPrice = 21}$</p></div>
                break
            case 10 :
                return <div className="thumb-container"><img className="thumb" src={Leaves} /><p>{myPrice = 19}$</p></div>
                break    
        }
        }

        const handleClose = () => {
            this.setState({style : {display: 'none'}})
            this.props.remove(myPrice)
        }

        return (
            <div style={this.state.style} id="cart-item" className="cart-item">
                <span id="close-item" className="close-item" onClick={handleClose}>&times;</span>
                {swatch()}
            </div>
        )
    }
}

export default Item