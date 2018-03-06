import React from 'react'
import Slideshow1 from './imgs/flooring/flooring3.jpg'
import Slideshow2 from './imgs/flooring/flooring1.jpg'
import Slideshow3 from './imgs/flooring/flooring6.jpg'
import Standalone from './imgs/flooring/flooring4.jpg'

const Floors = () => {
    return(
        <div>           
            <h1>Flooring</h1>
            <div className="flooring-container"> 
            <div className="flooring-subcont">
            <div className="info">
            <p>We at Worcester County Carpentry offer a wide range of flooring options.  We install many flooring choices.<br/>  Our tile options are not limited to floors only, as we also tile:</p>
            <div className="sub">
            <ul>
                <li>Walls</li>
                <li>Shower stalls</li>
                <li>Backsplashes</li>
                <li>Ceilings</li>
            </ul>                 
            <div className="img">
                <img src={Standalone} id="standalone" />
            </div>
            </div>
            </div>
            </div>
            <div className="flooring-subcont">      
            <div className="info">
            <p>We install many types of wood flooring options.  They include but aren't limited to:</p>
            <div className="sub">
            <ul>
            	<li>Prefinished Tongue and Groove</li>
            	<li>Un-finished Tongue and Groove</li>
            	<li>Laminate Plank Flooring</li>
            	<li>Vinyl "Wood Look" Tile</li>
            </ul>
            </div>
            <div className="img">
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Floors