import React from "react";
import "./Cloud.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
// import cloud from "../../src/videos/cloud.mp4"
import cloud from "../../src/videos/cloud.mp4";


const Cloud = () => {
  return (
    <div>
      <Navbar />
      <div className="cloudempower">
      <video className="cloud-transform-video" autoPlay loop muted>
        <source src={cloud} type="video/mp4"/>
      </video>
        <div
          style={{
            display: "inline-flex",
            minHeight: "1080px",
            padding: "42px 480px 100px 255px",
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
            Cloud Transformation
          </p>
          <h4
            style={{
              color: "white",
              fontSize: "35px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "45px",
            }}
          >
            Empower Your Business Transformation Journey with Cloud Migration
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
              marginTop: "50px",
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
            <div className="col-md-5 ">
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4
          className="mt-5"
          style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}
        >
          Experience the Data Observe Advantage
        </h4>

        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          As a leading provider of cloud migration services and consulting, we
          bring you a variety of benifits
        </p>
      </div>
      <div className="container mt-3">
        <div className="row box">
          <div className="col-md-4">
            <div className="text-center box-padding">
              <img
                src="./images/money.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5>cloud transformation</h5>

              <p className="arrowtext text-justify">
                Take your business to the clouds with DataObserve's cloud
                certified architects, who can assist you in minimizing
                downtimes, enhancing agility, and elevating your capacity to
                innovate through efficient cloud migration.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center box-padding">
              <img
                src="./images/time.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5>cloud transformation</h5>

              <p className="arrowtext text-justify ">
                Take your business to the clouds with DataObserve's cloud
                certified architects, who can assist you in minimizing
                downtimes, enhancing agility, and elevating your capacity to
                innovate through efficient cloud migration.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center box-padding">
              <img
                src="./images/dc.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5>cloud transformation</h5>

              <p className="arrowtext text-justify">
                Take your business to the clouds with DataObserve's cloud
                certified architects, who can assist you in minimizing
                downtimes, enhancing agility, and elevating your capacity to
                innovate through efficient cloud migration.
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
                      Simplify your cloud-powered business transformation with a
                      host of DataObserve cloud services, including consulting,
                      optimization, migration, & modernization. Our team of
                      cloud experts is here to guide you.
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
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="cloud-head">
          Start Your Digital Transformation
          <br /> Journey With Us
        </h3>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/uparrow.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>Cloud Transformation</h5>

                <p className="arrowtext text-justify">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/dataengg.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>Data Engineering</h5>

                <p className="arrowtext text-justify">
                  Reconsider current procedures to ensure data transparency and
                  effortless accessibility. Our Data Engineering ensures fast
                  query retrieval, enabling businesses to fully unlock the
                  potential of big data solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/powerbi.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>Data Analytics and BI</h5>

                <p className="arrowtext text-justify">
                  Business Intelligence involves data structures and
                  visualization to enhance decision-making. DataObserve's
                  business intelligence solutions make comprehending shopper
                  behavior more straightforward than ever.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/ai.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>AI and Machine Learning</h5>

                <p className="arrowtext text-justify">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/deveops.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>DevOps as a Service</h5>

                <p className="arrowtext text-justify">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding">
                <img
                  src="./images/application.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5>Application Modernization</h5>

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

export default Cloud;
