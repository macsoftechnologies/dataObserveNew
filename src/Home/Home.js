import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../products/Footer";
import Navbar from "../products/Navbar";
import allanimations from "../../src/videos/allanimations.mp4"

function Home() {
  const Navigate = useNavigate();
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const sectionRef = useRef(null);

  // Function to handle intersection changes
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsProcessVisible(true);

      // Simulate a process (e.g., loading) for 2 seconds
      setTimeout(() => {
        setIsProcessVisible(false);
      }, 2000);
    }
  };

  // Set up the IntersectionObserver
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the target is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* ....slide... */}
      <div className="Homeslide">
        <div className="container homeslide-1">
          <div className="row">
            <div className="col-md-6">
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
              
              <img className="allanimation-mainone" src="./images/allanimations.gif" alt="background" width={300} />
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
        <div class=" container shadow p-3 mb-5 bg-white rounded  acco">
          <div className="row happy-customers-images">
            <div className="col-md-2">
              <img
                src="./images/Gen.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
            </div>

            <div className="col-md-2">
              <img
                src="./images/genmab.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
            </div>
            <div className="col-md-2">
              <img
                src="./images/igt.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
            </div>
            <div className="col-md-2">
              <img
                src="./images/nbc.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
            </div>
            <div className="col-md-2">
              <img
                src="./images/thermo.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
            </div>
            <div className="col-md-2">
              <img
                src="./images/universal.png"
                className="App-logo gen-1"
                alt="logo"
                width={100}
              />
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
              <h3 className="cloud-head">
                Start Your Digital Transformation
                <br /> Journey With Us
              </h3>
              <div className="container mt-3">
                <div className="row box">
                  <div className="col-md-4">
                    <div className="text-center boxPad">
                      <img
                        src="./images/uparrow.png"
                        className="App-logo arrow"
                        alt="logo"
                        width={100}
                      />
                      <h5>Cloud Transformation</h5>

                      <p className="arrowtext text-center">
                        Take your business to the clouds with DataObserve's
                        cloud certified architects, who can assist you in
                        minimizing downtimes, enhancing agility, and elevating
                        your capacity to innovate through efficient cloud
                        migration.
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
                      <h5>Data Engineering</h5>

                      <p className="arrowtext text-center">
                        Reconsider current procedures to ensure data
                        transparency and effortless accessibility. Our Data
                        Engineering ensures fast query retrieval, enabling
                        businesses to fully unlock the potential of big data
                        solutions.
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
                      <h5>Data Analytics and BI</h5>

                      <p className="arrowtext text-center">
                        Business Intelligence involves data structures and
                        visualization to enhance decision-making. DataObserve's
                        business intelligence solutions make comprehending
                        shopper behavior more straightforward than ever.
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
                      <h5>AI and Machine Learning</h5>

                      <p className="arrowtext text-center">
                        AI and Machine Learning services, when integrated with
                        DataObserve’s cloud offerings, have the potential to
                        enhance customer experiences, optimize resource
                        utilization, and facilitate improved decision-making.
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
                      <h5>DevOps as a Service</h5>

                      <p className="arrowtext text-center">
                        DevOps-as-a-Service is an advanced delivery model
                        created to enhance application development. Utilize our
                        DevOps as a service (DaaS) solutions to achieve time and
                        cost savings through the automation of deployment
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
                      <h5>Application Modernization</h5>

                      <p className="arrowtext text-center">
                        Application modernization is essentially the process of
                        upgrading current applications using state-of-the-art
                        computing technology. Increase your productivity tenfold
                        by smoothly migrating your entire underlying
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
        <div className="right"></div>
        <div className="left"></div>
        <div>
          <p className="unleash">
            We unleash your potential in all directions.
          </p>
        </div>
      </div> */}

      {/* .....circles start unleash end.... */}

      {/* //....cloud partners.. */}
      <div className="container">
        <div
          className="capability"
          style={{
            color: "#505050",
            fontSize: "31.35px",
            fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                        fontFamily: "Poppins",
                        fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            lineHeight: "25.60px",
                            wordWrap: "break-word",
                          }}
                        >
                          AWS Well-Architected Partner
                          <br />
                          Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        lineHeight: "26.40px",
                        wordWrap: "break-word",
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        Amazon QuickSight
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                            fontSize: 16,
                            fontFamily: "Poppins",
                            fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          lineHeight: "25.60px",
                          wordWrap: "break-word",
                        }}
                      >
                        AWS Lambda Delivery
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
        </div>
      </div>

      {/* ..cloud partners end */}

      {/* ...data lake... */}

      <div className="datalake">
        <h4 className="lake-text">
          Switch To Future-ready Advanced Data
          <br />
          Lakehouse Solutions
        </h4>
        <p className="lake-para">
          Organizations are taking their data from various silos and aggregating
          all that data in one location to do analytics and
          <br />
          machine learning on top of that data. To get the most value from it,
          they need to leverage a modern data architecture
          <br />
          that allows them to move data between data lakes and purpose-built
          data stores easily.
        </p>
        {/* <div className="container flow-chart-img">
          <img className="datalake-1" src="./images/datalake.png" alt="data" />
        </div> */}

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
          </div>
        </div>
        <div>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>

      {/* ....data lake end.. */}

      {/* ....circle.. */}
      <div className="circles">
        <div className="right"></div>
        <div className="left"></div>
      </div>

      {/* ....circle end... */}

      {/* ....aws images... */}
      <div className="technology">
        <h4 className="container platform">Technology Platform</h4>
        <div className="container technology-platform">
          <div className="row">
            <div className="col-md-2">
              <img className="" src="./images/aws.png" alt="aws" width={100} />
            </div>

            <div className="col-md-2">
              <img
                className="databricks"
                src="./images/databricks.png"
                alt="aws"
              />
            </div>
            <div className="col-md-2">
              <img
                className="googlecloud"
                src="./images/googlecloud.png"
                alt="aws"
              />
            </div>
            <div className="col-md-1">
              <img className="azure" src="./images/azure.png" alt="aws" />
            </div>

            <div className="col-md-1">
              <img
                className="snowflake"
                src="./images/snowflake.png"
                alt="aws"
              />
            </div>
            <div className="col-md-2">
              <img
                className="salesforce"
                src="./images/salesforce.png"
                alt="aws"
              />
            </div>
            <div className="col-md-2">
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
