import React, { useEffect } from "react";
import upcoming from "../../assets/images/upcomingCourses.jpg";
import style from "./UpComing.module.css";
import DataScience from "../../assets/images/data science.jpg";
import BigData from "../../assets/images/bigdata.jpg";
import Artificial from "../../assets/images/artificial intilligence.webp";
import Cloud from "../../assets/images/cloudcomputing.webp";
import Business from "../../assets/images/business intilligence.jpg";
import Cyber from "../../assets/images/cybersecurity.jpg";
import Footer from "../../Footer/Footer";

const UpComingCourses = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <section className={style.MainCon}>
        <article>
          <img src={upcoming} alt="" />
        </article>
        <article className={style.HoverText}>
          <h1>
            we are introducing the new courses <br></br> to explore new
            technologies to the students <br></br> to make growth in their
            career
          </h1>
        </article>
        <article className={style.hoverImg}></article>
      </section>
      <section>
        <h1 className={style.upcomingCourse}> up coming courses</h1>
      </section>
      <section className={style.CardCon}>
        <article className={style.CardSubCon}>
          <aside>
            <div className={style.Card1}>
              <img src={DataScience} alt="" />
              <h1>
              Data Science
              </h1>
            </div>
            <div className={style.Card1}>
              <img src={BigData} alt="" />
              <h1>
              Big Data
              </h1>
            </div>
            <div className={style.Card1}>
              <img src={Artificial} alt="" />
              <h1>
                {" "}
              Artificial Intelligence
              </h1>
            </div>
            <div className={style.Card1}>
              <img src={Cloud} alt="" />
              <h1>
                {" "}
              Cloud Computing
              </h1>
            </div>
            <div className={style.Card1}>
              <img src={Business} alt="" />
              <h1>
              Business Intelligence
              </h1>
            </div>
            <div className={style.Card1}>
              <img src={Cyber} alt="" />
              <h1>
                {" "}
              Cyber Security
              </h1>
            </div>
          </aside>
        </article>
      </section>
      <section className={style.booknowBtn}>
        <button>Book Now</button>
      </section>
      <Footer/>
    </>
  );
};

export default UpComingCourses;
