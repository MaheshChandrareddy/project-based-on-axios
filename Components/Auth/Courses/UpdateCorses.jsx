import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import style from "./UpdateCourse.module.css";
import { NavLink, useParams } from "react-router-dom";

import AdminEdit from "../Admin/AdminEdit";
import { toast } from "react-toastify";

const UpdateCourses = () => {
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: "",
  });
  useEffect(() => {
    let fetch = async () => {
      let { data } = await axios.get(
        `http://localhost:5000/api/v1/courses/${id}`
      );
      let x = data.data;
      x.map(m => {
        if (id === m._id) {
          setState(m);
        }
      });
    };
    fetch();
  }, [id]);
  let { title, description, duration, price, minimumSkill } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let fun = async e => {
    e.preventDefault();
    try {
      let payload = { title, description, duration, price, minimumSkill };
      await axios.put(`http://localhost:5000/api/v1/courses/${id}`, payload);
      toast.success("updated successfully");
      window.location.assign(`/BootCamp/BootCam`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={style.displayBody}>
        <AdminEdit />
        <section id={style.form}>
          <article className={style.mainBlock}>
            <form>
              <h1>update course</h1>
              <div className={style.formGroup}>
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  className={style.formControl}
                  name="title"
                  value={title}
                  placeholder="enter title"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="description">description</label>
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  type="text"
                  className={style.formControl}
                  name="description"
                  value={description}
                  placeholder="enter description"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="duration">duration</label>
                <input
                  type="text"
                  className={style.formControl}
                  name="duration"
                  value={duration}
                  placeholder="enter duration"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="price">price</label>
                <input
                  type="text"
                  className={style.formControl}
                  name="price"
                  value={price}
                  placeholder="enter price"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="minimumSkill">minimumSkill</label>
                <input
                  type="text"
                  className={style.formControl}
                  name="minimumSkill"
                  value={minimumSkill}
                  placeholder="enter minimumSkill"
                  required
                  onChange={handleChange}
                />
              </div>
                <button onClick={fun} className={style.btnAdd}>
                  update course
                </button>
            </form>
          </article>
        </section>
      </div>
    </>
  );
};

export default UpdateCourses;
