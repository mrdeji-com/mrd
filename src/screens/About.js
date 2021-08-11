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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    quis massa at dui accumsan dapibus. Duis et ultricies lacus.
                                    Quisque tempor dictum erat, eu ultricies mi vehicula eu. Donec
                                    suscipit magna quam, quis auctor sem tempor vitae. Nam viverra,
                                    diam vel pharetra suscipit, eros elit pellentesque risus, vehicula
                                    justo libero sit amet libero. Nulla eu quam ullamcorper purus sollic
                                    tempus sit amet id elit. Sed sit amet ex nisl.
                                </p>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(0)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(1)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(2)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(3)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(4)
                                            setIsModalOpen(true)
                                        }} />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 individual">
                                        <img src={require("../img/Untitled-2.jpg").default} className="img-fluid mx-auto d-block" alt="img" onClick={() => {
                                            setIndex(5)
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    quis massa at dui accumsan dapibus. Duis et ultricies lacus.
                                    Quisque tempor dictum erat, eu ultricies mi vehicula eu. Donec</p>
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