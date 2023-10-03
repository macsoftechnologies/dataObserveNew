import React from "react";
import "./Devops.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import devops from "../../src/videos/devops.mp4";

const Devops = () => {
  return (
    <div>
      <Navbar />
      <div className="em_power">
        <div>
        <video className="devops" autoPlay loop muted>
        <source src={devops} type="video/mp4"/>
      </video>
      <div
          style={{
            display: "inline-flex",
            minHeight: "1080px",
            padding: "42px 493px 100px 255px",
            flexDirection: "column",
            alignItems: "flex-start",
            position:"absolute",
            top:"170px",
            left:"-121px",
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
            DevOps As A Service
          </p>
          <h4
            style={{
              color: "white",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "47px",
            }}
          >
            Speed up software delivery with end-to-end automation and continuous
            delivery that cut costs
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
              className="fa fa-long-arrow-right"
              style={{
                width: "23px",
                fontSize: "29px",
                flexShrink: "0",
                color: "#FF4925",
                marginLeft: "12px",
              }}
              aria-hidden="true"
            ></i>
          </button>
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
          Our Expertise in Cloud Migration Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          with over 40years of combined industry experience ,our cloud migration
          services are tailored to set you on the path of operational excellence
          and holistic growth. we transform organizations of every scale and
          sizes with robust cloud ecosystems - moving IT infrastructure,
          applications and processes
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
                      class="fa fa-long-arrow-right"
                      style={{ marginLeft: "12px" }}
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
                  src="./images/premium.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5>Premium quality</h5>

                <p className="arrowtext text-justify">
                  Our BI tools extract data from multiple sources and analyze it
                  according to user queries. The intuitive dashboards allow
                  non-technical users to understand the story behind the data
                  without learning how to code.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/wide.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "79px", width: "59px" }}
                />
                <h5>Wide wealth of experience</h5>

                <p className="arrowtext text-justify">
                  Business leaders can get a holistic view of the company and
                  identify areas of opportunity with efficient BI. Access to
                  business data helps increase the organizational efficiency of
                  a company.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/tech.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5>Futuristic tech stack</h5>

                <p className="arrowtext text-justify">
                  Facing an issue or stuck with a problem regarding BI and
                  Analytics Services? Connect with our support services at any
                  time of the day, and our experts will help you with your
                  queries.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/clock.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "66px", width: "53px" }}
                />
                <h5>24*7 support</h5>

                <p className="arrowtext text-justify">
                  By analyzing this data, you can gain in-depth market knowledge
                  and stay ahead of your competition. Keep up with industry
                  changes, anticipate customer needs and improve your
                  performance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/disaster.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "71px", width: "53px" }}
                />
                <h5>Disaster Recovery</h5>

                <p className="arrowtext text-justify">
                  DataObserve has a unified information architecture that
                  enables experts to address existing complexities and solve
                  them efficiently in this rapidly evolving tech landscape.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/manage.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5>Availability Management</h5>

                <p className="arrowtext text-justify">
                  Facing an issue or stuck with a problem regarding BI and
                  Analytics Services? Connect with our support services at any
                  time of the day, and our experts will help you with your
                  queries.
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
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                          style={{ marginLeft: "12px" }}
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
      <div className="container mt-3">
        <div className="row box">
          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/premium.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>Premium quality</h5>

              <p className="arrowtext text-justify">
                Every project completed by our DevOps teams goes through
                internal quality checks to ensure quality before being
                delivered.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/wide1.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>Wide wealth of experience</h5>

              <p className="arrowtext text-justify">
                DataObserve has experience working as a DevOps service provider
                for a long time and even boasts certifications in different
                technologies and methodologies.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/fullstack.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>Futuristic tech stack</h5>

              <p className="arrowtext text-justify">
                Our futuristic tech stack will accelerate the release cycle for
                projects and expedite cloud operations while minimizing
                operational costs and increasing efficiency.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/clock.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>24*7 support</h5>

              <p className="arrowtext text-justify">
                Facing any issues or have a query? Contact our support team
                that’s available 24*7 to help you with the workload, cloud
                technologies, or infrastructure.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/disaster.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>Disaster Recovery</h5>

              <p className="arrowtext text-justify">
                Ensure fast recovery of business-critical applications and
                workloads with the help of cost-effective disaster recovery
                environments.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "330px" }}
            >
              <img
                src="./images/application.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "63px", width: "44px" }}
              />
              <h5>Availability Management</h5>

              <p className="arrowtext text-justify">
                Implement an event-driven management architecture for a robust
                and continuous monitoring system.
              </p>
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

export default Devops;
