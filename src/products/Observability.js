import React from "react";
import "./Observability.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Faq from "./Faq";
import bussiness from "../../src/videos/bussiness.MOV"


function Observability() {
  return (
    <div>
      <Navbar />
      <div className="header-section">
        <div className="container" style={{ paddingTop: "96px" }}>
          <div className="row" style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="col-md-9" style={{ color: "#FFF", fontSize: "46px", fontWeight: "700" }}>
              Data Observability
              <br />
              Solution - Enhance
              <br />
              Data Reliability
            </h1>
            <p className="col-md-9"
              style={{
                marginTop: "28px",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.80)",
                fontWeight: "400px",
              }}
            >
              Unleash the true potential of your data.
            </p>
            <p className="col-md-9"
              style={{
                marginTop: "26px",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.80)",
                fontWeight: "400px",
              }}
            >
              Gain deep insights about its quality and visibility to resolve
              real-
              <br />
              time data issues and reduce downtime with our Data Observability
              <br />
              solution.
            </p>
            <input
              placeholder="Businees Email"
              className="col-md-9 emailClass"
              style={{
                background: "none",
                borderBottom: "1px solid #FFFFFF",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                color: "#FFFFFF",
              }}
            />
            <br />
            <div className="container"><button className="demoClass">Get a demo</button></div>
          </div>
              <div className="container" >
                <div className="row">
          <div className="videoClass col-md-8">
            <video className="playClass" autoPlay loop muted>
        <source src={bussiness} type="video/mp4" />
      </video>
          </div>
          </div>
          </div>
        </div>
      </div>

      <div className="definitionClass">
        <div className="container def1Class">
          <div>
            <h1 className="obsheading">What is observability?</h1>
            <div className="para container">
              <p className="obspara1">
                Data observability is about ensuring the quality, reliability,
                and performance of your data in the system by monitoring,
                measuring, and analyzing it. This helps eliminate all arising
                data anomalies by enabling teams to collect, profile, alert, and
                resolve data issues in near real time.
              </p>
              <p className="obspara2">
                Stay assured that your data is accurate and trustworthy for
                analysis, decision-making, and downstream processes.
                Implementing data observability practices and data governance
                strategies helps improve your overall operational efficiency,
                mitigate associated data risks with quality and productivity.
              </p>
            </div>
          </div>
          <section style={{ paddingTop: "10px" }}>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div>
                    <img src="images/dollarprod.png" alt="#" width={100} />
                    <p className="cardText">Reduce Cost</p>
                    <h1 className="cardHead">3X</h1>
                    <p className="cardText2">Reduction in Data</p>
                    <p className="cardText2">infrastructure task</p>
                  </div>
                </div>

                <div className="col-md-4 text-center">
                  <div>
                    <img src="images/minimizerisk.png" alt="#" width={100} />
                    <p className="cardText">Minimize Risk</p>
                    <h1 className="cardHead">80%</h1>
                    <p className="cardText2">Reduction in</p>
                    <p className="cardText2">Data downtime</p>
                  </div>
                </div>

                <div className="col-md-4 text-center">
                  <div>
                    <img src="images/savetime.png" alt="#" width={100} />
                    <p className="cardText">Save Time</p>
                    <h1 className="cardHead">30%</h1>
                    <p className="cardText2">Data Engineering Hours</p>
                    <p className="cardText2">Saved per Quarter</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="pillarsClass">
        <div className="container pt-5 mt-3">
          <div>
            <h1 className="headingpillars">Pillars of Dataobserve 360</h1>
          </div>
          <div className="pillarnavs mt-4">
            <ul
              class="nav nav-pills justify-content-center align-items-center mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-freshness-tab"
                  data-toggle="pill"
                  href="#pills-freshness"
                  role="tab"
                  aria-controls="pills-freshness"
                  aria-selected="false"
                >
                  Freshness
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-schema-tab"
                  data-toggle="pill"
                  href="#pills-schema"
                  role="tab"
                  aria-controls="pills-schema"
                  aria-selected="false"
                >
                  Schema
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-volume-tab"
                  data-toggle="pill"
                  href="#pills-volume"
                  role="tab"
                  aria-controls="pills-volume"
                  aria-selected="false"
                >
                  Volume
                </a>
              </li>
              <li class="nav-item active pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-quality-tab"
                  data-toggle="pill"
                  href="#pills-quality"
                  role="tab"
                  aria-controls="pills-quality"
                  aria-selected="true"
                >
                  Quality
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-lineage-tab"
                  data-toggle="pill"
                  href="#pills-lineage"
                  role="tab"
                  aria-controls="pills-lineage"
                  aria-selected="false"
                >
                  Lineage
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade matter"
                id="pills-freshness"
                role="tabpanel"
                aria-labelledby="pills-freshness-tab"
              >
                Freshness
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-schema"
                role="tabpanel"
                aria-labelledby="pills-schema-tab"
              >
                Schema
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-volume"
                role="tabpanel"
                aria-labelledby="pills-volume-tab"
              >
                Volume
              </div>
              <div
                class="tab-pane fade show active matter"
                id="pills-quality"
                role="tabpanel"
                aria-labelledby="pills-quality-tab"
              >
                <div className="row">
                  <div className="col-md-6 qualitypara">
                    <h1 className="qualityhead">Quality</h1>
                    <p className="qualitymatter">
                      Recording what to expect of your data values to determine
                      when data is unreliable
                    </p>
                    <p className="qualitymatter">
                      DataObserve 360 goes beyond monitoring and alerting.
                      DataObserve 360 allows organizations to understand their
                      data systems fully and enables them to fix data problems
                      in increasingly complex data scenarios or even prevent
                      them in the first place.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="images/quality.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-lineage"
                role="tabpanel"
                aria-labelledby="pills-lineage-tab"
              >
                Lineage
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="differclass">
        <div className="container">
          <div className="row maindiv">
            <div className="col-md-7">
              <h1 className="do1">Why DataObserve 360</h1>
              <p className="do1p">
                DataObserve 360 goes beyond monitoring and alerting. DataObserve
                360 allows organizations to understand their data systems fully
                and enables them to fix data problems in increasingly complex
                data scenarios or even prevent them in the first place.
              </p>
            </div>
            <div className="container">
              <div className="row differencepart">
                <div className="col-md-12">
                  <h1 className="do2">
                    How Data Observability differs from Monitoring
                  </h1>
                </div>
                
                  <div className="row maindiffernce">
                    <div className="col-md-6 do3class">
                      <div className="card monitorclass">
                        <h1 className="monitorhead">Monitoring</h1>
                        <p className="monitordef">known unknowns</p>
                        <hr className="horline" />
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/monitorsymbol.png"
                            alt="#"
                          />
                          <p>Monitoring tells you when something is wrong</p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/monitorsymbol.png"
                            alt="#"
                          />
                          <p>Assumes you know what questions to ask</p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/monitorsymbol.png"
                            alt="#"
                          />
                          <p>
                            Periodic routine checks are supported only by
                            established standards
                          </p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/monitorsymbol.png"
                            alt="#"
                          />
                          <p>
                            3 step approach—data ingestion, issue
                            identification, and data cleaning
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 do4class">
                      <div className="card observabilityclass">
                        <h1 className="observehead">Observability</h1>
                        <p className="observedef">known unknowns</p>
                        <hr className="horline" />
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/obssymbol.png"
                            alt="#"
                          />
                          <p>Doesn't assume that something is wrong</p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/obssymbol.png"
                            alt="#"
                          />
                          <p>
                            Assumes we don't know what all the questions are to
                            ask
                          </p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/obssymbol.png"
                            alt="#"
                          />
                          <p>
                            The set of practices are advocated by data teams to
                            uncover data health
                          </p>
                        </div>
                        <div className="sentenceclass">
                          <img
                            className="senmark"
                            src="images/obssymbol.png"
                            alt="#"
                          />
                          <p>
                            Helps resolve real-time data issues without any
                            delay
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="verses">
                      <div className="vsclass">VS</div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container issuesclass">
          <div>
            <h1 className="issueshead">
              Top Use Cases of Data Observability in solving real-time data
              issues
            </h1>
          </div>
          <div className="row issuescards mt-5">
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues1.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Data Downtime Management</h1>
                  <p className="issuematterpara">
                    Don't just observe data incidents. Resolve them fast. Now
                    you can alert, respond, and resolve all your data incidents
                    in one location
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues2.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">Data Pipeline Monitoring</h1>
                  <p className="issuematterpara">
                    Manage the health of 100s to 1000s of data pipelines. Detect
                    missing operations, failed jobs, and run durations so you
                    can handle pipeline growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues3.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Data Downtime Management</h1>
                  <p className="issuematterpara">
                    Ensure better data quality by monitoring data SLAs,
                    unexpected column changes, and null records before they get
                    to your consumers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-2">
              <div className="showdowclass mt-4">
                <div className="issuesmatter">
                  <img
                    src="images/issues4.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">
                    Impact Analysis and Lineage
                  </h1>
                  <p className="issuematterpara">
                    Break siloes and get the whole data story with end-to-end
                    data lineage. Understand the impact of data incidents on
                    upstream and downstream data flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass mt-4">
                <div className="issuesmatter">
                  <img
                    src="images/issues5.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">Data Anomaly Detection</h1>
                  <p className="issuematterpara">
                    The worst data incidents are unknown. Anomaly detection
                    removes bad data surprises by automatically detecting
                    deviant behaviour in your data pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solutionclass">
        <div className="subsolclass">
        <div className="container">
          <h1 className="solheading">Our Solution</h1>
          <p className="solpara1">
            DataObserve' s Data Observability 360 is a customized solution
            designed to monitor and enhance the reliability of data.
          </p>
          <p className="solpara2">
            Custom frameworks and sophisticated ML models will help to detect
            anomalies, errors, and inconsistencies based on historical data and
            provide actionable insights.
          </p>
          <div className="solimageclass">
            <img src="images/solimage1.png" alt="" className="solimage1" />
          </div>
          <div className="solpara3div">
            <p className="solpara3">
              Uniqueness of implementing data observability as a solution
            </p>
          </div>
          <div className="row solcardsclass">
            <div className="col-md-3">
              <img src="images/solimage2.png" alt="#" className="solpicclass" />
              <h1 className="solcardhead">No-code onboarding</h1>
              <p className="solcardtext">
                Code-free implementation for full out-of- the-box coverage with
                your existing data stack and seamless collaboration with your
                teammates.
              </p>
            </div>
            <div className="col-md-3">
              <img src="images/solimage3.png" alt="#" className="solpicclass" />
              <h1 className="solcardhead">Security-first architecture</h1>
              <p className="solcardtext">
                Data never leaves your environment. Our solution is 100%
                customizable as per your Data engineering stack.
              </p>
            </div>
            <div className="col-md-3">
              <img src="images/solimage4.png" alt="#" className="solpicclass" />
              <h1 className="solcardhead">Scales with your data</h1>
              <p className="solcardtext">
                We monitor your data at rest and do not extract it from your
                data store, facilitating end-to-end coverage no matter how your
                stack evolves.
              </p>
            </div>
            <div className="col-md-3">
              <img src="images/solimage5.png" alt="#" className="solpicclass" />
              <h1 className="solcardhead">End-to-end observability</h1>
              <p className="solcardtext">
                Use your favourite stack. Get a single view into data health
                across your data lakes, warehouses, ETL, business intelligence
                tools, and catalogues.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="container plugclass">
          <h1 className="plugplay">
            Why choose DataObserve 360 as plug and play solution?
          </h1>
          <div className="row plugcards">
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">
                100% Customizable for your data engineering stack
              </p>
            </div>
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">
                100% Customizable for your data engineering stack
              </p>
            </div>
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">
                100% Customizable for your data engineering stack
              </p>
            </div>
            <div className="col-md-3 plugcardlast">
              <p className="plugcardtext">
                100% Customizable for your data engineering stack
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="requestguideclass">
        <div className="container guidecontainer">
          <div className="guideclass">
            <div className="row">
              <div className="col-md-8">
                <h1 className="guidehead">
                  Request Guidance from a DataObserve 360Expert
                </h1>
                <p className="guidetext">
                  Connect with our experts to harness the power of DataObserve
                  360.
                </p>
              </div>
              <div className="col-md-4">
                <button className="guidedemobutton">
                  <p className="guidebuttontext">Get a demo</p>
                  <img
                    src="images/guidearrow.png"
                    alt=""
                    className="guidearrowclass"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recentworks">
        <div className="container">
          <h1 className="recentworkshead">Our most recent works</h1>
          <div className="cardclass">
            <div className="row">
              <div className="col-md-4">
                <div className="recentworkimgclass">
                  <div className="dummyclass"></div>
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksebook.png" alt="#" />
                        <p className="recentcardhead1">EBOOK</p>
                      </div>
                      <p className="workcardpara">
                        Best Practices for Legacy Data Warehouse Migration to
                        Amazon Redshift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recentworkimgclass1">
                  <div className="dummyclass1"></div>
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworkscasestudy.png" alt="#" />
                        <p className="recentcardhead2">case study</p>
                      </div>
                      <p className="workcardpara">
                        How a F500 Pharmaceutical Commercial Team achieved Data
                        Democratization and reduced Drug Commercialization Cost
                        by 30%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="recentworkimgclass2">
                  <div className="dummyclass2"></div>
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksblog.png" alt="#" />
                        <p className="recentcardhead1">blog</p>
                      </div>
                      <p className="workcardpara">
                        Vital role of talent in digital transformation journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="viewrecentbutton">
            View All Insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
            >
              <path
                d="M27.8301 7.80075L20.7859 0.314765C20.5251 0.0376232 20.0835 0.0414782 19.8276 0.323131C19.6026 0.570707 19.6013 0.948275 19.8245 1.19745L25.1618 7.15628H1.4746C1.11864 7.15628 0.830078 7.44485 0.830078 7.80081C0.830078 8.15676 1.11864 8.44534 1.4746 8.44534H25.1617L19.8245 14.404C19.6013 14.6532 19.6026 15.0307 19.8276 15.2783C20.0835 15.56 20.5251 15.5638 20.7859 15.2867L27.8301 7.80075Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </div>
  );
}

export default Observability;
