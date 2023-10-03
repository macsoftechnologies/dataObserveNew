import React from "react";
import "./Dataeng.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import dataengineer from "../../src/videos/dataenginner.mp4"


const Dataeng = () => {
  return (
    <div>
      <Navbar />
      <div className="enterprise">
      <div>
      <video className="data-engineer" autoPlay loop muted>
        <source src={dataengineer} type="video/mp4"/>
      </video>
      <div className="container">
          <div
            style={{
              display: "inline-flex",
              minHeight: "1080px",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "115px",
              position:"absolute",
              top:"128px",
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
              Data Engineering
            </p>
            <h4
              style={{
                color: "white",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "43px",
                paddingRight: "540px",
              }}
            >
              Hire “Enterprise-grade” Data & Analytics experts in next 48 hours
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
        <h4 style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}>
          Our Data Engineering Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          DataObserve’s data engineering services and analytics solutions are
          designed to grow businesses and help them stand out from the crowd.
          How do we do it? Glad you asked! We begin with thoroughly
          understanding your current business model and identifying optimization
          opportunities. This allows us to create user-friendly data engineering
          solutions to modernize data platforms and streamline data processing
          pipelines.
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
                alt="..."
                style={{ width: "350px", marginLeft: "25px" }}
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
          <h3 className="cloud-head">Experience the Agilisium Advantage</h3>
          <p style={{ width: "700px" }}>
            At DataObserve, as a data engineering company, we are driven by
            constant innovation and strive for perfection in developing
            cloud-compatible solutions.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div
              className="col-md-4"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/improved1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5>Improved Operational Efficiency</h5>

                <p className="arrowtext text-justify">
                  Choose cloud driven AWS data engineering solutions merged with
                  the power of AI technology to achieve improved efficiency and
                  better supply chain transparency.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/drive1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "79px", width: "59px" }}
                />
                <h5>Drive Democratization of Data</h5>

                <p className="arrowtext text-justify">
                  With tools like Amazon Redshift, you can analyze huge loads of
                  data quickly and make it accessible to your entire staff and
                  all your stakeholders.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/leve.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5>Leverage More Flexibility</h5>

                <p className="arrowtext text-justify">
                  Change the size of your compute cluster instantly, scale your
                  service, or supply any amount of computing resource with ease
                  by choosing our AWS cloud data engineering services.
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
                style={{ height: "450px" }}
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
                style={{ height: "450px" }}
              >
                <img
                  src="./images/getb.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Get Better Data Insights</h5>

                <p className="arrowtext text-justify">
                  Reconsider current procedures to ensure data transparency and
                  effortless accessibility. Our Data Engineering ensures fast
                  query retrieval, enabling businesses to fully unlock the
                  potential of big data solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/eff.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Efficiency in Data Models </h5>

                <p className="arrowtext text-justify">
                  Business Intelligence involves data structures and
                  visualization to enhance decision-making. DataObserve's
                  business intelligence solutions make comprehending shopper
                  behavior more straightforward than ever.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/robust.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Robust AWS databases</h5>

                <p className="arrowtext text-justify">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/centered.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Centered Data Governance</h5>

                <p className="arrowtext text-justify">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/endto.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>End-to-end Support</h5>

                <p className="arrowtext text-justify">
                  Application modernization is essentially the process of
                  upgrading current applications using state-of-the-art
                  computing technology. Increase your productivity tenfold by
                  smoothly migrating your entire underlying infrastructure to
                  the cloud with DataObserve.
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

export default Dataeng;
