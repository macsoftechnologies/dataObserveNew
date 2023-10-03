import React from 'react'
import "./Media.css"
import Faq from '../products/Faq';
import Footer from '../products/Footer';
import Navbar from '../products/Navbar';
import media from "../../src/videos/media.mp4";
function Media() {
  return (
    <div>
      <Navbar />
      {/* !--nav bar ends--! */}

      <div>
      <video className="media-entertain-video" autoPlay loop muted>
        <source src={media} type="video/mp4"/>
      </video>
      <div className='media-main-img'>
        <p className="headingmedia">
          <div className="mainhead"> <span>Drive digital wave for<br />
            unmatched Media &<br />
            Entertainment experience</span><br />
          </div>
          <p className="subhead"> With lightning-fast distribution and immense storage capabilities, cloud migration is already<br />
            shifting the paradigm in the media and entertainment industry. Partner with DataObserve to improve<br />
            the agility, flexibility, and scalability of your content supply chain.</p>
        </p>
        <div className="btn" style={{ marginLeft: "13px",border:"none",borderRadius:"4px" }} >
          <button className="btninner">Get in touch
            <img className="arpng" src="./images/vector.png" />
          </button>
        </div>
      </div>
      </div>

     

      {/* !--6box stArt--! */}

      <div>
        <h3 className="platforms">
          Our Expertise in Media and Entertainment<br />
          Services
        </h3>
        <p className="platformspara">
          DataObserve aspires to be a leading provider of cloud and data solutions, catering to a global clientele of life science<br />
          organizations. By leveraging the perfect blend of data and cloud life sciences with our trusted support.
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }} >
                <img
                  src="./images/comercialdatalake.png"
                  className="App-logo business"
                  alt="logo"
                  width={45}
                />
                <h6>Advanced Data
                  Lakehouses for M&E</h6>

                <p className="boxtext text-justify">
                  Whether it’s handling huge streaming
                  workloads or managing the
                  unstructured customer data, advanced
                  data lake houses for M&E present a
                  perfect solution. Learn how AWS and big
                  data are working hand-in-hand to
                  enable AI to scale data pipelines and
                  reduce costs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/business.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h6>D2C Streaming BigData
                  Analytics</h6>

                <p className="boxtext text-justify">
                  Leverage the cloud with most purpose
                  built capabilities and deliver
                  unparalleled D2C streaming experience
                  with BigData Analytics integrated with
                  AWS media services. Explore how AWS
                  and advanced analytics are helping
                  industry leaders like Netflix deliver
                  seamless entertainment.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/spot.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Unified Audience
                  Profiling </h5>

                <p className="boxtext text-justify">
                  Analyzing big audience data made easy
                  with unified audience profiling. Capture,
                  store, manage, and interpret your
                  cumulative customer data with AWS
                  Cloud to craft targeted marketing
                  campaigns.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/amt.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>Unlock the value of
                  Media Assets </h5>

                <p className="boxtext text-justify">
                  Struggling to use your data back
                  catalog of content effectively? From
                  establishing custom audience
                  segments to ensuring the repurposing of
                  content, advanced analytics lets you
                  optimize results by combining the value
                  of media assets in a few clicks.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/intllegence.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>AI/ML Models for
                  Production</h5>

                <p className="boxtext text-justify">
                  Unleash the full potential of your AI and
                  machine learning media models by
                  deploying them into your production
                  cycle with AWS media cloud. Blending
                  big data analytics to production also
                  allows for personalized user experience
                  and enforced data quality.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center box-padding" style={{ height: "350px" }}>
                <img
                  src="./images/comercialdatalake.png"
                  className="App-logo arrow"
                  alt="logo"
                  width={100}
                />
                <h5>AWS For M&E </h5>

                <p className="boxtext text-justify">
                  AWS offers an unmatched media
                  experience with comprehensive content
                  production, media supply chain
                  management, D2C streaming, and
                  advanced data analytics capabilities.
                  Learn how purpose-built media &
                  entertainment is shifting the paradigm
                  in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !--6box ends--! */}

      {/* !--case study --! */}

      <div className='container' >
        <h1 className="case-mainheadname">Our Case Studies</h1>
        <p className='media-case-para'>Having a hard time re-engineering your media production and distribution? Our seasoned team has<br />
          helped many media-driven businesses go global and adapt better. Read our case studies to learn how<br /> our AWS media services can transform your business. </p>
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
                    <i class="fa fa-long-arrow-right ml-3 " aria-hidden="true"></i>
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
      <div className='mediaimg'>
        <div className='media-img-section'>
          <div className='lab-data-media'>
            <div class="card" style={{
              border: "none", background: "none",
              width: "500px",
            }} >
              <div class="card-body media-bg-pink" style={{ borderRadius: "27px", height: "250px", width: "390px" }}>
                <p className='doc'> <span><img src='./images/doc.png' /></span> BLOG </p>
                <h5 class="card-title" style={{ fontSize: "15px", fontWeight: "600px" }}>Save 70% on Server Licensing Costs with<br />
                  Scalable Cloud Data Architecture</h5>
                <h6 class="media-card-subtitle mb-2" style={{ fontSize: "11px", marginTop: "5px" }}>As per a report by Statista, nearly 79 zettabytes of data were<br />
                  consumed by internet users globally in 2021 and this number<br />
                  is expected to reach 180 zettabytes by 2025.</h6>
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
      {/* !--box img--! */}
      {/* !--faqs--! */}
      <Faq />

      {/* !--footer--! */}
      <Footer />

    </div>
  )
}

export default Media;