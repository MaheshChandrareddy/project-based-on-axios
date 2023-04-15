import React, { useState, useEffect } from "react";
import style from "./SingleBootCamp.module.css";
import axios from "axios";

import { NavLink, useParams } from "react-router-dom";
const SingleBootCamp = () => {
  let [arr, setArr] = useState([]);
  let { id } = useParams();
  let length = localStorage.length;
  useEffect(() => {
    let start = async () => {
      let token = localStorage.getItem("token");
      let { data } = await axios.get(
        ` http://localhost:5000/api/v1/bootcamps`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let x = data.data;
      setArr(x);
    };
    start();
  }, [id]);

  return (
    <section className={style.BootmainCon}>
      <article className={style.BootsubCon}>
        {arr.map(m => {
          return (
            <>
              <div className={style.BCardCon}>
                <img src={`http://localhost:5000/upload/${m.photo}`} alt="" />
                <h2>{m.name}</h2>
                <p>CAREERS :{m.careers}</p>
                <p>DESCRIPTION :{m.description}</p>
                <p>ADDRESS :{m.address}</p>
                <p className={style.CardBtnCon}>
                  <NavLink to={`/BootCamp/UpdateBootCamp/${m.id}`}>
                    <button>update</button>
                  </NavLink>
                  <NavLink to={`/CoursesSection/${m.id}`}>
                    <button>courses</button>
                  </NavLink>
                  <NavLink to={`/BootCamp/DeleteBootCamp/${m.id}`}>
                    <button>dalete</button>
                  </NavLink>
                </p>
              </div>
            </>
          );
        })}
      </article>
    </section>
  );
};

export default SingleBootCamp;
