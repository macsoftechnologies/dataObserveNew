import React from "react";
import "./Company.css";
import Footer from "../components/Footer";
import Navbar from "../products/Navbar";
import companyvideo from "../../src/videos/company.mp4";


function company() {
  return (
    <div>
      
      <Navbar />

      <div>
      <video className="company-play-bg-video" autoPlay loop muted>
        <source src={companyvideo} type="video/mp4"/>
      </video>
    
      <div className="body-science">
        <p className="journey">
          <span className="our-story">Our Story </span>
          <br />
          Navigating your journey
          <br /> from insights to value <br />
          realization
        </p>
        
      </div>
      </div>

      <div className="container home-company-ourstory">
        <h6 className="color-black">Home<span className="home-color">/</span> Company<span className="home-color">/</span> Our Story</h6>
        </div>
      <div
        className="container"
        style={{
          color: "black",
          fontSize: 49,
          fontFamily: "Poppins",
          fontWeight: 400,
        }}
      >
        We’re a data science solutions provider
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="data-science"
                src="./images/data-science.png"
                alt="datascience"
              />
            </div>
            <div className="col-md-8">
              <p className="marathon">
                Similar to a marathon, the final mile proves to be the most
                challenging. This is the point where enterprises often falter,
                losing the determination and vigor required to leverage data
                analytics beyond the realm of insight generation and turn it
                into tangible value. It's at this juncture that we identified an
                opportunity to bridge the gap - by transforming data into
                actionable insights and operationalizing them to create
                significant, measurable business outcomes.
              </p>
              <br />
              <p className="marathon-1">
                Our primary goal is to narrow the divide between delivering
                insights and achieving tangible value. We collaborate closely
                with our clients to assist them in surmounting the final hurdle
                in the field of analytics. This ethos propels our network to
                exceed boundaries, encouraging our clients to reconsider their
                constraints and surpass the limits of what they perceive as
                'possible'.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cult-page">
          <div className="container">
            <h4 className="how-we">How we do this</h4>
            <div className="row">
              <div className="col-md-6">
                <li className="d-flex">
                  <div>
                    <img src="./images/1.png" alt="one" width={100} />
                  </div>
                  <p className="cultivate">
                    Cultivating a deep understanding of data and domain
                    challenges that CXOs face in their industries and developing
                    blueprints and solutions to solve the last-mile problem in
                    analytics
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img src="./images/2.png" alt="one" width={100} />
                  </div>
                  <p className="cultivate">
                    Embracing a vertical-first approach, powered by our practice
                    excellence to help clients stay ahead of the curve and face
                    market disruptions fearlessly
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img src="./images/3.png" alt="one" width={100} />
                  </div>
                  <p className="cultivate">
                    Leveraging our rich partner ecosystem that complements our
                    efforts and fostering co-creation to help clients find
                    faster value realization from their analytics investments
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img src="./images/4.png" alt="one" width={100} />
                  </div>
                  <p className="cultivate">
                    Harnessing the power of AI/ML in our proprietary
                    accelerators and solutions through Tredence Studio, a force
                    multiplier that helps enterprises speed to value
                  </p>
                </li>
              </div>

              <div className="col-md-6">
                <img className="how-we" src="./images/how-we.png" alt="how" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ourpurpose-body">
          <div className="row">
            <div className="col-md-4">
              <div class="card our-card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    className="target"
                    src="./images/target.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle mb-2 text-muted our-purpose-1">
                    Our purpose
                  </h6>
                  <p class="card-text empower-para">
                    To empower decisions that help our clients win
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card our-card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    className="target"
                    src="./images/vision.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle mb-2 text-muted our-purpose-1">
                    Our vision
                  </h6>
                  <p class="card-text empower-para">
                    To become the world’s most indispensable analytics partner
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card our-card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    className="target"
                    src="./images/eye.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle mb-2 text-muted our-purpose-1">
                    ACE framework
                  </h6>
                  <p class="card-text empower-para">
                    We act with integrity & trust, love to go easy, be warm and
                    have fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container everyperson-data">
          <div className="row">
            <div className="col-md-6">
              <li className="d-flex">
                <div>
                  <img
                    className="data-science-image"
                    src="./images/data-scientist.png"
                    alt="one"
                    width={100}
                  />
                </div>
                <div>
                  <h4 className="global-data">1600 data scientists</h4>
                  <p className="data-science-paragraph">
                    Every person at Tredence brings their whole self to work and
                    helps us create a culture of curiosity and innovation
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <div>
                  <img
                    className="data-science-image"
                    src="./images/global-delivery.png"
                    alt="one"
                    width={100}
                  />
                </div>
                <div>
                  <h4 className="global-data">10+ global delivery centres</h4>
                  <p className="data-science-paragraph">
                    Enabling user-driven analytics for some of the world’s
                    largest Fortune 50 companies
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <div>
                  <img
                    className="data-science-image"
                    src="./images/global-customer.png"
                    alt="one"
                    width={100}
                  />
                </div>
                <div>
                  <h4 className="global-data">60+ global customers</h4>
                  <p className="data-science-paragraph">
                    Trust us to help them create sustainable impact by
                    systematizing the last mile adoption of analytics
                  </p>
                </div>
              </li>
            </div>

            <div className="col-md-6">
              <img
                className="how-we"
                src="./images/datascientist.png"
                alt="how"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-color">
          <div className="container">
            <div className="row bg-white">
              <div className="col-md-6 shadow-sm rounded">
                <div>
                  <div className="card card-1">
                    <div class="card-body card-body-1">
                      <h5 class="card-title title">Talk to Us</h5>
                      {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                      <p class="card-text question">
                        Got a question? Dont a hesitate to give us a call today
                        or shoot us an email
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
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default company;
