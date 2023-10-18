import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 rounded">
              <div className="ttuclass">
                <div className="card">
                  <div
                    class="card-body footercardbody"
                    style={{
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* {/ <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> /} */}
                    <p className="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true">
                      <span classname="hello" style={{marginLeft: "10px"}}>hello@dataserve.io</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div>
                  <form>
                    <div className="form-group">
                      <label className="required">Full Name</label>
                      <input type="text" className="form-control name" />
                      <label className="required">Work Email</label>
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
        <div class="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Company
                  </h1>
                  <ul>
                    <li>About Us</li>
                    <li>People and Careers</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Services
                  </h1>
                  <ul>
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

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Industries
                  </h1>
                  <ul>
                    <li>Life sciences and Pharma</li>
                    <li>Media & Entertainment</li>
                    <li>Gaming and gambling</li>
                  </ul>
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Products
                  </h1>
                  <ul>
                    <li>
                      DO{" "}
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.70)",
                          fontSize: "15px",
                          fontWeight: "700",
                          lineHeight: "22.5px",
                          letterSpacing: "-0.32px",
                        }}
                      >
                        360
                      </span>
                    </li>
                    {/* <li>Health EM</li> */}
                    <li>DOInsights</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Insights
                  </h1>
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

          <div class="contain">
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
