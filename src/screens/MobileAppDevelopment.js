import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const MobileAppDevelopment = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* mobile-app-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/user-interface (1) 2.png").default} className="img-fluid" alt="img" />
                                <div className="header">
                                    <h1><span className="emphasis">Mobile App Development</span></h1>
                                    <div className="row">
                                        <p>Have you rediscovered the way to deliver services using mobile</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="fade-left">
                                <p>
                                    Mobile users grow at astronomical rates and digital platforms are built today with mobile
                                    first in mind. If you have
                                    seen a simple mobile application for example, that helps you to monitor your daily routine
                                    such as exercising, or
                                    complex applications through which you can purchase US stocks from anywhere in the world,
                                    then you have only seen a tip
                                    of the iceberg. <br /><br />
                                    Your business will develop more mobile applications that will be adaptive to specialized
                                    functions. And you may not
                                    already have a very clear picture yet. <Link to="/idea_mapping">Our Idea Mapping</Link> and Mobile
                                    Application Development service come in handy when
                                    your organisation need to build its next banking systems, online booking, mobile tracker,
                                    employee effectiveness and
                                    other amazing mobile applications that will pivot it into its desired growth. <br /><br />
                                    Have you rediscovered the way to deliver services to your customers or better manage your
                                    internal operations using
                                    mobile? <Link to="/schedule_session">Speak to us today</Link> to frame up this strategy into a digital plan that
                                    can be implemented in a mobile application.
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

export default MobileAppDevelopment