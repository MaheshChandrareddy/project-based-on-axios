import React, { useEffect } from "react";
import { useState } from "react";
import style from "./AddBootCamp.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import AdminEdit from "../Admin/AdminEdit";

const AddBootCamp = () => {
  let nav = useNavigate();
  let [careers, setCareers] = useState([]);
  let [state, setState] = useState({
    name: "",
    address: "",
    description: "",
  });
  let { name, description, address } = state;
  useEffect(() => {
    setState({ ...state, careers });
  }, []);
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleCheckbox = e => {
    if (e.target.checked === true) {
      setCareers(prev => {
        return [...prev, e.target.value];
      });
    } else {
      setCareers([...careers.filter(ele => ele !== e.target.value)]);
    }
  };
  let fun = async e => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("token");
      let payload = { name, address, description, careers };
      let x = await axios.post(
        " http://localhost:5000/api/v1/bootcamps",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("successfully added");
      nav("/BootCamp/BootCam");
      let ids = x.data.data.id;
      localStorage.setItem("id", ids);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
    setState({
      name: "",
      description: "",
      careers: "",
      address: "",
    });
  };
  return (
    <section id={style.form}>
      <article className={style.mainBlock}>
        <form onSubmit={fun}>
          <h1>Add BootCamp</h1>
          <div className={style.formGroup}>
            <label htmlFor="name">name</label>
            <input
              type="text"
              className={style.formControl}
              name="name"
              value={name}
              placeholder="enter name"
              required
              onChange={handleChange}
            />
          </div>{" "}
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
            <label htmlFor="careers">carrers</label>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="web development"
                onChange={handleCheckbox}
              />
              <span> web development</span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="react development"
                onChange={handleCheckbox}
              />
              <span> react development</span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="fullstack development"
                onChange={handleCheckbox}
              />
              <span> fullstack development </span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="java development"
                onChange={handleCheckbox}
              />
              <span> java development </span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="python development"
                onChange={handleCheckbox}
              />
              <span> python development</span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="ux/ui development"
                onChange={handleCheckbox}
              />
              <span> ux/ui development</span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="business"
                onChange={handleCheckbox}
              />
              <span> business</span>
            </p>
            <p>
              <input
                type="checkbox"
                name="careers"
                value="others"
                onChange={handleCheckbox}
              />
              <span> others</span>
            </p>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="address">address</label>
            <textarea
              id=""
              cols="30"
              rows="10"
              type="text"
              className={style.formControl}
              name="address"
              value={address}
              onChange={handleChange}
              required
            />
          </div>
          <button className={style.btnAdd}>Add bootcamp</button>
        </form>
      </article>
    </section>
  );
};

export default AddBootCamp;
