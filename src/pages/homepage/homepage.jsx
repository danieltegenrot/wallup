import React from 'react'

import './homepage.css'

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

import CardsList from './../../components/cards-list/cards-list'
import CartList from './../../components/cart-modal/cart-modal'
import LogIn from './../../components/login-modal/login-modal'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wallpaper : [
                {
                    id: 1,
                    image : Fruits,
                    name : 'lemon fruit leaves yellow',
                    price: 12
                 },
                 {
                    id: 2,
                    image : Lemons,
                    name: 'lemon yellow leaves tree',
                    price: 15
                 },
                 {
                    id: 3,
                    image : Cupcakes,
                    name: 'cupcakes',
                    price: 5
                },
                {
                    id: 4,
                    image : Cactus,
                    name: 'cactus',
                    price: 18
                },
                {
                    id: 5,
                    image : Flowers,
                    name: 'flowers',
                    price: 14
                },
                {
                    id: 6,
                    image : Confetti,
                    name: 'confetti spots',
                    price: 9
                },
                {
                    id: 7,
                    image : Deer,
                    name: 'deer animal brown',
                    price: 6
                },
                {
                    id: 8,
                    image : Rocket,
                    name: 'spaceship rocket',
                    price: 8
                },
                {
                    id: 9,
                    image : Watermelon,
                    name: 'watermelon fruit',
                    price: 21
                },
                {
                    id: 10,
                    image : Leaves,
                    name: 'leaves flowers',
                    price: 19
                }
            ],
            searchField : '',
            cart : [],
            totalPrice: 0,
        }
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
        console.log(this.state.searchField)
    }

    handleModal = () => {
        // Open up the modal
        var modal = document.getElementById("modal");
        modal.style.display = "block";
    }

    handleLogInModal = () => {
        // Open up the modal
        var modal = document.getElementById("login-modal");
        modal.style.display = "block";
    }

    handleClose = () => {
        // Close the modal
        var modal = document.getElementById("modal")
        var loginModal = document.getElementById("login-modal")
        modal.style.display = "none"  
        loginModal.style.display = "none"  
    }

    removeFromTotal = (sum) => {
        this.setState({totalPrice : this.state.totalPrice - sum})
    }

    render() {

        const { wallpaper, searchField } = this.state
        const filteredCards = wallpaper.filter(card =>
            card.name.toLowerCase().includes(searchField.toLowerCase()) 
        )

        const handleAddItem = (id, price) => {
            //see what card is being clicked and get that cards id
            this.setState({ item : id })
            //push it to state cart
            this.state.cart.push(id)
            this.setState({totalPrice : this.state.totalPrice + price})
        }

        return (
            <div className="outer-container">
                <h1 className="big-fat-text">YOUR WALL</h1>
                <div className="center-container">
                    <div className="navbar">
                        <p className="nav">HOME</p>
                        <p className="nav" onClick={this.handleModal}>GO TO CART</p>
                        <div id="modal" className="modal">
                            <div className="modal-content">
                                <span id="close" className="close" onClick={this.handleClose}>&times;</span>
                                <CartList 
                                    array={this.state.cart} //send cart array to cart-modal
                                    price={this.state.totalPrice}
                                    remove={this.removeFromTotal}
                                />
                            </div>
                        </div>
                        <p className="nav" onClick={this.handleLogInModal}>MY ACCOUNT</p>
                        <div id="login-modal" className="modal">
                            <div className="modal-content">
                                <span id="close" className="close" onClick={this.handleClose}>&times;</span>
                                <LogIn 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="middle-container">
                        <div className="title">
                            <p>WALLUP®</p>
                        </div>
                        <div className="slogan">
                            <p>EASY WALLPAPERS FOR YOUR HOME</p>
                        </div>
                    </div>
                    <div className="main-container" styles={{ backgroundImage:`url(${Fruits})` }}>
                        <div className="filter">
                            <p className="filter-text">FILTER WALLPAPERS</p>
                            <input className="search-box" onChange={this.handleChange} type="text" placeholder="Search" />
                        </div>
                        <CardsList 
                            cards={filteredCards}
                            clickMe={handleAddItem}
                        />
                    </div>
                </div>
                <h1 className="big-fat-text">IS A CANVAS</h1>
            </div>
            
        )
    }
}

export default Home