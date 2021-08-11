import React from "react";
// import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
    return (
        <div className="container">
            <OwlCarousel
                className='owl-theme'
                loop margin={10}
                items="5"
                nav
                mouseDrag
                touchDrag
                pullDrag
                dots={false}
            >
                <div class='item'>
                    <img src={require("../img/content4.png").default} alt="alt" className="img-fluid" />
                    <h3>Digital  Content</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/user-interface (1) 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Mobile App Development</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/design-process (1) 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Idea Mapping</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/shopping 2.png").default} alt="alt" className="img-fluid" />
                    <h3>eCommerce Development</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/debit-card 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Payment Integration Services</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/shield 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Security Services</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/programming (2) 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Web Application Development</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/website 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Web Design Service</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/logo-design 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Corporate Design Service</h3>
                </div>
                <div class='item'>
                    <img src={require("../img/high-value 2.png").default} alt="alt" className="img-fluid" />
                    <h3>Value Added Services (VAS)</h3>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Carousel;