import React from "react";

import "./WhatWeDo.scss"
const WhatWeDo = () => {

  return (
    <div>
      <div className="what-we-do">
            <h1 className="mission-title">
                What We Do
            </h1>
            <div className="card-section">
                <div className="card bg-secondary">
                    <div className="card-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQADBXDSDLy8rbBCLAERG4gdDUMIXTQS82bob6a-cFXGYoQK-g" alt="Veterinarian Service"/>
                        <div className="card-text">Veterinarian Service</div>
                    </div>
                </div>
                <div className="card bg-secondary">
                    <div className="card-img">
                        <img src="http://www.africanindustries.com/images/chemical.jpg" alt="Chemical"/>
                        <div className="card-text">Free medical testing</div>
                    </div>
                </div>
                <div className="card bg-secondary">
                    <div className="card-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi_YrOAnaQC3woWr74PVaFAysHz4GWfRoEJo8iPQfDojMfxmp6"/>
                        <div className="card-text">Frequent Checkup schedule</div>
                    </div>
                </div>
                <div className="card bg-secondary">
                    <div className="card-img">
                        <img src="http://www.africanindustries.com/images/Glass.jpg" alt="Glass"/>
                        <div className="card-text">Condusive environment</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default WhatWeDo;



