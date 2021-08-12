import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [number, setNumber] = useState("0700MRDEJI0")

    const changeNumber = () => {
        setTimeout(() => {
            if (number === "0700MRDEJI0") {
                setNumber("07006733540");
            } else {
                setNumber("0700MRDEJI0")
            }
        }, 5000)
    }

    useEffect(() => {
        changeNumber()
    })

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            document.querySelector('.logo').style.height = "40px"
            document.querySelector('.navbar').style.opacity = "0.97"
        } else {
            document.querySelector('.logo').style.height = "unset"
            document.querySelector('.navbar').style.opacity = "unset"
        }
    });

    return (
        <nav className="navbar fixed-top navbar-expand-lg" id="nav">
            <Link to="/" className="navbar-brand">
                <img src={require("../img/LOGO 1.png").default} alt="brand-img" className="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/about_us" className="nav-link">About us</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Product
                        </a>
                        <div class="dropdown-menu mega-menu">
                            <div class="row">
                                <div class="col-lg-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/layout 2.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Customized Service Portals</h3>
                                                        <p>
                                                            With modern day customers, no other era ushers
                                                            much sophistication in the usage of technology
                                                            for effective services and products delivery than
                                                            now.
                                                        </p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/digital_content">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/content 2.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Digital Content</h3>
                                                        <p>Do you already have a website or other digital asset
                                                            project ideas such as Corporate Profile, Brochures
                                                            and Power Point presentation design requirements
                                                            but lack adequate content to bring those assets
                                                            into fruition? </p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/mobile_app_development">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/user-interface (1) 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Mobile App Development</h3>
                                                        <p>Have you rediscovered the way to deliver services
                                                            to your customers or better manage your internal
                                                            operations using mobile?</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/idea_mapping">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/design-process (1) 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Idea Mapping</h3>
                                                        <p>We have a team of Product research and user
                                                            experience designers who understand the concept
                                                            of turning ideas into products with viable revenue
                                                            generation potentials. </p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/ecommerce_development">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/shopping 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>eCommerce Development</h3>
                                                        <p>Your products and services in a digital store are a no
                                                            longer a novel concept. Businesses have implemented
                                                            this strategy with several iterations of approach that
                                                            continue to spin billions of dollars in transaction
                                                            records annually.</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/payment_integration_services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/debit-card 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Payment Integration Services</h3>
                                                        <p>We have taken delivery of world’s best experience
                                                            through payment platforms that solve our direct
                                                            need of online payment settlement today</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/security_services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/shield 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Security Services</h3>
                                                        <p>Web, mobile or specialized applications required to
                                                            enable your businesses to receive payment can be
                                                            exploited, hence there is need to continuously learn
                                                            about these exploitations and implement ways to
                                                            mitigate against them</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/web_application_development">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/programming (2) 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Web Application Development</h3>
                                                        <p>We develop web applications that give your business
                                                            significant leap over competition.</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12 menu-service">
                                            <Link to="/web_design_services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/website 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Web Design Service</h3>
                                                        <p>When businesses require public visibility, they naturally
                                                            turn to website design agencies to build what they
                                                            believe represents their brand identity. </p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12">
                                            <Link to="/coorporate_design_services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/logo-design 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Corporate Design Service</h3>
                                                        <p>We see a high demand from organisations on
                                                            their need to standardize brand style with other
                                                            marketing collaterals within their enterprise. </p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-12">
                                            <Link to="/value_added_services">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <img src={require("../img/high-value 1.png").default} alt="alt" className="img-fluid" />
                                                    </div>
                                                    <div className="col-10">
                                                        <h3>Value Added Services (VAS)</h3>
                                                        <p>This is a less utilized gold mine from which billions
                                                            of revenues can be explored. Pioneers of the VAS
                                                            business entered with very little formalities and entry
                                                            barriers except for availability of the right backbone
                                                            infrastructure.</p>
                                                        <span>Learn More <i className="fas fa-long-arrow-alt-right" /></span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="schedule_session" className="nav-link">Schedule Session</Link>
                    </li>
                    <h1><a href="https://chatwith.io/s/mrdeji-com" target="_blank">{number}</a></h1>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
