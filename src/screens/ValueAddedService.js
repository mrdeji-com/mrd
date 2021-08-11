import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';

const ValueAdded = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* ValueAdded-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left">
                                <img src={require("../img/high-value 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Value Added Services</span></h1>
                                    <div className="row">
                                        <p>We provide managed development service to facilitate your VAS enterprise product</p>
                                    </div>
                                    <Link to="/schedule_session" className="button">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information">
                                <p>This is a less utilized gold mine from which billions of revenues can be explored. Pioneers
                                    of the VAS business entered
                                    with very little formalities and entry barriers except for availability of the right
                                    backbone infrastructure. From
                                    onset, these players have helped numerous businesses in the entertainment, sports, lifestyle
                                    and other prominent
                                    industries to cash in on the use of their intellectual properties to service the needs of
                                    users over mobile digital
                                    channels. <br /><br />
                                    The VAS industry is currently being revolutionized with myriads of regulatory and compliance
                                    requirements, however
                                    creative and long-term driven players will continue to build solutions that are relevant to
                                    the users. More so,
                                    established Mobile Network Operators and other partners within their ecosystem continue to
                                    drive new initiatives that
                                    provide platform for VAS players. <br /><br />
                                    We at <a href>mrdeji.com</a> provide managed development service to facilitate your VAS
                                    enterprise
                                    product design and operations.
                                    <a href>Schedule a session</a> with us to establish the required partnership engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSlider />
            </div>
            <Footer />
        </div>
    )
}

export default ValueAdded