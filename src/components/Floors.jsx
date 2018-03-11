import React from 'react'
import Slideshow1 from './imgs/flooring/flooring3.jpg'
import Slideshow2 from './imgs/flooring/flooring1.jpg'
import Slideshow3 from './imgs/flooring/flooring6.jpg'
import Standalone from './imgs/flooring/flooring4.jpg'

const Floors = () => {
    return(
        <div className="floors">           
            <div className="content-container-c"> 
            <div className="flooring-subcont">
            <div className="info">
            <h3>We at Worcester County Carpentry offer a wide range of flooring options.</h3>
            <div className="content-container-r">
            <p>We install many flooring choices.<br/>  Our tile options are not limited to floors only, as we also tile:
            <ul>
                <li>Walls</li>
                <li>Shower stalls</li>
                <li>Backsplashes</li>
                <li>Ceilings</li>
            </ul>
            </p>               
            <div className="img">
                <img src={Standalone} id="standalone" />
            </div>
            </div>
            </div>
            </div>
            <div className="flooring-subcont">      
            <div className="info">
            <h3>We install many types of wood flooring options.</h3>
            <div className="content-container-r">
            <p> They include but aren't limited to:
            <ul id="floor-sub1">
            	<li>Prefinished Tongue and Groove</li>
            	<li>Un-finished Tongue and Groove</li>
            	<li>Laminate Plank Flooring</li>
            	<li>Vinyl "Wood Look" Tile</li>
            </ul>
            </p>
            <div className="row" id="flooring-slideshow">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>            
            </ol>
            <div className="carousel-inner" role="listbox" id="floor-slideshow">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={Slideshow1} alt="First slide" id="floor-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow2} alt="Second slide" id="floor-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow3} alt="Third slide" id="floor-img" />
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Floors