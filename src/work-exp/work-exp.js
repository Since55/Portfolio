import React from "react";

import "./work-exp.css";

const WorkExp = () => {
    

    return (
        <section className="work-cont">
            <div className="work section-container text-secondary">
                {/* Header */}
                <div className="title"> 
                    <h2><i className="icon-main fa fa-briefcase" aria-hidden="true"></i> Work Experience</h2> 
                </div>
                <hr className="hr-fix"/>
                {/* Work List */}
                <ul className="main-list">
                    <li>
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-header"><a className="link-sec" href="https://osf.digital/">OSF Digital</a></div>
                            <div className="card-body">
                                <h4 className="card-title">Intern Front-end Developer</h4>
                                <p className="card-text">1 month training program. Development of a big landing website with different technologies</p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-header">Self-employed</div>
                            <div className="card-body">
                                <h4 className="card-title">Computer Repair Specialist</h4>
                                <p className="card-text">Computer hardware &amp; software service, repairment and assembling</p>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>

        </section>
    )
}

export default WorkExp;