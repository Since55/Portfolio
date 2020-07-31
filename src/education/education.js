import React from "react";

import "./education.css";

const Education = () => {
    

    return (
        <section className="edu-cont">
            <div className="edu section-container text-secondary">
                <div className="title"> 
                    <h2><i className="icon-main fa fa-university" aria-hidden="true"></i> Education</h2> 
                </div>
                <hr className="hr-fix"/>
                <ul className="main-list">
                    <li>
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-header">Chernivtsi National Univerity</div>
                            <div className="card-body">
                                <h4 className="card-title">Computer Science</h4>
                                <p className="card-text">2019-2023</p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-header">Udemy</div>
                            <div className="card-body">
                                <h4 className="card-title">React.js Development</h4>
                                <p className="card-text">2020</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Education;