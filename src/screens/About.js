import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Modal from 'react-modal'
import data from "../components/data";

const About = () => {
    const [index, setIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { image, name, role, bio } = data[index]

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* about  */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right">
                                <h1>About Us</h1>
                                <p>
                                    mrdeji.com is a pioneer in the development of Managed Digital Platforms (MDP) for web, mobile and specialized devices. Our aim is to use digital channels to shape the way businesses deliver products and services to their customers. <br /> <br />
                                    Our service charge model allows our customers to pay as they earn from the digital platforms that we develop for them, hence making us an integral part of their business success. <br /><br />
                                    mrdeji.com team is made up of UI/UX (User Interface/User Experience) designers with strong Product Research capabilities, Frontend Development and Backend Programming expertise to bring our customers' digital platform ideas to life. <br /><br />
                                    We undertake projects with passion to create unique solutions that solve complex business problems. And our approach to Product research and development enables us to fully interpret business problems and propose the right solutions that meet end-users' expectations.
                                </p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left">
                                <div className="row">
                                    <div className="col-lg-5 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(0)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-5 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(1)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-5 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(2)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-5 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(3)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <h5>Meet our Digital Product Development Team <span /></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* values  */}
                <section className="values">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <h1>Our Culture</h1>
                                <p>
                                    At mrdeji.com, we thrive on an enviroment of excellence and producctiovity, our mission is to provide digital solutions that make products both effective and simple, to ensure client satisfaction. Get started with us today
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <h1>Our Values</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    quis massa at dui accumsan dapibus. Duis et ultricies lacus.
                                    Quisque tempor dictum erat, eu ultricies mi vehicula eu. Donec</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} id="about-us">
                <i className="fas fa-times" id="close" onClick={() => setIsModalOpen(false)} />
                <div className="person-content">
                    <div className="person">
                        <div className="person-header">
                            <img src={image} alt="" className="img-fluid" />
                            <div>
                                <h3>{name}</h3>
                                <h4>{role}</h4>
                            </div>
                        </div>
                        <p>{bio}</p>
                    </div>
                    <hr />
                    <div className="persons">
                        <div className="row">
                            {data.map((each) => {
                                const { image, name, id } = each;
                                return (
                                    <div className="col-lg-2" key={id}>
                                        <img src={image} alt={name} className="img-fluid" onClick={() => setIndex(id)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default About