import React from 'react'
import "./Gaming.css"
import Navbar from '../products/Navbar';
import Faq from '../products/Faq';
import Footer from '../products/Footer';
import gaming from "../../src/videos/gaming.mp4"
function Gaming() {
  return (
    <div>
      <Navbar />
      {/* !--nav bar ends--! */}

      <div>
      <video className="play-gaming-videos" autoPlay loop muted>
        <source src={gaming} type="video/mp4"/>
      </video>
      <div className='gaming-main-img'>
        <p className="headinggame">
          <div className="mainhead"> <span>Enable gamification<br />
            through data-driven<br />
            solutions that gear-up<br />
            customer experience</span><br />
          </div>
          <p className="subhead"> Enjoy a fast and consistent online gaming and gambling experience using DataObserve’s Cloud<br />
            platform. Partner with the DataObserve for customized cloud solutions that meet every stage of the<br />
            gaming lifecycle.</p>
        </p>
        <div className="btn" style={{ border: "none", borderRadius: "4px", marginBottom: "42px", }} >
          <button className="btninner">Get in touch
            <img className="arpng" src="./images/vector.png" />
          </button>
        </div>
      </div>
      </div>
     

      {/* !--6box stArt--! */}

      <div>
        <h3 className="platforms">
          Our Expertise in data & cloud for Gaming and Gambling
        </h3>
        <p className="platformspara">
          With years of implementation experience of AWS for gaming & gambling domain, we’ve become a trusted<br />
          AWS partner for this domain. Here is what sets up apart:
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }} >
                <img
                  src="./images/game1.png"
                  className="App-logo business"
                  alt="logo"
                  width={45}
                />
                <h6>Gaming Analytics</h6>

                <p className="boxtext text-justify">
                  Leverage our AWS-driven gaming
                  analytics to extract useful insights that
                  provide a personalized and more
                  engaging gaming experience for online
                  players. With gaming analytics, you can
                  also detect any gaming fraud and
                  monitoring the game performance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/game2.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h6>Data Lakehouses for
                  Gaming</h6>

                <p className="boxtext text-justify">
                  With our AWS expertise, store all your
                  gaming analytics and big data on a
                  single data lakehouse – that unifies the
                  capabilities of data lakes and data
                  warehouses. Integrate your structured
                  and unstructured gaming data to
                  create real-time insights and improve
                  the gaming experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/game3.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h6>Big Data with
                  Augmented Analytics</h6>

                <p className="boxtext text-justify">
                  There is a substantial increase in the use
                  of Big Data in the Gaming & Gambling
                  industry. Drive improved online gaming
                  and gambling designs using our AWS-
                  powered Big Data solutions. Elevate your
                  business intelligence by adopting
                  Augmented Analytics that can
                  automate gaming insights.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/game4.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Customer Retention on
                  Advanced BI</h5>

                <p className="boxtext text-justify">
                  Combine the power of Business
                  Intelligence (BI) and Analytics for instant
                  insights into player behavior and loyalty.
                  Boost your customer retention with our
                  BI-enabled personalized services for
                  online players and gamblers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/game5.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>AI/ML Predictive Models</h5>

                <p className="boxtext text-justify">
                  Realize the full potential of AI and ML
                  predictive models deployed on our AWS
                  Cloud platform. Embed the power of AI,
                  ML, and predictive analytics into online
                  gaming and gambling solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/game6.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>AWS for Gaming</h5>

                <p className="boxtext text-justify">
                  Build faster and innovative games using
                  AWS Cloud on any platform or device.
                  Leverage the massive cloud
                  infrastructure provided by AWS for
                  Gaming & Gambling to operate games
                  on the cloud with secure and flexible
                  computing capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !--6box ends--! */}

      {/* !--case study --! */}

      <div>  <h1 className="case">Our Case Studies</h1>
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
                    <i class="fa fa-long-arrow-right ml-2" aria-hidden="true" ></i>
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
      </div>
      {/* !--case study --! */}

      {/* !--box on img --! */}
      <div className='gameimg'>
        <div className='gaming-img-section'>
          <div className='lab-data-gaming mb-0' >
            <div class="card" style={{
              border: "none", background: "none",
              width: "500px",
              marginLeft: "585px",
            }} >
              <div class="card-body gaming-bg-pink" style={{ borderRadius: "27px", height: "205px", width: "390px" }}>
                <p className='doc'> <span><img src='./images/doc.png' /></span> BLOG </p>
                <h5 class="card-title" style={{ fontSize: "15px", fontWeight: "600px" }}>Vital role of talent in digital transformation<br />
                  journey</h5>
                <h6 class="gaming-card-subtitle mb-2" style={{ fontSize: "11px", marginTop: "5px" }}>In 2022, digital transformation is the key driving factor behind<br />
                  the success of any organisation.</h6>
                <p class="readmore" style={{ color: "white", marginTop: "25px" }}>
                  <small>
                    Read more
                    <i class="fa fa-long-arrow-right ml-3" aria-hidden="true"></i>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  )
}

export default Gaming;