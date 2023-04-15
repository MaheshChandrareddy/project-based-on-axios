import React, { useState, useEffect, Children } from "react";
import style from "./SingleCourseCard.module.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";


import { createContext } from "react";
export let BootData = createContext();

const SingleCourseCard = () => {
  let { id } = useParams();
  let [arr, setArr] = useState([]);
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axios.get(
        `http://localhost:5000/api/v1/bootcamps/${id}/courses`
      );
      let x = data.data;
      setArr(x);
    };
    fetch();
  }, [id]);
  return (
    <>
      <section className={style.BootmainCon}>
        <article className={style.BootsubCon}>
          {arr.map(m => {
            return (
              <>
                <div className={style.BCardCon}>
                  <h2>{m.name}</h2>
                  <p>title :{m.title}</p>
                  <p>DESCRIPTION :{m.description}</p>
                  <p>price :{m.price}</p>
                  <p>duration :{m.duration}</p>
                  <p className={style.CardBtnCon}>
                    <NavLink to={`/UpdateCourse/${m._id}`}>
                      <button>update</button>
                    </NavLink>

                    <NavLink to={`/DeleteCourse/${m._id}`}>
                      <button>dalete</button>
                    </NavLink>
                  </p>
                </div>
              </>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default SingleCourseCard;
