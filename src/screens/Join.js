import React from 'react';
// import { link } from 'react-router-dom';
import Navbar from '../components/nav'
import Carousel from '../components/carousel';
import Footer from '../components/footer'

const Join = () => {
    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* form  */}
                <section className="form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 header join-header center-content">
                                <img src={require("../img/goal 1.png").default} className="img-fluid mx-auto d-block" alt="img" />
                                <div className="header-text">
                                    <h1>Do you love to <span className="emphasis">build castle in the air?</span></h1>
                                    <div className="row">
                                        <p>Are you creative and willing to build something amazing but need the right enterprise
                                            where you can exhibit these creative abilities? Join our team to in building the
                                            next big
                                            tech and digital idea
                                        </p>
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
                                    <label htmlFor="Proficiency"><img src={require("../img/Group 6.svg").default} alt="img" />Proficiency <span className="required">*</span></label>
                                    <input id="Proficiency" type="text" placeholder="What Skill do you offer?" />
                                </div>
                                <div className="input">
                                    <label htmlFor="resume"><img src={require("../img/Group 7.svg").default} alt="img" />Upload Resume <span className="required">*</span></label>
                                    <button><img src="img/document-upload.svg" alt="" />Upload Resume</button>
                                </div>
                                <div className="input">
                                    <label htmlFor="letter"><img src={require("../img/Group8.svg").default} alt="img" />Cover Letter</label>
                                    <textarea name id="letter" defaultValue={""} />
                                </div>
                                <div className="row">
                                    <div className="col-1"><input type="checkbox" id="checkbox" /></div>
                                    <div className="col-11">
                                        <p>I've read <a href>Privacy Policy</a> the below and consent the processing of my
                                            data as part of my job
                                            application.
                                        </p></div>
                                </div>
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

export default Join