import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Carousel extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1100: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1300: {
                items: 5,
            },
            1400: {
                items: 5,
            },
        },
    }
    render() {
        return (
            <div className="container">
                <OwlCarousel
                    className='owl-theme'
                    loop margin={10}
                    nav
                    mouseDrag
                    touchDrag
                    pullDrag
                    freeDrag
                    dots={false}
                    responsive={this.state.responsive} >

                    <Link to="/digital_content">
                        <div class='item'>
                            <img src={require("../img/content4.png").default} alt="alt" className="img-fluid" />
                            <h3>Digital  Content</h3>
                        </div>
                    </Link>
                    <Link to="/web_application_development">
                        <div class='item'>
                            <img src={require("../img/user-interface (1) 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Mobile App Development</h3>
                        </div>
                    </Link>
                    <Link to="/idea_mapping">
                        <div class='item'>
                            <img src={require("../img/design-process (1) 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Idea Mapping</h3>
                        </div>
                    </Link>
                    <Link to="/ecommerce_development">
                        <div class='item'>
                            <img src={require("../img/shopping 2.png").default} alt="alt" className="img-fluid" />
                            <h3>eCommerce Development</h3>
                        </div>
                    </Link>
                    <Link to="/payment_integration_services">
                        <div class='item'>
                            <img src={require("../img/debit-card 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Payment Integration Services</h3>
                        </div>
                    </Link>
                    <Link to="/security_services">
                        <div class='item'>
                            <img src={require("../img/shield 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Security Services</h3>
                        </div>
                    </Link>
                    <Link to="/web_application_development">
                        <div class='item'>
                            <img src={require("../img/programming (2) 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Web Application Development</h3>
                        </div>
                    </Link>
                    <Link to="/web_design_services">
                        <div class='item'>
                            <img src={require("../img/website 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Web Design Service</h3>
                        </div>
                    </Link>
                    <Link to="/coorporate_design_services">
                        <div class='item'>
                            <img src={require("../img/logo-design 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Corporate Design Service</h3>
                        </div>
                    </Link>
                    <Link to="/value_added_services">
                        <div class='item'>
                            <img src={require("../img/high-value 2.png").default} alt="alt" className="img-fluid" />
                            <h3>Value Added Services (VAS)</h3>
                        </div>
                    </Link>
                </OwlCarousel>
            </div>
        )
    }
}

export default Carousel