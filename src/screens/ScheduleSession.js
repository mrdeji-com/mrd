import React, { useState } from "react";
// import { link } from 'react-router-dom';
import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { app } from "../firebase";
import emailjs from "emailjs-com";

const db = app.firestore();

// import { InlineWidget } from "react-calendly";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [schedule, setSchedule] = useState("");
  const [industry, setIndustry] = useState("");
  const [Loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await db
      .collection("scheduledSession")
      .add({
        name: name,
        email: email,
        industry: industry,
        description: description,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
    emailjs
      .sendForm(
        "service_32gjafv",
        "template_gi1rfyf",
        e.target,
        "user_0Ba0T3HR9PKxjrMgCGth9"
      )
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });

    setName("");
    setSchedule("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setDescription("");
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
              <div className="col-lg-7 col-md-6 header center-content">
                <img
                  src={require("../img/ffr 1.png").default}
                  className="img-fluid mx-auto d-block"
                  alt="img"
                />
                <div className="header-text">
                  <h1>
                    Schedule a{" "}
                    <span className="emphasis">Strategy Session</span>
                  </h1>
                  <div className="row">
                    <p>
                      Lets help you scale up with our proficiency in creating
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 form-body">
                {/* <InlineWidget url="https://calendly.com/mrdeji/30min" /> */}
                <form onSubmit={handleSubmit}>
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
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
                    <input
                      type="text"
                      id="number"
                      name="phonenumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="description">
                      <img
                        src={require("../img/Group 6.svg").default}
                        alt="img"
                      />
                      Job Description <span className="required">*</span>
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Industry">
                      <img
                        src={require("../img/Group 7.svg").default}
                        alt="img"
                      />
                      Industry <span className="required">*</span>
                    </label>
                    <select
                      name="industry"
                      id="Industry"
                      onChange={(e) => {
                        setIndustry(e.target.value);
                      }}
                    >
                      <option value="Education/E-Learning Portals">
                        Education/E-Learning Portals
                      </option>
                      <option value="	Global Trade Portals">
                        Global Trade Portals
                      </option>
                      <option value="Health Management Portals">
                        Health Management Portals
                      </option>
                      <option value="Administrative (Sales, HR and Accounts/Finance) Portals">
                        Administrative (Sales, HR and Accounts/Finance) Portals
                      </option>
                      <option value="Internet Banking Portals">
                        Internet Banking Portals
                      </option>
                      <option value="Utility Management Systems Portals">
                        Utility Management Systems Portals
                      </option>
                    </select>
                  </div>
                  <div className="input">
                    <label htmlFor="date">
                      <img
                        src={require("../img/Group8.svg").default}
                        alt="img"
                      />
                      Schedule Date <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="date"
                      value={schedule}
                      onChange={(e) => {
                        setSchedule(e.target.value);
                      }}
                      name="schedule"
                    />
                  </div>

                  <p>
                    <b>Privacy Policy statement:</b> By filling out the Strategy
                    Session request form, I authorize the mrdeji.com team to
                    contact me via personalized communications about its
                    services. See our <a href>Privacy Policy</a>
                    for more details or to opt-out at any time
                  </p>
                  {!Loading && (
                    <button type="submit">
                      SUBMIT{" "}
                      <img
                        src={require("../img/Vector3.svg").default}
                        alt="img"
                      />
                    </button>
                  )}
                  {Loading && <button>LOADING... </button>}
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

export default Services;
