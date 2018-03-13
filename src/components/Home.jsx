import React from 'react'
import Slideshow1 from './imgs/siding/siding5.jpg'
import Slideshow2 from './imgs/roofing/roofing8.JPG'
import Slideshow3 from './imgs/decksporches/decksporches1.jpg'

const Home = () => {
    return (
        <div className="veneer" id="home1">
        <div className="content-container-r" id="home1">        
            <div id="home">
                <h3 className="content-h3">Over 15 Years Experience</h3>
                <p className="resto-para">Next time you're thinking of adding that new deck,</p>                
                <p className="resto-para">restoring those scuffed floors, or remodeling your front door,</p>
                <p className="resto-para"><a href="tel:15085236797" className="sub-link">call us</a> to get the job done right.</p>
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

export default Home;