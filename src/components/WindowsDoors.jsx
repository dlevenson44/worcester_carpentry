import React from 'react'
import Slideshow1 from './imgs/windowsdoors/windowsdoors2.jpg'
import Slideshow2 from './imgs/windowsdoors/windowsdoors4.jpg'
import Slideshow3 from './imgs/windowsdoors/windowsdoors1.jpg'

const WindowsDoors = () => {
    return(
        <div className="veneer" id="windows1">
            <h3 className="content-h3">We install replacement windows and new contruction windows depending on the specific application.</h3>
            <h3 className="content-h3">We work with many manufacturers of windows, as well as many different styles of windows.</h3>
            <div className="content-subcont" id="windows">
            <div className="windows-info">
            <p className="resto-para">We have experience in installing doors of all types and styles also.  Doors we install include:
            <ul>
            	<li>Entry Doors</li>
            	<li>Entry Doors with Sidelights</li>
            	<li>Sliding Patio Doors</li>
            	<li>French Doors</li>
            	<li>All Types of Interior Doors</li>
            </ul>
            </p>
            </div>
            <div className="row" id="flooring-slideshow">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>            
            </ol>
            <div className="carousel-inner" role="listbox" id="floor-slideshow">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={Slideshow1} alt="First slide" id="roof-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow2} alt="Second slide" id="roof-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow3} alt="Third slide" id="roof-img" />
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default WindowsDoors