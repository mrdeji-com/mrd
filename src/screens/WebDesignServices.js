import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const WebDesign = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* WebDesign-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/website 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Web Design Service</span></h1>
                                    <div className="row">
                                        <p>Let’s give your business the public visibility it really deserves!</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="fade-left">
                                <p>
                                    When businesses require public visibility, they naturally turn to website design agencies to
                                    build what they believe
                                    represents their brand identity. Typical website design projects capture business profiles,
                                    products, services,
                                    achievements, contact information and some other relevant data that enable businesses
                                    attract potential customers and
                                    buyers. <br /><br />
                                    Evaluation of website design project success or failure however lack standard criteria and
                                    metrics that can be used to
                                    improve upon or rebuild the designed web outlook and reorganize the program approach. Hence,
                                    most web design projects
                                    are bound to fail. <br /><br />
                                    Businesses simply fail to classify Web Design projects as agile deliverables, but rather as
                                    waterfall project
                                    deliverables. <br /><br />
                                    To have a successful website design program, we need to reevaluate the intended business use
                                    vis-à-vis your internal
                                    digital strategy, to find a convergence point that can be leveraged to build active web
                                    interface designs and continuous
                                    improvement program. <br /><br />
                                    Your business website should not be done with once and for all mindset. It is meant to be a
                                    reflection of your business’
                                    dynamism and so requires constant reorganization and adaptation to new user requirements and
                                    strategies. <b>Speak to our
                                        Website Design Program Management team on 07006733540</b> or <a href>schedule a
                                            session</a> for your next Web Design Program.
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

export default WebDesign