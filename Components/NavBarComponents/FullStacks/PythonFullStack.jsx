import React,{useEffect} from "react";
import PythonCss from './FullStacks.module.css';
import PythonImg from './nvcContenetImg/python.jpg'
import MianBack from './nvcContenetImg/main5.jpg'
import { NavLink } from "react-router-dom";
const PythonFullStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={PythonCss.imgSection}>
        <article className={PythonCss.imgArticle}>
          <div className={PythonCss.imgContainer}>
            <div className={PythonCss.imgmainImg}>
              <img src={MianBack} alt="" className={PythonCss.imgImg} />
            </div>
            <div className={PythonCss.imgmainContain}>
              <h1>PYTHON FULL STACK CERTIFICATION COURSE </h1>
              <p>
                We have been providing services to over clients for more than a
                decade
              </p>
            </div>
          </div>
        </article>
        <article className={PythonCss.screen}></article>
      </section>
      {/* **** */}
      <section className={PythonCss.javaSection}>
        <article className={PythonCss.javaArticle}>
          <div className={PythonCss.javaContainer}>
            <div className={PythonCss.javaTitle}>
              <h1>Python Certification Training Course </h1>
              <div className={PythonCss.javaTitleContainer}>
                {" "}
                <div className={PythonCss.javaTitle1}>
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
                <div className={PythonCss.javaTitle1}>
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
      <section className={PythonCss.sectionPara}>
        <article className={PythonCss.articalPara}>
          <div className={PythonCss.containerPara}>
            <div>
              <img src={PythonImg} alt="" />
            </div>
            <div>
              <p>
                PYTHON certification training by Eduxit is designed to meet the
                industry benchmarks and curated by top industry experts.
                Edureka's online PYTHON Course guide you to become a Oracle
                certified professional to clear PYTHON SE8 programmer, PYTHON
                SE11 developer certification exam on the first attempt. This
                PYTHON training online will give you extensive knowledge of Core
                PYTHON & J2EE basic and advanced concepts and popular frameworks
                like Hibernate, Spring & SOA. This is a live, instructor-led
                training to help you master other concepts like PYTHON Array,
                PYTHON Data Type, PYTHON Functions & PYTHON Loops to name a few,
                with industry use cases.{" "}
              </p>
              <br></br>
              <ul className={PythonCss.containerParaUl}>
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
      <section className={PythonCss.sectionBtn}>
        <article className={PythonCss.articleBtn}>
          <div className={PythonCss.containerBtn}>
            {/* <button className={PythonCss.Btn2}>Admin Edit</button> */}
            <NavLink to="/Eduxit/Register">
              <button className={PythonCss.Btn1}>Enroll Now</button>
            </NavLink>{" "}
          </div>
        </article>
      </section>
    </>
  );
};

export default PythonFullStack;
