import React,{useEffect} from "react";
import MernCss from "./FullStacks.module.css"
import MernImg from "./nvcContenetImg/mern.jpg"
import Background from './nvcContenetImg/main3.jpg'
import { NavLink } from "react-router-dom";
const MernFullStack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={MernCss.imgSection}>
        <article className={MernCss.imgArticle}>
          <div className={MernCss.imgContainer}>
            <div className={MernCss.imgmainImg}>
              <img src={Background} alt="" className={MernCss.imgImg} />
            </div>
            <div className={MernCss.imgmainContain}>
              <h1>MERN FULL STACK CERTIFICATION COURSE </h1>
              <p>
                We have been providing services to over clients for more than a
                decade
              </p>
            </div>
          </div>
        </article>
        <article className={MernCss.screen}></article>
      </section>
      {/* ****** */}
      <section className={MernCss.javaSection}>
        <article className={MernCss.javaArticle}>
          <div className={MernCss.javaContainer}>
            <div className={MernCss.javaTitle}>
              <h1>Mern Certification Training Course </h1>
              <div className={MernCss.javaTitleContainer}>
                {" "}
                <div className={MernCss.javaTitle1}>
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
                <div className={MernCss.javaTitle1}>
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

      <section className={MernCss.sectionPara}>
        <article className={MernCss.articalPara}>
          <div className={MernCss.containerPara}>
            <div>
              <img src={MernImg} alt="" />
            </div>
            <div>
              <p>
                MERN certification training by Eduxit is designed to meet the
                industry benchmarks and curated by top industry experts.
                Edureka's onlinemern Course guide you to become a pro developer
                . This Jamern training online will give you extensive knowledge
                of Core Jamern & J2mern basic and advanced concepts and popular
                frameworks like node js express js & SOA. This is a live,
                instructor-led training to help you master other concepts like
                Array, Data Type, Functions & Loops to name a few, with industry
                use cases.{" "}
              </p>
              <br></br>
              <ul className={MernCss.containerParaUl}>
                <h1>Frontend Technology-:</h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <h1>Backend Technology-:</h1>
                <li>NODEJS</li>
                <li>EXPRESSJS</li>
                <h1>DataBase-:</h1>
                <li>MONGODB</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section className={MernCss.sectionBtn}>
        <article className={MernCss.articleBtn}>
          <div className={MernCss.containerBtn}>
            {/* <button className={MernCss.Btn2}>Admin Edit</button> */}
            <NavLink to="/Eduxit/Register">
              <button className={MernCss.Btn1}>Enroll Now</button>
            </NavLink>{" "}
          </div>
        </article>
      </section>
    </>
  );
};

export default MernFullStack;
