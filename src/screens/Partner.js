import React from "react";
// import { link } from 'react-router-dom';
import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

import { InlineWidget } from "react-calendly";

const Partner = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      <div>
        {/* form  */}
        <section className="form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 header join-header center-content">
                <img
                  src={require("../img/handshake(1) 1.png").default}
                  alt="img"
                  className="img-fluid mx-auto d-block"
                />
                <div className="header-text">
                  <h1>Partnerships</h1>
                  <div className="row">
                    <p>
                      We continue to build our partner ecosystem with growth in
                      mind. Leveraging some capabilities that exist within other
                      tech giants’ enterprises across Africa, Europe, Asia and
                      America, we are open for new opportunities to accelerate
                      our offering to clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 form-body">
                <InlineWidget url="https://calendly.com/mrdeji/discuss-potential-partnerships" />
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

export default Partner;
