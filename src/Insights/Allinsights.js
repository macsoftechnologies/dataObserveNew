import React from "react";
import "./Allinsights.css";
import Navbar from "../products/Navbar";
import allinsights from "../../src/videos/allinsights-banner.MOV";
import { Link } from "react-router-dom";
import Footer from "../products/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Allinsights() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />

      <section>
        <div>
          <video className="company-play-bg-video" autoPlay loop muted>
            <source src={allinsights} type="video/mp4" />
          </video>

          <div className="body-science-1">
            <p className="journey-1">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                Insights
              </p>
              <p className="our-story-1">
                Discover exclusive insights
                <br /> with a sneak peek behind <br />
                the scenes.
              </p>
              <p className="our-story-1">
                Uncover valuable knowledge
                <br /> about DataObserve that sets
                <br />
                us apart.
              </p>
            </p>
            <button
              style={{
                display: "flex",
                height: "61px",
                maxWidth: "255px",
                padding: "20px 46px 21px 48px",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginTop: "70px",
                borderRadius: "5px",
                marginLeft: "18%",
              }}
            >
              <span
                style={{
                  color: "#0046E8",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "19px",
                }}
              >
                Get a demo
              </span>{" "}
            </button>
          </div>
        </div>
      </section>
      {/* case studies */}
      <section className="All-insights-back-ground" id="casestudies">
        <div className="container">
          <div>
            <h3 className="case-study-insights">case studies</h3>
          </div>

          <div>
            <div className="container">
              <div>
                <Slider {...settings}>
                  <div>
                    <Link to="/casestudies" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/aws-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <d  iv className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </d>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Coming SMaximizing manufacturing efficiency with
                            data engineeringoon
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/manfacture-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Transformed HR analytics with Tableau for an
                            e-commerce fashion company
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/empower-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* case studies end */}

      {/* //top 10 insights */}
      <section className="All-insights-back-ground" id="top10insights">
        <div className="container">
          <div>
            <h3 className="case-study-insights">Top 10 Insights</h3>
          </div>

          <div>
            <div className="container">
              <div>
                <Slider {...settings}>
                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/insights-one.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/top10-insights.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div>
                      <img
                        className="insights-two-number"
                        src="./images/insights-two.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/aws-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        className="insights-two-number"
                        src="./images/insights-three.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                          AWS FOR APPLICATION MODERNIZATION: UPDATING YOUR LEGACY SYSTEMS FOR THE CLOUD
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/top3-insights.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/aws-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/aws-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/aws-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //top 10 insights close */}

      {/* blog and articles */}
      <section className="All-insights-back-ground" id="blogs">
        <div className="container">
          <div>
            <h3 className="case-study-insights">Blogs & Articles</h3>
          </div>

          <div>
            <div className="container">
              <div>
                <Slider {...settings}>
                  <div>
                    <Link to="/blog" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                          The future of data engineering in digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/top10-insights.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                          How Does Multi-cloud Differ From A Hybrid Cloud
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/cloud-blog.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                          Design Thinking Led Approach to Building Digital Product Ecosystem
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/design-blog.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/blogs.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/blogs.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/blogs.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/blogs.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/blogs.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog and articles close */}

      {/* ebooks and whitepapers */}
      <section className="All-insights-back-ground" id="ebooks">
        <div className="container">
          <div>
            <h3 className="case-study-insights">Ebook & Whitepapers</h3>
          </div>

          <div>
            <div className="container">
              <div>
                <Slider {...settings}>
                  <div>
                    <Link to="/ebooks" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                          AWS FOR APPLICATION MODERNIZATION: UPDATING YOUR LEGACY SYSTEMS FOR THE CLOUD
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-aws-1.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                          Why is it important to understand application modernization more than ever?
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-important-2.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                    <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                          Enhance your software development process with DevOps
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-enhance-3.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the
                            1500s,when an unkonwn printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            The future of data engineering in <br />
                            digital product engineering lies with Gen AI
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebooks.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            <br /> typesetting industry. Lorem Ipsum has been
                            the industry's <br />
                            standard dummy text ever since the 1500s,when an
                            unkonwn
                            <br /> printer...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div className="d-flex like-share-number">
                              <div className="like-numbers d-flex">
                                <p className="number-insight">9182</p>&nbsp;
                                &nbsp;
                                <img
                                  src="./images/like.png"
                                  alt="like"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              &nbsp;
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ebooks close */}

      {/* whitepapers */}
      {/* <section className="All-insights-back-ground" id="whitepapers">
        <div className="container">
          <div>
            <h3 className="case-study-insights">Whitepapers</h3>
          </div>

          <div>
            <div className="container">
              <div>
                <Slider {...settings}>
                 
                 
                  <div>
                  <Link to="#"  className="insights-main"  >
                  <div className="card myDIV">
                    <div>
                      <p className="insights-paragraph-future">
                        The future of data engineering in <br />
                        digital product engineering lies with Gen AI
                      </p>
                    </div>
                    <div>
                      <img
                        src="./images/ebooks.png"
                        alt="recent-1"
                        className="w-100 case-study-image"
                      />
                    </div>
                    <div>
                      <p className="hide-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        <br /> typesetting industry. Lorem Ipsum has been the
                        industry's <br />
                        standard dummy text ever since the 1500s,when an unkonwn
                        <br /> printer...
                        <span className="read-more-insights">
                          Read more
                        </span>{" "}
                      </p>
                    </div>

                    <div className="card-body">
                      <h6 className="rvs-praveen">Posted by D.O Team</h6>
                      <div className="d-flex">
                        <div className="domain-insigts">
                          <p className="domain">Domain</p>
                        </div>
                        <div className="d-flex like-share-number">
                          <div className="like-numbers d-flex">
                            <p className="number-insight">9182</p>&nbsp; &nbsp;
                            <img
                              src="./images/like.png"
                              alt="like"
                              width={20}
                              height={20}
                            />
                          </div>
                          &nbsp;
                          <div>
                            <img
                              className="share"
                              src="./images/share.png"
                              alt="like"
                              width={28}
                              height={28}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  </div>
                  <div>
                  <Link to="#"  className="insights-main"  >
                  <div className="card myDIV">
                    <div>
                      <p className="insights-paragraph-future">
                        The future of data engineering in <br />
                        digital product engineering lies with Gen AI
                      </p>
                    </div>
                    <div>
                      <img
                        src="./images/ebooks.png"
                        alt="recent-1"
                        className="w-100 case-study-image"
                      />
                    </div>
                    <div>
                      <p className="hide-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        <br /> typesetting industry. Lorem Ipsum has been the
                        industry's <br />
                        standard dummy text ever since the 1500s,when an unkonwn
                        <br /> printer...
                        <span className="read-more-insights">
                          Read more
                        </span>{" "}
                      </p>
                    </div>

                    <div className="card-body">
                      <h6 className="rvs-praveen">Posted by D.O Team</h6>
                      <div className="d-flex">
                        <div className="domain-insigts">
                          <p className="domain">Domain</p>
                        </div>
                        <div className="d-flex like-share-number">
                          <div className="like-numbers d-flex">
                            <p className="number-insight">9182</p>&nbsp; &nbsp;
                            <img
                              src="./images/like.png"
                              alt="like"
                              width={20}
                              height={20}
                            />
                          </div>
                          &nbsp;
                          <div>
                            <img
                              className="share"
                              src="./images/share.png"
                              alt="like"
                              width={28}
                              height={28}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  </div>
                  <div>
                  <Link to="#"  className="insights-main"  >
                  <div className="card myDIV">
                    <div>
                      <p className="insights-paragraph-future">
                        The future of data engineering in <br />
                        digital product engineering lies with Gen AI
                      </p>
                    </div>
                    <div>
                      <img
                        src="./images/ebooks.png"
                        alt="recent-1"
                        className="w-100 case-study-image"
                      />
                    </div>
                    <div>
                      <p className="hide-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        <br /> typesetting industry. Lorem Ipsum has been the
                        industry's <br />
                        standard dummy text ever since the 1500s,when an unkonwn
                        <br /> printer...
                        <span className="read-more-insights">
                          Read more
                        </span>{" "}
                      </p>
                    </div>

                    <div className="card-body">
                      <h6 className="rvs-praveen">Posted by D.O Team</h6>
                      <div className="d-flex">
                        <div className="domain-insigts">
                          <p className="domain">Domain</p>
                        </div>
                        <div className="d-flex like-share-number">
                          <div className="like-numbers d-flex">
                            <p className="number-insight">9182</p>&nbsp; &nbsp;
                            <img
                              src="./images/like.png"
                              alt="like"
                              width={20}
                              height={20}
                            />
                          </div>
                          &nbsp;
                          <div>
                            <img
                              className="share"
                              src="./images/share.png"
                              alt="like"
                              width={28}
                              height={28}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  </div>
                  <div>
                  <Link to="#"  className="insights-main"  >
                  <div className="card myDIV">
                    <div>
                      <p className="insights-paragraph-future">
                        The future of data engineering in <br />
                        digital product engineering lies with Gen AI
                      </p>
                    </div>
                    <div>
                      <img
                        src="./images/ebooks.png"
                        alt="recent-1"
                        className="w-100 case-study-image"
                      />
                    </div>
                    <div>
                      <p className="hide-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        <br /> typesetting industry. Lorem Ipsum has been the
                        industry's <br />
                        standard dummy text ever since the 1500s,when an unkonwn
                        <br /> printer...
                        <span className="read-more-insights">
                          Read more
                        </span>{" "}
                      </p>
                    </div>

                    <div className="card-body">
                      <h6 className="rvs-praveen">Posted by D.O Team</h6>
                      <div className="d-flex">
                        <div className="domain-insigts">
                          <p className="domain">Domain</p>
                        </div>
                        <div className="d-flex like-share-number">
                          <div className="like-numbers d-flex">
                            <p className="number-insight">9182</p>&nbsp; &nbsp;
                            <img
                              src="./images/like.png"
                              alt="like"
                              width={20}
                              height={20}
                            />
                          </div>
                          &nbsp;
                          <div>
                            <img
                              className="share"
                              src="./images/share.png"
                              alt="like"
                              width={28}
                              height={28}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  </div>
                 
                
                 
                 
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* whitepapers close */}
    </div>
  );
}

export default Allinsights;
