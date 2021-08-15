import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/nav";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { app } from "../firebase";
import emailjs from "emailjs-com";
import Modal from "react-modal";
// phone number input
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const db = app.firestore();

const Join = () => {
  // modal
  const [submitModal, setSubmitModal] = useState(true);

  // number
  const [number, setNumber] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [proficiency, setProficiency] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Loading, setLoading] = useState(false);

  const onChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await db
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        resume: fileUrl,
        proficiency: proficiency,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        alert("Message Has Been Submitted");
      })
      .catch((error) => {
        console.log(error.message);
      });
    emailjs
      .sendForm(
        "service_32gjafv",
        "template_jlh9bef",
        e.target,
        "user_0Ba0T3HR9PKxjrMgCGth9"
      )
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error.message);
      });

    setName("");
    setEmail("");
    setFileUrl("");
    setPhoneNumber("");
    setProficiency("");
    setMessage("");
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
              <div className="col-lg-7 col-md-6 header join-header center-content">
                <img
                  src={require("../img/goal 1.png").default}
                  className="img-fluid mx-auto d-block"
                  alt="img"
                />
                <div className="header-text">
                  <h1>
                    Do you love to{" "}
                    <span className="emphasis">build castle in the air?</span>
                  </h1>
                  <div className="row">
                    <p>
                      Are you creative and willing to build something amazing
                      but need the right enterprise where you can exhibit these
                      creative abilities? Join our team to in building the next
                      big tech and digital idea
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 form-body">
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
                      onChange={(e) => setEmail(e.target.value)}
                      name="user_email"
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
                    <label htmlFor="Proficiency">
                      <img
                        src={require("../img/Group 6.svg").default}
                        alt="img"
                      />
                      Proficiency <span className="required">*</span>
                    </label>
                    <input
                      id="Proficiency"
                      type="text"
                      placeholder="What Skill do you offer?"
                      name="proficiency"
                      onChange={(e) => setProficiency(e.target.value)}
                      value={proficiency}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="resume">
                      <img
                        src={require("../img/Group 7.svg").default}
                        alt="img"
                      />
                      Upload Resume <span className="required">*</span>
                    </label>
                    <img src="img/document-upload.svg" alt="" />
                    <input type="file" onChange={onChange} id="file" />
                  </div>
                  <div className="input">
                    <label htmlFor="letter">
                      <img
                        src={require("../img/Group8.svg").default}
                        alt="img"
                      />
                      Cover Letter
                    </label>
                    <textarea
                      name="message"
                      id="letter"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
                  <input type="hidden" value={fileUrl} name="fileUrl" />
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
                      <h3>Your Application was successful</h3>
                      <p>
                        We look forward to seeing you on our team, we would
                        reach out to you soon via the contact you submitted.
                      </p>
                      <Link to="/" className="button">
                        Go Home
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

export default Join;
