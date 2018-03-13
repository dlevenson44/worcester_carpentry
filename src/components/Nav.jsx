import React from 'react'
import { Link } from 'react-router-dom'

// Link below is for kitchen and bath if client wants section readded
// <li className="nav-item" id="nav-li">                    
// <Link to="/kitchenbath" className="nav link">Kitchen & Bath</Link>
// </li>   

// small menu gutteres
//<Link to="/gutters" className="nav link">Gutters</Link>

// large screen gutters
// <li className="nav-item" id="nav-li">                    
// <Link to="/gutters" className="nav link" id="nav-spec">Gutters</Link>
// </li>

const Nav = () => {
    return(
        <div>
            <div className="hidden-md-down" id="nav-container">
                <ul className="nav justify-content-flex-start">
                <li className="nav-item" id="nav-li">                    
                    <Link to="/" className="nav link" id="nav-spec">Home</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/decks" className="nav link" id="nav-spec">Decks</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/floors" className="nav link" id="nav-spec">Floors</Link>
                </li>



             

                <li className="nav-item" id="nav-li">                    
                    <Link to="/remodeling" className="nav link" id="nav-spec">Remodeling</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/restoration" className="nav link" id="nav-spec">Restoration</Link>
                </li>                                              

                <li className="nav-item" id="nav-li">                    
                    <Link to="/roofing" className="nav link" id="nav-spec">Roofing</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/siding" className="nav link" id="nav-spec">Siding</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/windowsdoors" className="nav link" id="nav-spec">Windows & Doors</Link>
                </li>

                <li className="nav-item" id="nav-li">
                    <Link to="/contact" className="nav link" id="nav-spec">Contact Us</Link>
                </li>

                </ul>
            </div>
            <div className="hidden-lg-up">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Menu
				</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="/" className="nav link">Home</Link>
                    <Link to="/decks" className="nav link">Decks</Link>
                    <Link to="/floors" className="nav link">Floors</Link>
                    
                    <Link to="/remodeling" className="nav link">Remodeling</Link>
                    <Link to="/restoration" className="nav link">Restoration</Link>
                    <Link to="/restoration" className="nav link">Restoration</Link>
                    <Link to="/roofing" className="nav link">Roofing</Link>
                    <Link to="/siding" className="nav link">Siding</Link>
                    <Link to="/windowsdoors" className="nav link">Windows & Doors</Link>
                    <Link to="/contact" className="nav link">Contact</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;