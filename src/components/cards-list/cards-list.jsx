import React from 'react'

import Card from '../card/card'

class CardsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        return(
            <div className="card-container">
                {this.props.cards.map(card => 
                    <Card 
                        image={card.image} 
                        key={card.id} 
                        id={card.id}
                        clickMe={this.props.clickMe}
                        price={card.price}
                    />
                )} 
            </div>
        )
    }
}

export default CardsList