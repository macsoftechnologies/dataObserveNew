import React from "react";
import "./Application.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import digital from "../../src/videos/digitaltransform.mp4"

const Application = () => {
  return (
    <div>
      <Navbar />

      <div>
      <video className="digital-transform-video" autoPlay loop muted>
        <source src={digital} type="video/mp4"/>
      </video>
      <div className="enterprise1">
        <div className="container">
          <div
            style={{
              display: "inline-flex",
              minHeight: "1080px",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "115px",
              position:"absolute",
              top:"150px",
              left:"10%"
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              Application Modernization
            </p>
            <h4
              style={{
                color: "white",
                fontSize: "29px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "44px",
                paddingRight: "540px",
              }}
            >
              Reinvent your business by modernizing legacy applications that
              makes you future-ready
            </h4>
            <button
              style={{
                display: "flex",
                height: "61px",
                maxWidth: "255px",
                padding: "20px 46px 21px 48px",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginTop: "70px",
                borderRadius: "5px",
              }}
            >
              <span
                style={{
                  color: "#FF4925",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "19px",
                }}
              >
                Talk to us now
              </span>{" "}
              <i
                className="fa fa-long-arrow-right ml-3"
                style={{
                  width: "23px",
                  fontSize: "29px",
                  flexShrink: "0",
                  color: "#FF4925",
                }}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
      </div>
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4 style={{ textAlign: "center", fontWeight: 700, fontSize: "33px" }}>
          Our Expertise in Application Modernization Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          At DataObserve, we bring over 40 years of experience in application
          modernization services across industries. Through legacy application
          modernization, we offer our expertise in more than just modernizing
          applications for the digital age.
        </p>
      </div>
      <div>
        <div class="card-deck" style={{ margin: "5px 0px 0px 0px" }}>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 1 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 2 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 3 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 4 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card" style={{ border: "none" }}>
            <img
              src="./images/Group - 5 of 5.png"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h4
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "43px",
              marginTop: "40px",
            }}
          >
            Our Case Studies
          </h4>
        </div>
        <div
          class="card mb-3 mt-5"
          style={{
            backgroundColor: "#1A4AB9",
            maxWidth: "900px",
            borderRadius: "20px",
          }}
        >
          <div
            class="row no-gutters"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "spacebetween",
            }}
          >
            <div class="col-md-5">
              <img
                src="./images/video-wp (1).png"
                className="card-img"
                style={{ width: "350px", marginLeft: "25px" }}
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body expertcardbody">
                <h5 class="card-title" style={{ color: "white" }}>
                  Build A Undified Augmented Analytics decision intelligence
                  platform
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  Learn how we created to self-service ,predective,insights
                  platform driven by an adaptive machine learning engine which
                  helps improve decision making
                </p>
                <p class="card-text" style={{ color: "white" }}>
                  <small>
                    Read case study
                    <i
                      class="fa fa-long-arrow-right ml-3"
                      aria-hidden="true"
                    ></i>
                  </small>
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src="./images/accede.png"
                    alt=""
                    style={{ width: "60px" }}
                  />
                  <img
                    src="./images/solakhen.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                  <img
                    src="./images/grbeco.png"
                    alt=""
                    style={{ width: "60px" }}
                  />
                  <img
                    src="./images/srdsystems.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3 className="cloud-head">Benefits</h3>
          <p style={{ width: "700px" }}>
            DataObserve is the fastest-growing Business Intelligence & Data
            Analytics company with strong expertise in Data lake solutions, Data
            Warehouse Engineering, Data Migration & Modernization.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/high1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "80px" }}
                />
                <h5>High Technical Expertise</h5>

                <p className="arrowtext text-justify">
                  Our technical experts have enabled our customers modernize and
                  upgrade their current applications portfolio – as well as
                  unleash the power of cloud-native applications.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="images/personal.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "76px", height: "76px" }}
                />
                <h5>Focus on organizational goals</h5>

                <p className="arrowtext text-justify">
                  Our legacy application modernization approach focus on
                  organizational goals and objectives with a detailed
                  feasibility study conducted by our application solution
                  architects with your company’s stakeholders.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/automation.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "59px" }}
                />
                <h5>Advanced Technology</h5>

                <p className="arrowtext text-justify">
                  Leverage the capabilities of the latest technology tools
                  through our strategic partnership in delivering top-level
                  application- focussed cloud services.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="card mb-3 mt-5"
              style={{
                backgroundColor: "#1A4AB9",
                maxWidth: "100%",
                borderRadius: "20px",
              }}
            >
              <div
                class="row no-gutters"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "spacebetween",
                }}
              >
                <div class="col-md-1"></div>
                <div class="col-md-8">
                  <div class="card-body expertcardbody d-flex">
                    <div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Make the most out of cloud Capabilities with DataObserve
                        Advance
                      </h5>
                      <p
                        class="card-text"
                        style={{ color: "white", width: "500px" }}
                      >
                        Simplify your cloud-powered business transformation with
                        a host of DataObserve cloud services, including
                        consulting, optimization, migration, & modernization.
                        Our team of cloud experts is here to guide you.
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          width: "200px",
                          border: "none",
                          height: "55px",
                          margin: "42px",
                          borderRadius: "6px",
                        }}
                      >
                        Talk to us now{" "}
                        <i
                          class="fa fa-long-arrow-right ml-3"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="cloud-head"> What Makes Us Stand Out</h3>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "460px" }}
              >
                <img
                  src="./images/iden.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Identify Patterns for Business Growth </h5>

                <p className="arrowtext text-justify">
                  Delivering data engineering services for years, we intend to
                  become a credible source of data and cloud solutions for
                  businesses across the globe. Our data engineering
                  professionals can guide you through and execute all aspects of
                  establishing data lakehouses, crafting data pipelines, and
                  building a functional ETL process of data engineering. Here
                  are a few reasons why we are an ideal fit: 
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "460px" }}
              >
                <img
                  src="./images/getb.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Proven Methodologies</h5>

                <p className="arrowtext text-justify">
                  Our team uses a combination of agile and cloud-driven DevOps
                  methodologies to deliver application modernization projects on
                  time and within your budget. Our approach focuses on
                  delivering incremental value to our clients, ensuring a smooth
                  transition to the new modernized system.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "460px" }}
              >
                <img
                  src="./images/eff.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Expertise in Cloud Technologies</h5>

                <p className="arrowtext text-justify">
                  We have a deep understanding of the latest cloud technologies
                  and how to leverage them to modernize your applications. Our
                  team is well-versed in various cloud platforms such as AWS,
                  Azure, and Google Cloud, and can help you select the best
                  platform for your needs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/robust.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>End-to-end Support</h5>

                <p className="arrowtext text-justify">
                  We provide end-to-end support throughout the entire
                  application modernization process. From initial assessment to
                  deployment and ongoing maintenance, team Agilisium will be
                  with you every step of the way.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/centered.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Tailored Solutions</h5>

                <p className="arrowtext text-justify">
                  Our solutions are tailored to meet the unique needs of your
                  business. We take the time to understand your specific
                  requirements and provide a customized solution that addresses
                  your specific pain points.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/endto.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Your Go-to Modernization Partner</h5>

                <p className="arrowtext text-justify">
                  With a global clientele of satisfied customers, DataObserve
                  has established itself as a trusted enterprise partner for
                  application modernization solutions. Our goal is to deliver
                  utmost customer satisfaction and we strive to exceed our
                  clients' expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 shadow-sm rounded">
              <div>
                <div className="card">
                  <div class="card-body1">
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* {/ <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> /} */}
                    <p className="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true">
                      <span classname="hello">hello@dataserve.io</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 shadow-sm">
              <div>
                <div>
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control name" />
                      <label>Work Email</label>
                      <input type="text" className="form-control name" />
                      <label>Contact Number</label>
                      <input type="text" className="form-control name" />

                      <button className="contact-us-2">Contact Us</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER START --> */}
      <div class="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Company</h1>
                <ul>
                  <li>About Us</li>
                  <li>People and Careers</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Services</h1>
                <ul>
                  <li>Cloud transformation</li>
                  <li>Data Engineering</li>
                  <li>Data Analytics and BI</li>
                  <li>AI & Machine Learning</li>
                  <li>evOps-as-a-service</li>
                  <li>Application Modernization</li>
                  <li>Talent as a Service</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Industries</h1>
                <ul>
                  <li>Life sciences and Pharma</li>
                  <li>Media & Entertainment</li>
                  <li>Gaming and gambling</li>
                </ul>
                <h1 className="footer-heading">Products</h1>
                <ul>
                  <li>Data Observability</li>
                  <li>Health EM</li>
                  <li>DataSense</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div class="col">
                <h1 className="footer-heading">Insights</h1>
                <ul>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                  <li>Ebooks</li>
                  <li>Webinars & Videos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="contain">
          <div class="clearfix"></div>
        </div>
      </div>
      {/* <!-- END OF FOOTER --> */}
    </div>
  );
};

export default Application;
