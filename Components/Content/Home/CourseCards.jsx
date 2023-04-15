import React, { useState,useEffect } from "react";
import style from "./courseDetails.module.css";
import { Link, NavLink } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import img from "../../assets/images/homebac 2.jpg"
import axios from "axios";
const CourseCards = () => {
  let [course,setCourse]=useState([])
  useEffect(() => {
    let fetch = async () => {
   let { data } = await axios.get(
     "http://localhost:5000/api/v1/courses"
   );
      let x = data.data
      setCourse(x)
    }
    fetch()
 },[])
  return (
    <>
      <section className={style.BtmCardCon}>
        <article>
          <header className={style.CardHead}>
            <h1>Course List</h1>
          </header>
        </article>
        <article className={style.CardSecBtm}>
          <div>
            {course.map((m, i) => {
              let {
                title,
                duration,
                price,
                minimumSkill,
                description,
                scholarshipAvailable,
              } = m;
              return (
                <>
                  <section className={style.BtmCard1} key={i}>
                    {/* <figure id={style.imgCon11}>
                    <img className={style.ImgCd1} src={img} alt="" />
                  </figure> */}
                    <aside>
                      <main>
                        <header>{title}</header>
                        <p className={style.description}>
                          {description.slice(0, 25)}...
                        </p>
                        <h4>duration : {duration}</h4>
                        <h4>
                          price :{<FaRupeeSign />}
                          <span> {price}</span>
                        </h4>

                        <h3>min Skill : {minimumSkill}</h3>
                        <h3>
                          Scholarship : {scholarshipAvailable ? "yes" : "no"}
                        </h3>
                      </main>
                    </aside>
                    <main className={style.btnContainer}>
                      <NavLink className={style.btn} to={`Courses/${m.title}`}>
                        Go to Course
                      </NavLink>
                    </main>
                  </section>
                  <section className={style.blackimg}></section>
                </>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default CourseCards;
