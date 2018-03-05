import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <div className="hidden-sm-down" id="nav-container">
                <ul className="nav justify-content-center">
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
                    <Link to="/kitchenbath" className="nav link">Kitchen & Bath</Link>
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
        </div>
    )
}

export default Nav;