import React from 'react'
import Slideshow1 from './imgs/remodel/remodel7.jpg'
import Slideshow2 from './imgs/remodel/remodel1.jpg'
import Slideshow3 from './imgs/remodel/remodel4.jpg'
import Slideshow4 from './imgs/remodel/remodel9.jpg'

const Remodeling = () => {
    return(
        <div className="veneer">
            <h3 className="content-h3">We work with our customers to help find the most practical solutions to their remodeling projects.</h3>
            <div className="content-container-r" id="remodel">
            <div className="remodel-info">
            <p className="remodel-para">We are experienced in all phases of home remodeling, including:</p>
            <ul className="remodel-ul">
                <li className="remodel-para">Interior</li>
                <li className="remodel-para">Exterior</li>
                <li className="remodel-para">Basements</li>
                <li className="remodel-para">Kitchens</li>
                <li className="remodel-para">Bathrooms</li>
            </ul>
            </div>
            <div className="row" id="flooring-slideshow">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> 
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>            
            </ol>
            <div className="carousel-inner" role="listbox" id="floor-slideshow">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={Slideshow1} alt="First slide" id="remodel-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow2} alt="Second slide" id="remodel-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow3} alt="Third slide" id="remodel-img" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={Slideshow4} alt="Fourth slide" id="remodel-img" />
                </div>                
            </div>
            </div>
            </div>
            </div>           
        </div>
    )
}

export default Remodeling