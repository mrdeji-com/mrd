import React from "react";
// import { link } from 'react-router-dom';
import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

import { InlineWidget } from "react-calendly";

const Services = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      <div>
        {/* form  */}
        <section className="form">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 header center-content">
                <img
                  src={require("../img/ffr 1.png").default}
                  className="img-fluid mx-auto d-block"
                  alt="img"
                />
                <div className="header-text">
                  <h1>
                    Schedule a{" "}
                    <span className="emphasis">Strategy Session</span>
                  </h1>
                  <div className="row">
                    <p>
                      Lets help you scale up with our proficiency in creating
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 form-body">
                <InlineWidget url="https://calendly.com/mrdeji/30min" />
              </div>
            </div>
          </div>
        </section>
        {/* grow  */}
        <section className="grow">
          <h3>
            <span className="emphasis">See How we help grow your business</span>
          </h3>
          <p>Increase your revenue and improve operational efficiency</p>
          <div className="grow-carousel"></div>

          {/* owl-carousel  */}
          <Carousel />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
