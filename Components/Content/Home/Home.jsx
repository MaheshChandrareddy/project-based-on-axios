import React, { useState, useEffect } from "react";
import wave1 from "../../assets/images/Wave_White_bottom_left_shape_01.png";
import style from "./Home.module.css";
import backGround from "../../assets/images/bg2.avif";
import { NavLink } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import FullStackCouese from "./FullStackCouese";
import CourseCards from "./CourseCards";
import Footer from "../../Footer/Footer";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={style.homeMainCon}>
        <article className={style.homeSubCon}>
          <img src={backGround} alt="loading.." />
          <h2>
            Eduxit provides an correct path to choose career<br></br> Here is a
            list of the best IT certifications courses in 2023
          </h2>
        </article>
        <article className={style.hoverImg}></article>
        <article className={style.hoverTitleText}>
          <h1>{<BiCodeAlt />}EDUXIT</h1>
          <h3>brings you better carrer</h3>
        </article>
        <article className={style.EnrollCon}>
          <NavLink to="/enroll">
            <button className={style.EnrollConbtn}>Enroll Now</button>
          </NavLink>
        </article>
        <article>
          <img className={style.waveImg} src={wave1} alt="" />
        </article>
      </section>

      <CourseCards />
      <FullStackCouese />

      <Footer />
    </>
  );
};
export default Home;
