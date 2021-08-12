import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div class="container-fluid">
      <Navbar />
      <div>
        {/* header  */}
        <header>
          <div className="container">
            <div className="header-content">
              <h1>Build digital products</h1>
              <h3>
                for your business to move beyond survival into exponential
                growth
              </h3>
              <Link
                to="/schedule_session"
                className="button"
                data-aos="zoom-in"
              >
                Launch Now
              </Link>
            </div>
          </div>
          <div className="widget">
            <div className="trigger">
              <h1>Need Help?</h1>
            </div>
            <div className="widget-body">
              <h3>We're here for you.</h3>
              <span>
                <i class="fas fa-phone-alt"></i>
                <a href="tel:+2347006733540">Call +2347006733540</a>{" "}
              </span>
              <a href="https://chatwith.io/s/mrdeji-com" target="_blank">
                <span>
                  <i class="far fa-comment-alt"></i>Click to Chat
                </span>
              </a>
              <Link to="/schedule_session">
                <span>
                  <i class="far fa-calendar-alt"></i>Schedule a Meeting
                </span>
              </Link>
            </div>
          </div>
        </header>
        {/* begin  */}
        <section className="begin">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-0 col-sm-0"></div>
              <div
                data-aos="fade-right"
                className="col-lg-6 col-md-6 col-sm-6 p-100"
              >
                <div className="center-content">
                  <h1>
                    You can begin to{" "}
                    <span className="emphasis">
                      deliver your products and services
                    </span>{" "}
                    using digital channels
                  </h1>
                  <p>
                    As our world evolves, the need for digital access to
                    services and products is on the rise. Customers/clients are
                    looking for seamless ways to receive your services and
                    products with less complexities and cost.
                  </p>
                  <p>
                    Refer to some of our services that speak to your business
                    goals and objectives.
                  </p>
                  <div>
                    <Link to="/services" className="button" data-aos="zoom-in">
                      See Our Services
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="col-lg-5 col-md-6 col-sm-6">
                <img
                  src={require("../img/7mvphy38 1.png").default}
                  className="img-fluid mx-auto d-block"
                  alt="alt"
                />
              </div>
            </div>
          </div>
        </section>
        {/* schedule session  */}
        <section className="schedule-session">
          <div className="schedule-session-content">
            <div className="container">
              <div className="row">
                <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-6">
                  <img
                    src={require("../img/Layer 0 1.png").default}
                    className="img-fluid mx-auto d-block"
                    alt="alt"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 center-content">
                  <div className="text-wrapper">
                    <h1>
                      Have an{" "}
                      <span className="emphasis">idea that can translate</span>{" "}
                      into the next big tech product?
                    </h1>
                    <p>Reach out to us to build it for you</p>
                    <Link
                      to="/schedule_session"
                      className="button"
                      data-aos="flip-left"
                    >
                      Schedule a Strategy Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services  */}
        <section className="services">
          <div className="services-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/digital_content">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/content 2.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Digital Content</h3>
                        </div>
                      </div>
                      <p>
                        Do you already have a website or other digital asset
                        project ideas such as Corporate Profile, Brochures and
                        Power Point presentation design requirements but lack
                        adequate content to bring those assets into fruition?
                        Reach out to us for full stack of Digital Content
                        creation service that delivers holistic elements
                        required to bring those digital products to existence
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/mobile_app_development">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={
                              require("../img/user-interface (1) 1.png").default
                            }
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Mobile App Development</h3>
                        </div>
                      </div>
                      <p>
                        Mobile users grow at astronomical rates and digital
                        platforms are built today with mobile first in mind. If
                        you have seen a simple mobile application for example,
                        that helps you to monitor your daily routine such as
                        exercising, or complex applications through which you
                        can purchase US stocks from anywhere in the world, then
                        you have only seen a tip of the iceberge
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/idea_mapping">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={
                              require("../img/design-process (1) 1.png").default
                            }
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Idea Mapping</h3>
                        </div>
                      </div>
                      <p>
                        We have a team of Product research and user experience
                        designers who understand the concept of turning ideas
                        into products with viable revenue generation potentials.
                        You can dream and transmute the visions captured in
                        those invisible realms into live solutions that the
                        world needs to become the paradise that it had always
                        strived to be
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="ecommerce_development">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/shopping 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Ecommerce Development</h3>
                        </div>
                      </div>
                      <p>
                        Your products and services in a digital store are a no
                        longer a novel concept. Businesses have implemented this
                        strategy with several iterations of approach that
                        continue to spin billions of dollars in transaction
                        records annually. <br />
                        But the big question is, has your business benefited
                        from this market?
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="payment_integration_services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/debit-card 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Payment Integration Services</h3>
                        </div>
                      </div>
                      <p>
                        We have taken delivery of world’s best experience
                        through payment platforms that solve our direst need of
                        online payment settlement today. No longer should you
                        worry about how your customers will pay for your
                        products and services over your digital channels.
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/security_services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/shield 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Security Services</h3>
                        </div>
                      </div>
                      <p>
                        Web, mobile or specialized applications required to
                        enable your businesses to receive payment can be
                        exploited, hence there is need to continuously learn
                        about these exploitations and implement ways to mitigate
                        against them.
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/web_application_development">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={
                              require("../img/programming (2) 1.png").default
                            }
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Web Application Development</h3>
                        </div>
                      </div>
                      <p>
                        We develop web applications that give your business
                        significant leap over competition. We do hope that you
                        recognize your customers’ recent acquisition of high-end
                        mobile devices and personal computers that can operate
                        at light speed and consume larger proportion of
                        information regardless of the media through which the
                        information is dispersed
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/web_design_services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/website 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Web Design Service</h3>
                        </div>
                      </div>
                      <p>
                        When businesses require public visibility, they
                        naturally turn to website design agencies to build what
                        they believe represents their brand identity. Typical
                        website design projects capture business profiles,
                        products, services, achievements, contact information
                        and some other relevant data that enable businesses
                        attract potential customers and buyers
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/coorporate_design_services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/logo-design 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Corporate Design Service</h3>
                        </div>
                      </div>
                      <p>
                        We see a high demand from organisations on their need to
                        standardize brand style with other marketing collaterals
                        within their enterprise. Some of these organisations
                        have in the past seen corporate and brand design
                        endeavour as waste of time or money or both
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/value_added_services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/high-value 1.png").default}
                            alt="alt"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Value Added Services (VAS)</h3>
                        </div>
                      </div>
                      <p>
                        This is a less utilized gold mine from which billions of
                        revenues can be explored. Pioneers of the VAS business
                        entered with very little formalities and entry barriers
                        except for availability of the right backbone
                        infrastructure.
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <Link to="/services">
                    <div className="service">
                      <div className="row service-header">
                        <div className="col-2">
                          <img
                            src={require("../img/layout 2.png").default}
                            alt="alt"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-10">
                          <h3>Customized Service Portals</h3>
                        </div>
                      </div>
                      <p>
                        With modern day customers, no other era ushers much
                        sophistication in the usage of technology for effective
                        services and products delivery than now.
                      </p>
                      <a href>
                        Learn More <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* join  */}
        <section className="join">
          <div className="join-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-right"
                >
                  <img
                    src={require("../img/goal 1.png").default}
                    className="img-fluid mx-auto d-block"
                    alt="alt"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="content-pusher" />
                  <h1>
                    Do you love to{" "}
                    <span className="emphasis">build castle in the air?</span>
                  </h1>
                  <p>
                    Are you creative and willing to build something amazing but
                    need the right enterprise where you can exhibit these
                    creative abilities? Join our team to in building the next
                    big tech and digital idea
                  </p>
                  <div>
                    <Link to="/join" data-aos="zoom-in" className="button">
                      Join Our Team
                    </Link>
                    {/* <a href className="button" >Join Our Team</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partner  */}
        <section className="partner">
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="center-content col-lg-6 col-md-6">
                <h1>Partnerships</h1>
                <p>
                  We continue to build our partner ecosystem with growth in
                  mind. Leveraging some capabilities that exist within other
                  tech giants’ enterprises across Africa, Europe, Asia and
                  America, <br />
                  we are open for new opportunities to accelerate our offering
                  to clients.
                </p>
                <div>
                  <Link to="/partner" className="button" data-aos="zoom-in">
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <img
                  src={require("../img/handshake(1) 1.png").default}
                  className="img-fluid mx-auto d-block"
                  alt="alt"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
