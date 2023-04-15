import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import { contextApi } from "../../userContext/UserContext";
import axios from "axios";

export let AdRole = createContext();
const Menu = () => {
  let [Arole, setArole] = useState("user");
  let [course, setCourse] = useState([]);
  let [name, setName] = useState("");
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axios.get("http://localhost:5000/api/v1/courses");
      let x = data.data;
      setCourse(x);
    };
    fetch();

    let fetchData = async () => {
      let token = localStorage.getItem("token");
      let { data } = await axios.get("http://localhost:5000/api/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArole(data.data.role);
      console.log(data.data)
      setName(data.data.name)
    };
    fetchData();
  }, []);
  let result = useContext(contextApi);
  let Admin = () => {
    return (
      <>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/BootCamp/BootCam">Admin</NavLink>
          </span>
        </li>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Profile">{name}</NavLink>
          </span>
        </li>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Logout">Logout</NavLink>
          </span>
        </li>
      </>
    );
  };
  let IsAuth = () => {
    return (
      <>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Profile">{ name}
            </NavLink>
          </span>
        </li>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Logout">Logout</NavLink>
          </span>
        </li>
      </>
    );
  };
  let Guest = () => {
    return (
      <>
        <li className={style.col4}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Register">Register</NavLink>
          </span>
        </li>
        <li className={style.col5}>
          <span className={style.spans}>
            <NavLink to="/Eduxit/Login  ">Login</NavLink>
          </span>
        </li>
      </>
    );
  };
  return (
    <>
      <section className={style.MenuCon}>
        <ul className={style.row}>
          <li className={style.col1}>
            <span className={style.spans}> Courses</span>
            <div className={style.CourseCon}>
              <ul>
                {course.map(m => {
                  let { title } = m;
                  return (
                    <>
                      <NavLink to={`/Courses/${m.title}`}>
                        <li>{title} </li>
                      </NavLink>
                    </>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className={style.col2}>
            <span className={style.spans}> Fullstack</span>
            <div className={style.FullstackCon}>
              <ul>
                <NavLink to="/FullStacks/JavaFullStack">
                  <li>Java FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/PythonFullStack">
                  <li> Python FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/MernFullStack">
                  <li>MERN FullStack</li>
                </NavLink>
                <NavLink to="/FullStacks/IbmFullStack">
                  <li>IBM Fullstack</li>
                </NavLink>
              </ul>
            </div>
          </li>
          {Arole === "admin" ? <Admin /> : result ? <IsAuth /> : <Guest />}
        </ul>
      </section>
    </>
  );
};

export default Menu;
