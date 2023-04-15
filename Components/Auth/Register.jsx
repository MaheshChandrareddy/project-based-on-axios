import React, { useState, useEffect } from "react";
import REG from "./Register.module.css";
import axios from "axios";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  let navigate = useNavigate();
  let [show, setShow] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let togglePassword = () => {
    setShow(!show)
  }
  let [state, setState] = useState({ name: "", email: "", password: "" });
  let { name, email, password } = state;
  let handleSubmit = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let Postdata = async e => {
    e.preventDefault();
    console.log(e);
    try {
      let payload = { name, email, password };
      let data = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        payload
      );
      // setState(data);
      toast.success("successfully registered");
      navigate("/Eduxit/Login");
    } catch (error) {
      toast.warning("already registered");
    }
  };
  return (
    <section className={REG.mainBlock}>
      <article>
        <main>
          <h1 className={REG.headReg}>Registration Form</h1>
          <form>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="name"
                placeholder="enter the username"
                value={name}
                name="name"
                onChange={handleSubmit}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="enter the email"
                value={email}
                name="email"
                onChange={handleSubmit}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type={show ? "password" : "text"}
                id="pass"
                placeholder="enter the password"
                value={password}
                name="password"
                onChange={handleSubmit}
              />
              <span className={REG.icons} onClick={togglePassword}>
                {show ? <>{<AiFillEyeInvisible />}</> : <> {<AiFillEye />} </>}
              </span>
            </div>
            <div className="form-group">
              <button onClick={Postdata}>Register</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Register;
