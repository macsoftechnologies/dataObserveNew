import React from "react";
import "./Gaming.css";
import Navbar from "../products/Navbar";
import Faq from "../products/Faq";
import Footer from "../products/Footer";
import gaming from "../../src/videos/gaming.mp4";
function Gaming() {
  return (
    <div>
      <Navbar />
      {/* !--nav bar ends--! */}

      <div>
        <video className="play-gaming-videos" autoPlay loop muted>
          <source src={gaming} type="video/mp4" />
        </video>
        <div className="gaming-main-img">
          <p className="headinggame">
            <div className="mainhead">
              {" "}
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                Gaming
              </p>
              <span>
                Empower customer
                <br /> experiences with data-
                <br />
                driven solutions that
                <br /> facilitate gamification.
              </span>
              <br />
            </div>
            <p className="subhead">
              Experience seamless and rapid online gaming with DataObserve's
              Cloud platform.
              <br /> Collaborate with DataObserve for tailor-made cloud
              solutions that cater to every aspect of the
              <br /> gaming lifecycle.
            </p>
          </p>
          <button
            style={{
              display: "flex",
              height: "61px",
              maxWidth: "255px",
              padding: "20px 46px 21px 48px",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              marginTop: "40px",
              borderRadius: "5px",
              marginLeft: "14%",
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

      {/* !--6box stArt--! */}

      <div style={{ paddingTop: "30px", marginBottom: "6%" }}>
        <h3 className="platforms">
          Our Expertise in data & cloud for Online Gaming
        </h3>
        <p className="platformspara">
          With our extensive experience in cloud consulting and implementation
          for the online gaming sector, <br />
          we aim to establish ourselves as a reliable partner in this industry.
          Here's what distinguishes us
        </p>

        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4 Bb-1">
              <div className="box-padding bb-line" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game1.png"
                    className="App-logo business"
                    alt="logo"
                    width={45}
                    height={48}
                  />
                  <h6 className="boxhead-1">Gaming Analytics</h6>
                </div>

                <p className="boxtext" style={{ marginTop: "10px" }}>
                  Utilize our cloud-powered gaming analytics to extract valuable
                  insights that enhance the personalized and engaging gaming
                  experience for online players. These analytics also enable the
                  detection of gaming fraud and the monitoring of game
                  performance.
                </p>
              </div>
            </div>

            <div className="col-md-4 Bb-2">
              <div className="box-padding" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game2.png"
                    className="App-logo arrow"
                    alt="logo"
                    width={100}
                  />
                  <h6 className="boxhead-1">
                    Data Lakehouses for
                    <br />
                    Gaming
                  </h6>
                </div>

                <p className="boxtext">
                  Utilize our cloud expertise to consolidate all your gaming
                  analytics and big data in a single data lakehouse, combining
                  the capabilities of data lakes and data warehouses. This
                  integration allows you to merge structured and unstructured
                  gaming data, resulting in real-time insights that enhance the
                  gaming experience.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4 Bb-3">
              <div className="box-padding" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game3.png"
                    className="App-logo  unified-logo"
                    alt="logo"
                  />
                  <h5 className="boxhead-1">
                    {" "}
                    Big Data with
                    <br />
                    Augmented Analytics  
                  </h5>
                </div>

                <p className="boxtext">
                  The utilization of Big Data in the online Gaming industry has
                  seen a significant surge. Elevate your online gaming designs
                  with our cloud partner-powered Big Data solutions. Enhance
                  your business intelligence through the adoption of Augmented
                  Analytics, automating gaming insights for improved outcomes.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4 Bb-4">
              <div className="box-padding" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game4.png"
                    className="App-logo unified-logo"
                    alt="logo"
                  />
                  <h5 className="boxhead-1">
                    {" "}
                    Customer Retention on
                    <br />
                    Advanced BI  
                  </h5>
                </div>

                <p className="boxtext">
                  Harness the synergy of Business Intelligence (BI) and
                  Analytics to gain instant insights into player behavior and
                  loyalty. Elevate customer retention through our BI-enabled
                  personalized services tailored for online players and
                  gamblers.
                </p>
              </div>
            </div>

            <div className="col-md-4 Bb-5">
              <div className="box-padding" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game5.png"
                    className="App-logo arrow"
                    alt="logo"
                    width={100}
                  />
                  <h5 className="boxhead-1"> AI/ML Predictive Models</h5>
                </div>

                <p className="boxtext" style={{ marginTop: "9px" }}>
                  Unleash the full potential of AI and ML predictive models
                  deployed on our partner Cloud platform. Infuse the
                  capabilities of AI, ML, and predictive analytics into online
                  gaming and gambling solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4 Bb-6">
              <div className="box-padding" style={{ height: "333px" }}>
                <div className="d-flex">
                  <img
                    src="./images/game6.png"
                    className="App-logo arrow"
                    alt="logo"
                    width={100}
                  />
                  <h5 className="boxhead-1">AWS for Gaming</h5>
                </div>

                <p className="boxtext" style={{ marginTop: "9px" }}>
                  Develop faster and more innovative games on any platform or
                  device using the Cloud. Harness the extensive cloud
                  infrastructure offered by our gaming and gambling partners to
                  run games securely and efficiently in the cloud, utilizing
                  flexible computing capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !--6box ends--! */}

      {/* !--case study --! */}

      <div>
        <h1 className="case">Our Case Studies</h1>
        <p className="media-case-para" style={{ marginTop: "40px" }}>
          The DataObserve team, consisting of industry experts, stands prepared
          to help online gaming <br />
          enterprises achieve their business objectives. Explore our customer
          success stories to learn how you
          <br /> can maximize the potential of cloud solutions for games and
          esports.
        </p>

        <div
          class="container card mb-3 mt-5 Built-back-colour"
          style={{
            backgroundColor: "#1A4AB9",
            borderRadius: "20px",
          }}
        >
          <div className="right-media-Corner">
            <img
              className="built-corner-image"
              src="./images/right-corner-media.png"
              alt="media"
              width={100}
              height={100}
            />
          </div>

          <div
            class="row overall-built-Corner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "spacebetween",
            }}
          >
            <div class="col-md-5">
              <img
                style={{ height: "252px", width: "100%" }}
                src="./images/media-enter-image.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{
                    color: "white",
                    letterSpacing: "0.68px",
                    fontSize: "19px",
                  }}
                >
                  Built A Unified Augmented Analytics
                  <br /> decision intelligence Platform
                </h5>
                <p class="card-text-3">
                  Learn how we created a self-service, predictive, insights
                  platform driven
                  <br /> by an adaptive machine learning engine which helps
                  improve decision-
                  <br />
                  making.
                </p>
                <p class="card-text" style={{ color: "white" }}>
                  <p style={{ fontSize: 16 }}>
                    Read case study
                    <i
                      class="fa fa-long-arrow-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </p>
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginLeft: "-20px",
                  }}
                >
                  <img
                    src="./images/newaccede.png"
                    alt=""
                    style={{ width: "60px", height: "20px" }}
                  />
                  <img
                    src="./images/slokaenergy.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                  <img
                    src="./images/gbreco.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                  <img
                    src="./images/newsrdsystems.png"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !--case study --! */}

      {/* !--box on img --! */}
      <div className="gameimg">
        <div className="gaming-img-section">
          <div className="lab-data-gaming mb-0">
            {/* <div
              class="card"
              style={{
                border: "none",
                background: "none",
                width: "500px",
                marginLeft: "585px",
              }}
            >
              <div
                class="card-body gaming-bg-pink"
                style={{
                  borderRadius: "27px",
                  height: "225px",
                  width: "390px",
                }}
              >
                <p className="doc">
                  {" "}
                  <span>
                    <img src="./images/doc.png" />
                  </span>{" "}
                  BLOG{" "}
                </p>
                <h5
                  class="card-title"
                  style={{ fontSize: "15px", fontWeight: "600px" }}
                >
                  The Critical Role of Talent in the Digital Transformation
                  Journey
                </h5>
                <h6
                  class="gaming-card-subtitle mb-2"
                  style={{ fontSize: "11px", marginTop: "5px" }}
                >
                  In 2022, digital transformation stands as the primary driver
                  of success for any organization.
                </h6>
                <p
                  class="readmore"
                  style={{ color: "white", marginTop: "25px" }}
                >
                  <small>
                    Download
                    <i
                      class="fa fa-long-arrow-right ml-3"
                      aria-hidden="true"
                    ></i>
                  </small>
                </p>
              </div>
            </div> */}
            <div
              class="card gaming-card-last"
              style={{
                border: "none",
                background: "none",
                width: "500px",
                marginLeft: "54%",
                marginTop: "8%",
              }}
            >
              <div
                class="card-body media-bg-pink"
                style={{
                  borderRadius: "27px",
                  height: "271px",
                  width: "435px",
                  padding: "33px",
                }}
              >
                <p className="doc">
                  {" "}
                  <span>
                    <img src="./images/doc.png" />
                  </span>{" "}
                  BLOG{" "}
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600px",
                    letterSpacing: "0.68px",
                  }}
                >
                  The Critical Role of Talent in the Digital Transformation
                  Journey
                </h5>
                <h6
                  class="media-card-subtitle mb-2"
                  style={{
                    fontSize: "11px",
                    marginTop: "5px",
                    lineHeight: "20px",
                  }}
                >
                  In 2022, digital transformation stands as the primary driver
                  of success for any organization.
                </h6>
                <p
                  class="readmore"
                  style={{
                    color: "white",
                    marginTop: "15px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  <p className="ReAD-More-media">
                    Download
                    <i
                      class="fa fa-long-arrow-right ml-3"
                      aria-hidden="true"
                    ></i>
                  </p>
                </p>
              </div>
            </div>
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
                      What are Gaming Industry Data Solutions, and how do they
                      enhance gaming experiences?
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
                  Gaming Industry Data Solutions involve the application of
                  advanced data technologies to optimize game development, user
                  experiences, and in-game interactions. These solutions play a
                  crucial role in elevating gaming experiences by providing
                  insights, personalizing gameplay, and enhancing player
                  engagement.
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
                      How do Gaming Industry Data Solutions benefit game
                      developers and publishers?
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
                  These solutions empower game developers and publishers by
                  offering data-driven insights into player behavior,
                  preferences, and in-game dynamics. This enables them to create
                  more engaging content, tailor marketing strategies, and
                  optimize monetization models.{" "}
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
                      What challenges do Gaming Industry Data Solutions address
                      within the gaming sector?
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
                  Gaming Industry Data Solutions address challenges related to
                  player retention, in-game monetization, content development,
                  and the need for real-time analytics. By addressing these
                  challenges, organizations can create more immersive and
                  profitable gaming experiences.{" "}
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
                      Can Gaming Industry Data Solutions be customized for
                      specific game genres or platforms?
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
                  Yes, our Gaming Industry Data Solutions are highly
                  customizable and can be tailored to fit specific game genres,
                  platforms, and player demographics. Whether it's mobile,
                  console, PC, or VR gaming, our solutions are designed to meet
                  the unique needs of diverse gaming environments.
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
                      How do Data Solutions foster collaboration within the
                      Gaming Industry?
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
                  Our Data Solutions foster collaboration by providing a
                  centralized platform for game developers, designers, and
                  marketing teams. This facilitates seamless communication,
                  efficient asset sharing, and ensures that everyone is aligned
                  with the overall vision of the game.{" "}
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
                      Are Gaming Industry Data Solutions compliant with gaming
                      industry regulations and player privacy standards?
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
                  Absolutely. Our solutions adhere to gaming industry
                  regulations and player privacy standards, ensuring that data
                  collection and usage are in compliance with legal and ethical
                  standards. Player privacy and data security are top
                  priorities.{" "}
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
                      How do Gaming Industry Data Solutions contribute to player
                      engagement and personalization?
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
                  By analyzing player behavior, gaming preferences, and in-game
                  interactions, our solutions enable game developers to
                  personalize gaming experiences. This includes personalized
                  recommendations, dynamic difficulty adjustment, and targeted
                  in-game events, leading to increased player engagement.{" "}
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
                      Can Data Solutions be integrated with existing game
                      development and distribution systems?
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
                  Yes, our Gaming Industry Data Solutions are designed to
                  seamlessly integrate with existing game development and
                  distribution systems. This ensures a smooth workflow,
                  minimizes disruptions, and allows organizations to leverage
                  their current infrastructure.{" "}
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
                id="headingNine"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
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
                      What kind of analytics capabilities do Gaming Industry
                      Data Solutions offer for game development?
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
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Our Data Solutions provide a range of analytics capabilities,
                  including player behavior analytics, in-game economy analysis,
                  social interaction analytics, and predictive modeling. These
                  analytics empower game developers to make data-driven
                  decisions and enhance game design.{" "}
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
                id="headingTen"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
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
                      How can organizations in the Gaming Industry get started
                      with implementing Data Solutions?
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
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Organizations can initiate the implementation process by
                  reaching out to our team for a consultation. We offer a
                  tailored approach to understand specific needs, evaluate
                  existing systems, and develop a roadmap for implementing data
                  solutions that elevate gaming experiences and drive success in
                  the gaming industry.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gaming;
