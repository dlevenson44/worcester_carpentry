import React from 'react'

// banner img-- flooring 4
// standalone img-- flooring 2
// slideshow imgs--flooring 3, 1, 6

const Floors = () => {
    return(
        <div>        
            <h1>Flooring</h1>
            <div className="info">
            <p>We at Worcester County Carpentry offer a wide range of flooring options.  We install many flooring choices.  Our tile options are not limited to floors only, as we also tile:</p>
            <ul>
                <li>Walls</li>
                <li>Shower stalls</li>
                <li>Backsplashes</li>
                <li>Ceilings</li>
            </ul>     
            </div>
            <div className="img">
            </div>       
            <div className="info">
            <p>We install many types of wood flooring options.  They include but aren't limited to:</p>
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
    )
}

export default Floors