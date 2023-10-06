import React from "react";
import "./Aiml.css";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import artificial from "../../src/videos/artificial.mp4";
import Footer from "../products/Footer";

const Aiml = () => {
  return (
    <div>
      <Navbar />

      <div>
        <video className="artificial-machinelearn" autoPlay loop muted>
          <source src={artificial} type="video/mp4" />
        </video>
        <div className="enterprise">
          <div className="container">
            <div
              style={{
                display: "inline-flex",
                minHeight: "1080px",
                // padding: "153px 676px 100px 255px",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "115px",
                position: "absolute",
                top: "110px",
                left: "10%",
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
                AI & Machine Learning
              </p>
              <h4
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "40px",
                  paddingRight: "540px",
                }}
              >
                Harness the potential of AI and ML to construct predictive
                solutions that elevate your business.
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
          Our Expertise in AWS AI and ML Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          With a collective industry experience exceeding four decades, our
          Artificial Intelligence and Machine Learning services are
          custom-designed to guide you toward operational excellence and
          comprehensive growth.
        </p>
      </div>
      <div>
        <div className="cloudcards">
          <div class="ccdiv w-100">
            <div className="cloudimgcard">
              <img className="notrepimg" src="/images/dvc.png" alt="" />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Deep Learning</h1>
                <p className="cloudcardpara mb-0">
                  We integrate software, computing power, memory, drivers,
                  storage, and network resources to construct scalable
                  deep-learning solutions for our clients.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img className="notrepimg" src="/images/dap.png" alt="" />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Predictive Analytics</h1>
                <p className="cloudcardpara mb-0">
                  We gather and analyze existing data, customer information,
                  market data, and other processes to offer you actionable
                  insights and predictions that lead to improved business
                  outcomes.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img className="notrepimg" src="/images/bim.png" alt="" />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">LLM’s & AI Models</h1>
                <p className="cloudcardpara mb-0">
                  We possess a diverse array of AI models capable of benefiting
                  your business in various ways. These models undergo continuous
                  refinement, becoming increasingly intelligent through data and
                  machine learning.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img className="notrepimg" src="/images/ssbi.png" alt="" />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">AI Chatbots</h1>
                <p className="cloudcardpara mb-0">
                  Enhance your customer experience with our AI-powered chatbots.
                  These automated programs are capable of engaging in human-like
                  conversations and can interact with your customers round the
                  clock.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img className="notrepimg" src="/images/dg.png" alt="" />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">
                  Natural Language Processing & Gen AI
                </h1>
                <p className="cloudcardpara mb-0">
                  Conduct sentiment analysis, language detection, text analysis,
                  document categorization, content classification, and more
                  using our Gen AI and NLP solutions.
                </p>
              </div>
            </div>
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
                src="./images/build.png"
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
          <h3 className="cloud-head">Benefits</h3>
          <p style={{ width: "700px", textAlign: "center" }}>
            DataObserve is the fastest-growing Cloud Transformation & Data
            Analytics company with strong expertise in Data lake solutions, Data
            Warehouse Engineering, Data Migration & Modernization.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "310px" }}
              >
                <img
                  src="./images/accurate.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "65px", height: "73px" }}
                />
                <h5>Accurate forecasts</h5>

                <p className="arrowtext text-center">
                  Insights revealed by our machine learning solutions can aid
                  companies in identifying and mitigating significant risks
                  before they materialize. They can also forecast demand surges
                  and market shifts, allowing for proactive preparations.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "310px" }}
              >
                <img
                  src="images/personal.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "76px" }}
                />
                <h5>Personalization</h5>

                <p className="arrowtext text-center">
                  Boost sales and secure more deals by offering a personalized
                  experience to your customers. Machine learning models can
                  discern purchasing patterns and offer recommendations based on
                  user inputs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "310px" }}
              >
                <img
                  src="./images/automation.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "73px" }}
                />
                <h5>Automation</h5>

                <p className="arrowtext text-center">
                  The fusion of automation and machine learning is referred to
                  as IPA, or Intelligent Process Automation. IPA streamlines
                  repetitive and routine tasks such as data entry, invoice
                  generation, reminder creation, and more.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "310px" }}
              >
                <img
                  src="./images/predictive.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "73px" }}
                />
                <h5>Predictive maintenance</h5>

                <p className="arrowtext text-center">
                  Gather data from sensors and machinery to detect patterns and
                  predict when a piece of equipment is most susceptible to
                  failure, enabling proactive preventive measures.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "310px" }}
              >
                <img
                  src="./images/cyber.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "76px" }}
                />
                <h5>Cybersecurity</h5>

                <p className="arrowtext text-justify">
                  Eliminate cyberattacks for good. AI-powered cybersecurity can
                  rapidly detect cyber threats and respond to them in real-time.
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
                        Maximize Your AI/ML Investments For Powerful Data
                        Insights
                      </h5>
                      <p
                        class="card-text"
                        style={{ color: "white", width: "500px" }}
                      >
                        Build a host of AI and ML-based data models for maximum
                        business benefit. Our team of AI/ML experts can help you
                        craft customized solutions for your business needs.
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
        <p
          className="container"
          style={{ width: "700px", textAlign: "center" }}
        >
          At DataObserve, we boast a dedicated team of developers and
          machine-learning experts with decades of collective experience. Our
          proficiency lies in crafting highly tailored machine-learning
          solutions that can efficiently address your business requirements.
          Here are several compelling reasons why we are the perfect choice:
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/proven.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "73px", height: "76px" }}
                />
                <h5>Proven AI/ML Success</h5>

                <p className="arrowtext text-left">
                  DataObserve is a trusted Machine Learning partner, and our
                  AWS/Azure validation validates our proficiency in managing
                  AI/ML applications. Our carefully selected consultants bring
                  in-depth expertise acquired through working with a diverse
                  range of clients across various industries on a global scale.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/dedicated.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "63px", height: "76px" }}
                />
                <h5>Dedicated Team</h5>

                <p className="arrowtext text-left">
                  Our in-house ML experts have extensive experience with
                  renowned AI/ML services offered by AWS & Azure, such as Amazon
                  Forecast, SageMaker, Synapse, ADF, and more. Our committed
                  team ensures your business undergoes a digital transformation
                  for the modern age.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "400px" }}
              >
                <img
                  src="./images/advanced.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "73px", height: "76px" }}
                />
                <h5>Advanced Tools</h5>

                <p className="arrowtext text-left">
                  Our seasoned AI and Machine Learning service professionals
                  harness cutting-edge tools and technology to empower your
                  organization to achieve its full potential. Transform your
                  ideas into reality with our AI and ML services.
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
                      What do AI and Machine Learning Services entail, and how
                      can they benefit my organization?
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
                  AI and Machine Learning Services involve the application of
                  advanced algorithms to analyze data, recognize patterns, and
                  make intelligent decisions. These services can benefit your
                  organization by automating processes, gaining valuable
                  insights from data, enhancing customer experiences, and
                  improving overall operational efficiency.
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
                      How can AI and Machine Learning Services be applied to
                      solve specific business challenges?
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
                  AI and Machine Learning Services can address a wide range of
                  business challenges. This includes predictive analytics for
                  forecasting, natural language processing for improved
                  communication, image recognition for visual data analysis, and
                  recommendation systems for personalized user experiences. We
                  work closely with clients to identify specific challenges and
                  tailor AI solutions accordingly.
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
                      What types of AI and Machine Learning Services do you
                      offer?
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
                  Our AI and Machine Learning Services encompass a variety of
                  solutions, including but not limited to predictive modeling,
                  natural language processing, computer vision, recommendation
                  systems, and anomaly detection. Whether you're looking to
                  enhance customer interactions, automate processes, or gain
                  insights from your data, we have services tailored to your
                  needs.
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
                      How can AI and Machine Learning improve decision-making
                      within my organization?
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
                  AI and Machine Learning enhance decision-making by providing
                  data-driven insights and predictions. These technologies
                  analyze vast amounts of data to identify patterns and trends,
                  enabling more informed and strategic decision-making. Whether
                  it's optimizing resource allocation or predicting market
                  trends, AI and Machine Learning contribute to smarter business
                  decisions.
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
                      Is it necessary for my organization to have a deep
                      understanding of AI to benefit from these services?
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
                  No, it's not necessary. Our AI and Machine Learning Services
                  are designed to be accessible to organizations with varying
                  levels of AI expertise. We work with you to understand your
                  goals and requirements, providing solutions that are aligned
                  with your business objectives. Our aim is to make AI
                  technologies valuable and understandable for your
                  organization.
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
                      How can AI and Machine Learning Services enhance customer
                      experiences?
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
                  AI and Machine Learning can enhance customer experiences by
                  providing personalized recommendations, automating customer
                  interactions through chatbots, and analyzing customer feedback
                  sentiment. These technologies enable a more personalized and
                  responsive approach, leading to improved customer satisfaction
                  and loyalty.
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
                      Can AI and Machine Learning Services be integrated with
                      existing systems and applications?
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
                  Absolutely. Our AI and Machine Learning Services are designed
                  to be flexible and compatible with existing systems and
                  applications. We can integrate AI solutions seamlessly into
                  your current infrastructure, ensuring a smooth transition and
                  coexistence with your other technologies.
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
                      How do AI and Machine Learning Services ensure data
                      privacy and security?
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
                  Data privacy and security are paramount in our AI and Machine
                  Learning Services. We adhere to industry best practices for
                  data protection, implement robust encryption methods, and
                  ensure compliance with relevant data privacy regulations. Our
                  commitment is to safeguarding the confidentiality and
                  integrity of your data.
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

export default Aiml;
