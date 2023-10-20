import React from "react";
import Navbar from "../products/Navbar";
import "../expertise/Genai.css";
import Faq from "../products/Faq";
import Footer from "../products/Footer";

function Genai() {
  return (
    <div>
      <Navbar />
      <div className="genaibg">
        <div className="generativeai-genai">
          <h1 className="generative-genai">
            Generative AI Consulting Services
          </h1>
          <p className="sparkin-genai">
            Spark innovation in your business with the creative power of AI.
          </p>
        </div>
      </div>
      <div className="container redefine-genai">
        <div>
          <h2 className="Aitech-genai">Redefine what’s possible for</h2>
          <h2 className="Aitech-genai">your business with generative</h2>
          <h2 className="Aitech-genai">AI technology</h2>
        </div>
        <div className="Ai-genai">
          <p className="forntier-genai">
            Pioneering the frontier of AI innovation, generative AI harnesses
            cutting-edge methodologies, including transformers, reinforcement
            learning, flow-based models, and autoregressive models, to craft
            AI-generated models and applications. At DataObserve, a leading
            generative AI firm, we boast a team of expert AI professionals
            dedicated to assisting businesses in realizing their objectives
            through the power of generative AI solutions.
          </p>
          <li className="forntier-genai">
            Seamlessly integrating generative AI into your existing processes.
          </li>
          <li className="forntier-genai">
            Tailoring personalized generative AI solutions to meet your specific
            needs
          </li>
          <li className="forntier-genai">
            Provide ongoing support and maintenance
          </li>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Our generative AI consulting services</h2>
        <div class="card-deck mt-5">
          <div class="card">
            <div class="card-body">
              <h5 className="card-title Genaicon">Generative AI consulting</h5>
              <p class="card-text Genaicon-text">
                Our team of experts identifies opportunities to integrate
                generative AI into your existing business processes and
                products.We provide customized solutions tailored to your
                specific needs. Our services include data preparation and
                modeling, algorithm development and implementation,and ongoing
                support and maintenance.
              </p>
            </div>
          </div>
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title Genaicon">
                Generative AI strategy development
              </h5>
              <p class="card-text Genaicon-text">
                Our experts develop a strategy to help leverage generative AI
                techniques such as transformers,flow-based models, reinforcement
                learning and generative adversarial networks to develop
                customized solutions for your spacific use cases
              </p>
            </div>
          </div>
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title Genaicon">
                Generative AI appication development
              </h5>
              <p class="card-text Genaicon-text">
                Our team develops customized generative Ai applications that
                cater to your business. we specialize in performance
                optimization, model integration and deployment, and ongoing
                support and maintenance. this is to ensure the seamless
                integration of generative AI technologies intlp existing systems
              </p>
            </div>
          </div>
        </div>
        <div class="card-deck mt-5">
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title Genaicon">Fine-turning LLMs</h5>
              <p class="card-text Genaicon-text">
                Our experts employ prompt engineering to fine-tune LLM for your
                tasks . We select suitable pretrained models and train them on
                relevant datasets.utilizing transfer learning, data augmetation
                gradient descent and hyperparameter tuning, we enhance
                preformance.Careful data curation, precise instructions and
                performance evaluation ensure LLMs efficacys
              </p>
            </div>
          </div>
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title Genaicon">
                Generative AI model replication
              </h5>
              <p class="card-text Genaicon-text">
                we replicate generative AI models rto enhance your business
                performance. our experts use advenced techniques such as
                flowbased model, reinforcement learning, and other
                state-of-the-art methods to replicate models that meets your
                needs
              </p>
            </div>
          </div>
          <div class="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title Genaicon">
                Model integration and deployment
              </h5>
              <p class="card-text Genaicon-text">
                Our team provides end-to-end model integration and deployment
                services. we specialize in data preparation and modeling
                performance optimization, algorithm development and
                implementation, and ongoing support and maintenance. this is to
                ensure the successful deployment of generative AI models in your
                business operations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="generativeAI">
        <h3 className="businessachive-genai">
          Make your business achieve more using generative AI now
        </h3>
        <button className="btn-genai">
          <span className="btn-text">Let's the ball rolling</span>
          <i
            class="fa fa-arrow-circle-o-right"
            style={{ color: "white", marginLeft: "5px" }}
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="container mt-5">
        <h2>
          Unleash the limitless possibilities of generative AI for your business
        </h2>
        <div class="row mt-5">
          <div class="col-3" style={{ background: "#F8F8F8" }}>
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active healthcare-genai"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Healthcare
              </a>
              <a
                class="nav-link healthcare-genai"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Manufacturing
              </a>
              <a
                class="nav-link healthcare-genai"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Retail
              </a>
              <a
                class="nav-link healthcare-genai"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Supply Chain & Logistics
              </a>
              <a
                class="nav-link healthcare-genai"
                id="v-pills-bank-tab"
                data-toggle="pill"
                href="#v-pills-bank"
                role="tab"
                aria-controls="v-pills-bank"
                aria-selected="false"
              >
                Banking & Finance
              </a>
              <a
                class="nav-link healthcare-genai"
                id="v-pills-insurance-tab"
                data-toggle="pill"
                href="#v-pills-insurance"
                role="tab"
                aria-controls="v-pills-insurance"
                aria-selected="false"
              >
                Insurance
              </a>
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h3>Generative AI for healthcare industry</h3>
                <p>
                  Our generative AI consulting services help healthcare
                  providers enhance patient care and streamline operations. We
                  use machine learning and natural language processing to
                  analyze medical data and provide personalized treatment
                  recommendations. Our generative AI solutions for the
                  healthcare industry optimize processes and improve patient
                  outcomes through:
                </p>
                <li>Diagnosis and treatment recommendation generation</li>
                <li>Patient monitoring and predictive analytics</li>
                <li>Medical image analysis and interpretation</li>
                <li>Healthcare fraud detection and prevention</li>
                <li>Drug discovery and development</li>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <h3>Generative AI for manufacturing industry</h3>
                <p>
                  Our generative AI consulting services help manufacturers
                  improve product design, reduce waste, and enhance production
                  processes. We leverage machine learning algorithms and
                  generative design to optimize product development and reduce
                  time-to-market. Our generative AI solutions for the
                  manufacturing industry help businesses make data-driven
                  decisions and improve efficiency through:
                </p>
                <li>
                  Generative design and optimization for product development
                </li>
                <li>Machine learning-based process optimization</li>
                <li>Waste reduction and material optimization</li>
                <li>Real-time quality control and defect detection</li>
                <li>Intelligent automation for manufacturing processes</li>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <h3>Generative AI for retail industry</h3>
                <p>
                  Our generative AI consulting services help retailers increase
                  sales and customer engagement through personalized experiences
                  and improved supply chain management. We use machine learning
                  algorithms and generative models to provide personalized
                  recommendations and optimize inventory management. Our
                  generative AI solutions for the retail industry help
                  businesses make data-driven decisions and improve customer
                  experiences through:
                </p>
                <li>Personalized product recommendations and promotions</li>
                <li>Optimization of inventory management and supply chain</li>
                <li>
                  In-store analytics for personalized customer experiences
                </li>
                <li>Real-time demand forecasting and predictive analytics</li>
                <li>Intelligent automation for retail processes</li>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <h3>Generative AI for supply chain & logistics industry</h3>
                <p>
                  Our generative AI consulting services help supply chain and
                  logistics companies optimize operations and efficiency. We use
                  machine learning algorithms and predictive analytics to
                  optimize inventory management and distribution. Our generative
                  AI solutions for the supply chain industry help businesses
                  make data-driven decisions and improve customer satisfaction
                  through:
                </p>
                <li>Supply chain optimization and demand forecasting</li>
                <li>Inventory management and predictive maintenance</li>
                <li>Real-time monitoring and tracking of shipments</li>
                <li>Warehouse automation and management</li>
                <li>Transportation and route optimization</li>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-bank"
                role="tabpanel"
                aria-labelledby="v-pills-bank-tab"
              >
                <h3>Generative AI for banking & finance industry</h3>
                <p>
                  Our generative AI consulting services help financial
                  institutions improve customer experiences and reduce risks. We
                  use machine learning algorithms and natural language
                  processing to analyze financial data and provide personalized
                  recommendations. Our generative AI solutions for the finance
                  industry help businesses make data-driven decisions and
                  improve compliance through:
                </p>
                <li>
                  Personalized financial advice and recommendation generation
                </li>
                <li>Investment analysis and portfolio optimization</li>
                <li>Automated customer service and support</li>
                <li>Credit scoring and risk assessment</li>
                <li>Fraud detection and prevention</li>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-insurance"
                role="tabpanel"
                aria-labelledby="v-pills-insurance-tab"
              >
                <h3>Generative AI for insurance industry</h3>
                <p>
                  Our generative AI consulting services help insurance companies
                  optimize operations and improve customer satisfaction. We use
                  machine learning algorithms and predictive analytics to
                  automate underwriting and claims processing. Our generative AI
                  solutions for the insurance industry help businesses make
                  data-driven decisions and improve compliance through:
                </p>
                <li>Customer segmentation and personalized recommendations</li>
                <li>Automated underwriting and claims processing</li>
                <li>Automated customer service and support</li>
                <li>Real-time data analysis and forecasting</li>
                <li>Risk assessment and fraud detection</li>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card mb-3"
          style={{
            maxWidth: "100%",
            marginTop: "50px",
            border: "none",
          }}
        >
          <div class="row no-gutters">
            <div
              class="col-md-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src="/images/assessment.png" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title generative-genai1">
                  Generative AI opportunity assessment
                </h5>
                <p class="card-text para-genai">
                  Our AI experts leverage text, vision, audio,
                  multimodal,reinforcement learning, time-series, and graph
                  models to fulfill your requirements. To determine the ideal
                  LLM, write and execute code, and achieve your business
                  objectives, we offer a comprehensive generative AI opportunity
                  assessment.
                </p>
                <li className="para-genai">
                  Stakeholder interviews: understand & prioritize generative AI
                  opportunities.
                </li>
                <li className="para-genai">Identify the right use cases.</li>
                <li className="para-genai">
                  How do you decide when it makes sense to fine-tune or train
                  entire domain specific LLMs?
                </li>
                <li className="para-genai">Identify the right tools.</li>
                <li className="para-genai">
                  Proceed with respective generative AI solutions.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="generativeAI">
        <h3 className="businessachive-genai">
          Discover the power of generative AI to reduce turnaround time
        </h3>
        <button className="btn-genai">
          <span className="btn-text">Initiate your assessment</span>
          <i
            class="fa fa-arrow-circle-o-right"
            style={{ color: "white", marginLeft: "5px" }}
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="container">
        <div
          class="card mb-3"
          style={{ maxWidth: "100%", marginTop: "50px", border: "none" }}
        >
          <div class="row no-gutters">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title generative-genai1">
                  Generative AI solutions for better hardware schematics
                </h5>
                <p class="card-text para-genai">
                  An OEM based in the US was looking to optimize their design
                  process to provide better quality products in less time. Our
                  AI consultants offered generative AI solutions. With our
                  expertise in processing EAGLE files and hardware schematic
                  software, we offered the client with the following benefits:
                </p>
                <li className="para-genai">Improved design accuracy</li>
                <li className="para-genai">Time and cost savings</li>
                <li className="para-genai">
                  Enhanced performance and reliability
                </li>
                <li className="para-genai">Design optimization</li>
              </div>
            </div>
            <div
              class="col-md-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/images/G-AI-img2.webp.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">Frame Work</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/tensorflow.webp (1).png"
              alt="..."
              className="icon-genai col-md-3"
            />
            <img
              src="/images/pytorch.webp (1).png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/Transformers (1).png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/hugging-face.webp (1).png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/LangChain.webp.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">Language</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/python.png"
              alt="..."
              className="icon-genai col-md-3"
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">IDEs</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/pycharm.png"
              alt="..."
              className="icon-genai col-md-3"
            />
            <img
              src="/images/jupyter.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/vscode.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">Deployments</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/azure1.png"
              alt="..."
              className="icon-genai col-md-3"
            />
            <img
              src="/images/aws1.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/googlecloud1.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/ibmwatson.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">Models</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/gpt3.png"
              alt="..."
              className="icon-genai col-md-3"
            />
            <img
              src="/images/gpt2.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/t5.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/lambda.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/bert.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">Commercial platforms</h4>
          </div>
          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <img
              src="/images/openai.png"
              alt="..."
              className="icon-genai col-md-3"
            />
            <img
              src="/images/openai1.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/vertexai.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
            <img
              src="/images/ibmwatson.png"
              alt="..."
              className="icon-genai col-md-3"
              style={{ marginLeft: "15px" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <h2 className="generative-genai1">
          Why choose DataObserve for your generative AI needs?
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4">
            <div class="card">
              <div
                class="card-body"
                style={{ height: "225px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">
                  Partner with a business-driven mindset
                </h5>
                <li style={{ fontSize: "13px" }}>
                  DataObserve understands your business goals and develops AI
                  solutions aligned with them.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We use our expertise to optimize AI solutions to meet your
                  unique needs.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our AI solutions drive business growth and success.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We are committed to providing AI solutions that deliver value
                  and maximize ROI.
                </li>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div
                class="card-body"
                style={{ height: "225px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">
                  Accelerate ecosystem innovation
                </h5>
                <li style={{ fontSize: "13px" }}>
                  DataObserve leverages the latest AI technologies to drive
                  innovation in your business.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our AI solutions are designed to transform how you do business
                  and achieve your goals.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We help you accelerate innovation and stay ahead of the
                  competition.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our AI solutions enable you to capitalize on new opportunities
                  and grow your business.
                </li>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div
                class="card-body"
                style={{ height: "225px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">Level up responsible AI</h5>
                <li style={{ fontSize: "13px" }}>
                  DataObserve is committed to developing AI solutions that are
                  ethical, transparent, and responsible.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We ensure that our AI solutions comply with regulatory and
                  industry standards.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our team of experts develops AI solutions that are secure,
                  trustworthy, and protect user privacy.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We believe that responsible AI is critical to building trust
                  and achieving long-term success.
                </li>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <div
                class="card-body"
                style={{ height: "225px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">Expertise in generative AI</h5>
                <li style={{ fontSize: "13px" }}>
                  DataObserve has unparalleled expertise in generative AI
                  technologies.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our team of experts develops innovative generative AI
                  solutions that help you stay ahead of the competition.
                </li>
                <li style={{ fontSize: "13px" }}>
                  We work closely with you to understand your unique needs and
                  deliver customized generative AI solutions.
                </li>
                <li style={{ fontSize: "13px" }}>
                  Our generative AI solutions drive business growth, enable
                  creativity, and deliver exceptional results.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="recentworks">
        <div className="container">
          <h1 className="recentworkshead">Our most recent works</h1>
          <div className="cardclass">
            <div className="row">
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass">
                  {/* <div className="dummyclass"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksebook.png" alt="#" />
                        <p className="recentcardhead1">EBOOK</p>
                      </div>
                      <p className="workcardpara">
                        Optimal Approaches for Migrating Legacy Data Warehouses
                        to Amazon Redshift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass1">
                  {/* <div className="dummyclass1"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworkscasestudy.png" alt="#" />
                        <p className="recentcardhead2">case study</p>
                      </div>
                      <p className="workcardpara">
                        Achieving Data Democratization and Reducing Drug
                        Commercialization Costs by 30%: A Success Story from a
                        Fortune 500 Pharmaceutical Commercial Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass2">
                  {/* <div className="dummyclass2"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksblog.png" alt="#" />
                        <p className="recentcardhead1">blog</p>
                      </div>
                      <p className="workcardpara">
                        The Crucial Role of Talent in the Digital Transformation
                        Journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="genaiviewrecentbutton">
            View All Insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
            >
              <path
                d="M27.8301 7.80075L20.7859 0.314765C20.5251 0.0376232 20.0835 0.0414782 19.8276 0.323131C19.6026 0.570707 19.6013 0.948275 19.8245 1.19745L25.1618 7.15628H1.4746C1.11864 7.15628 0.830078 7.44485 0.830078 7.80081C0.830078 8.15676 1.11864 8.44534 1.4746 8.44534H25.1617L19.8245 14.404C19.6013 14.6532 19.6026 15.0307 19.8276 15.2783C20.0835 15.56 20.5251 15.5638 20.7859 15.2867L27.8301 7.80075Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </div>
  );
}

export default Genai;
