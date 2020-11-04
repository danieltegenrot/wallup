import React from 'react'

import './card.css'


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleClick = () => {
        document.body.style.backgroundImage = 'url(' + this.props.image + ')'
    }

    
    render() {
        const style = {
            backgroundImage: 'url(' + this.props.image + ')',
          }
    
        return(
            <div className="card" style={style} onClick={this.handleClick}>
                <div className="bottom-container">
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default Card