import React, { useEffect, useState } from "react";
import style from "./Courses.module.css";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/images/backimg999.png";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import axios from "axios";
import Footer from "../../Footer/Footer";
const Course = () => {
  let [nam, setNam] = useState();
  let { id } = useParams();
  let [course, setCourse] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    let fetch = async () => {
      let { data } = await axios.get(`http://localhost:5000/api/v1/courses`);
      let res = data.data;
      res.map(m => {
        if (id === m.title) {
          setNam(m.title);
          setCourse(m);
        }
      });
    };
    fetch();
  }, []);

  return (
    <>
      <section className={style.secMain}>
        <article className={style.artMain}>
          <img src={image} alt="" />
          <ul>
            <li>
              <h1>{`${course?.title}`} Certification Training Course</h1>
            </li>
            <li>
              <p>
                industry benchmarks and curated by top industry experts.
                Eduxit's <br />
                online {`${course?.title}`} Course guide you to become a Oracle
                certified professional to clear {`${course?.title}`} <br /> SE8
                programmer, {`${course?.title}`} SE11 developer certification
                exam on the first attempt. This <br /> Eduxit online training
                will give you extensive knowledge of Core
                {`${course?.title}`}
                <h2>Click here to enroll</h2>
              </p>
            </li>

            <li>
              <Link to="/Eduxit/Register">
                <button>Enroll</button>
              </Link>
            </li>
          </ul>
        </article>
        <article className={style.screen}></article>
      </section>
      <section className={style.DetailsMain}>
        <article className={style.DetailsSub}>
          <div>
            <h1>
              <span>{<AiOutlineFieldTime />}</span> duration
            </h1>
            <p>{course?.duration}</p>
          </div>
          <div>
            <h1>
              <span>{<GiTakeMyMoney />}</span> fees details
            </h1>
            <p>
              {<FaRupeeSign />}
              {course?.price}
            </p>
          </div>
          <div>
            <h1>
              <span>{<GiNotebook />}</span> topics covered
            </h1>
            <button>view syllabus </button>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Course;
