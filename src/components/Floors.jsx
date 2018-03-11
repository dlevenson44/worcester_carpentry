import React from 'react'
import Slideshow1 from './imgs/flooring/flooring3.jpg'
import Slideshow2 from './imgs/flooring/flooring1.jpg'
import Slideshow3 from './imgs/flooring/flooring6.jpg'
import Standalone from './imgs/flooring/flooring4.jpg'

const Floors = () => {
    return(
        <div className="veneer">
            <h3 className="floor-h3">We at Worcester County Carpentry offer a wide range of flooring options.</h3>
            <div className="content-container-c" id="floors1"> 
            <div className="info">            
            <div className="content-container-r">
            <p className="floors-para">We install many flooring choices.<br/>  Our tile options are not limited to floors only, as we also tile:
            <ul>
                <li className="floors-para">Walls</li>
                <li className="floors-para">Shower stalls</li>
                <li className="floors-para">Backsplashes</li>
                <li className="floors-para">Ceilings</li>
            </ul>
            </p>               
            <div className="img">
                <img src={Standalone} id="standalone" />
            </div>
            </div>
            </div>
            <h3 className="floor-h3">We install many types of wood flooring options.</h3>
            <div className="content-subcont" id="floors">      
            <div className="info">            
            <div className="content-container-r">
            <p className="floors-para"> They include but aren't limited to:
            <ul id="floor-sub1">
            	<li className="floors-para">Prefinished Tongue and Groove</li>
            	<li className="floors-para">Un-finished Tongue and Groove</li>
            	<li className="floors-para">Laminate Plank Flooring</li>
            	<li className="floors-para">Vinyl "Wood Look" Tile</li>
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