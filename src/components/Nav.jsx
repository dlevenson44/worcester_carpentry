import React from 'react'
import { Link } from 'react-router-dom'

// Link below is for kitchen and bath if client wants section readded
// <li className="nav-item" id="nav-li">                    
// <Link to="/kitchenbath" className="nav link">Kitchen & Bath</Link>
// </li>   

const Nav = () => {
    return(
        <div>
            <div className="hidden-sm-down" id="nav-container">
                <ul className="nav justify-content-flex-start">
                <li className="nav-item" id="nav-li">                    
                    <Link to="/" className="nav link">Home</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/decks" className="nav link">Decks</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/floors" className="nav link">Floors</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/gutters" className="nav link">Gutters</Link>
                </li>

             

                <li className="nav-item" id="nav-li">                    
                    <Link to="/remodeling" className="nav link">Remodeling</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/restoration" className="nav link">Restoration</Link>
                </li>       
                
                <li className="nav-item" id="nav-li">                    
                    <Link to="/restoration" className="nav link">Restoration</Link>
                </li>                         

                <li className="nav-item" id="nav-li">                    
                    <Link to="/roofing" className="nav link">Roofing</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/siding" className="nav link">Siding</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/windowsdoors" className="nav link">Windows & Doors</Link>
                </li>

                </ul>
            </div>
            <div className="hidden-md-up">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Menu
				</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="/" className="nav link">Home</Link>
                    <Link to="/decks" className="nav link">Decks</Link>
                    <Link to="/floors" className="nav link">Floors</Link>
                    <Link to="/gutters" className="nav link">Gutters</Link>
                    <Link to="/remodeling" className="nav link">Remodeling</Link>
                    <Link to="/restoration" className="nav link">Restoration</Link>
                    <Link to="/restoration" className="nav link">Restoration</Link>
                    <Link to="/roofing" className="nav link">Roofing</Link>
                    <Link to="/siding" className="nav link">Siding</Link>
                    <Link to="/windowsdoors" className="nav link">Windows & Doors</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;