import React, { useEffect, useState } from "react";
import style from "./Logo.module.css";
import { BiSearch } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
const Logo = () => {
  let nav = useNavigate();
  let [names, setNames] = useState("");
  let [title, setTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(e => {
    let fetch = async () => {
      let { data } = await axios.get("http://localhost:5000/api/v1/courses");
      let x = data.data;

      setNames(x);
    };
    fetch();
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    let res = e.target.value;
    names.map(m => {
      if (m.title === res) {
        setTitle(m.title);
      }
    });
  };

  
  let handleRender = e => {
    e.preventDefault();
    let res = searchTerm.toLowerCase();

    if (title === res&& res!=="") {
      nav(`/Courses/${res}`);
      setSearchTerm("");
    }
    else {
      toast.warning(`${res} course is not present`);
      setSearchTerm("");
    }
  };
  return (
    <section className={style.LogoCon}>
      <article className={style.LogoSubCon}>
        <div className={style.Logo}>
          <span>{<BiCodeAlt />}</span>
          <span>EDUXIT</span>
        </div>
        <div className={style.Search}>
          <form onSubmit={handleRender}>
            <input
              type="text"
              placeholder="search here"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button >{<BiSearch />}</button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Logo;
