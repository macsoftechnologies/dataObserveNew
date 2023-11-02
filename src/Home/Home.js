import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../products/Footer";
import Navbar from "../products/Navbar";
// import allanimations from "../../src/videos/allanimations.mp4"

function Home() {
  const Navigate = useNavigate();
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const sectionRef = useRef(null);

  // Function to handle intersection changes
  // const handleIntersection = (entries) => {
  //   const entry = entries[0];
  //   if (entry.isIntersecting) {
  //     setIsProcessVisible(true);

  // Simulate a process (e.g., loading) for 2 seconds
  //     setTimeout(() => {
  //       setIsProcessVisible(false);
  //     }, 5000);
  //   }
  // };

  // Set up the IntersectionObserver
  // useEffect(() => {
  //   const options = {
  //     root: null, // viewport
  //     rootMargin: "0px",
  //     threshold: 0.5, // 50% of the target is visible
  //   };

  // const observer = new IntersectionObserver(handleIntersection, options);
  // if (sectionRef.current) {
  //   observer.observe(sectionRef.current);
  // }

  // Cleanup observer when component unmounts
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <Navbar />

      {/* ....slide... */}
      <div className="Homeslide">
        <div className="container homeslide-1">
          <div className="row">
            <div className="col-md-6 home-mainslide-data-engi">
              <h2 className="home-slide-heading">
                Data
                <br />
                Engineering
                <br />
                Simplified
              </h2>
              <p className="home-slide-paragraph">
                DataObserve unites your entire organization with <br />
                trusted data that's easy to find, understand, and <br />
                access so you can do more with your data.
              </p>
              <Link to="/contact">
                <button className="slide-contact">contact us</button>
              </Link>
            </div>
            {/* <div className="col-md-6 half">
              <div className="circles-1">
                <div className="right-1"></div>
                <div className="left-1"></div>
              </div>
            </div> */}

            <div className="col-md-6">
              <img
                className="allanimation-mainone"
                src="./images/allanimations.png"
                alt="background"
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ....slide end... */}

      {/* ....happay customers to digital transformation .... */}
      <div className="full-bg-color">
        <div>
          <h4 className="customers">DataObserve's Happy Customers</h4>
        </div>
        {/* ....happy customers images.... */}
        <div className="Digital-Overall-gap">
          <div class="shadow p-3 mb-5 bg-white rounded happy-customers-shadowletters">
            <div className="d-flex happy-customers-data-observe">
              <div>
                <img
                  className="srd-img-01"
                  src="./images/srd-1.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-02"
                  src="./images/srd-2.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-03"
                  src="./images/srd-3.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-04"
                  src="./images/srd-4.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-05"
                  src="./images/srd-5.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-06"
                  src="./images/srd-6.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-07"
                  src="./images/srd-7.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-08"
                  src="./images/srd-8.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-09"
                  src="./images/srd-9.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-10"
                  src="./images/srd-10.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-11"
                  src="./images/srd-11.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-12"
                  src="./images/srd-12.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="srd-img-13"
                  src="./images/srd-13.png"
                  alt="srd"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
        {/* ...happay customers images end... */}

        <div ref={sectionRef}>
          {isProcessVisible ? (
            <div className="d-flex justify-content-center">
              <img src="/images/bottom-to-top.gif" alt="GIF" />
            </div>
          ) : (
            <div className="cloud-top">
              <h3 className="cloud-head digital-transfor-mation">
                Start Your Digital Transformation
                <br /> Journey With Us
              </h3>
              <div className="container mt-5 cloud-mar-gin">
                <div className="row box">
                  <div className="col-md-4">
                    <div className="text-center boxPad">
                      <img
                        src="./images/uparrow.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        Cloud Transformation
                      </h5>

                      <p className="arrowtext text-center">
                        Elevate your business to new heights with DataObserve’ s
                        team of cloud-certified architects. They can help you
                        minimize downtimes, boost agility, and enhance your
                        innovation potential through seamless cloud migration.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="text-center boxPad">
                      <img
                        src="./images/dataengg.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        Data Engineering
                      </h5>

                      <p className="arrowtext text-center">
                        Rethink your current processes to guarantee data
                        transparency and easy accessibility. Our Data
                        Engineering expertise ensures speedy query retrieval,
                        empowering businesses to fully harness the potential of
                        big data solutions.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="text-center boxPad">
                      <img
                        src="./images/powerbi.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        Data Analytics and BI
                      </h5>

                      <p className="arrowtext text-center">
                        Business Intelligence encompasses data structures and
                        visualization to improve decision-making. DataObserve’ s
                        BI solutions simplify the understanding of customer
                        behavior like never before.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 down-bot">
                    <div className="text-center boxPad">
                      <img
                        src="./images/ai.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        AI and Machine Learning
                      </h5>

                      <p className="arrowtext text-center">
                        When integrated with DataObserve’ s cloud services, AI
                        and Machine Learning solutions hold the promise of
                        elevating customer experiences, optimizing resource
                        utilization, and enabling more informed decision-making.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 down-bot">
                    <div className="text-center boxPad">
                      <img
                        src="./images/deveops.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        DevOps as a Service
                      </h5>

                      <p className="arrowtext text-center">
                        DevOps-as-a-Service is an innovative delivery model
                        designed to improve application development. Leverage
                        our DevOps as a Service (DaaS) solutions to achieve both
                        time and cost savings by automating deployment
                        processes.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 down-bot">
                    <div className="text-center boxPad">
                      <img
                        src="./images/application.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5 className="cloud-trans-formation">
                        Application Modernization
                      </h5>

                      <p className="arrowtext text-center">
                        Application modernization is fundamentally about
                        upgrading existing applications with cutting-edge
                        computing technology. Boost your productivity manifold
                        by seamlessly migrating your entire underlying
                        infrastructure to the cloud with DataObserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ....digital transformation.... */}

        {/* ....digital transformation end... */}
      </div>

      {/* .......happay customers to digital transformation end ....  */}

      {/* .....circles start unleash.... */}
      {/* <div className="circle-background">
        <div className="right animate__animated animate__bounceOut animate__infinite	infinite animate__slow	1s"></div>
        <div className="left animate__animated animate__bounceOut animate__infinite	infinite animate__slow	1s"></div>
        <div>
          <p className="unleash animate__animated animate__lightSpeedInLeft animate__infinite	infinite animate__slow	2s">
            We unleash your potential in all directions.
          </p>
        </div>
      </div> */}

      <div className="main-home-page">
        <img
          src="images/Homeland-page.png"
          className="homeland-page"
          alt="Homeland"
        />

        <div className="main-landing-Page">
          <p className="landingpage-paragraph">
            DataObserve offers robust cloud capabilities
            <br /> to create an Integrated Data
            <br /> Democratization Solution that enhances the <br />
            end-user experience significantly.
          </p>
          <p className="landingpage-paragraph2">
            At last, there's a consulting organization with the expertise to
            construct a unified solution for <br />
            seamlessly discovering and comprehending data from various sources.
            It all begins with your
            <br />
            data catalog, providing comprehensive visibility and maximizing the
            value of your data.
            <br /> Regain trust in your data today.
          </p>
          <a href="/contact" style={{textDecoration:"none"}}>
            <button
              style={{
                display: "flex",
                height: "61px",
                maxWidth: "255px",
                padding: "20px 46px 21px 48px",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginTop: "45px",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              <span
                className="contact-decoration"
                style={{
                  color: "blue",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "19px",
              

                }}
              >
                Contact Us
              </span>{" "}
              <i
                className="fa fa-long-arrow-right ml-3 contact-decoration"
                style={{
                  width: "23px",
                  fontSize: "29px",
                  flexShrink: "0",
                  color: "blue",
                textDecoration: "none",

                }}
                aria-hidden="true"
              ></i>
            </button>
          </a>
        </div>
      </div>

      {/* .....circles start unleash end.... */}

      {/* //....cloud partners.. */}
      <div className="container">
        <div
          className="capability"
          style={{
            color: "#505050",
            fontSize: "31.35px",
            fontFamily: "",
            fontWeight: 700,
            lineHeight: "50.16px",
            wordWrap: "break-word",
          }}
        >
          DataObserve Cloud Capabilities
        </div>
        <div
          style={{
            paddingTop: 4,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              height: 52,
              paddingRight: 54,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 904,
                color: "rgba(0, 0, 0, 0.70)",
                fontSize: 16,
                fontFamily: "",
                fontWeight: 400,
                lineHeight: "25.60px",
                wordWrap: "break-word",
              }}
            >
              DataObserve is the fastest-growing Cloud Transformation &amp; Data
              Analytics company with strong expertise in Data lake solutions,
              Data Warehouse Engineering, Data Migration &amp; Modernization.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10">
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "58.50px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 40,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    borderRadius: 18,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 26,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "877.50px",
                      paddingBottom: "18.39px",
                      paddingRight: "717.50px",
                      borderBottom: "1px rgba(5, 5, 5, 0.10) solid",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="competencies"
                      style={{
                        color: "#1A4AB9",
                        fontSize: 22,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "26.40px",
                        wordWrap: "break-word",
                      }}
                    >
                      Competencies
                    </div>
                  </div>
                  <div
                    style={{
                      width: "877.50px",
                      height: "112.38px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "286.83px",
                        height: "51.19px",
                        left: 0,
                        top: 0,
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                          {/* <img src="./images/tickmark.png" alt="tick" width={100}/> */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "36.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 14,
                            fontFamily: "",
                            fontWeight: 600,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Data &amp; Analytics Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        left: "297.83px",
                        top: 0,
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 14,
                          fontFamily: "",
                          fontWeight: 600,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        DevOps Consulting Competency
                      </div>
                    </div>
                    <div
                      style={{
                        width: "284.84px",
                        height: "51.19px",
                        left: "595.66px",
                        top: 0,
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "91.84px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 14,
                            fontFamily: "",
                            fontWeight: 600,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Migration Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "287.83px",
                        height: "51.19px",
                        left: 0,
                        top: "61.19px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "7.83px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 14,
                            fontFamily: "",
                            fontWeight: 600,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Microsoft Workloads Consulting
                          <br />
                          Competency
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "92.83px",
                        left: "297.83px",
                        top: "61.19px",
                        position: "absolute",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 12,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 15,
                          alignSelf: "stretch",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 14,
                          fontFamily: "",
                          fontWeight: 600,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        APN Immersion Days
                      </div>
                    </div>
                    <div
                      style={{
                        width: "287.84px",
                        height: "51.19px",
                        left: "595.66px",
                        top: "61.19px",
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          left: 0,
                          top: 5,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div>
                          <i
                            class="fa fa-check-circle"
                            style={{ color: "#0046E8" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div
                        style={{
                          height: 52,
                          paddingRight: "21.84px",
                          left: 27,
                          top: 0,
                          position: "absolute",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#050505",
                            fontSize: 14,
                            fontFamily: "",
                            fontWeight: 600,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          Cloud Well-Architected
                          <br />
                          Partner Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-flex justify-center align-center">
              <img
                className="image2"
                src="./images/image2.png"
                alt="image"
                width={100}
              />
            </div>
          </div>

          <div className="col-md-10">
            <div>
              <div
                style={{
                  borderRadius: 18,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 26,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "877.50px",
                    paddingBottom: "18.39px",
                    paddingRight: "824.50px",
                    borderBottom: "1px rgba(5, 5, 5, 0.10) solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A4AB9",
                      fontSize: 22,
                      fontFamily: "",
                      fontWeight: 600,
                      lineHeight: "26.40px",
                      wordWrap: "break-word",
                      marginTop: "13px",
                    }}
                  >
                    SDPs
                  </div>
                </div>
                <div
                  style={{
                    width: "877.50px",
                    height: "209.16px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      paddingRight: "65.83px",
                      left: 0,
                      top: 0,
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Amazon Kinesis Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "87.83px",
                      left: "297.83px",
                      top: 0,
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Amazon EMR Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "52.84px",
                      left: "595.66px",
                      top: 0,
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Amazon Redshift Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "31.83px",
                      left: 0,
                      top: "35.59px",
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Amazon DynamoDB Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      width: "287.83px",
                      height: "51.19px",
                      left: "297.83px",
                      top: "35.59px",
                      position: "absolute",
                    }}
                  >
                    <div
                      style={{
                        height: 15,
                        left: 0,
                        top: 5,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "3.83px",
                        left: 27,
                        top: 0,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 14,
                          fontFamily: "",
                          fontWeight: 600,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon EC2 for Windows Server
                        <br />
                        Delivery
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "98.84px",
                      left: "595.66px",
                      top: "35.59px",
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Azure Virtual Network
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "89.83px",
                      left: 0,
                      top: "96.78px",
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      Amazon RDS Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      width: "287.83px",
                      height: "51.19px",
                      left: "297.83px",
                      top: "96.78px",
                      position: "absolute",
                    }}
                  >
                    <div
                      style={{
                        height: 15,
                        left: 0,
                        top: 5,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingRight: "27.83px",
                        left: 27,
                        top: 0,
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          color: "#050505",
                          fontSize: 14,
                          fontFamily: "",
                          fontWeight: 600,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon OpenSearch Service
                        <br />
                        Delivery
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "110.84px",
                      left: "595.66px",
                      top: "96.78px",
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      AWS Glue Delivery
                    </div>
                  </div>
                  <div
                    style={{
                      paddingRight: "83.83px",
                      left: 0,
                      top: "157.97px",
                      position: "absolute",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 15,
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div>
                        <i
                          class="fa fa-check-circle"
                          style={{ color: "#0046E8" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        color: "#050505",
                        fontSize: 14,
                        fontFamily: "",
                        fontWeight: 600,
                        lineHeight: "25.60px",
                        wordWrap: "break-word",
                      }}
                    >
                      AWS Lambda Delivery
                    </div>
                  </div>
                </div>

                {/* .... */}
              </div>
            </div>
          </div>
          {/* <div className="aws-azure-images"> */}
          <div className="col-md-1">
            <div className="justify-center align-center">
              <img
                className="aws-cloud-base"
                src="./images/aws-cloud-base.png"
                alt="image"
                width={100}
              />
            </div>
          </div>
          <div className="col-md-1">
            <div className="justify-center align-center">
              <img
                className="azure-cloud-base"
                src="./images/azure-cloud-base.png"
                alt="image"
                width={100}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* ..cloud partners end */}

      {/* ...data lake... */}

      <div className="datalake">
        <img
          className="datalake-half-piece"
          src="./images/top.png"
          alt="top"
          width={100}
        />
        <h4 className="lake-text">
          Transition to Cutting-Edge Data
          <br />
          <h4 className="lake-House">Lakehouse Solutions</h4>
        </h4>
        <p className="lake-para">
          Companies are unifying their data from diverse sources into a single
          repository for advanced analytics and machine
          <br />
          learning applications. To maximize its potential, they require a
          contemporary data architecture that facilitates
          <br />
          seamless data movement between data lakes and specialized data stores.
        </p>

        <div className="container">
          <div className="row lake-pad">
            <div className="col-md-6">
              <img
                className="data-lake-image"
                src="./images/data-lake-image.png"
                alt="datalake"
              />
            </div>
            <div className="col-md-6">
              <div class="card datalake-card">
                <div class="card-body">
                  <ul className="datalakes-names">
                    <li>Scalable data lakes</li>
                    <li>Purpose-built data services</li>
                    <li>Seamless data movement</li>
                    <li>Unified governance</li>
                    <li>Performant and cost-effective</li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              className="datalake-half-piece-01"
              src="./images/bottom.png"
              alt="top"
              width={100}
            />
          </div>
        </div>
        <div>
          <a href="/contact">
            <button className="contact-us">Contact Us</button>
          </a>
        </div>
      </div>

      {/* ....data lake end.. */}

      {/* ....circle.. */}
      <div className="circles">
        <div className="right  animate__animated animate__rotateIn animate__slow	2s animate__infinite	infinite"></div>
        <div className="left animate__animated animate__rotateIn animate__slow	2s animate__infinite	infinite"></div>
        <div>
          <p className="unleash animate__animated animate__lightSpeedInLeft animate__infinite	infinite  animate__slow	2s">
            We unleash your potential in all directions.
          </p>
        </div>
      </div>

      {/* ....circle end... */}

      {/* ....aws images... */}
      <div className="technology">
        <h4 className="container platform">Technology Platform</h4>
        <div className="container">
          <div className="d-flex technology-platform">
            <div>
              <img
                className="aws-image"
                src="./images/aws.png"
                alt="aws"
                width={100}
              />
            </div>

            <div>
              <img
                className="databricks"
                src="./images/databricks.png"
                alt="aws"
              />
            </div>
            <div>
              <img
                className="googlecloud"
                src="./images/googlecloud.png"
                alt="aws"
              />
            </div>
            <div>
              <img className="azure" src="./images/azure.png" alt="aws" />
            </div>

            <div>
              <img
                className="snowflake"
                src="./images/snowflake.png"
                alt="aws"
              />
            </div>
            <div>
              <img
                className="salesforce"
                src="./images/salesforce.png"
                alt="aws"
              />
            </div>
            <div>
              <img className="" src="./images/tab.png" alt="aws" width={100} />
            </div>
          </div>
        </div>

        <div className="container partner">
          We have strong partnerships with the world's top tech companies.
        </div>
      </div>
      {/* ....aws images end...  */}

      {/* ...talk to us... */}
      {/* <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 shadow-sm rounded">
              <div>
                <div className="card card-1">
                  <div class="card-body card-body-1">
                    <h5 class="card-title title">Talk to Us</h5>
                    <p class="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true">
                      <span className="hello">hello@dataserve.io</span>
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
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;
