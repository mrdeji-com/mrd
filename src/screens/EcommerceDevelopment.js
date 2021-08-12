import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const EcommerceDevelopment = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* EcommerceDevelopment-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/shopping 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">eCommerce Development</span></h1>
                                    <div className="row">
                                        <p>Maximize your efficiency, mark your records, and beat your targets.</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Ask us How!</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="zoom-in">
                                <p>
                                    Your products and services in a digital store are a no longer a novel concept. Businesses
                                    have implemented this strategy
                                    with several iterations of approach that continue to spin billions of dollars in transaction
                                    records annually.
                                    But the big question is, has your business benefited from this market? If yes, are you able
                                    to sustain the benefits
                                    through continuous improvement and adaptation to the realities of recent consumer behavior
                                    indexes? If not at all, where
                                    can you pick up and start putting the frames together?
                                    Our ecommerce development team understand business and trading concepts. They work with
                                    product and service owners to
                                    analyze target customers and custom-build the right platform that speaks to their specific
                                    interests. If you have ever
                                    sold online before, put a mark on your records, employ us and then set new targets. This is
                                    one way to measure our
                                    effectiveness. <a href>Schedule a session with us today</a>
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

export default EcommerceDevelopment