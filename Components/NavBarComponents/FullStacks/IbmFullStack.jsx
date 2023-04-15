import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import IbmCss from "./FullStacks.module.css";
import IbmImg from "./nvcContenetImg/ibm.png";
import IbmMainImg from "./nvcContenetImg/main1.jpg";
const IbmFullStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={IbmCss.imgSection}>
        <article className={IbmCss.imgArticle}>
          <div className={IbmCss.imgContainer}>
            <div className={IbmCss.imgmainImg}>
              <img src={IbmMainImg} alt="" className={IbmCss.imgImg} />
            </div>
            <div className={IbmCss.imgmainContain}>
              <h1>IBM FULL STACK CERTIFICATION COURSE</h1>
              <p>
                We have been providing services to over clients for more than a
                decade
              </p>
            </div>
          </div>
        </article>
        <article className={IbmCss.screen}></article>
      </section>

      {/* ***** */}
      <section className={IbmCss.javaSection}>
        <article className={IbmCss.javaArticle}>
          <div className={IbmCss.javaContainer}>
            <div className={IbmCss.javaTitle}>
              <h1>IBM Certification Training Course </h1>
              <div className={IbmCss.javaTitleContainer}>
                {" "}
                <div className={IbmCss.javaTitle1}>
                  <a href="">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.269"
                        height="15.736"
                        viewBox="0 0 10.269 11.736"
                      >
                        <path
                          data-name="Icon awesome-user"
                          d="M5.134 5.868A2.934 2.934 0 1 0 2.2 2.934a2.934 2.934 0 0 0 2.934 2.934zm2.054.732h-.383a3.99 3.99 0 0 1-3.342 0h-.382A3.081 3.081 0 0 0 0 9.682v.954a1.1 1.1 0 0 0 1.1 1.1h8.069a1.1 1.1 0 0 0 1.1-1.1v-.954A3.081 3.081 0 0 0 7.188 6.6z"
                        ></path>
                      </svg>{" "}
                      67582 Learner
                    </span>
                  </a>
                </div>
                <div className={IbmCss.javaTitle1}>
                  <a href="">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.094"
                        height="15.49"
                        viewBox="0 0 12.094 11.49"
                      >
                        <path
                          data-name="Icon material-star"
                          d="m9.047 12.234 3.737 2.256-.992-4.251 3.3-2.86-4.348-.369L9.047 3l-1.7 4.009L3 7.378l3.3 2.86-.99 4.252z"
                          transform="translate(-3 -3)"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                      </svg>
                      Read Review
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={IbmCss.sectionPara}>
        <article className={IbmCss.articalPara}>
          <div className={IbmCss.containerPara}>
            <div>
              <img src={IbmImg} alt="" />
            </div>
            <div>
              <p>
                IBM certification training by Eduxit is designed to meet the
                industry benchmarks and curated by top industry experts.
                Edureka's online IBM Course guide you to become a Oracle
                certified professional to clear IBM SE8 programmer, IBM SE11
                developer certification exam on the first attempt. This IBM
                training online will give you extensive knowledge of Core IBM &
                IBM basic and advanced concepts and popular frameworks like
                Hibernate, Spring & SOA. This is a live, instructor-led training
                to help you master other concepts like IBM Array, IBM Data Type,
                IBM Functions & IBM Loops to name a few, with industry use
                cases.{" "}
              </p>
              <br></br>
              <ul className={IbmCss.containerParaUl}>
                <h1>Frontend Technology-:</h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <h1>Backend Technology-:</h1>
                <li>NUMPAY</li>
                <li>PANDAS</li>
                <h1>DataBase-:</h1>
                <li>MONGO</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section className={IbmCss.sectionBtn}>
        <article className={IbmCss.articleBtn}>
          <div className={IbmCss.containerBtn}>
            {/* <button className={IbmCss.Btn2}>Admin Edit</button> */}
            <NavLink to="/Eduxit/Register">
              <button className={IbmCss.Btn1}>Enroll Now</button>
            </NavLink>
          </div>
        </article>
      </section>
    </>
  );
};

export default IbmFullStack;
