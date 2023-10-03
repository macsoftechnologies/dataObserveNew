import React from 'react'
import "./Industries.css";
import Navbar from '../products/Navbar';
import Footer from '../products/Footer';
import Faq from '../products/Faq';
import lifescience from "../../src/videos/life-science.mp4";

const Industries = () => {
  return (
    <div>
      <Navbar />
      <div>
      <video className="life-science-video" autoPlay loop muted>
        <source src={lifescience} type="video/mp4"/>
      </video>
      <div className='mainimg'>
        <p className="indheading">
          <div className="industies-mainhead"> <span>Building data solutions for<br />
            Life Sciences to drive<br />
            innovations</span><br />
          </div>
          <p className="subhead"> With cloud computing for life sciences by your side, the sky's the limit. Turn to dataObserve to unlock the full<br />
            potential of data-driven cloud to reduce the running cost, improve engagement, and seamless
            collaboration.
          </p>
        </p>
        <div className="btn" style={{border:"none",borderRadius:"4px"}}>
          <button className="btninner">Get in touch
            <img className="arpng" src="./images/vector.png" />
          </button>
        </div>
      </div>
      </div>

     
      <section className='industriesexpclass'>
        <div className='main-exp'>
          <div>
            <h4 className="expertiseind">Our Expertise</h4>
          </div>
          <div>
            <p className="exp-para">DataObserve offers a large variety of solutions for the life science and pharma industry and tailors<br />
              relevant solutions as per unique industry needs. Here’s a glimpse of the full extent of our cloud-driven<br />
              &emsp;  services.</p>
          </div>

          <div class="container">
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
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h3 className="platforms">
          Accelerate Life Sciences Data Transformation<br />
          Journey!
        </h3>
        <p className="platformspara">
          DataObserve aspires to be a leading provider of cloud and data solutions, catering to a global clientele of life science<br />
          organizations. By leveraging the perfect blend of data and cloud life sciences with our trusted support.
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className='bx1-border'>
                <div className="text-center box-padding" style={{ height: "285px" }} >
                  <img
                    src="./images/business.png"
                    className="App-logo business"
                    alt="logo"
                    width={45}
                  />
                  <h5>Advanced Business
                    Intelligence</h5>

                  <p className="boxtext text-justify">
                    Unleash the power of big data analysis
                    for life sciences with collaborative
                    advanced business intelligence and EPM
                    optimization tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "285px" }}>
                <img
                  src="./images/comercialdatalake.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Commercial Data Lake
                  Platforms</h5>

                <p className="boxtext text-justify">
                  Build a centralized repository of
                  personalized life sciences data to store
                  and structure everything in one place.
                  With DataObserve cloud, there are no
                  virtual limitations to possibilities.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "285px" }}>
                <img
                  src="./images/Data-driven.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Data-driven R&D</h5>

                <p className="boxtext text-justify">
                  Harness the power of data with our cloud-
                  driven lab informatics to get intricate life
                  science insights for human-centered
                  R&D. This cloud data will help you govern
                  your business processes better.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "285px" }}>
                <img
                  src="./images/supply-chain.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Manufacturing and
                  supply chain</h5>

                <p className="boxtext text-justify">
                  Implementing top-of-the-line big data
                  analytics solutions to manufacturing
                  and supply chain, we offer turnkey
                  facilities to transform raw data into
                  actionable roadmaps.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "285px" }}>
                <img
                  src="./images/decentralized.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Decentralized Clinical
                  Trials</h5>

                <p className="boxtext text-justify">
                  Enter the future of clinical trials with
                  DataObserve’s cloud for life sciences.
                  Leverage our people-driven
                  decentralized solutions for
                  pharmaceutical jobs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "285px" }}>
                <img
                  src="./images/m-devices.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Medical Devices</h5>

                <p className="boxtext text-justify">
                  DataObserve empowers life science
                  organizations and pharma labs to
                  deliver better outcomes and digitize
                  their processes with cloud-enabled
                  medical devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='cs-div'>
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
            <div class="col-md-4">
              <img
                src="./images/card.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style={{ color: "white" }}>
                  Built A Unified Tableau Dashboard Migrated From
                  DOMO
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  Learn how we Re-engineered & Migrated DOMO dashboards to Tableau
                  in Snowflake, reducing 80% of Compute Time & 45% of TCO
                </p>
                <p class="card-text" style={{ color: "white" }}>
                  <small>
                    Read case study
                    <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
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
                    src="./images/wncb.png"
                    alt=""
                    style={{ width: "60px" }}
                  />
                  <img
                    src="./images/wcomcast.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                  <img
                    src="./images/amgen.png"
                    alt=""
                    style={{ width: "60px" }}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bles-div'>
          <div className="container mt-5 mb-5">
            <div className="management row">
              <div class="col-md-6" >
                <p className="mpara">DataObserve Builds FAIR<br /> Data Management<br /> Solutions for Future proof<br /> Life Science Industry</p>
                <p className='text-justify guidelines'>
                  The FAIR Data Principles are guidelines for scientific data management
                  and stewardship to make research data findable, accessible,
                  interoperable and reusable and thus, promote their maximum use.
                  Moreover, data that’s governed, trustworthy, traceable and of high
                  quality is critical for accelerating self-service analytics and artificial
                  intelligence (AI) initiatives for many of our customers.
                </p>
              </div>

              <div className="col-md-6">
                <div className='row'>
                  <div className='col-md-6 text-left'>
                    <p className='logo-images'> <img className="searcheye" src="./images/searcheye.png" />

                    </p>
                    <h5 className='ble-s'>Findable</h5>
                    <p className='text-justify bles-data'>Data are richly described by
                      metadata and have a unique and
                      persistent identifier</p>
                  </div>
                  <div className='col-md-6 text-left'>
                    <p className='logo-images'> <img className="searcheye" src="./images/amt.png" />

                    </p>
                    <h5 className='ble-s'>Accessible</h5>
                    <p className='text-justify bles-data'>Data and corresponding
                      metadata are understandable to
                      humans and machines, and
                      accessible through defined
                      protocols</p>
                  </div>
                  <div className='col-md-6 text-left'>
                    <p className='logo-images'> <img className="searcheye" src="./images/Interoperable.png" />

                    </p>
                    <h5 className='ble-s'>Interoperable</h5>
                    <p className='text-justify bles-data'>Data and corresponding
                      metadata use formal and
                      accessible knowledge
                      representation to guarantee
                      reuse</p>
                  </div>
                  <div className='col-md-6 text-left'>
                    <p className='logo-images'> <img className="searcheye" src="./images/reusable.png" />

                    </p>
                    <h5 className='ble-s'>Reusable</h5>
                    <p className='text-justify bles-data'>Metadata accurately describe the
                      provenance and usage license for
                      the data</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="container" >
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
      </div>


      <div className='labimg'>

        <div className='lab-img-section'>
          <img src='./images/lab.png' alt="#" />
        </div>

        <div className='lab-data-industries '>
          <div class="card-industries" style={{ border: "none", background: "none" , transform: "translatey(-10px)",
    width: "500px",
    marginLeft: "14px", }} >
            <div class="card-body industries-bg-pink" style={{ borderRadius: "27px",height:"250px",width:"390px" }}>
              <p className='doc'> <span><img src='./images/doc.png' /></span> BLOG </p>
              <h5 class="card-title" style={{fontSize:"15px", fontWeight:"600px"}}>Big data analytics for the pharmaceutical<br />
                industry- A big leap towards digital success</h5>
              <h6 class="card-subtitle mb-2 " style={{fontSize:"11px",marginTop:"5px"}}>Today’s world is data-driven. From your phone, to your laptop,<br />
                to your smart home devices, everyday data is being generated<br />
                in the quintillions. This can be a mess, especially if you run a<br />
                business.</h6>
              <p class="readmore" style={{ color: "white",marginTop:"25px" }}>
                <small>
                  Read more
                  <i class="fa fa-long-arrow-right ghgh" aria-hidden="true" ></i>
                </small>
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="container">
        <h1 className="benfits"> Digital Transformation Benefits<br />
          in Life Science</h1>
        <p className="benfits-para">
          DataObserve is the fastest-growing Cloud Transformation & Data Analytics company with strong expertise in<br />
          Data lake solutions, Data Warehouse Engineering, Data Migration & Modernization.
        </p>
        <div class="row">
          <div class="col-md-3 text-center">
            <img className='down-logo' src='./images/mtr.png' />
            <h2 className='percentage'>42%</h2>
            <p className='pp-data'>Faster to Insights in R&D by<br />
              Data Democratization</p>
          </div>

          <div class="col-md-3 text-center  ">
            <img className='down-logo' src='./images/amt.png' />
            <h2 className='percentage'>30%</h2>
            <p className='pp-data'>Reduce in Drug<br />
              Commercialization Cost</p>
          </div>

          <div class="col-md-3 text-center ">
            <img className='down-logo' src='./images/timeind.png' />
            <h2 className='percentage'>65%</h2>
            <p className='pp-data'>Time Saved by Digital Clinical<br />
              Documentation</p>
          </div>

          <div class="col-md-3 text-center" >
            <img className='down-logo' src='./images/Accelerators.png' />
            <h2 className='percentage'>25%</h2>
            <p className='pp-data'>Efficiency Achieved in Patient<br />
              Engagement</p>
          </div>

        </div>
      </div>
      {/* !--faq's--! */}
      <Faq />

      {/* !----footer----! */}

      <Footer />



    </div >
  )
}

export default Industries