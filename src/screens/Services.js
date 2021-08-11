import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/nav'
import Footer from '../components/footer'
import Modal from 'react-modal'

const Services = () => {
    const [isHovering1, setIsOvering1] = useState(false)
    const [modal1, setModal1] = useState(false)
    const [isHovering2, setIsOvering2] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [isHovering3, setIsOvering3] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [isHovering4, setIsOvering4] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [isHovering5, setIsOvering5] = useState(false)
    const [modal5, setModal5] = useState(false)
    const [isHovering6, setIsOvering6] = useState(false)
    const [modal6, setModal6] = useState(false)


    return (
        <div class="container-fluid">
            <Navbar />
            <div>
                {/* user story  */}
                <section className="services-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-1 col-12">
                                <img src={require("../img/layout 2.png").default} className="img-fluid" alt="brand-img" />
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-10 col-sm-8 col-xs-11 col-12">
                                <h1>You can begin to deliver your products and services using our <span className="emphasis">customized service portals</span>
                                </h1>
                            </div>
                        </div>
                        <p>With modern day customers, no other era ushers much sophistication in the usage of technology for
                            effective services and
                            products delivery than
                            now.
                            Businesses like yours require customized portals where employees, partners, and customers can
                            operate and transact with
                            simplified
                            interfaces and less cumbersome paperless processes. <br /><br />
                            We have specialized skills to understand your business model and determine the right scale of
                            digitization and
                            digitalization that your enterprise
                            require. This we do by analyzing your current business operations before developing and integrating
                            fully customized
                            digital technology systems that
                            can gear your business towards excellent customer service and superior user experience. <br /><br />
                            We work closely with you and your business stakeholders to identify manual processes that exist
                            within your day-to-day
                            operations and help turn
                            those mundane tasks into highly organised digital fit-outs. <br /><br />
                            Trust us to help you build your next customized service portal. <a href>Click here to book a
                                session</a> with our Products Development team.
                        </p>
                    </div>
                </section>
                {/* frameworks  */}
                <section className="frameworks">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering1(true)} onMouseLeave={() => setIsOvering1(false)} onClick={() => {
                                    setModal1(true)
                                    setIsOvering1(false)
                                }}>
                                    {isHovering1 ?
                                        <>
                                            <h4>Education/E-Learning Portals</h4>
                                            <p>Setup a session with our team to share our global insights on banking for all generations and the evolution of the New World banking platforms</p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Education/E-Learning Portals</h3>
                                            <img src={require("../img/mortarboard 2.png").default} alt="img" />
                                        </>}
                                    <Modal isOpen={modal1} onRequestClose={() => setModal1(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/mortarboard 2.png").default} alt="img" />
                                            <h1>Education/E-Learning Portals</h1>
                                            <p>
                                                Your educational institution from the elementary to advanced graduate studies can leverage our design and development expertise to build Learning and School Management Systems with capabilities to share learning materials, carry out continuous assessments, manage school library and bursary systems. <br /><br />

                                                Also integrate global leading collaboration and communication platforms to give your students and teachers astounding knowledge transfer experience all year round. <br /><br />

                                                We have deployment capabilities for both cloud and on-premise infrastructure to suite the learning requirements and your institution’s management preference. <br /><br />

                                                Are you a School Administrator, Proprietor, Principal, Chancellor or key decision maker in a learning institution and would like us to meet with your team to design your digitalization strategy?
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering2(true)} onMouseLeave={() => setIsOvering2(false)} onClick={() => {
                                    setModal2(true)
                                    setIsOvering2(false)
                                }}>
                                    {isHovering2 ?
                                        <>
                                            <h4>Global Trade Portals</h4>
                                            <p>If you run international trade business that connect your products and services with a wide array of sellers and partners, we have developed frameworks to power your initiative and give your business the right customization and operational support that it needs to thrive.</p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Global Trade Portals</h3>
                                            <img src={require("../img/exchange-rate 1.png").default} alt="img" />
                                        </>
                                    }
                                    <Modal isOpen={modal2} onRequestClose={() => setModal2(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/exchange-rate 1.png").default} alt="img" />
                                            <h1>Global Trade Portals</h1>
                                            <p>
                                                If you run international trade business that connect your products and services with a wide array of sellers and partners, we have developed frameworks to power your initiative and give your business the right customization and operational support that it needs to thrive. <br /><br />

                                                Resiliency, speed and security comes top on mind when you run a global trade platform. Our craft is to combine technology capabilities with user experience across all stakeholder touch points. We ensure that sellers, buyers and merchants have adequate access to carry out transactions in seamless fashion and without complexities. <br /><br />

                                                You can focus on your business of attracting clients and promoting your services and leave us with the task of managing platform readiness, build effective workflows and operate your global trade platform in a way that guarantees success and satisfaction of all stakeholders. <br /><br />

                                                You need to meet with our Product Design Team
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="col-lg-6  col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering3(true)} onMouseLeave={() => setIsOvering3(false)} onClick={() => {
                                    setModal3(true)
                                    setIsOvering3(false)
                                }}>
                                    {isHovering3 ?
                                        <>
                                            <h4>Health Management Portals</h4>
                                            <p>If you are in the business of saving lives, you will also love to save your own life and that of your health and administrative staffs with the digitization of day-to-day front and back-office health management operations.</p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Health Management Portals</h3>
                                            <img src={require("../img/health-insurance 1.png").default} alt="img" />
                                        </>
                                    }
                                    <Modal isOpen={modal3} onRequestClose={() => setModal3(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/health-insurance 1.png").default} alt="img" />
                                            <h1>Health Management Portals</h1>
                                            <p>
                                                If you are in the business of saving lives, you will also love to save your own life and that of your health and administrative staffs with the digitization of day-to-day front and back-office health management operations. <br /><br />

                                                When you consider the unusual traffic that accustoms health service provision and consumers’ accessibility requirements, you will need to equip your health service business with channels that support all scenarios such as online order of services and products, emergency ambulance service, payment management systems and internal administrative automations. <br /><br />

                                                Our team rely on frameworks from extensive medical research and proven methodologies that ensure the design of integrated health management people, process and technology. We provide our digital for health services covering end computing, mobile/handheld devices and specialized medical equipment integration requirements. And all of these are built with the stakeholders’ interests and usability in mind. <br />

                                                Wouldn’t you want us to meet with you and your medical team in a Digital Strategy Session to achieve your business expansion and customer satisfaction goals?
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering4(true)} onMouseLeave={() => setIsOvering4(false)} onClick={() => {
                                    setModal4(true)
                                    setIsOvering4(false)
                                }}>
                                    {isHovering4 ?
                                        <>
                                            <h4>Administrative Portals</h4>
                                            <p>Your enterprise has faced many setbacks due to the lack of adequate decision to implement strategic and comprehensive digital initiatives. You have wished away manual roadblocks but you keep on enforcing old interests in outdated tools just to keep the lights on.
                                            </p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Administrative (Sales, HR and Accounts/Finance) Portals</h3>
                                            <img src={require("../img/leader 1.png").default} alt="img" />
                                        </>
                                    }
                                    <Modal isOpen={modal4} onRequestClose={() => setModal4(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/leader 1.png").default} alt="img" />
                                            <h1>Administrative (Sales, HR and Accounts/Finance) Portals</h1>
                                            <p>
                                                Your enterprise has faced many setbacks due to the lack of adequate decision to implement strategic and comprehensive digital initiatives. You have wished away manual roadblocks but you keep on enforcing old interests in outdated tools just to keep the lights on.
                                                To empower your business for delighting customers and standing out from the pack, you would need to foster personnel effectiveness and seamless interaction with external users and customers through the implementation of digital strategy and automation. <br /><br />

                                                The Lead to Cash concept of managing every business sale, human resources, finance, operations and project delivery influence our approach to design and deployment of administrative portals. And the core objective is to support your business for growth and profitability. We deploy appropriate resources to ensure management of service and project deliverables, cut of wastages, increased organisational cohesiveness and contribution to the bottom-line. <br /><br />

                                                You can’t exhaust the possibilities that our managed digital design and build service can do for your business until you setup a session with our team to walk you through our offerings
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering5(true)} onMouseLeave={() => setIsOvering5(false)} onClick={() => {
                                    setModal5(true)
                                    setIsOvering5(false)
                                }}>
                                    {isHovering5 ?
                                        <>
                                            <h4>Internet Banking Portals</h4>
                                            <p>Setup a session with our team to share our global insights on banking for all generations and the evolution of the New World banking platforms
                                            </p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Internet Banking Portals</h3>
                                            <img src={require("../img/accounting 2.png").default} alt="img" />
                                        </>
                                    }
                                    <Modal isOpen={modal5} onRequestClose={() => setModal5(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/accounting 2.png").default} alt="img" />
                                            <h1>Internet Banking Portals</h1>
                                            <p>
                                                Your top elite customers no longer wait for your next internet or mobile banking version release to make its way into the public domain before they begin to consider migrating to other providers who are promising mouth-watering features. If you carefully study your customers’ behavior, your banking business would take a spiral turn towards growth and unprecedented level of end-user satisfaction. <br /><br />

                                                Banking of this century calls for innovation and agility to spin off internet and mobile banking features that consistently thrill your customers. And this requires continuous research and development of your digital channels. <br /><br />

                                                At mrdeji.com, we have a product research and design team that constantly develop user interface flows for customer-facing platforms such as internet, mobile banking and USSD. We have been able to infuse effectiveness with operability and security in mind and these are the capabilities that you require to meet future technological advancement demands. <br /><br />

                                                Setup a session with our team to share our global insights on banking for all generations and the evolution of the New World banking platforms <br /><br />

                                                Do you want to know more?
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                <div className="card" onMouseEnter={() => setIsOvering6(true)} onMouseLeave={() => setIsOvering6(false)} onClick={() => {
                                    setModal6(true)
                                    setIsOvering6(false)
                                }}>
                                    {isHovering6 ?
                                        <>
                                            <h4>Utility Management Systems Portals</h4>
                                            <p>Utility consumers have defined their appetite for technology with continuous demand for self-service systems over web and mobile devices.
                                            </p>
                                            <h6>Learn More <i class="fas fa-angle-right"></i></h6>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </> :
                                        <>
                                            <h3>Utility Management Systems Portals</h3>
                                            <img src={require("../img/pie 2.png").default} alt="img" />
                                        </>
                                    }
                                    <Modal isOpen={modal6} onRequestClose={() => setModal6(false)} className="services-modal">
                                        <div className="services-modal-content">
                                            <img src={require("../img/pie 2.png").default} alt="img" />
                                            <h1>Utility Management Systems Portals</h1>
                                            <p>
                                                Utility consumers have defined their appetite for technology with continuous demand for self-service systems over web and mobile devices. For example, developed countries sell utility over technology and developing countries with yet little underlying technological infrastructure are striving to adopt the template that exist in those developed climes. <br /><br />

                                                However old or new your approach as a Utility service player is, we continue to see higher demand for innovations and advancement in the billing and revenue assurance spectrum as a means to guarantee business sustainability and growth. All parties involved in the utility value-chain expect higher level of technological synergy in the system as well as continuous improvement. <br /><br />

                                                Our dedicated Utility Business Analysts are available to guide your business through the development of enterprise grade digital strategies for the utility industry. And we can jointly build a partnership framework based on long-term investments and shared returns. This endears us to your business for the long-haul.
                                            </p>
                                            <Link to="/schedule_session"><button>Book a Session</button></Link>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* join  */}
                <section className="services-join">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={require("../img/goal 1.png").default} className="img-fluid mx-auto d-block" alt="img" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 center-content">
                                <h1>Do you love to <span className="emphasis">build castle in
                                    the air?</span></h1>
                                <p>Are you creative and willing to build something amazing but need the right enterprise
                                    where you can exhibit these creative abilities? Join our team to in building the next
                                    big
                                    tech and digital idea
                                </p>
                                <div>
                                    <Link to="/join" className="button" data-aos="zoom-in">Join Our Team</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* partner  */}
                <section className="partner services-partnership">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="center-content col-lg-6 col-md-6">
                                <h1>Partnerships</h1>
                                <p>We continue to build our partner ecosystem with growth in mind.
                                    Leveraging some capabilities that exist within other tech giants’
                                    enterprises across Africa, Europe, Asia and America, <br />
                                    we are open for new opportunities to accelerate our offering to clients.</p>
                                <div>
                                    <a href className="button">Partner With Us</a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <img src={require("../img/handshake(1) 1.png").default} className="img-fluid mx-auto d-block" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Services