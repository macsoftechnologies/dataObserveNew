import React from "react";
import "./CasestudiesRedirect.css";
import Navbar from "../products/Navbar";

const CasestudiesRedirect = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <a href="/allinsights">
          <button className="previousButton">Back</button>
          </a>
        </div>
      </section>
      <section className="blogsheader mb-5">
        <div className="container blogmatter">
          <h3 className="blogtitle1">Case Study</h3>
          <h1 className="blogtitle2 col-md-10">
            Generative AI Vs. Traditional AI: A Simple Breakdown
          </h1>
          <p className="blogtitlepara">
            Learn the key differences between generative AI and traditional AI,
            and how they are transforming our world.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <p className="casestudiespara text-justify">
                Our client, a US travel club, offers branded leisure programs to
                tens of thousands of private members. Initially, they focused on
                renting out timeshare condos and villas but gradually started
                selling other products — such as cruises, hotels, and car
                rentals. As they integrated with more vendors, it became
                difficult to navigate their website. This led to the growth of
                concierge services, which, in turn, suffered from employee
                turnover and caused significant financial losses.
              </p>
              <p className="casestudiespara text-justify mt-3">
                Another problem the company faced was the lack of direct
                connections with travel suppliers.  Most of their content came
                from intermediaries, so our client could count on only a tiny
                fraction of commissions.
              </p>
              <p className="casestudiespara text-justify mt-3">
                The travel club reached out to AltexSoft to build a modern
                platform with an intuitive interface and access to a wide range
                of products from direct suppliers and resellers.
              </p>
              <h1 className="casestudiesheading mt-5">Business challenges</h1>
              <p className="casestudiespara text-justify mt-4">
                The self-service booking platform designed by AltexSoft
                addresses the following business challenges.
              </p>
              <div className="mb-5">
                <div className="d-flex">
                  <img
                    src="images/casestudystar.png"
                    alt="#"
                    className="casestudystar"
                  />
                  <p className="casestartext">
                    Cut costs on concierge services
                  </p>
                </div>
                <div className="d-flex">
                  <img
                    src="images/casestudystar.png"
                    alt="#"
                    className="casestudystar"
                  />
                  <p className="casestartext">
                    Create a seamless booking experience for closed user groups
                  </p>
                </div>
                <div className="d-flex">
                  <img
                    src="images/casestudystar.png"
                    alt="#"
                    className="casestudystar"
                  />
                  <p className="casestartext">
                    Establish direct integrations with suppliers to increase
                    revenue
                  </p>
                </div>
                <div className="d-flex">
                  <img
                    src="images/casestudystar.png"
                    alt="#"
                    className="casestudystar"
                  />
                  <p className="casestartext">
                    Expand the range of available travel products
                  </p>
                </div>
                <div className="d-flex">
                  <img
                    src="images/casestudystar.png"
                    alt="#"
                    className="casestudystar"
                  />
                  <p className="casestartext">
                    Minimize the manual work and human error when managing
                    prices
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 tablecolumn">
              <div className="tableclass">
                <h1 className="blogtableheading">Table of Content</h1>
                <div className="pt-3 blogtableparadiv">
                  <p className="blogtablepara">Bussiness Challenge</p>
                </div>
                <div className="pt-3 blogtableparadiv">
                  <p className="blogtablepara">VALUE DELIVERED</p>
                </div>
                <div className="pt-3 blogtableparadiv">
                  <p className="blogtablepara">
                    Generative AI Vs. Traditional AI - A Simple Breakdown for
                    Easier Understanding
                  </p>
                </div>
                <div className="pt-3 blogtableparadiv">
                  <p className="blogtablepara">
                    APPROACH & Technical Traditional AI
                  </p>
                </div>
                <div className="pt-3 blogtableparadiv">
                  <p className="blogtablepara">Concluding Thoughts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9 casevalueclass">
              <h1 className="caseheading">Value Delivered</h1>
              <div className="d-flex mt-5">
                <img
                  src="images/casestudycursor.png"
                  alt="#"
                  className="casestudymatterimage"
                />
                <div className="ml-3">
                  <h1 className="casevalueheading">
                    Providing a consistent look and feel across the website
                  </h1>
                  <p className="casevaluepara mt-3 text-justify">
                    The client’s website was a combination of white-label
                    solutions from numerous travel providers, which didn’t feel
                    consistent. Our experts redesigned UI/UX to bring uniformity
                    across different visual elements, enhancing user
                    interactions with the system. As a result, non-tech-savvy
                    clients can easily buy whatever they want, with little to no
                    help from live support.
                  </p>
                </div>
              </div>

              <div className="d-flex mt-5">
                <img
                  src="images/casestudycursor2.png"
                  alt="#"
                  className="casestudymatterimage"
                />
                <div className="ml-3">
                  <h1 className="casevalueheading">
                    Integrating with timeshare resorts, payment gateways, and a
                    review platform
                  </h1>
                  <p className="casevaluepara mt-3 text-justify">
                    AltexSoft established direct connections with two timeshare
                    companies — the first leveraging content from over 4,200
                    resorts and the second maintaining a network of nearly 3,000
                    resorts globally. We also built integrations with payment
                    gateways to accept credit cards and a guest feedback
                    platform to collect and analyze customer reviews and hotel
                    ratings.
                  </p>
                </div>
              </div>

              <div className="d-flex mt-5">
                <img
                  src="images/casestudycursor3.png"
                  alt="#"
                  className="casestudymatterimage"
                />
                <div className="ml-3">
                  <h1 className="casevalueheading">
                    Getting Priceline content via Travolutionary, an all-in-one
                    hotel aggregation platform
                  </h1>
                  <p className="casevaluepara mt-3 text-justify">
                    Travolutionary links travel resellers to inventory from 80
                    suppliers via a single API, eliminating the need to build
                    multiple integrations. However, you must get a separate
                    certification from each vendor you want to partner with. So,
                    after connecting the client’s platform to Travolutionary,
                    our team navigated a complex approval process with the
                    supplier of choice — Priceline. We successfully verified
                    that the website correctly presents data from Priceline.
                  </p>
                </div>
              </div>

              <div className="d-flex mt-5">
                <img
                  src="images/casestudycursor4.png"
                  alt="#"
                  className="casestudymatterimage"
                />
                <div className="ml-3">
                  <h1 className="casevalueheading">
                    Automating price calculation
                  </h1>
                  <p className="casevaluepara mt-3 text-justify">
                    We also built a commission engine for hotels and condos that
                    automates adding markups (a flat fee or a percentage of a
                    sale price) to a base rate. It applies predefined rules to
                    calculate a final price depending on property location,
                    supplier, and user group. The module lets our client be
                    flexible with commissions while reducing manual work and
                    human error.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 casevalueclass2">
              <div className="casemoreclass">
                <p className="caseheading1 text-align-start">
                  More related casestudies
                </p>
                <div className="casevertical"></div>
                <div className="mt-3">
                  <h6 className="casemoreheading">
                    What's new in Angular version 12?🔥
                  </h6>
                  <div className="d-flex caseskills">
                    <p className="caseskill">#angular</p>
                    <p className="caseskill">#html</p>
                    <p className="caseskill">#css</p>
                    <p className="caseskill">#javascript</p>
                  </div>
                </div>
                <div className="casevertical"></div>
                <div className="mt-3">
                  <h6 className="casemoreheading">
                    Nulam magna tincidu nunc ante 🏆
                  </h6>
                  <div className="d-flex caseskills">
                    <p className="caseskill">#angular</p>
                    <p className="caseskill">#html</p>
                    <p className="caseskill">#css</p>
                    <p className="caseskill">#javascript</p>
                  </div>
                </div>
                <div className="casevertical"></div>
                <div className="mt-3">
                  <h6 className="casemoreheading">
                    Morbi sit volutpat, varius odio et.{" "}
                  </h6>
                  <div className="d-flex caseskills">
                    <p className="caseskill">#angular</p>
                    <p className="caseskill">#html</p>
                    <p className="caseskill">#css</p>
                    <p className="caseskill">#javascript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 casefinalclass">
              <h1 className="caseapproachheading">
                Approach and Technical Info
              </h1>
              <p className="caseapproachpara">
                The partnership lasted about two years, involving{" "}
                <span className="caseapproachspan">
                  two front-end developers; three back-end developers; two QA
                  engineers
                </span>
                , a <span className="caseapproachspan">solution architect</span>
                , a<span className="caseapproachspan"> project manager</span>, a
                <span className="caseapproachspan"> business analyst</span>, and
                a<span className="caseapproachspan"> UI/UX designer</span>
              </p>
              <p className="caseapproachpara">
                The technology stack includes{" "}
                <span className="caseapproachspan">React</span>,
                <span className="caseapproachspan"> Redux</span>,
                <span className="caseapproachspan"> Ant Design, ASP.NET Core, Entity Framework (EF) Core, Microsoft SQL Server, Terraform, Amazon Elastic Container Register (ECR) </span>and
                <span className="caseapproachspan"> Elastic Container Service (ECS), AWS Elastic Beanstalk, </span>and
                <span className="caseapproachspan"> AWS Lambda.</span>

              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </>
  );
};

export default CasestudiesRedirect;
