import React from "react";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer text-white">
            <div className="container justify-content-center text-center">
                <h3>Find me</h3>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Ruslan.Ludchak/" >
                        <span className="d-none">Facebook</span><i  className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/Since55">
                        <span className="d-none">Telegram</span><i  className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruslan-ludchak-516406197/">
                        <span className="d-none">LinkedIn</span><i  className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/r_ludchak/">
                        <span className="d-none">Instagram</span><i  className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
                <div>
                    <p>Ruslan Ludchak</p>  
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;