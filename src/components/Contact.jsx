import React from 'react'

const Contact = () => {
    return(
        <div className="veneer">
            <h3 className="content-h3">Contact Us For Expert Craftsmanship</h3>
            <h5 className="contact-info">If you are looking for expert carpentry work and maintenance, call Worcester County Carpentry today!</h5>
            <div className="content-container-r" id="contact">
            <div className="content-container-c" id="contact1">
                <h5 className="sub-header">Business Hours:</h5>
                <p className="sub-info">Monday - Saturday:</p>
                <p className="sub-info">Call Pat today to schedule your appointment!</p>
                <p className="sub-info">8:00 AM - 6:00 PM</p>
            </div>
            <div className="content-container-c" id="contact2">
                <h5 className="sub-header">Phone Number:</h5>
                <a href="tel:15085236797" className="sub-link">1-508-523-6797</a>
                <h5 className="sub-header">Email:</h5>
                <a href="mailto:patrick@worcesterchimneys.com" className="sub-link">patrick@worcesterchimneys.com</a>
                <h5 className="sub-header">Address:</h5>
                <p className="sub-info">Worcester County Carpentry</p>
                <p className="sub-info">95 Prescott St.</p>
                <p className="sub-info">Worcester, MA, 01605</p>                
            </div>
            </div>
        </div>
    )
}

export default Contact;
