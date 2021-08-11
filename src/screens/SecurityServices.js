import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';

const SecurityServices = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* SecurityServices-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left">
                                <img src={require("../img/shield 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Security Services</span></h1>
                                    <div className="row">
                                        <p>identify current gaps in your integration systems to determine the best next line of
                                            action</p>
                                    </div>
                                    <Link to="/schedule_session" className="button">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information">
                                <p>
                                    Web, mobile or specialized applications required to enable your businesses to receive
                                    payment can be exploited, hence
                                    there is need to continuously learn about these exploitations and implement ways to mitigate
                                    against them. <br /><br />
                                    There are vast array of malicious users, sponsored attackers or even ill-meaning internal
                                    staffs with the intention to
                                    cripple your business operations or steal customer’s sensitive data. We ensure that baseline
                                    analysis of your
                                    environment is carried out to reflect the underlying risks and implement systems that help
                                    to subdue and eliminate those <br /><br />
                                    risks.
                                    We take security above everything else in payment integration, collection of user
                                    information and integration with
                                    third-party systems. You cannot overemphasize the need for our team to collaborate with
                                    yours at the stage of
                                    understanding your business’ threat landscape. <a href>Reach out to us</a> to schedule a
                                    session to
                                    identify current gaps in your
                                    integration systems to determine the best next line of action
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

export default SecurityServices