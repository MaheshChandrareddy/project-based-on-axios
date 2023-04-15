import React, { useEffect } from "react";
import { useState } from "react";
import style from "./UpdateBootCamp.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AdminEdit from "../Admin/AdminEdit";

const UpdateBootCamp = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [careers, setCareers] = useState([]);
  let [state, setState] = useState({
    name: "",
    address: "",
    description: "",
  });

  let { name, description, address } = state;
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
  useEffect(() => {
    window.scrollTo(0, 0);
    let start = async () => {
      setState({ ...state, careers });
      let token = localStorage.getItem("token");
      let x = await axios.get(` http://localhost:5000/api/v1/bootcamps/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let y = x.data.data;
      let c = x.data.data.careers;
      let zz = y.photo;
      let photo = await axios.get(` http://localhost:5000/upload/${zz}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setState(y);
      setCareers(c);
      setPhoto(photo);
    };
    start();
  }, []);

  let [photo, setPhoto] = useState("");

  let handlePhoto = e => {
    setPhoto(e.target.files[0]);
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("photo", photo);
      let token = localStorage.getItem("token");
      setState({ loading: true });
      let payload = { name, description, careers, address };
      await axios.put(
        ` http://localhost:5000/api/v1/bootcamps/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await axios.put(
        ` http://localhost:5000/api/v1/bootcamps/${id}/photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/BootCamp/BootCam");
    toast.success("sucessfully product is updated");
    setState({
      name: "",
      careers: "",
      description: "",
      address: "",
    });
  };
  return (
      <section id={style.form}>
        <article className={style.mainBlock}>
          <form>
            <h1>Update BootCamp</h1>
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
            </div>
            <div className={style.formGroup}>
              <label htmlFor="photo">photo</label>
              <input
                type="file"
                className={style.formControl}
                name="photo"
                onChange={handlePhoto}
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
              <label htmlFor="careers">carrers</label>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="web development"
                  checked={careers.includes("web development")}
                  onChange={handleCheckbox}
                />
                <span> web development</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="react development"
                  checked={careers.includes("react development")}
                  onChange={handleCheckbox}
                />
                <span> react development</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="fullstack development"
                  checked={careers.includes("fullstack development")}
                  onChange={handleCheckbox}
                />
                <span> fullstack development </span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="java development"
                  checked={careers.includes("java development")}
                  onChange={handleCheckbox}
                />
                <span> java development </span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="python development"
                  checked={careers.includes("python development")}
                  onChange={handleCheckbox}
                />
                <span> python development</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="ux/ui development"
                  checked={careers.includes("ux/ui development")}
                  onChange={handleCheckbox}
                />
                <span> ux/ui development</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="business"
                  checked={careers.includes("business")}
                  onChange={handleCheckbox}
                />
                <span> business</span>
              </p>
              <p>
                <input
                  type="checkbox"
                  name="careers"
                  value="others"
                  checked={careers.includes("others")}
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
            <NavLink to="/BootCamp/BootCam">
              <button onClick={handleSubmit} className={style.btnAdd}>
                Update bootcamp
              </button>
            </NavLink>
          </form>
        </article>
      </section>
  );
};

export default UpdateBootCamp;
