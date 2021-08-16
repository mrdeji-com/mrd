import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const WebApplicationDevelopment = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* WebApplicationDevelopment-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/programming (2) 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Web Application Development</span></h1>
                                    <div className="row">
                                        <p>Engage us to interpret your next Web Application development program</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Engage us Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="fade-left">
                                <p>
                                    We develop web applications that give your business significant leap over competition. We do
                                    hope that you recognize
                                    your customers’ recent acquisition of high-end mobile devices and personal computers that
                                    can operate at light speed and
                                    consume larger proportion of information regardless of the media through which the
                                    information is dispersed. <br /><br />
                                    Internet Service Providers have also aided the ability of users to demand better speed,
                                    accuracy and quality of
                                    experience at their end of the chain, either the service provided is in picture, video and
                                    basic graph and text formats.
                                    Your business is consistently challenged to set the pace for innovation and digital
                                    pioneering efforts that will
                                    continue to delight these enthusiastic users. <br /><br />
                                    Still unclear how to plug the missing links? Engage us to interpret your next Web
                                    Application development program and we
                                    will split the elements right before your eyes and assemble it all back into a workable web
                                    application development
                                    project that we can jointly execute and operate. <Link to="/schedule_session">Reach out to us to schedule a Strategy Session.</Link>
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

export default WebApplicationDevelopment