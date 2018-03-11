import React from 'react'
import Slideshow1 from './imgs/roofing/roofing2.JPG'
import Slideshow2 from './imgs/roofing/roofing4.JPG'
import Slideshow3 from './imgs/roofing/roofing5.JPG'

const Roofing = () => {
    return(
        <div className="veneer">
            <h3 className="content-h3">Roofing</h3>
            <div className="content-subcont" id="roofing">
            <div className="roofing-info">
            <p className="roofing-para">All phases of asphalt shingle roofing, including repairs and entire roof replacements.</p>
            <p className="roofing-para">We pay special attention to all areas of your roof that require flashing or extra underlayment membrane.</p>
            <p className="roofing-para">We will also repair/replace any areas of siding that have been affected by the condition and age of the roof and materials around it.</p>
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

export default Roofing