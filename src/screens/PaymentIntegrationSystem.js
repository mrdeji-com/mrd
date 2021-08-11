import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ServiceSlider from '../components/serviceSlider';

const PaymentIntegration = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* PaymentIntegration-content  */}
                <section className="service-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 service-left">
                                <img src={require("../img/debit-card 2.png").default} className="img-fluid" alt="alt" />
                                <div className="header">
                                    <h1><span className="emphasis">Payment Integration Services</span></h1>
                                    <div className="row">
                                        <p>Integrate your revenue collection for your service and operations</p>
                                    </div>
                                    <Link to="/schedule_session" className="button">Schedule a Strategy Session with us</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 service-information">
                                <p>
                                    We have taken delivery of world’s best experience through payment platforms that solve our
                                    direst need of online payment
                                    settlement today. No longer should you worry about how your customers will pay for your
                                    products and services over your
                                    digital channels. The payment integration tools and systems are out there and we at
                                    mrdeji.com have the requisite skills
                                    to deploy them to your internal and users’ advantage. <br /><br />
                                    We develop valuable insights that help our customers to securely integrate payment gateways
                                    to portals; either internal
                                    or internet facing. You can leverage our framework to build economically safe systems for
                                    revenue collection across your
                                    business units. <br /><br />
                                    Do you run a public (Government Owned), private (for profit or Not for Profit) or integrated
                                    services operations and
                                    need to collect revenue from customers? Reach out to us to develop the best channels.
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

export default PaymentIntegration