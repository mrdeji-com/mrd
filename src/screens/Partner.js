import React, { useState } from "react";
import Modal from "react-modal";
// phone number input
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { app } from "../firebase";
import emailjs from "emailjs-com";
const db = app.firestore();
// import { InlineWidget } from "react-calendly";

const Partner = () => {
  // modal
  const [submitModal, setSubmitModal] = useState(true);

  // number
  const [number, setNumber] = useState();

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await db
      .collection("partners")
      .add({
        name: name,
        email: email,
        message: message,
        phoneNumber: phoneNumber,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
    setEmail("");
    setMessage("");
    setPhoneNumber("");
    setName("");
    setSubmitModal(true);
    setLoading(false);
  };

  return (
    <div class="container-fluid">
      <Navbar />
      <div>
        {/* form  */}
        <section className="form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 header join-header center-content">
                <img
                  src={require("../img/handshake(1) 1.png").default}
                  alt="img"
                  className="img-fluid mx-auto d-block"
                />
                <div className="header-text">
                  <h1>Partnerships</h1>
                  <div className="row">
                    <p>
                      We continue to build our partner ecosystem with growth in
                      mind. Leveraging some capabilities that exist within other
                      tech giants’ enterprises across Africa, Europe, Asia and
                      America, we are open for new opportunities to accelerate
                      our offering to clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 form-body">
                <form onSubmit={handleSubmit}>
                  {/* <InlineWidget url="https://calendly.com/mrdeji/discuss-potential-partnerships" /> */}
                  <div className="input">
                    <label htmlFor="name">
                      <img
                        src={require("../img/Vector1.svg").default}
                        alt="img"
                      />
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="email">
                      <img
                        src={require("../img/Group 4.svg").default}
                        alt="img"
                      />
                      Contact Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="number">
                      <img
                        src={require("../img/Vector2.svg").default}
                        alt="img"
                      />
                      Phone Number <span className="required">*</span>
                    </label>
                    <PhoneInput
                      id="number"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      name="phonenumber"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      defaultCountry="NG"
                    />
                    {/* <input
                      type="text"
                      id="number"
                      name="phonenumber"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    /> */}
                  </div>
                  <div className="input">
                    <label htmlFor="Interest">
                      <img
                        src={require("../img/Group 6.svg").default}
                        alt="img"
                      />
                      Partnership Interest
                    </label>
                    <div className="interests">
                      <h5>Choose area(s) you would love to partner with us</h5>
                      <h6>
                        <img
                          src={require("../img/information.svg").default}
                          alt="img"
                        />
                        Hover on each interest to see description
                      </h6>
                      <div className="interest">
                        <div className="row">
                          <div
                            className="col-xl-5 col-lg-12 col-md-12"
                            onMouseEnter={() => setOption1(true)}
                            onMouseLeave={() => setOption1(false)}
                          >
                            <input type="radio" id="tech-support" />
                            <label htmlFor="tech-support">
                              Tech Service Provider
                            </label>
                          </div>
                          <div className="col-xl-7 col-lg-12 col-md-12">
                            {option1 && (
                              <span className="interest-modal">
                                <img
                                  src={
                                    require("../img/information.svg").default
                                  }
                                  alt="img"
                                />
                                <span>
                                  Do you offer services around web development,
                                  payment integration or related tech services
                                  and you would love to partner with us?
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="interest">
                        <div className="row">
                          <div
                            className="col-xl-5 col-lg-12 col-md-12"
                            onMouseEnter={() => setOption2(true)}
                            onMouseLeave={() => setOption2(false)}
                          >
                            <input type="radio" id="value-added" />
                            <label htmlFor="value-added">
                              Value Added Distributor
                            </label>
                          </div>
                          <div className="col-xl-7 col-lg-12 col-md-12">
                            {option2 && (
                              <span className="interest-modal">
                                <img
                                  src={
                                    require("../img/information.svg").default
                                  }
                                  alt="img"
                                />
                                <span>
                                  This is for Value Added distributor who is
                                  interested in our solutions
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="interest">
                        <div className="row">
                          <div
                            className="col-xl-5 col-lg-4 col-md-4 col-sm-3"
                            onMouseEnter={() => setOption3(true)}
                            onMouseLeave={() => setOption3(false)}
                          >
                            <input type="radio" id="reseller" />
                            <label htmlFor="reseller">Reseller</label>
                          </div>
                          <div className="col-xl-7 col-lg-8 col-md-8 col-sm-9">
                            {option3 && (
                              <span className="interest-modal">
                                <img
                                  src={
                                    require("../img/information.svg").default
                                  }
                                  alt="img"
                                />
                                <span>
                                  Do you offer services around web development,
                                  payment integration or related tech services
                                  and you would love to partner with us?
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="interest">
                        <div className="row">
                          <div
                            className="col-xl-5 col-lg-12 col-md-12"
                            onMouseEnter={() => setOption4(true)}
                            onMouseLeave={() => setOption4(false)}
                          >
                            <input type="radio" id="service-consultant" />
                            <label htmlFor="service-consultant">
                              Service Consultant
                            </label>
                          </div>
                          <div className="col-xl-7 col-lg-12 col-md-12">
                            {option4 && (
                              <span className="interest-modal">
                                <img
                                  src={
                                    require("../img/information.svg").default
                                  }
                                  alt="img"
                                />
                                <span>
                                  This is for individual or businesses that
                                  deployes digital solutions
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="letter">
                      <img src={require("../img/menu.svg").default} alt="img" />
                      Additional Information
                    </label>
                    <textarea
                      name
                      id="letter"
                      name="message"
                      placeholder="Do you have any other relevant information for us? (optional)"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <input type="checkbox" id="checkbox" />
                    </div>
                    <div className="col-11">
                      <p>
                        I've read <a href>Privacy Policy</a> the below and
                        consent the processing of my data as part of my job
                        application.
                      </p>
                    </div>
                  </div>
                  {!Loading && (
                    <button type="submit" className="submit-button">
                      SUBMIT{" "}
                      <img
                        src={require("../img/Vector3.svg").default}
                        alt="img"
                      />
                    </button>
                  )}
                  {Loading && <button>LOADING... </button>}
                  <Modal
                    isOpen={submitModal}
                    onRequestClose={() => setSubmitModal(false)}
                    className="form-modal"
                  >
                    <div className="services-modal-content">
                      <img
                        src={require("../img/checked 1.png").default}
                        className="img-fluid"
                        alt="img"
                      />
                      <h3>Thank you for showing interest in us!</h3>
                      <p>
                        We have received your details and we would reach out to
                        you from the contact details you submitted.
                      </p>
                      <Link to="/services" className="button">
                        See How we help grow Businesses
                      </Link>
                    </div>
                  </Modal>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* grow  */}
        <section className="grow">
          <h3>
            <span className="emphasis">See How we help grow your business</span>
          </h3>
          <p>Increase your revenue and improve operational efficiency</p>
          <div className="grow-carousel"></div>

          {/* owl-carousel  */}
          <Carousel />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
