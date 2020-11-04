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

import Card from './../../components/card/card'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wallpaper : [
                {
                    image : Fruits,
                    name : 'lemon',
                    style: 'colorful'
                 },
                 {
                     image : Lemons,
                     name: 'lemon',
                     style: 'colorful'
                 },
                 {
                    image : Cupcakes,
                    name: 'cupcakes',
                    style: 'colorful'
                },
                {
                    image : Cactus,
                    name: 'cactus',
                    style: 'colorful'
                },
                {
                    image : Flowers,
                    name: 'flowers',
                    style: 'colorful'
                },
                {
                    image : Confetti,
                    name: 'confetti',
                    style: 'colorful'
                },
                {
                    image : Deer,
                    name: 'deer',
                    style: 'colorful'
                },
                {
                    image : Rocket,
                    name: 'spaceship',
                    style: 'colorful'
                },
                {
                    image : Watermelon,
                    name: 'watermelon',
                    style: 'colorful'
                },
                {
                    image : Leaves,
                    name: 'leaves',
                    style: 'colorful'
                }
            ]
        }
    }

    handleClick = () => {
        console.log('click')
    }

    render() {
        return (
            <div className="outer-container">
                <h1>YOUR WALL</h1>
                <div className="center-container">
                    <div className="navbar">
                        <p>HOME</p>
                        <p>GO TO CART</p>
                        <p>LOG IN</p>
                    </div>
                    <div className="middle-container">
                        <div className="title">
                            <p>WALL-UP®</p>
                        </div>
                        <div className="slogan">
                            <p>EASY WALLPAPERS FOR YOUR HOME</p>
                        </div>
                    </div>
                    <div className="main-container" styles={{ backgroundImage:`url(${Fruits})` }}>
                        <div className="filter">
                            <p className="filter-text">FILTER WALLPAPERS</p>
                            <input className="search-box" type="text" placeholder="Search" />
                            <select className="drop-down">
                                <option value="all">All</option>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="colorful">Colorful</option>
                            </select>
                        </div>
                        <div className="card-container">
                            <Card image={this.state.wallpaper[0].image} />
                            <Card image={this.state.wallpaper[1].image} />
                            <Card image={this.state.wallpaper[2].image} />
                            <Card image={this.state.wallpaper[3].image} />
                            <Card image={this.state.wallpaper[4].image} />
                            <Card image={this.state.wallpaper[5].image} />
                            <Card image={this.state.wallpaper[6].image} />
                            <Card image={this.state.wallpaper[7].image} />
                            <Card image={this.state.wallpaper[8].image} />
                            <Card image={this.state.wallpaper[9].image} />
                        </div>
                    </div>
                </div>
                <h1>IS A CANVAS</h1>
            </div>
            
        )
    }
}

export default Home