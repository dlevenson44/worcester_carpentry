import React from 'react'
import Slideshow1 from './imgs/siding/siding16.JPG'
import Slideshow2 from './imgs/siding/siding9.jpg'
import Slideshow3 from './imgs/siding/siding11.JPG'
//below line is descriptor we may move from siding to home component
//<p>We will work with all customers to help find what works best for you.</p>

// 5 for banner

const Siding = () => {
    return(
        <div className="siding-container">
            <h1 className="siding-header">Siding</h1>
            <div className="siding-subcont">
            <div className="siding-info">
            <p>We work with a number of siding materials to maximize the beauty of your homes exterior.  Including but not limited to:
            <ul>
            	<li>Vinyl Siding</li>
            	<li>Wood Clapboard</li>
            	<li>Cedar Shaks</li>
            	<li>Hardie Plank Siding</li>
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
    )
}

export default Siding