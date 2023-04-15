import React, { useState, useEffect } from "react";
import LOG from "./Login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
const Login = () => {
  let[show,setShow]=useState(true)
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 let changeIcon = () => {
    setShow(!show);
  }
  let [state, setState] = useState({ email: "", password: "" });
  let { email, password } = state;
  let changeevent = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let Postdata = async e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      let data = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        payload
      );
      let logindata = data.data.token;
      window.localStorage.setItem("token", logindata);
      window.location.assign("/");
      navigate("/");
      toast.success("logged in successfully");
    } catch (error) {
      toast.error("email and password doesn't match");
      console.log(error);
    }
  };
  return (
    <section className={LOG.mainConBlock}>
      <article>
        <main>
          <h1 className={LOG.head}>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="enter the email"
                value={email}
                name="email"
                onChange={changeevent}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type={show ? "password" : "text"}
                placeholder="enter the password"
                value={password}
                name="password"
                onChange={changeevent}
              />
              <span className={LOG.icons} onClick={changeIcon}>
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="form-group">
              <button onClick={Postdata}>login</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Login;
