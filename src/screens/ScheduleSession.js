import React from 'react';
// import { link } from 'react-router-dom';
import Navbar from '../components/nav'
import Carousel from '../components/carousel';
import Footer from '../components/footer'

const Services = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* form  */}
                <section className="form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 header center-content">
                                <img src={require("../img/ffr 1.png").default} className="img-fluid mx-auto d-block" alt="img" />
                                <div className="header-text">
                                    <h1>Schedule a <span className="emphasis">Strategy Session</span></h1>
                                    <div className="row">
                                        <p>Lets help you scale up with our proficiency in creating</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 form-body">
                                <div className="input">
                                    <label htmlFor="name"><img src={require("../img/Vector1.svg").default} alt="img" />Full Name <span className="required">*</span></label>
                                    <input type="text" id="name" />
                                </div>
                                <div className="input">
                                    <label htmlFor="email"><img src={require("../img/Group 4.svg").default} alt="img" />Contact Email <span className="required">*</span></label>
                                    <input type="text" id="email" />
                                </div>
                                <div className="input">
                                    <label htmlFor="number"><img src={require("../img/Vector2.svg").default} alt="img" />Phone Number <span className="required">*</span></label>
                                    <input type="text" id="number" />
                                </div>
                                <div className="input">
                                    <label htmlFor="description"><img src={require("../img/Group 6.svg").default} alt="img" />Job Description <span className="required">*</span></label>
                                    <textarea name id="description" defaultValue={""} />
                                </div>
                                <div className="input">
                                    <label htmlFor="Industry"><img src={require("../img/Group 7.svg").default} alt="img" />Industry <span className="required">*</span></label>
                                    <select name="description" id="Industry">
                                        <option value="Education/E-Learning Portals">Education/E-Learning Portals</option>
                                        <option value="	Global Trade Portals">Global Trade Portals</option>
                                        <option value="Health Management Portals">Health Management Portals</option>
                                        <option value="Administrative (Sales, HR and Accounts/Finance) Portals">Administrative
                                            (Sales, HR and Accounts/Finance) Portals</option>
                                        <option value="Internet Banking Portals">Internet Banking Portals</option>
                                        <option value="Utility Management Systems Portals">Utility Management Systems Portals
                                        </option>
                                    </select>
                                </div>
                                <div className="input">
                                    <label htmlFor="date"><img src={require("../img/Group8.svg").default} alt="img" />Schedule Date <span className="required">*</span></label>
                                    <input type="text" id="date" />
                                </div>
                                <p><b>Privacy Policy statement:</b> By filling out the Strategy Session request form, I
                                    authorize the
                                    mrdeji.com team to contact
                                    me via personalized communications about its services. See our <a href>Privacy Policy</a>
                                    for more details or to
                                    opt-out at any time</p>
                                <button>SUBMIT <img src={require("../img/Vector3.svg").default} alt="img" /></button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* grow  */}
                <section className="grow">
                    <h3><span className="emphasis">See How we help grow your business</span></h3>
                    <p>Increase your revenue and improve operational efficiency</p>
                    <div className="grow-carousel">
                    </div>

                    {/* owl-carousel  */}
                    <Carousel />
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Services