import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSlider = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section className="service-slider" data-aos="zoom-out">
            <div className="container intro">
                <h3>See How we help <span className="emphasis">grow your business</span></h3>
                <p>Launch initiatives that give you competitive edge and identify untapped markets</p>
            </div>
            <div className="services-carousel">
                <Link to="/digital_content">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/content 2.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Digital Content</h3>
                            </div>
                        </div>
                        <p>Do you already have a website or other digital asset project ideas such as Corporate
                            Profile, Brochures and Power Point
                            presentation design requirements but lack adequate content to bring those assets
                            into fruition? Reach out to us for full
                            stack of Digital Content creation service that delivers holistic elements required
                            to bring those digital products to
                            existence</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/mobile_app_development">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/user-interface (1) 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Mobile App Development</h3>
                            </div>
                        </div>
                        <p>Mobile users grow at astronomical rates and digital platforms are built today with
                            mobile first in mind. If you have
                            seen a simple mobile application for example, that helps you to monitor your daily
                            routine such as exercising, or
                            complex applications through which you can purchase US stocks from anywhere in the
                            world, then you have only seen a tip
                            of the iceberge</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/idea_mapping">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/design-process (1) 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Idea Mapping</h3>
                            </div>
                        </div>
                        <p>We have a team of Product research and user experience designers who understand the
                            concept of turning ideas into
                            products with viable revenue generation potentials. You can dream and transmute the
                            visions captured in those invisible
                            realms into live solutions that the world needs to become the paradise that it had
                            always strived to be</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/ecommerce_development">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/shopping 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Ecommerce Development</h3>
                            </div>
                        </div>
                        <p>Your products and services in a digital store are a no longer a novel concept.
                            Businesses have implemented this strategy
                            with several iterations of approach that continue to spin billions of dollars in
                            transaction records annually. <br />
                            But the big question is, has your business benefited from this market?</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/payment_integration_services">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/debit-card 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Payment Integration Services</h3>
                            </div>
                        </div>
                        <p>We have taken delivery of world’s best experience through payment platforms that
                            solve our direst need of online payment
                            settlement today. No longer should you worry about how your customers will pay for
                            your products and services over your
                            digital channels.</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/security_services">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/shield 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Security Services</h3>
                            </div>
                        </div>
                        <p>Web, mobile or specialized applications required to enable your businesses to receive
                            payment can be exploited, hence
                            there is need to continuously learn about these exploitations and implement ways to
                            mitigate against them.</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/web_application_development">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/programming (2) 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Web Application Development</h3>
                            </div>
                        </div>
                        <p>We develop web applications that give your business significant leap over
                            competition. We do hope that you recognize
                            your customers’ recent acquisition of high-end mobile devices and personal computers
                            that can operate at light speed and
                            consume larger proportion of information regardless of the media through which the
                            information is dispersed</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/web_design_services">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/website 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Web Design Service</h3>
                            </div>
                        </div>
                        <p>When businesses require public visibility, they naturally turn to website design
                            agencies to build what they believe
                            represents their brand identity. Typical website design projects capture business
                            profiles, products, services,
                            achievements, contact information and some other relevant data that enable
                            businesses attract potential customers and
                            buyers</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/coorporate_design_services">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/logo-design 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Corporate Design Service</h3>
                            </div>
                        </div>
                        <p>We see a high demand from organisations on their need to standardize brand style with
                            other marketing collaterals within
                            their enterprise. Some of these organisations have in the past seen corporate and
                            brand design endeavour as waste of
                            time or money or both</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
                <Link to="/value_added_services">
                    <div className="service">
                        <div className="row service-header">
                            <div className="col-2">
                                <img src={require("../img/high-value 1.png").default} alt="img" />
                            </div>
                            <div className="col-10">
                                <h3>Value Added Services (VAS)</h3>
                            </div>
                        </div>
                        <p>This is a less utilized gold mine from which billions of revenues can be explored.
                            Pioneers of the VAS business entered
                            with very little formalities and entry barriers except for availability of the right
                            backbone infrastructure.</p>
                        <a href>Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ServiceSlider;
