import React from "react";

import person from "../img/person.jpg";

import "./total.css";

const TotalInfo = () => {
    
    return (
        <aside className="total-cont col-12 col-sm-12 col-md-6 col-lg-5 col-xl-3">
            <div className="total text-secondary">
                {/* Photo */}
                <section className="total-person">
                    <img className="person-img" src={person} alt="Person is lost"/>
                    
                </section>
                {/* Total info */}
                <section className="main-info">
                    <h1> Ruslan Ludchak</h1>
                    <ul>
                        <li> <i className="icon-main fa fa-briefcase" aria-hidden="true"></i> Front-end Developer</li>
                        <li> <i className="icon-main fa fa-home" aria-hidden="true"></i> Chernivtsi/Kolomyia, Ukraine</li>
                        <li> <i className="icon-main fa fa-envelope" aria-hidden="true"></i> <a className="link" href="mailto: heckfyua@gmail.com">heckfyua@gmail.com</a></li>
                        <li> <i className="icon-main fa fa-phone" aria-hidden="true"></i> <a className="link" href="tel:380668580153">0668580153</a></li>
                    </ul>
                </section>

                <hr/>

                {/* Skills */}

                <section className="skills">
                    <h2> <i className="icon-main fa fa-asterisk" aria-hidden="true"></i> Skills</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>HTML5/CSS3</li>
                        <li>Bootstrap</li>
                        <li>SCSS/Sass</li>
                        <li>Gulp</li>
                        <li>jQuery</li>
                        <li>Git</li>
                        <li>Photoshop/Illustrator</li>
                    </ul>
                </section>

                {/* Languages */}
                <section className="skills">
                    <h2> <i className="icon-main fa fa-globe" aria-hidden="true"></i>Languages</h2>
                    <ul>
                        <li>Ukrainian <span className="secondary">Native</span></li>
                        <li>English <span className="secondary">B2</span></li>
                    </ul>
                </section>
            </div>
        </aside>
        
    )
}

export default TotalInfo;