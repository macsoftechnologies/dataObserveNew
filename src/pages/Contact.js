import React from "react";
import "./Contact.css";
import Navbar from "../products/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section>
        <div className="contact-bg-color">
          <div className=" container contact-overall">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <h3 className="contact-heading">
                    Let’s
                    <br />
                    connect
                  </h3>
                  <p className="contact-paragraph">
                    Got a question? Don’t hesitate to give us a call today or
                    <br />
                    shoot us an email.
                  </p>
                  <div className="d-flex">
                    <i class="fa fa-phone contact-phone" aria-hidden="true"></i>
                    <p className="mobile-number">+1 (747) 900 -5766</p>
                  </div>
                  <div className="d-flex">
                    <i
                      class="fa fa-envelope contact-phone"
                      aria-hidden="true"
                    ></i>

                    <p className="mobile-number">sales@agilisium.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 connect-page">
                <div class="card connectpage-1">
                  <div class="card-body">
                    <div className="form-group full-g">
                      <label className="full-name required">Full Name</label>
                      <input type="text" className="form-control name-1" />
                      <label className="full-name required">Work Email</label>
                      <input type="text" className="form-control name-1" />
                      <label className="full-name">Contact Number</label>
                      <input type="text" className="form-control name-1" />
                      <label className="full-name">Message</label>
                      <textarea type="text" className="form-control name-1" />

                      <button className="contact-us-3">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="pattern"
                  src="./images/pattern.png"
                  alt="pattern"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container location-pad">
          <h3 className="our-location">Our Locations</h3>
          <img className="map" src="./images/location-map.png" alt="location" />
        </div>
        <div className="container overall-padding">
          <div className="row">
            <div className="col-md-4">
              <div className="unitedstates-all">
                <div>
                  <h3 className="united-heading">United States</h3>
                  <h6 className="sub-states-all">California - Corporate</h6>
                  <p className="agi-para">
                    6200 Canoga Ave, Suite 315,
                    <br /> Woodland Hills, CA 91367
                  </p>
                  <hr />
                </div>
                <div>
                  <h6 className="sub-states-all">Virginia</h6>
                  <p className="agi-para">
                    1775 Tysons Boulevard
                    <br />
                    McLean, VA 22102
                    <br />
                    13800 Coppermine Road Suite 306
                    <br />
                    Herndon, VA 20171
                  </p>
                  <hr />
                </div>
                <div>
                  <h3 className="sub-states-all">Nevada</h3>
                  <p className="agi-para">
                    400 S 4TH Street, Suite 500-#154,
                    <br />
                    Las Vegas , NV 89101
                  </p>
                  <hr />
                </div>
                <div>
                  <h3 className="sub-states-all">Texas</h3>
                  <p className="agi-para">
                    8303 Oveta St, Jonestown,
                    <br />
                    TX 78645
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="canadastate-all">
                <div className="canada-all">
                  <h3 className="canada-heading">Canada</h3>
                  <h4 className="sub-states-all">Canada</h4>
                  <p className="agi-para">
                    407 Iroquois Shore Road,
                    <br />
                    Oakville ON L6H 1M3
                  </p>
                </div>
                <div className="costa-all">
                  <h3 className="costa-heading">Costa Rica</h3>
                  <h4 className="sub-states-all">Heredia</h4>
                  <p className="agi-para">
                    Coding Hub, Oficina #4, Torres de
                    <br />
                    Heredia Heredia, Costa Rica
                    <br />
                    Phone: +(506) 8326-9853
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="netherland-all">
                <div className="nether-all">
                  <h3 className="nether-heading">The Netherlands</h3>
                  <h4 className="sub-states-all">Amstelveen</h4>
                  <p className="agi-para">
                    Laan van Kronenburg 14
                    <br />
                    1183 AS
                  </p>
                </div>
                <div className="india-all">
                  <h3 className="india-heading">India</h3>
                  <h4 className="sub-states-all">Chennai</h4>
                  <p className="agi-para">
                    Agilisium Consulting India Private
                    <br />
                    Limited-SEZ
                    <br />
                    World Trade Center,
                    <br />
                    1st floor of Tower B ,Unit 102,
                    <br />
                    Perungudi Real Estates Private Limited,
                    <br />
                    5/142,Rajiv Gandhi Salai, Old
                    <br />
                    Mahabalipuram Road, Perungudi,
                    <br />
                    Chennai-600096
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="footer">
          <div className="container line-bottom">
            <div className="row">
              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading company">Company</h1>
                  <ul>
                    <li>About Us</li>
                    <li>People and Careers</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading">Services</h1>
                  <ul className="cloud">
                    <li>Cloud transformation</li>
                    <li>Data Engineering</li>
                    <li>Data Analytics and BI</li>
                    <li>AI & Machine Learning</li>
                    <li>evOps-as-a-service</li>
                    <li>Application Modernization</li>
                    <li>Talent as a Service</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading">Industries</h1>
                  <ul>
                    <li>Life sciences and Pharma</li>
                    <li>Media & Entertainment</li>
                    <li>Gaming and gambling</li>
                  </ul>
                  <h1 className="footer-heading">Products</h1>
                  <ul>
                    <li>Data Observability</li>
                    <li>Health EM</li>
                    <li>DataSense</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading">Insights</h1>
                  <ul>
                    <li>Case Studies</li>
                    <li>Blogs</li>
                    <li>Ebooks</li>
                    <li>Webinars & Videos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         <div>

         </div>

          <div class="contain">
            <div class="clearfix"></div>
          </div>

          <hr />

          <div className="container">
            <div className="row">
              <div className="col-md-8 d-flex">
                <img className="footer-img"
                  src="./images/footerimg.png"
                  alt="img"
                  width={100}
                  height={50}
                />
                <p>
                 <span className="agilisium"> © 2023 Agilisium. All rights reserved.  </span>|  <span className="privacy-policy">Privacy  Policy  </span>
                 |  <span className="privacy-policy">Terms and Conditions</span>
                </p>
              </div>
              <div className="col-md-4 socialmedia-images d-flex ">
                <div>
                  <img
                    className="fb"
                    src="./images/fb.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/insta.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/link.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/twitter.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <img
                  className="fb"
                  src="./images/youtube.png"
                  alt="fb"
                  width={100}
                />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
