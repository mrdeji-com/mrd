import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import Modal from 'react-modal'


const Footer = () => {
    const [footerModal, setFooterModal] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <footer data-aos="fade-up">
            <div className="container">
                <Link to="/"><img src={require("../img/LOGO 2 1.png").default} className="img-fluid" alt="brand-img" /></Link>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 profile">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            quis massa at dui accumsan dapibus. Duis et ultricies lacus.
                            Quisque tempor dictum erat, eu ultricies mi vehicula eu. Donec
                            suscipit magna quam, quis auctor sem tempor vitae. Nam viverra,
                            diam vel pharetra suscipit, eros elit pellentesque risus, vehicula
                            justo libero sit amet libero. Nulla eu quam ullamcorper purus sollic
                            tempus sit amet id elit. Sed sit amet ex nisl.</p>
                        <h3 onClick={() => setFooterModal(true)}>Read Our Privacy Policy</h3>
                        <Modal isOpen={footerModal} onRequestClose={() => setFooterModal(false)} className="footer-modal">
                            <div className="services-modal-content">
                                <h1>Privacy Policy</h1>
                                <p>
                                    When you request for a Strategy Session, you give us certain information voluntarily. This includes your name, email address, phone number, country, job role, business name and any other information that you may supply to us during our first session before the execution of a Non-Disclosure Agreement (NDA) form. <br /><br />

                                    If you end up purchasing a service from mrdeji.com, we will collect payment information, contact information (billing address, invoice details, tax information and other relevant legal documents) with details of the services that you procure. If you refer us to someone else, we collect their corresponding details in the required fields sufficient to provide our service to them. <br /><br />

                                    If you link your Facebook or Google Accounts or accounts from other third-party services to mrdeji.com, we also get information from those accounts (such as your friends and contacts). The information we get from those services depends on your settings and their privacy policies, so please check what those are.
                                </p>
                                <h3>Contact Us</h3>
                                <h4>E-mail: contact@mrdeji.com</h4>
                            </div>
                        </Modal>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-6 col-6 quick-links">
                        <div>
                            <h3>Quick iinks</h3>
                            <Link to="/services">Our services</Link>
                            <Link to="/schedule_session">Schedule Strategy Session</Link>
                            <Link to="/join">Career</Link>
                            <Link to="/partner">Partnership</Link>
                            <Link to="/about_us">About Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 social-media">
                        <div>
                            <a href>contact@mrdeji.com
                                <img src={require("../img/Vector.svg").default} alt="brand-img" />
                            </a>
                            <a href>+2347006733540
                                <img src={require("../img/call.svg").default} alt="img" />
                            </a>
                            <a href>22 Orelope Street, Egbeda, Lagos
                                <img src={require("../img/map.svg").default} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
