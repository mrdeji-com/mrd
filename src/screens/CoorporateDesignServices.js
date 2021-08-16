import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';
import Aos from "aos";
import "aos/dist/aos.css";

const CoorporateDesign = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* CoorporateDesign-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left" data-aos="fade-right">
                                <img src={require("../img/logo-design 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Corporate Design Services</span></h1>
                                    <div className="row">
                                        <p>You do not want your brand to be misinterpreted! Let’s help you communicate your
                                            brand professionally</p>
                                    </div>
                                    <Link to="/schedule_session" className="button" data-aos="zoom-in">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information" data-aos="fade-left">
                                <p>
                                    We see a high demand from organisations on their need to standardize brand style with other
                                    marketing collaterals within
                                    their enterprise. Some of these organisations have in the past seen corporate and brand
                                    design endeavour as waste of
                                    time or money or both. However, frequent events of brand misrepresentation and lack of brand
                                    equity growth amongst
                                    customers has forced many businesses to wake up. <br /><br />
                                    From Corporate Profile designs, to Brochures, Power Point Presentations and other marketing
                                    collaterals, your business
                                    requires a perfect blend of all digital assets with your overall brand strategy in
                                    alignment. This is to aid consistency
                                    between your internal communication efforts and customers’ perception of your overall brand
                                    image. <br /><br />
                                    All quality corporate design begins with brand interpretation and development of a guide
                                    document. Once approved by all
                                    stakeholders, other digital design and assets for your business can be built up to the exact
                                    need of your sales and
                                    marketing endeavours. <b>Speak to our Corporate Design Services team on 07006733540</b> or <Link to="/schedule_session">Schedule a session</Link> for your next Corporate Design needs.
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

export default CoorporateDesign