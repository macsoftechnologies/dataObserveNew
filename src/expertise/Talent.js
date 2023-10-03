import React from "react";
import "./Talent.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import talent from "../../src/videos/talent.MOV";

const Talent = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hire">

          <div>
          <video className="talent" autoPlay loop muted>
        <source src={talent} type="video/mp4"/>
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
          
          <h4
            style={{
              color: "white",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "47px",
            }}
          >
             Hire “Enterprise-grade”<br/> Data & Analytics <br/>experts in next 48
                hours
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <div style={{ display: "flex", width: "983px" }}>
          <div className="col-md-1">
            <h5
              className="text-muted"
              style={{
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                fontSize: "10px",
                width: "140px",
                marginTop: "30px",
              }}
            >
              Trusted by Leading brands and startups
            </h5>
          </div>
          <div className="col-md-11 ml-5">
            <img
              className="col-md-2"
              src="./images/bonduelle.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
            <img
              className="col-md-2"
              src="./images/lucernal.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
            <img
              className="col-md-2"
              src="./images/thermof.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
            <img
              className="col-md-2"
              src="./images/acco.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
            <img
              className="col-md-2"
              src="./images/igt1.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
            <img
              className="col-md-2"
              src="./images/universalm.png"
              alt="..."
              style={{ width: "153px", height: "70px" }}
            />
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h4>What DataObserve Offers</h4>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/48.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Agility</p>
                <h4>48 Hours</h4>
                <p className="arrowtext text-justify">
                  Fast onboarding to hire the Top 3% of Talents
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/timesaved.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Time saved</p>
                <h4>85%</h4>
                <p className="arrowtext text-justify">
                  interviewing hours saved per recruitment
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/highrr.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>High retention rate</p>
                <h4>97%</h4>
                <p className="arrowtext text-justify">
                  Engagement success rates
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/enter.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Enterprise Grade Engineers</p>
                <h4>90%</h4>
                <p className="arrowtext text-justify">
                  of our In-house engineers have strong experience in working
                  with Fortune 500s
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/trust.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Trust & Reliability</p>
                <h4>100+</h4>
                <p className="arrowtext text-justify">
                  Full-time and Contract-to-Hire candidates available.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/global.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "62px", height: "62px" }}
                />
                <p>Global Team</p>
                <h4>5+</h4>
                <p className="arrowtext text-justify">
                  Global delivery centers across the USA, Canada, UK, India,
                  Netherlands, Dubai & Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bestprac">
        <div className="container">
          <div
            class="card"
            style={{
              background: "none",
              width: "35%",
              height: "309px",
              transform: "translateY(47px)",
              border: "none",
            }}
          >
            <div class="mt-2 card-body expertcardbody1">
              <div style={{ marginBottom: "-25px" }}>
                <img
                  src="./images/ebook.png"
                  alt="..."
                  style={{ width: "70px" }}
                />
              </div>
              <h5
                class="card-title"
                style={{
                  marginTop: "0px",
                  fontSize: "22px",
                  fontWeight: "600px",
                  lineHeight: "27.4px",
                  letterSpacing: "-0.32px",
                  color: "#000",
                }}
              >
                Best Practices for Database Migration to AWS - A guide by
                DataObserve
              </h5>
              <h6
                class="card-subtitle mb-2 text-muted"
                style={{ fontSize: "14px", marginTop: "0px" }}
              >
                Migrating a database to AWS takes time and careful planning. It
                isn’t just the database that needs migration; everything that
                uses it will need some changes.
              </h6>
              {/* <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
              <a
                href="#"
                class="card-link"
                style={{
                  fontSize: "17px",
                  color: "#FF4925",
                  fontWeight: "600",
                  lineHeight: "25.6px",
                  letterSpacing: "-0.32px",
                }}
              >
                Download{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              {/* <a href="#" class="card-link">
              Another link
            </a> */}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <h4>
          Hire top 1% of Global Data &<br /> Analytics Engineers
        </h4>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">
              <img
                src="./images/dataen.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Engineering</p>
            </div>
            <div class="col">
              <img
                src="./images/clouden.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Cloud Engineering</p>
            </div>
            <div class="col">
              {" "}
              <img
                src="./images/dataan.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Analystics & Bi</p>
            </div>
            <div class="col">
              <img
                src="./images/datasc.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>Data Science - AI & ML</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">
              <img
                src="./images/devops.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>DevOps</p>
            </div>
            <div class="col">
              <img
                src="./images/cloudops.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>CloudOps</p>
            </div>
            <div class="col">
              <img
                src="./images/fullstack.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>FullStack Development</p>
            </div>
            <div class="col">
              <img
                src="./images/qa.png"
                alt="..."
                style={{ height: "50px", width: "50px" }}
              />
              <p>QA Test Automation</p>
            </div>
          </div>
          <div
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          // }}
          >
            <h4>Client Testimonial</h4>
            <div
              className="row energydo"
              style={{
                height: "460px",
                padding: "40px 40px 40px 40px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "flex",
                textAlign: "left",
              }}
            >
              <div className="col-md-4">
                <h4
                  style={{
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "700px",
                    lineHeight: "56px",
                    letterSpacing: "1px",
                    color: "#ffff",
                  }}
                >
                  Energy Domain
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                  }}
                >
                  Advance Data Lakehouse Solution
                </p>
                <img
                  src="./images/gbr.png"
                  alt="..."
                  style={{
                    width: "194px",
                    height: "194px",
                    marginTop: "105px",
                  }}
                />
              </div>
              <div
                className="col-md-8"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <h4
                  style={{
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "700px",
                    lineHeight: "56px",
                    letterSpacing: "1px",
                    textAlign: "left",
                    color: "#ffff",
                  }}
                >
                  GBR Eco
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    width: "440px",
                    textAlign: "left",
                    color: "#ffff",
                    fontWeight: "500",
                    lineHeight: "35px",
                  }}
                >
                  From endless computing power, to reduced cycle time and easier
                  data access, the new efficiency supported by DataObserve
                  enabled us to produce timely insights about products,
                  customers, and Vendors and significantly enhance their
                  experiences.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                    marginTop: "100px",
                  }}
                >
                  Rama Krishna Raju Dandu
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#ffff",
                    marginTop: "-15px",
                  }}
                >
                  Chief Operating Officer, GBR Eco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          width: "1210px",
        }}
      >
        <div
          className="container row"
          style={{
            display: "flex",
          }}
        >
          <img
            className="col-md-2"
            src="./images/amgn.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/nbcu.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/universalm.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/reliance.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/bonduelle.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
          <img
            className="col-md-2"
            src="./images/greendot.png"
            alt="..."
            style={{ width: "100px", height: "50px" }}
          />
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <h2>Talent as a Service</h2>
          <div className="cocreater mb-5">
            <p
              style={{
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "27px",
                width: "460px",
                marginLeft: "50%",
                marginTop: "60px",
              }}
            >
              We're introducing a new approach to hiring cloud Engineers. This
              service will help your cloud engineering team to build innovative
              digital transformation solutions.
            </p>
            <h6
              style={{
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "30px",
                marginLeft: "50%",
              }}
            >
              Meet Cocreater
            </h6>
            <button
              className="botn"
              style={{
                padding: "16px 50px 16px 50px",
                fontSize: "15px",
                color: "white",
                marginLeft: "50%",
              }}
            >
              Explore CoCreater{" "}
              <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </button>
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

export default Talent;
