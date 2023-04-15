import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./AddCourse.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let nav = useNavigate();
  let [state, setState] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: "",
  });
  let { title, description, duration, price, minimumSkill } = state;
  let { id } = useParams();
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let fun = async e => {
    e.preventDefault();
    try {
      let payload = { title, description, duration, price, minimumSkill };
      let { data } = await axios.post(
        `http://localhost:5000/api/v1/bootcamps/${id}/courses`,
        payload
      );
      toast.success("course added successfully");
      window.location.assign(`/BootCamp/BootCam`);
    } catch (error) {
      console.log(error);
    }
    setState({
      title: "",
      description: "",
      duration: "",
      price: "",
      minimumSkill: "",
    });
  };
  return (
    <section id={style.form}>
      <article className={style.mainBlock}>
        <form onSubmit={fun}>
          <h1>Add course</h1>
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
          <button className={style.btnAdd}>Add course</button>
        </form>
      </article>
    </section>
  );
};

export default AddCourses;
