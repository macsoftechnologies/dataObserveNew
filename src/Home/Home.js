import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
            <div className="col-md-4 home-mainslide-data-engi">
              <h2 className="home-slide-heading">
                Data <br />
                Engineering
                <br /> Simplified
              </h2>
              <p className="home-slide-paragraph-2">
                DataObserve unites your entire organization with trusted data
                that's easy to find, understand, and access so you can do more
                with your data.
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

            <div className="col-md-8">
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
          <div className="row landing-PageE">
            <div className="col-md-8">
              <p className="landingpage-paragraph">
                DataObserve offers robust cloud capabilities to create an
                Integrated Data Democratization Solution that enhances the
                end-user experience significantly.
              </p>
              <p className="landingpage-paragraph2">
                At last, there's a consulting organization with the expertise to
                construct a unified solution for seamlessly discovering and
                comprehending data from various sources. It all begins with your
                data catalog, providing comprehensive visibility and maximizing
                the value of your data. Regain trust in your data today.
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <a href="/contact" className="Contact-Home-redirect">
            <button
              className="home-button-main-page"
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
                className="fa fa-long-arrow-right ml-3 home-ArroW"
                style={{
                  width: "23px",
                  fontSize: "29px",
                  flexShrink: "0",
                  color: "blue",
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
        <div className="capability">
          <p className="dataobserve-heading">DataObserve Cloud Capabilities</p>
        </div>
        <div className="row">
          <div className="col-md-10">
            <p className="dataobserve-paragraph-cloud">
              DataObserve is the rapidly expanding leader in Cloud
              Transformation and Data Analytics, boasting exceptional
              proficiency in Data Lake solutions, Data Warehouse Engineering,
              and Data Migration & Modernization services.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div>
          <p className="competencies"> Competencies</p>
        </div>

        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        Data & Analytics Consulting Competency
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        DevOps Consulting Competency
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        Migration Consulting Competency
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        Data & Analytics Consulting Competency
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        Data & Analytics Consulting Competency
                      </p>
                    </span>
                  </li>
                </ul>
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

        <div>
          <p className="competencies"> SDPs</p>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Amazon Kinesis Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Azure EMR Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Amazon Redshift Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Amazon DynamoDB Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">
                        Amazon EC2 for Windows Server Delivery
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Azure Virtual Network</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Amazon RDS Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Azure Power BI Analytics</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Amazon Quicksight</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">AWS Lambda Delivery</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li className="d-flex">
                    <span>
                      <img
                        className="tick-bullet"
                        src="./images/tickmark.png"
                        alt="tick"
                        width={20}
                      />
                    </span>
                    <span>
                      <p className="competen-text">Azure Bastion</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
        <div className="container">
      
        <p className="lake-para">
          Companies are unifying their data from diverse sources into a single
          repository for advanced analytics and machine learning applications.
          To maximize its potential, they require a contemporary data
          architecture that facilitates seamless data movement between data
          lakes and specialized data stores.
        </p>
       
        </div>
        

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
              <img
                className="tablu"
                src="./images/tab.png"
                alt="aws"
                width={100}
              />
            </div>
          </div>
        </div>

        <div className="container partner">
          We have strong partnerships with the world's top tech companies.
        </div>
      </div>
      {/* ....aws images end...  */}

      <Footer />
    </div>
  );
}

export default Home;
