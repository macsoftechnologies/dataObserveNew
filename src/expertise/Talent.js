import React from "react";
import "./Talent.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import talent from "../../src/videos/talent.MOV";
import Footer from "../../src/products/Footer";

const Talent = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hire">
          <div>
            <video className="talent" autoPlay loop muted>
              <source src={talent} type="video/mp4" />
            </video>
            <div
              style={{
                display: "inline-flex",
                minHeight: "1080px",
                padding: "42px 400px 100px 255px",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "absolute",
                top: "170px",
                left: "-121px",
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
                Hire “Enterprise-grade”
                <br /> Data & Analytics <br />
                experts in next 48 hours
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
                <p className="arrowtext text-center">
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
                <p className="arrowtext text-center">
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
                  style={{ width: "53px", height: "62px" }}
                />
                <p>High retention rate</p>
                <h4>97%</h4>
                <p className="arrowtext text-center">
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
                  style={{ width: "54px", height: "62px" }}
                />
                <p>Enterprise Grade Engineers</p>
                <h4>90%</h4>
                <p className="arrowtext text-center">
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
                  style={{ width: "53px", height: "62px" }}
                />
                <p>Trust & Reliability</p>
                <h4>100+</h4>
                <p className="arrowtext text-center">
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
                  style={{ width: "53px", height: "62px" }}
                />
                <p>Global Team</p>
                <h4>5+</h4>
                <p className="arrowtext text-center">
                  Global delivery centers across the USA, Canada, UK, India,
                  Netherlands, Dubai & Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{ background: "#1A4AB9", padding: "50px" }}>
        <div className="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner" style={{ marginLeft: "11%" }}>
              <div class="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div
                      class="col-md-4"
                      style={{
                        width: "25%",
                        marginBottom: "50px",
                        position: "relative",
                      }}
                    >
                      <div className="talentcarosalbg">
                        <div style={{ padding: "13px" }}>
                          <h6 className="talentheading">Steve Stutts</h6>
                          <p
                            style={{
                              fontSize: "25px",
                              color: "#fff",
                              opacity: "0.7",
                              marginBottom: "5px",
                            }}
                          >
                            Python Developer
                          </p>
                          <p
                            style={{
                              color: "#fff",
                              fontWeight: "600",
                            }}
                          >
                            Expert IN
                          </p>
                          <div>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                                marginBottom: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                AWS
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                TABLEAU
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                ETL
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                AWS GLUE
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                REDSHIFT
                              </span>
                            </button>
                          </div>
                          <div
                            className="d-flex"
                            style={{
                              marginTop: "15px",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                EXPERIENCE
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                6 +YEARS
                              </p>
                            </div>
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                AVAILABILTY
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                Full Time
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="./images/steves.png"
                        alt="..."
                        className="talentimages"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row">
                    <div
                      class="col-md-4"
                      style={{
                        width: "25%",
                        marginBottom: "50px",
                        position: "relative",
                      }}
                    >
                      <div className="talentcarosalbg">
                        <div style={{ padding: "13px" }}>
                          <h6
                            className="talentheading"
                            style={{ marginBottom: "0px" }}
                          >
                            Harish Angal
                          </h6>
                          <p
                            style={{
                              fontSize: "25px",
                              color: "#fff",
                              opacity: "0.7",
                              marginBottom: "2px",
                            }}
                          >
                            Cloud Expert
                          </p>
                          <p
                            style={{
                              color: "#fff",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Expert IN
                          </p>
                          <div>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                                marginBottom: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                Azure
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                Power Bi
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                ETL/ELT
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                Azure Stack HCI
                              </span>
                            </button>
                            <button
                              className="w3-button w3-black w3-round-xlarge"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                ADI
                              </span>
                            </button>
                          </div>
                          <div
                            className="d-flex"
                            style={{
                              marginTop: "15px",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                EXPERIENCE
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                6 +YEARS
                              </p>
                            </div>
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                AVAILABILTY
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                Full Time
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="./images/harish.png"
                        alt="..."
                        className="talentimages"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row">
                    <div
                      class="col-md-4"
                      style={{
                        width: "25%",
                        marginBottom: "50px",
                        position: "relative",
                      }}
                    >
                      <div className="talentcarosalbg">
                        <div style={{ padding: "13px" }}>
                          <h6
                            className="talentheading"
                            style={{ marginBottom: "0px" }}
                          >
                            Gayatri Suniti
                          </h6>
                          <p
                            style={{
                              fontSize: "25px",
                              color: "#fff",
                              opacity: "0.7",
                              marginBottom: "2px",
                            }}
                          >
                            DevOps Expert
                          </p>
                          <p
                            style={{
                              color: "#fff",
                              fontWeight: "600",
                              marginBottom: "0px",
                            }}
                          >
                            Expert IN
                          </p>
                          <div>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                                marginBottom: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                Jenkins
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                Terraform
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                K8S
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                GitOps/GitLabs
                              </span>
                            </button>
                            <button
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderRadius: "20px",
                                border: "none",
                                padding: "6px 18px",
                                marginRight: "5px",
                              }}
                            >
                              <span style={{ color: "#fff", opacity: "0.7" }}>
                                platform Engg
                              </span>
                            </button>
                          </div>
                          <div
                            className="d-flex"
                            style={{
                              marginTop: "15px",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                EXPERIENCE
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                6 +YEARS
                              </p>
                            </div>
                            <div>
                              <h6 style={{ fontWeight: "600", color: "white" }}>
                                AVAILABILTY
                              </h6>
                              <p style={{ color: "#fff", opacity: "0.7" }}>
                                Full Time
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="./images/gayatri.png"
                        alt="..."
                        className="talentimages"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
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
                  From limitless computing power to shortened cycle times and
                  simplified data accessibility, the newfound efficiency
                  facilitated by DataObserve empowers us to generate timely
                  insights about products, customers, and vendors, markedly
                  improving their experiences.
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
          <p className="text-center">
            Recruit highly skilled employees as needed through a cloud-based
            platform. These hires will not only perform tasks efficiently but
            also contribute to cost savings.
          </p>
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
              Meet Docreater
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
              Explore DoCreater{" "}
              <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="card text-center" style={{ border: "0px" }}>
        {/* {/ <div class="card-header">Featured</div> /} */}
        <div class="card-body faq-class">
          <h5 class="card-title" style={{ color: "white" }}>
            FAQs
          </h5>
          <div
            class="accordion"
            id="accordionExample"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingOne"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What is Talent as a Service (TaaS) and how can it benefit
                      my organization?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Talent as a Service is a model that provides on-demand access
                  to skilled professionals and expertise. It allows
                  organizations to quickly scale their teams, access specialized
                  talent, and address specific project needs without the
                  long-term commitments of traditional hiring. TaaS enhances
                  flexibility, efficiency, and agility in workforce management.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingTwo"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How does Talent as a Service help organizations meet their
                      talent needs?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  TaaS addresses talent needs by providing access to a pool of
                  pre-vetted, skilled professionals across various domains.
                  Whether you need developers, designers, project managers, or
                  other specialists, TaaS allows you to quickly assemble a team
                  with the right skills for your projects. This flexibility is
                  especially valuable for organizations with fluctuating
                  workloads. VHS.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What types of roles and expertise can I find through
                      Talent as a Service?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Our Talent as a Service offering covers a wide range of roles
                  and expertise, including but not limited to software
                  development, UX/UI design, data science, project management,
                  and more. We work closely with our clients to understand their
                  specific requirements and provide access to professionals with
                  the right skills and experience for their projects.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFour"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Can Talent as a Service be used for both short-term and
                      long-term projects?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, TaaS is designed to be flexible and adaptable to the
                  duration of your projects. Whether you need talent for a
                  short-term project, a specific phase of development, or an
                  ongoing basis, we can tailor our services to meet your unique
                  requirements. This scalability ensures that you only pay for
                  the talent you need when you need it.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFive"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How does Talent as a Service streamline the hiring
                      process?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFiver"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Talent as a Service streamlines the hiring process by
                  providing access to a curated pool of pre-screened
                  professionals. Instead of going through lengthy hiring cycles,
                  you can quickly assemble a team of skilled individuals, saving
                  time and effort. This agility is particularly beneficial for
                  organizations facing tight project deadlines or sudden
                  increases in workload.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSix"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Is the talent provided through Talent as a Service vetted
                      and qualified?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, we rigorously vet and qualify the professionals in our
                  talent pool. Our selection process ensures that you have
                  access to skilled individuals with proven expertise in their
                  respective fields. We prioritize quality and match the right
                  talent to your specific project requirements, giving you
                  confidence in the capabilities of the professionals you work
                  with.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSeven"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How can Talent as a Service contribute to
                      cost-effectiveness in workforce management?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Talent as a Service offers cost-effectiveness by allowing
                  organizations to scale their workforce without the long-term
                  financial commitments of traditional hiring. You only pay for
                  the talent you need for the duration of your project, reducing
                  overhead costs associated with full-time employees. This
                  cost-effective model is especially valuable for project-based
                  work.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingEight"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Can Talent as a Service support remote and distributed
                      work setups?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Absolutely. Talent as a Service is well-suited for remote and
                  distributed work setups. Our professionals are experienced in
                  collaborating across various geographical locations. We
                  provide the necessary tools and communication channels to
                  ensure seamless collaboration, enabling your team to work
                  together effectively, regardless of physical location.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Talent;
