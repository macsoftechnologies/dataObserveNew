import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Datasense.css";
import Faq from "./Faq";

function Datasense() {
  return (
    <>
      <Navbar />
      <section className="dsheaderclass">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="dshleftclass">
                <p className="dshp1">PLATFORM</p>
                <h1 className="dshheader1">
                  Built for speed, scale, and smarter insights
                </h1>
                <p className="dshp2">
                  The easiest and fastest way to search and monitor companies,
                  topics, and industries across thousands of premium business
                  data sources—all in one platform.
                </p>
                <button className="dshbutton1">
                  <a href="#" className="dshbutton1text">
                    Start my free trial
                  </a>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="images/dsheadimage.png"
                alt="#"
                className="dsheadimage"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="dssection2class">
        <div className="container">
          <div className="dsfasterclass">
            <h1 className="dsfasterhead">Go from searching to doing—faster</h1>
            <p className="dsfasterpara">
              We help you instantly uncover and track insights faster with a
              powerful combination of proprietary NLP and machine learning
              technology and access to 10,000+ premium data sources.
            </p>
          </div>
        </div>
      </section>
      <section className="dskeyfeaturesclass">
        <div className="container dskeyclass">
          <div className="keyfeaturehead">Key features</div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="keyfeaturescardheadclass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="keyplussymbol"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.93158 0V4.9326H0V6.06967H4.93158V11H6.06842V6.06967H11V4.9326H6.06842V0H4.93158Z"
                    fill="#525E6B"
                  />
                </svg>
                <p className="keycardhead">Search</p>
              </h1>
              <div className=" keyfeaturecard">
                <h1 className="keycardheading">Uncover buried data</h1>
                <p className="keycardpara">
                  Never miss an insight. Our intelligent search understands
                  business and financial language and all its variations, so you
                  can easily extract relevant snippets from text-dense
                  documents.
                </p>
                <button className="dskeycardbutton">
                  <p className="dsbuttontext">Learn more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="dsarrowsvg"
                  >
                    <g clip-path="url(#clip0_195_2483)">
                      <path
                        d="M1.99658 5.02148H13.6633"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 1L15.1142 5.014"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 9.0433L15.1142 5.0293"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_195_2483">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(0.330078)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="keyfeaturescardheadclass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="keyplussymbol"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.93158 0V4.9326H0V6.06967H4.93158V11H6.06842V6.06967H11V4.9326H6.06842V0H4.93158Z"
                    fill="#525E6B"
                  />
                </svg>
                <p className="keycardhead">Workflow</p>
              </h1>
              <div className=" keyfeaturecard">
                <h1 className="keycardheading">
                  Empower your whole organization
                </h1>
                <p className="keycardpara">
                  Our powerful workflow tools, like our Notebook and markup
                  capabilities, provide an efficient and secure way to track,
                  manage, collaborate, and share insights more effectively.
                </p>
                <button className="dskeycardbutton">
                  <p className="dsbuttontext">Learn more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="dsarrowsvg"
                  >
                    <g clip-path="url(#clip0_195_2483)">
                      <path
                        d="M1.99658 5.02148H13.6633"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 1L15.1142 5.014"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 9.0433L15.1142 5.0293"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_195_2483">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(0.330078)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <h1 className="keyfeaturescardheadclass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="keyplussymbol"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.93158 0V4.9326H0V6.06967H4.93158V11H6.06842V6.06967H11V4.9326H6.06842V0H4.93158Z"
                    fill="#525E6B"
                  />
                </svg>
                <p className="keycardhead">Monitoring</p>
              </h1>
              <div className=" keyfeaturecard">
                <h1 className="keycardheading">Don't miss anything again</h1>
                <p className="keycardpara">
                  With Dashboards and Alerts, track everything you need —from
                  companies to industries to macro topics—and get notified with
                  the latest market updates. And, you can track insights
                  wherever you are with our mobile app.
                </p>
                <button className="dskeycardbutton">
                  <p className="dsbuttontext">Learn more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="dsarrowsvg"
                  >
                    <g clip-path="url(#clip0_195_2483)">
                      <path
                        d="M1.99658 5.02148H13.6633"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 1L15.1142 5.014"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 9.0433L15.1142 5.0293"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_195_2483">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(0.330078)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <h1 className="keyfeaturescardheadclass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="keyplussymbol"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.93158 0V4.9326H0V6.06967H4.93158V11H6.06842V6.06967H11V4.9326H6.06842V0H4.93158Z"
                    fill="#525E6B"
                  />
                </svg>
                <p className="keycardhead">Summary</p>
              </h1>
              <div className="keyfeaturecard">
                <h1 className="keycardheading">
                  Spot trends and insights early
                </h1>
                <p className="keycardpara">
                  Surface insights from tens of millions of data points. Track
                  market landscape and industry trends, identify disruptive
                  players, and discover competitors' hidden strategies.
                </p>
                <button className="dskeycardbutton">
                  <p className="dsbuttontext">Learn more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="dsarrowsvg"
                  >
                    <g clip-path="url(#clip0_195_2483)">
                      <path
                        d="M1.99658 5.02148H13.6633"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 1L15.1142 5.014"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4312 9.0433L15.1142 5.0293"
                        stroke="#F6BF42"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_195_2483">
                        <rect
                          width="16"
                          height="11"
                          fill="white"
                          transform="translate(0.330078)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container contentclass">
          <div className="contentheading">Content sources</div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="images/contentimage1.png"
                alt="#"
                className="contentimageclass"
              />
            </div>
            <div className="col-md-6 cardcolumnclass">
              <p className="contentparahead1">Wall Street Insights®</p>
              <h1 className="contenttextheading">
                Access to research from all of Wall Street's top banks
              </h1>
              <p className="contentpara">
                Better understand market, industry, and company shifts with
                access to leading equity research from 1,000+ leading brokers,
                plus all of Wall Street's top analyst firms, including Goldman
                Sachs, J.P. Morgan, and Morgan Stanley.
              </p>
              <button className="contentclassbutton">
                <p className="contentbuttontext">Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  className="contentsvgclass"
                >
                  <g clip-path="url(#clip0_195_2556)">
                    <path
                      d="M2.49658 5.41211H14.1633"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 1.39062L15.6142 5.40462"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 9.43392L15.6142 5.41992"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_2556">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(0.830078 0.390625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 cardcolumnclass">
              <p className="contentparahead1">Company Documents</p>
              <h1 className="contenttextheading">
                10,000+ high-quality sources all in one place
              </h1>
              <p className="contentpara">
                Get access to and easily analyze filings, earnings, and press
                from hundreds of thousands of public companies and over 1.4
                million private companies.
              </p>
              <button className="contentclassbutton">
                <p className="contentbuttontext">Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  className="contentsvgclass"
                >
                  <g clip-path="url(#clip0_195_2556)">
                    <path
                      d="M2.49658 5.41211H14.1633"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 1.39062L15.6142 5.40462"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 9.43392L15.6142 5.41992"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_2556">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(0.830078 0.390625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="images/contentimage2.png"
                alt="#"
                className="contentimageclass"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="images/contentimage3.png"
                alt="#"
                className="contentimageclass"
              />
            </div>
            <div className="col-md-6 cardcolumnclass">
              <p className="contentparahead1">Expert Transcripts</p>
              <h1 className="contenttextheading">
                Unique insights from tens of thousands of expert interviews
              </h1>
              <p className="contentpara">
                With Stream’s on-demand, expert interview transcripts, you can
                easily extract insights from interviews with former executives,
                competitors, and customers—adding a critical primary research
                perspective to your research process.
              </p>
              <button className="contentclassbutton">
                <p className="contentbuttontext">Learn more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  className="contentsvgclass"
                >
                  <g clip-path="url(#clip0_195_2556)">
                    <path
                      d="M2.49658 5.41211H14.1633"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 1.39062L15.6142 5.40462"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9312 9.43392L15.6142 5.41992"
                      stroke="#017EFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_195_2556">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(0.830078 0.390625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </>
  );
}

export default Datasense;
