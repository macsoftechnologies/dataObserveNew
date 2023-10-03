import React from "react";
import "./Databi.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import databi from "../../src/videos/datanalytics.mp4"

const Databi = () => {
  return (
    <div>
      <Navbar />
      <div className="drives">
        <div>
        <video className="daba-bi-anal" autoPlay loop muted>
        <source src={databi} type="video/mp4"/>
      </video>
      <div
          style={{
            display: "inline-flex",
            minHeight: "1080px",
            padding: "42px 400px 100px 255px",
            flexDirection: "column",
            alignItems: "flex-start",
            position:"absolute",
            top:"170px",
            left:"-121px"
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
            Business Intelligence and Analytics
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
            Drive scalable business growth with Business Intelligence and Data
            Analytics services
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
            </span>
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
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "390px" }}
              >
                <img
                  src="./images/faster.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "80px" }}
                />
                <h5>Faster analysis and intuitive dashboards</h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/increased.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "76px", height: "76px" }}
                />
                <h5>Increased organizational efficiency</h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/clock.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "59px" }}
                />
                <h5>24*7 support service</h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/improved.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "73px" }}
                />
                <h5>Improved competitive advantage</h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/unified.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "73px" }}
                />
                <h5>Unified and Robust information architecture</h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/data.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "63px" }}
                />
                <h5>Data-driven business decisions</h5>

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
                          style={{ marginLeft: "12px" }}
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
      <div className="container mt-3">
        <div className="row box">
          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "390px" }}
            >
              <img
                src="./images/high.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "73px", width: "63px" }}
              />
              <h5>High accuracy</h5>

              <p className="arrowtext text-justify">
                Take your business to the clouds with DataObserve's cloud
                certified architects, who can assist you in minimizing
                downtimes, enhancing agility, and elevating your capacity to
                innovate through efficient cloud migration.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "390px" }}
            >
              <img
                src="./images/operation.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "73px", width: "63px" }}
              />
              <h5>Operational intelligence</h5>

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
              style={{ height: "390px" }}
            >
              <img
                src="./images/cross.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "73px", width: "63px" }}
              />
              <h5>Cross-platform integration</h5>

              <p className="arrowtext text-justify">
                Business Intelligence involves data structures and visualization
                to enhance decision-making. DataObserve's business intelligence
                solutions make comprehending shopper behavior more
                straightforward than ever.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "390px" }}
            >
              <img
                src="./images/ai.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "73px", width: "63px" }}
              />
              <h5>Power BI</h5>

              <p className="arrowtext text-justify">
                DevOps-as-a-Service is an advanced delivery model created to
                enhance application development. Utilize our DevOps as a service
                (DaaS) solutions to achieve time and cost savings through the
                automation of deployment processes.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding"
              style={{ height: "390px" }}
            >
              <img
                src="./images/secure.png"
                className="App-logo"
                alt="logo"
                width={100}
                style={{ height: "73px", width: "63px" }}
              />
              <h5>Secure on-cloud data</h5>

              <p className="arrowtext text-justify">
                DevOps-as-a-Service is an advanced delivery model created to
                enhance application development. Utilize our DevOps as a service
                (DaaS) solutions to achieve time and cost savings through the
                automation of deployment processes.
              </p>
            </div>
          </div>

          {/* <div className="col-md-4">
            <div className="text-center box-padding">
              <img
                src="./images/application.png"
                className="App-logo arrow"
                alt="logo"
                width={100}
              />
              <h5>Application Modernization</h5>

              <p className="arrowtext text-justify">
                Application modernization is essentially the process of
                upgrading current applications using state-of-the-art computing
                technology. Increase your productivity tenfold by smoothly
                migrating your entire underlying infrastructure to the cloud
                with DataObserve.
              </p>
            </div>
          </div> */}
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

export default Databi;
