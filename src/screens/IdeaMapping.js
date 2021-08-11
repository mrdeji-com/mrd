import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';

const IdeaMapping = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* idae-mapping-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left">
                                <img src={require("../img/design-process (1) 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Idea Mapping</span></h1>
                                    <div className="row">
                                        <p>Let’s help you attract opportunities for your potential solutions</p>
                                    </div>
                                    <Link to="/schedule_session" className="button">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information">
                                <p>
                                    We have a team of Product research and user experience designers who understand the concept
                                    of turning ideas into
                                    products with viable revenue generation potentials. You can dream and transmute the visions
                                    captured in those invisible
                                    realms into live solutions that the world needs to become the paradise that it had always
                                    strived to be. <br /><br />
                                    World tech leaders have used hands sharpened with multi-cultural and heterogenous user
                                    experience to come up with
                                    transformational solutions that continue to influence and impact generations before and
                                    after us. Join the league of
                                    these champions by <a href>reaching out to us</a> with your digital tech idea and we will
                                    work with you
                                    to develop all the building
                                    blocks. <br /><br />
                                    Our ecosystem partners are growing and will continue to attract opportunities for your
                                    potential solution to reach the
                                    moon. The first step is to reach out for us to review and establish a plan.
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

export default IdeaMapping