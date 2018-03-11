import React from 'react'
import Slideshow1 from './imgs/decksporches/decksporches4.jpg'
import Slideshow2 from './imgs/decksporches/customdeckstairs1.jpg'
import Slideshow3 from './imgs/decksporches/decksporches8.jpg'


// use 1 image as banner, 3 for side by side slideshow
// banner-- decksporches4
// slideshow-- customdeckstairs1, decksporches7, deckporches8

// banner--             <img src={Photo} className="banner-img"/>

const Decks = () => {
    return(
        <div>
            <h1 className="deck-header">Decks and Porches</h1>
        <div className="content-container-r" id="decks">        
            <div className="deck-info">
            <p>We build and re-surface decks and porches.</p>
            <p>Decks and porches can be as elaborate or as economical as needed.</p>
            <p>We work with both wood and composite materials, as well as a combination of the two.</p>
            <p>All decks and porches we build or repair are built or brought back to code regulations.</p>
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

export default Decks