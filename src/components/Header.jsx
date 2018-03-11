import React from 'react'
import Logo from './imgs/logo.jpg'

const Header = () => {
    return(
        <div className="header-container">
        <img className="header-img" src={Logo} />
        <div className="header-subcont">
        <ul className="header-list">
            <li className="list-header"><a href="tel:508-523-6797" id="tel">508-523-6797</a></li>
            <li className="list-header">Worcester County and the surrounding areas</li>
            <li className="list-header">Need masonry work done?  <a href="http://worcesterchimneys.com/" id="mason" target="_blank">Click here!</a></li>
        </ul>
        </div>
        </div>
    )
}

export default Header;

