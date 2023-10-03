import React from "react";
import "./People.css";
import Footer from "../components/Footer";
import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import careers from "../../src/videos/careers.mp4";
function People() {
  return (
    <div>
      <Navbar />
      <section>

        <div>
        <video className="people-careers-video" autoPlay loop muted>
        <source src={careers} type="video/mp4"/>
      </video>
      <div className="background">
          <div className="container people-data-observe">
            <h1 className="people-career">People & Careers</h1>
            <p className="data-observe">
              At DataObserve, we strive to bring together tech innovators and
              problem solvers. <br />
              Join our ever growing team for a long and rewarding career.
            </p>
          </div>
        </div>
        </div>
        
      </section>

      <section>
        <div>
          <p className="life">Life at DataObserve</p>
          <div className="dataobserve-paragraph-1">
            <p className="paragraph-observe">
              At DataObserve, we have created a positive work environment that
              supports your excellence, stimulates your curiosity, and
              <br />
              <span>
                fuels your creativity. No matter where you are, you can be part
                of our cohesive workforce!
              </span>
            </p>
          </div>
        </div>
        {/* .....circle.... */}
        <div className="container">
          <div className="row circles-both">
            <div className="circle-2">
              <div>
                <h6 className="Empathy-circle">Empathy</h6>
              </div>
              <div>
                <h6 className="Dedication-circle">Dedication</h6>
              </div>
              <div>
                <h6 className="Empathy-circle">Empathy</h6>
              </div>
              <div>
                <h6 className="Teamwork-circle">Teamwork</h6>
              </div>
              <div>
                <h6 className="Ownership-circle">Ownership</h6>
              </div>
            </div>

            <div className="circle-1">
              <div>
                <h6 className="owner">Ownership</h6>
              </div>
              <div>
                <h6 className="team">Teamwork</h6>
              </div>
              <div>
                <h6 className="Self-Reliance">Self-Reliance</h6>
              </div>
              <div>
                <h6 className="Leadership">Leadership</h6>
              </div>

              <div>
                <h6 className="Growth">Growth</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ourvalues-background">
          <div>
            <p className="life-2">Our values</p>
            <div className="dataobserve-paragraph-2">
              <p>
                We are not just a great product company – we have a cool work
                culture too! Here are the
                <br />
                <span>
                  six core values that are driving our company’s culture:
                </span>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div class="card  card-number" id="numbers-part" style={{borderRadius:'30px'}}>
                  <div class="card-body">
                    <img src="./images/card1.png" alt="card1" width={100} />
                    <p className="respect">Respect</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card card-number">
                  <div class="card-body">
                    <img src="./images/card2.png" alt="card2" width={100} />
                    <p className="integrity">Integrity</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card card-number">
                  <div class="card-body">
                    <img src="./images/card3.png" alt="card3" width={100} />
                    <p className="trust">Trust</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card card-number">
                  <div class="card-body">
                    <img src="./images/card4.png" alt="card4" width={100} />
                    <p className="equality">Equality</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card card-number">
                  <div class="card-body">
                    <img src="./images/card5.png" alt="card5" width={100} />
                    <p className="customer">Customer Obsession</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card card-number">
                  <div class="card-body">
                    <img src="./images/card6.png" alt="card6" width={100} />
                    <p className="innovation">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <p className="life">Perks and benefits</p>
            <div className="dataobserve-paragraph-1">
              <p className="data-observe-paragraph">
                At DataObserve, we prioritize the physical, financial, and
                emotional well-being of our employees. Here’s how we
                <br />
                <span>drive our workforce to deliver their best.</span>
              </p>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="text-center box-padding-1">
                  <img
                    src="./images/healthcare.png"
                    className="App-logo arrow-1"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-1 text-center">
                    Healthcare Insurance & Wellness Programs
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-2">
                  <img
                    src="./images/vaccation.png"
                    className="App-logo arrow-2"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-2 text-center">
                    Vacation / Paid Time <br />
                    Off
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-3">
                  <img
                    src="./images/performance.png"
                    className="App-logo arrow-3"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-3 text-center">
                    Performance Bonus & Rewards Programs
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-4">
                  <img
                    src="./images/growth.png"
                    className="App-logo arrow-4"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-4 text-center">
                    Career Growth
                    <br /> Programs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="empower">
              <div className="container people-data-observe-1">
                <h1 className="people-career-1">
                  DataObserve
                  <br />
                  Graduation Labs
                </h1>
                <p className="data-observe-1">
                  Our in-house organization is committed to agile and
                  accelerated
                  <br />
                  learning to help DataObserve associates perform to their full
                  potential.
                  <br />
                  We empower the Graduation Labs with key components:
                </p>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-1 check-icons">
                    <li className="d-flex">
                      <div>
                        <i
                          class="fa fa-check-circle che-cir-1"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div>
                        <i
                          class="fa fa-check-circle che-cir-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>
                    <li className="d-flex">
                      <div>
                        <i
                          class="fa fa-check-circle che-cir-3"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>
                  </div>
                  <div className="teams-paragraph">
                    <p className="team-ld">
                      A team of highly experienced learning and development
                      (L&D)
                      <br />
                      professionals.
                    </p>
                    <p className="team-ld">
                      An ecosystem of access-from-anywhere digital learning
                      <br />
                      platforms.
                    </p>
                    <p className="team-ld">
                      Best-in-class content curation partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inclusion-background">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="inclusion"
                  src="./images/inclusion.png"
                  alt="inclusion"
                />
              </div>
              <div className="col-md-6">
                <div className="all-workforce">
                  <h3 className="inclusive-heading">Inclusive Workforce</h3>
                  <p className="work-para">
                    DataObserve’s work is powered by an all-inclusive workforce
                    dedicated to delivering 100% customer satisfaction. We are
                    driving a positive change in society through a diverse
                    employee base. DataObserve hires the best talent from
                    diverse backgrounds and provides them with a platform to
                    seamlessly coordinate. Our diversity truly propels our teams
                    to create solutions that make a difference!
                  </p>
                  <button className="view-more">View more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="over-join-us">
          <div className="container">
            <div className="joinus">
              <div className="head-paragraph">
                <h3 className="text-center joinus-heading">Join Us</h3>
                <p className="text-center joinus-paragraph">
                  Browse through our exciting set of job openings.
                  <br />
                  Join us and become a part of this amazing journey.
                </p>
              </div>
              <div className="current-opening d-flex">
                <button className="openings">View current openings</button>
                <button className="openings">View fresher opening</button>
              </div>
            </div>
          </div>
        </div>
      </section>

         <Faq />

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

export default People;
