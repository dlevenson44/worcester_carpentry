import React from 'react'
import Slideshow1 from './imgs/restoration/restoration_1.JPG'
import Slideshow2 from './imgs/restoration/restoration_2.JPG'

const Restoration = () => {
    return(
        <div className="veneer">
            <h3 className="content-h3">We Do Restoration Work</h3>
            <div className="content-subcont" id="resto">
            <div className="resto-info">
            <p className="resto-para">Worcester County Carpentry work with historic and craftsman style buildings to restore, or recreate, architectual details original to the home.  We also recreate certain details custom to a customer's vision.</p>
            </div>
            <div className="row" id="flooring-slideshow">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>        
            </ol>
            <div className="carousel-inner" role="listbox" id="floor-slideshow">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={Slideshow1} alt="First slide" id="remodel-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow2} alt="Second slide" id="remodel-img" />
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Restoration