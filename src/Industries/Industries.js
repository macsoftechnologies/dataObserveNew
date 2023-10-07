import React from "react";
import "./Industries.css";
import Navbar from "../products/Navbar";
import Footer from "../products/Footer";
import Faq from "../products/Faq";
import lifescience from "../../src/videos/life-science.mp4";

const Industries = () => {
  const handleAccordianToggle = () => {
    let elements = document.querySelectorAll(".collapse.show");

    // Loop through each element and remove the "show" class
    elements.forEach(function (element) {
      element.classList.remove("show");
    });
  };
  return (
    <div>
      <Navbar />
      <div>
        <video className="life-science-video" autoPlay loop muted>
          <source src={lifescience} type="video/mp4" />
        </video>
        <div className="mainimg">
          <p className="indheading">
            <div className="industies-mainhead">
              {" "}
              <span>
                Developing data solutions
                <br />
                in the Life Sciences sector
                <br /> to stimulate innovation.
              </span>
              <br />
            </div>
            <p className="industries-subhead">
              {" "}
              Harness the power of data-driven cloud computing in the Life
              Sciences sector with DataObserve to cut
              <br /> costs, enhance engagement, and facilitate seamless
              collaboration.
            </p>
          </p>
          <div className="btn" style={{ border: "none", borderRadius: "4px" }}>
            <button
              className="btninner"
              style={{ display: "flex", border: "none" }}
            >
              Get in touch
              <img className="arpng" src="./images/vector.png" />
            </button>
          </div>
        </div>
      </div>

      <section className="industriesexpclass">
        <div className="main-exp">
          <div>
            <h4 className="expertiseind">Our Expertise</h4>
          </div>
          <div>
            <p className="exp-para">
              DataObserve provides a wide range of solutions tailored to the
              unique needs of the life
              <br /> science and pharmaceutical industry. Explore the breadth of
              our cloud-driven services
              <br /> designed to meet industry-specific requirements.
            </p>
          </div>

          {/* <div class="container">
            <div className='drugbox'>
              <div className="row">
                <div class="col-md-5 m-3">

                  <div class="d-flex" style={{ width: "50%" }}>
                    <img className="pharma mg-right" src="./images/Pharmatab.png" />
                    <img className="medical mg-right" src="./images/medicaldevices.png" />
                  </div>

                  <div class="d-flex" style={{ width: "50%" }}>
                    <img className="clinical-trails mg-right" src="./images/clinicaltrials.png" />
                    <img className="genomics mg-right" src="./images/genomics.png" />
                  </div>
                </div>
                <div class="col-md-5 mt-5 mr-3 mb-3" >
                  <h2 className='pharma text-start'>Pharma</h2>
                  <p className="cntr-text text-start">Our life sciences solutions are built to help organizations<br />
                    manufacture better medicines and optimize operations while<br />
                    maintaining minimal downtimes.</p>
                  <ul className='drug-list'>
                    <li className='list-border text-start'>Drug Discovery</li>
                    <li className='list-border text-start'>Drug Commercialization</li>
                    <li className='list-border text-start'>Operations and Supply-chain</li>
                    <li className='list-border text-start'>Pharmacovigilance</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div> */}

          {/* drugbox as nav */}

          <div class="container mb-5">
            <nav>
              <div
                class="nav nav-tabs justify-content-center"
                id="nav-tab"
                role="tablist"
                style={{ border: "0px" }}
              >
                <a
                  class="nav-item nav-link active pharmalink"
                  id="nav-pharma-tab"
                  data-toggle="tab"
                  href="#nav-pharma"
                  role="tab"
                  aria-controls="nav-pharma"
                  aria-selected="true"
                >
                  pharma
                </a>
                <a
                  class="nav-item nav-link pharmalink"
                  id="nav-clinicaldevices-tab"
                  data-toggle="tab"
                  href="#nav-clinicaldevices"
                  role="tab"
                  aria-controls="nav-clinicaldevices"
                  aria-selected="false"
                >
                  clinicaldevices
                </a>
                <a
                  class="nav-item nav-link pharmalink"
                  id="nav-medicaldevices-tab"
                  data-toggle="tab"
                  href="#nav-medicaldevices"
                  role="tab"
                  aria-controls="nav-medicaldevices"
                  aria-selected="false"
                >
                  medicaldevices
                </a>
                <a
                  class="nav-item nav-link pharmalink"
                  id="nav-Genomics-tab"
                  data-toggle="tab"
                  href="#nav-Genomics"
                  role="tab"
                  aria-controls="nav-Genomics"
                  aria-selected="false"
                >
                  Genomics
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-pharma"
                role="tabpanel"
                aria-labelledby="nav-pharma-tab"
              >
                <div className="row mt-5">
                  <div className="col-md-6 pharmacardtab">
                    <div className="container">
                      <p>
                        Our life sciences solutions are designed to assist
                        organizations in producing improved medications and
                        enhancing operational efficiency, all while minimizing
                        downtime.
                      </p>
                    </div>
                    <div
                      class="card text-center pharmacardtab2"
                      style={{ border: "0px" }}
                    >
                      <div
                        class="card-body pharmacardtab3"
                        style={{ padding: "0px !important" }}
                      >
                        <div
                          class="accordion"
                          id="accordionExample"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-around",
                          }}
                        >
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#F3F6FF",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Drug Discovery
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.05)",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Biopharma companies are already harnessing
                                advanced insights through big data and analytics
                                in the field of life sciences. They can access
                                molecular lab data and perform quantum
                                computations on the fly, speeding up the drug
                                discovery process.
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#F3F6FF",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Drug Commercialization
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#F3F6FF",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                DataObserve offers powerful cloud tools and data
                                lakes that can serve a multitude of purposes,
                                spanning analytics, data organization, lab data
                                aggregation, drug life cycle management, and the
                                commercialization process.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#F3F6FF",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Operations and Supply-chain
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#F3F6FF",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                DataObserve's life science and pharma services
                                make it possible to streamline pharmaceutical
                                operations within your supply chain or
                                orchestrate all your development processes in
                                the cloud.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#F3F6FF",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Pharmacovigilance
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#F3F6FF",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                The field of pharmacovigilance or drug safety
                                analysis is undergoing a significant
                                transformation with the introduction of data
                                analytics in life sciences. Our solutions are
                                designed to assist you in aggregating reporting,
                                mitigating risks, and enhancing precision in
                                this domain.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./images/longpharma.png"
                      style={{ width: "88%", height: "76%", paddingTop: "20%" }}
                    />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-clinicaldevices"
                role="tabpanel"
                aria-labelledby="nav-clinicaldevices-tab"
              >
                <div className="row mt-5">
                  <div className="col-md-6 pharmacardtab">
                    <div className="container">
                      <p>
                        From pilot studies to prevention trials, discover how
                        our cloud partners and data analysis are revolutionizing
                        traditional clinical trial approaches.
                      </p>
                    </div>
                    <div
                      class="card text-center pharmacardtab2"
                      style={{ border: "0px" }}
                    >
                      <div
                        class="card-body pharmacardtab3"
                        style={{ padding: "0px !important" }}
                      >
                        <div
                          class="accordion"
                          id="accordionExample"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-around",
                          }}
                        >
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FEE",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseMedicalOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Clinical Trial Management
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.05)",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
                                  </p>
                                </button>
                              </h2>
                            </div>

                            <div
                              id="collapseMedicalOne"
                              class="collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordionExample"
                            >
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                With the help of cloud-powered automated
                                clinical trial monitoring, healthcare
                                professionals can conduct complex clinical
                                trials with improved data quality and reduced
                                costs.
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FEE",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseMedicalTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Patient Engagement
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FEE",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
                                  </p>
                                </button>
                              </h2>
                            </div>
                            <div
                              id="collapseMedicalTwo"
                              class="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordionExample"
                            >
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Through our collaboration with cloud partners,
                                we strive to enhance patient engagement by
                                leveraging interactive cloud solutions and
                                profound data insights, thereby fostering
                                stronger connections between doctors and
                                patients.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FEE",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseMedicalThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Real-world Evidence
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FEE",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
                                  </p>
                                </button>
                              </h2>
                            </div>
                            <div
                              id="collapseMedicalThree"
                              class="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordionExample"
                            >
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Professionals can harness the power of cloud
                                solutions to deploy real-world evidence
                                platforms, allowing them to analyze diverse
                                pharmaceutical data and uncover authentic
                                patterns. This invaluable insight can drive
                                advancements in the field of life sciences.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FEE",
                              color: "black",
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
                                  onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseMedicalFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Digital Therapeutics{" "}
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FEE",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
                                  </p>
                                </button>
                              </h2>
                            </div>
                            <div
                              id="collapseMedicalFour"
                              class="collapse"
                              aria-labelledby="headingFour"
                              data-parent="#accordionExample"
                            >
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Leveraging cutting-edge cloud solutions,
                                organizations can seamlessly create, tailor, and
                                implement autonomous yet interconnected
                                therapeutic devices to enhance patient care
                                within the realm of digital therapeutics.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./images/longclinicaltrials.png"
                      style={{ width: "88%", height: "80%", paddingTop: "20%" }}
                    />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-medicaldevices"
                role="tabpanel"
                aria-labelledby="nav-medicaldevices-tab"
              >
                <div className="row mt-5">
                  <div className="col-md-6 pharmacardtab">
                    <div className="container">
                      <p>
                        The convergence of medical devices with the vast
                        capabilities of cloud technology and data analytics in
                        the field of life sciences has democratized diagnostics,
                        making them more accessible to patients around the
                        world. Explore the diverse impacts it has across various
                        sectors within the domain.
                      </p>
                    </div>
                    <div
                      class="card text-center pharmacardtab2"
                      style={{ border: "0px" }}
                    >
                      <div
                        class="card-body pharmacardtab3"
                        style={{ padding: "0px !important" }}
                      >
                        <div
                          class="accordion"
                          id="accordionExample"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-around",
                          }}
                        >
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#D9F5ED",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Digital Health Monitoring
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.05)",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Utilizing remote patient monitoring capabilities
                                and seamless real-time data sharing,
                                cloud-powered digital health monitoring empowers
                                pharmaceutical professionals to maintain
                                continuous oversight of their patients'
                                well-being.
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#D9F5ED",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Advanced Analytics for Medical Imaging
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#D9F5ED",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Our solutions expedite the adoption of
                                technology and foster innovation within research
                                teams and radiology departments. They enable
                                professionals to harness the complete potential
                                of medical imaging by incorporating advanced
                                analytics.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#D9F5ED",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Web Apps for Medical Devices
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#D9F5ED",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Our pharmaceutical and life science web
                                applications provide convenient access to
                                pharmaceutical services on smartphones. These
                                user-friendly web apps facilitate seamless
                                communication and service delivery.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#D9F5ED",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Wearables and IoT{" "}
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#D9F5ED",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Wearables have become an essential component of
                                life sciences and pharmaceutical testing. Data
                                analytics for life sciences allows wearable
                                pharmaceutical devices to share, upload, and
                                process participants' data in real-time.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./images/longmedicaldevices.png"
                      style={{ width: "90%", height: "90%", paddingTop: "20%" }}
                    />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-Genomics"
                role="tabpanel"
                aria-labelledby="nav-Genomics-tab"
              >
                <div className="row mt-5">
                  <div className="col-md-6 pharmacardtab">
                    <div className="container">
                      <p>
                        In broad terms, Genomics is a field that focuses on the
                        examination of DNA genomes' structure, evolution, and
                        functionality. DO, in collaboration with its partners,
                        has been at the forefront of driving innovation in
                        genomics through the following approaches.
                      </p>
                    </div>
                    <div
                      class="card text-center pharmacardtab2"
                      style={{ border: "0px" }}
                    >
                      <div
                        class="card-body pharmacardtab3"
                        style={{ padding: "0px !important" }}
                      >
                        <div
                          class="accordion"
                          id="accordionExample"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-around",
                          }}
                        >
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FFFBE6",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Pharmacogenomics
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.05)",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Pharmacogenomics, the study of genes influencing
                                variable drug responses, benefits from our
                                solutions, allowing researchers to obtain more
                                precise results in less time.
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FFFBE6",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Tertiary Analysis
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FFFBE6",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Leverage the power of machine learning and
                                high-performance cloud computing resources to
                                translate genomic data into meaningful
                                biological insights. Contact DataObserve for
                                assistance today.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FFFBE6",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Clinical Genomics
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FFFBE6",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr  "
                                style={{ textAlign: "left" }}
                              >
                                Data analytics in life sciences empowers
                                clinical professionals with the precision to
                                diagnose using enhanced genetic data. AWS and
                                Azure have been the preferred choices for secure
                                and rapid clinical genomics for years.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            class="card"
                            style={{
                              backgroundColor: "#FFFBE6",
                              color: "black",
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
                                onClick={() => handleAccordianToggle()}
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p
                                    className="ind-dg-head"
                                    style={{ margin: "0px" }}
                                  >
                                    Multi-modal and Multi-omics{" "}
                                  </p>
                                  <p
                                    style={{
                                      margin: "0px",
                                      backgroundColor: "#FFFBE6",
                                      borderRadius: "3px",
                                      width: "18px",
                                      height: "20px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <i
                                      class="fa fa-times"
                                      style={{ color: "blue" }}
                                      aria-hidden="true"
                                    ></i>
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
                              <div
                                class="card-body ind-dg-pr "
                                style={{ textAlign: "left" }}
                              >
                                Enhance computational efficiency on a larger
                                scale and achieve superior data integration
                                capabilities, simplifying the discovery of
                                clinical data correlations with multi-modal and
                                multi-omics approaches.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="./images/longgenomics.png"
                      style={{ width: "88%", height: "80%", paddingTop: "20%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "50px" }}>
        <h3 className="platforms">
          Accelerate Life Sciences Data Transformation
          <br />
          Journey!
        </h3>
        <p className="platformspara">
          DataObserve aims to establish itself as a prominent provider of cloud
          and data solutions, serving a worldwide clientele of life science{" "}
          <br />
          organizations. We combine the ideal fusion of data and cloud
          technologies to support and empower the life sciences sector.
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="bx1-border">
                <div
                  className="text-center box-padding"
                  style={{ height: "360px" }}
                >
                  <img
                    src="./images/business.png"
                    className="App-logo business"
                    alt="logo"
                    width={45}
                  />
                  <h5 className="boxhead">Advanced Business Intelligence</h5>

                  <p className="boxtext text-justify">
                    Harness the potential of big data analysis in the life
                    sciences sector through collaborative advanced business
                    intelligence and EPM optimization tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "360px" }}
              >
                <img
                  src="./images/comercialdatalake.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5 className="boxhead">Commercial Data Lake Platforms</h5>

                <p className="boxtext text-justify">
                  Establish a centralized repository for personalized life
                  sciences data, facilitating storage and organization within a
                  single, limitless realm of possibilities through DataObserve's
                  cloud solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "360px" }}
              >
                <img
                  src="./images/Data-driven.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5 className="boxhead">Data-driven R&D</h5>

                <p className="boxtext text-justify">
                  Leverage the capabilities of data with our cloud-driven lab
                  informatics to gain intricate life science insights that drive
                  human-centered research and development (R&D). Harnessing this
                  cloud data will enable you to enhance the governance of your
                  business processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "360px" }}
              >
                <img
                  src="./images/supply-chain.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5 className="boxhead">Manufacturing and supply chain</h5>

                <p className="boxtext text-justify">
                  By implementing cutting-edge big data analytics solutions in
                  manufacturing and supply chain, we provide comprehensive
                  capabilities to convert raw data into actionable roadmaps.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "360px" }}
              >
                <img
                  src="./images/decentralized.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5 className="boxhead">Decentralized Clinical Trials</h5>

                <p className="boxtext text-justify">
                  Step into the future of clinical trials with DataObserve's
                  life sciences cloud. Utilize our human-centric decentralized
                  solutions for pharmaceutical tasks.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "360px" }}
              >
                <img
                  src="./images/m-devices.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5 className="boxhead">Medical Devices</h5>

                <p className="boxtext text-justify">
                  DataObserve empowers life science organizations and
                  pharmaceutical labs to enhance their outcomes and digitize
                  their processes using cloud-enabled medical devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-div">
        <h1 className="case">Our Case Studies</h1>
        <div
          class="container card mb-3 mt-5"
          style={{
            backgroundColor: "#1A4AB9",
            maxWidth: "800px",
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
                style={{ height: "235px", width: "325px" }}
                src="./images/card.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>
                  Built A Unified Augmented Analytics decision intelligence
                  Platform
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  Learn how we created a self-service, predictive, insights
                  platform driven by an adaptive machine learning engine which
                  helps improve decision-making.
                </p>
                <p class="card-text" style={{ color: "white" }}>
                  <small>
                    Read case study
                    <i
                      class="fa fa-long-arrow-right ml-2"
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
                    src="./images/newaccede.png"
                    alt=""
                    style={{ width: "60px" }}
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
        <div className="bles-div">
          <div className="container">
            <div className="management row" aria-live="center">
              <div>
                <p className="mpara">
                  DataObserve constructs FAIR (Findable, Accessible,
                  Interoperable, and Reusable) Data Management Solutions to
                  future-proof the life science industry.
                </p>
                <p className="text-justify guidelines">
                  The FAIR Data Principles serve as essential guidelines for
                  scientific data management and stewardship, emphasizing the
                  importance of making research data findable, accessible,
                  interoperable, and reusable. These principles are instrumental
                  in promoting the widespread and efficient use of data.
                  Additionally, for our customers, the governance,
                  trustworthiness, traceability, and quality of data are
                  paramount, as they play a crucial role in accelerating
                  self-service analytics and artificial intelligence (AI)
                  initiatives.
                </p>
              </div>

              <div style={{ marginTop: "50px" }}>
                <div className="row">
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/searcheye.png" />
                    </p>
                    <h5 className="ble-s">Findable</h5>
                    <p className="text-justify bles-data">
                      Data is characterized by comprehensive metadata and
                      possesses a distinct and enduring identifier.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/amt.png" />
                    </p>
                    <h5 className="ble-s">Accessible</h5>
                    <p className="text-justify bles-data">
                      Data, along with its associated metadata, is
                      comprehensible to both humans and machines and can be
                      accessed through clearly defined protocols.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img
                        className="searcheye"
                        src="./images/Interoperable.png"
                      />
                    </p>
                    <h5 className="ble-s">Interoperable</h5>
                    <p className="text-justify bles-data">
                      Data and their accompanying metadata employ formal and
                      accessible knowledge representation methods to ensure
                      their reusability.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/reusable.png" />
                    </p>
                    <h5 className="ble-s">Reusable</h5>
                    <p className="text-justify bles-data">
                      Metadata precisely detail the <br />
                      origin and terms of use for the
                      <br /> data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container" >
        <div>
          <h1 className="testmonials">Client Testimonials</h1>
        </div>
        <div className="tst-card">+
          <div class="row">
            <div class="col-md-4">
              <div className="tst-nm">
                <h1 className="nm">$1.5M</h1>
                <p className="nm-para">Achieved through advanced Data<br />
                  Lakehouse Solution</p>
              </div>
            </div>
            <div class="col-md-8">
              <div className="tst-data">
                <h2 className="tst-heading">
                  GBR ECO
                </h2>
                <p className="tst-para">
                  From endless computing power, to reduced cycle time and<br />
                  easier data access, the new efficiency supported by Agilisium<br />
                  and enabled by AWS helps us to produce timely insights<br />
                  about products, customers, and patients and significantly<br />
                  enhance their experiences.
                </p>
              </div>
              <div className="namecard">
                <h2 className="vishnu">Vishnu Maddileti</h2>
                <p className="director">Director Data Sciences, Amgen</p>
              </div>
            </div>
          </div>

        </div>
        <div className='mt-5'>
          <ul className='d-flex logo-ul justify-content-between'>
            <li> <img src="./images/bamgen.png" /></li>
            <li><img src="./images/gncbuniversal.png" /></li>
            <li><img src="./images/universal.png" /></li>
            <li><img src="./images/reliance.png" /></li>
            <li><img src="./images/bonduelleind.png" /></li>
            <li><img src="./images/greendot.png" /></li>
          </ul>
        </div>
      </div> */}

      <div className="container" style={{ marginTop: "130px" }}>
        <div className="talent-div ">
          <div>
            <h1 className="tlnt-heading">Talent as a Service</h1>
            <p className="tlnt-para">
              Recruit highly skilled employees as needed through a cloud-based
              platform. These hires will not only perform tasks efficiently but
              also contribute to cost savings.
            </p>
          </div>
          <div class="row tlnt-card" style={{ marginTop: "50px" }}>
            <div className="col-md-6 ">
              <img
                style={{
                  width: "80%",
                  borderRadius: "30px",
                  marginLeft: "-15px",
                }}
                src="./images/tlnt-card.png"
              />
            </div>
            <div
              className="col-md-6 "
              style={{ marginTop: "40px", marginLeft: "-100px" }}
            >
              <p className="tlnt-card-para">
                We're introducing a new approach to hiring cloud Engineers. This
                service will help your cloud engineering team to build
                innovative digital transformation solutions.
              </p>
              <h1 className="tlnt-docreators">Meet DOcreators !</h1>

              <div
                className="tlnt-btn"
                style={{
                  border: "none",
                  borderRadius: "4px",
                  marginTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <button
                  className="tlnt-botn"
                  style={{
                    padding: "16px 50px 16px 50px",
                    fontSize: "15px",
                    color: "white",
                    borderradius: "4px",
                    background: "#1A4AB9",
                    border: "none",
                  }}
                >
                  Explore DoCreater{" "}
                  <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="labimg">
        <div className="lab-img-section">
          <img src="./images/newlabdown.png" alt="#" />
        </div>

        <div className="lab-data-industries ">
          <div
            class="card-industries"
            style={{
              border: "none",
              background: "none",
              transform: "translatey(-10px)",
              width: "500px",
              marginLeft: "14px",
            }}
          >
            <div
              class="card-body industries-bg-pink"
              style={{ borderRadius: "27px", height: "250px", width: "390px" }}
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
                Big data analytics for the pharmaceutical
                <br />
                industry- A big leap towards digital success
              </h5>
              <h6
                class="card-subtitle mb-2 "
                style={{ fontSize: "11px", marginTop: "5px" }}
              >
                Today’s world is data-driven. From your phone, to your laptop,
                <br />
                to your smart home devices, everyday data is being generated
                <br />
                in the quintillions. This can be a mess, especially if you run a
                <br />
                business.
              </h6>
              <p class="readmore" style={{ color: "white", marginTop: "25px" }}>
                <small>
                  Read more
                  <i class="fa fa-long-arrow-right ghgh" aria-hidden="true"></i>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 className="benfits">
          {" "}
          Digital Transformation Benefits
          <br />
          in Life Science
        </h1>
        <p className="benfits-para">
          DataObserve is the fastest-growing Cloud Transformation & Data
          Analytics company with strong expertise in
          <br />
          Data lake solutions, Data Warehouse Engineering, Data Migration &
          Modernization.
        </p>
        <div class="row">
          <div class="col-md-3 text-center">
            <img className="down-logo" src="./images/mtr.png" />
            <h2 className="percentage">42%</h2>
            <p className="pp-data">
              Faster to Insights in R&D by
              <br />
              Data Democratization
            </p>
          </div>

          <div class="col-md-3 text-center  ">
            <img className="down-logo" src="./images/amt.png" />
            <h2 className="percentage">30%</h2>
            <p className="pp-data">
              Reduce in Drug
              <br />
              Commercialization Cost
            </p>
          </div>

          <div class="col-md-3 text-center ">
            <img className="down-logo" src="./images/timeind.png" />
            <h2 className="percentage">65%</h2>
            <p className="pp-data">
              Time Saved by Digital Clinical
              <br />
              Documentation
            </p>
          </div>

          <div class="col-md-3 text-center">
            <img className="down-logo" src="./images/Accelerators.png" />
            <h2 className="percentage">25%</h2>
            <p className="pp-data">
              Efficiency Achieved in Patient
              <br />
              Engagement
            </p>
          </div>
        </div>
      </div>

      {/* !--faq's--! */}

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
                  onClick={() => handleAccordianToggle()}
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
                      What are Data Solutions for Life Sciences, and how do they
                      contribute to innovation?
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
                  Data Solutions for Life Sciences involve leveraging advanced
                  technologies and analytics to harness the power of data in the
                  field of life sciences. These solutions aim to drive
                  innovation by unlocking insights, accelerating research, and
                  improving decision-making processes.
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
                  onClick={() => handleAccordianToggle()}
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
                      How do Data Solutions benefit researchers and scientists
                      in the Life Sciences industry?
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
                  Data Solutions empower researchers and scientists by providing
                  efficient tools for data collection, analysis, and
                  interpretation. This accelerates the pace of research,
                  facilitates collaboration, and enhances the discovery process
                  in areas such as genomics, drug discovery, and personalized
                  medicine.
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
                  onClick={() => handleAccordianToggle()}
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
                      What specific challenges do Data Solutions for Life
                      Sciences address?
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
                  These solutions address challenges related to data management,
                  integration of diverse data sources, scalability, and the need
                  for real-time analytics. By overcoming these hurdles,
                  organizations can streamline their processes and focus on
                  breakthrough innovations.
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
                  onClick={() => handleAccordianToggle()}
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
                      Can Data Solutions for Life Sciences be customized to fit
                      specific research requirements?
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
                  Yes, our Data Solutions are highly customizable to meet the
                  unique needs of different research projects in the Life
                  Sciences domain. Whether it's adapting to specific data types,
                  compliance standards, or integration with existing systems, we
                  tailor our solutions accordingly.
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
                  onClick={() => handleAccordianToggle()}
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
                      How do Data Solutions enhance collaboration among
                      researchers and organizations?
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
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Our Data Solutions facilitate seamless collaboration by
                  providing a centralized platform for data sharing,
                  collaboration, and real-time communication. This fosters
                  teamwork and accelerates the pace of research by breaking down
                  silos and promoting knowledge exchange.
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
                  onClick={() => handleAccordianToggle()}
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
                      Are Data Solutions for Life Sciences compliant with
                      industry regulations and standards?
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
                  Absolutely. Our Data Solutions adhere to industry-specific
                  regulations and standards, such as HIPAA and GDPR, ensuring
                  the highest levels of data security, privacy, and compliance.
                  This is critical in the life sciences
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
                  onClick={() => handleAccordianToggle()}
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
                      How do Data Solutions contribute to precision medicine and
                      personalized healthcare?
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
                  By integrating and analyzing diverse datasets, including
                  genomic, clinical, and lifestyle data, our solutions enable
                  the development of personalized treatment plans. This
                  contributes to advancements in precision medicine, allowing
                  for more targeted and effective patient care.
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
                  onClick={() => handleAccordianToggle()}
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
                      Can Data Solutions be integrated with existing laboratory
                      and research management systems?
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
                  Yes, our Data Solutions are designed to seamlessly integrate
                  with existing laboratory information management systems (LIMS)
                  and research management systems. This integration ensures a
                  smooth workflow and minimizes disruptions to ongoing research
                  activities.
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
                  onClick={() => handleAccordianToggle()}
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
                      What kind of analytics capabilities do Data Solutions
                      offer for life sciences research?
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
                  including predictive analytics, machine learning, and data
                  visualization. These tools empower researchers to derive
                  meaningful insights from large datasets, identify patterns,
                  and make data-driven decisions.
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
                    onClick={() => handleAccordianToggle()}
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
                      How can organizations get started with implementing Data
                      Solutions for Life Sciences?
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
                  To get started, organizations can reach out to our team for a
                  consultation. We offer a tailored approach to understand
                  specific needs, assess existing infrastructure, and create a
                  roadmap for implementing data solutions that drive innovation
                  in life sciences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !----footer----! */}

      <Footer />
    </div>
  );
};

export default Industries;
