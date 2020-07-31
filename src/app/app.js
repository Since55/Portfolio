import React from 'react';

import TotalInfo from "../total/total";
import WorkExp from '../work-exp/work-exp';
import Education from '../education/education';
import Footer from '../footer/footer';

import "./app.css";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
            <TotalInfo/>
            <main className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-9">
              <WorkExp/> 
              <Education/>
            </main>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
