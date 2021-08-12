import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const DigitalContent = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* digital-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/content2.png").default} className="img-fluid" alt="img" />
                                <div className="header">
                                    <h1><span className="emphasis">Digital Content</span></h1>
                                    <div className="row">
                                        <p>Lets help you scale up with our proficiency in creating</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="fade-left">
                                <p>Do you already have a website or other digital asset project ideas such as Corporate Profile,
                                    Brochures and Power Point
                                    presentation design requirements but lack adequate content to bring those assets into
                                    fruition? Reach out to us for full
                                    stack of Digital Content creation service that delivers holistic elements required to bring
                                    those digital products to
                                    existence. <br /><br />
                                    We have content researchers, writers and graphic design experts that combine efforts with
                                    your internal business
                                    stakeholders to convert your thoughts into tangible digital product designs. These designs
                                    will go through multiple
                                    quality checks internally and externally with your users before they are passed through
                                    design phases that translate
                                    into final outputs. <br /><br />
                                    We have proven methodologies for engaging you and your team to capture your original
                                    thoughts and then represent them to
                                    you in formats that you and your users can best understand and interact with. We design
                                    concepts that will turn into
                                    digital platforms or services that can boost your overall business objectives, and then
                                    carry out actual implementation
                                    which is rounded up with Quality Assurance and testing. You don’t want to burden yourself
                                    with brainstorming with
                                    limited horizons again, reach out to our team with multi-industry expertise to support your
                                    next digital tech project.
                                    <a href>Book a session here</a>
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

export default DigitalContent