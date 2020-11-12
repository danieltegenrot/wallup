import React from 'react'

import './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupStyle : {
                visibility: 'hidden'
            },
            price : 0
        }
    }

    handleClick = () => {
        document.body.style.backgroundImage = 'url(' + this.props.image + ')'
    }

    handleAdd = () => {

        this.setState({
            popupStyle: {
                  ...this.state.popupStyle,
                  visibility: 'visible'
            }
        })

        this.props.clickMe(this.props.id, this.props.price)
    }

    
    render() {
        const cardStyle = {
            backgroundImage: 'url(' + this.props.image + ')',
        }
    
        return(
            <div className="card" style={cardStyle} onClick={this.handleClick}>
                <div className="bottom-container">
                    <span style={this.state.popupStyle} className="popup" id="popup">Added to cart!</span>
                    <button onClick={this.handleAdd}>+</button>
                </div>
            </div>
        )
    }
}

export default Card