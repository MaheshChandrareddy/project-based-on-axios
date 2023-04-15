import React from "react";
import style from "./Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiTrophy } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoMdDesktop } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
// import "../../../"
const Sidebar = () => {
  return (
    <span className={style.SidebarCon}>
      <div>
        <NavLink
          // className={({ isActive }) =>
          //   isActive ? `${style.active}` : "inactive"
          // }
          className={style.link}
          to="/"
        >
          <li>
            {<AiOutlineHome style={{ fontSize: "20px" }} />}
            Home
          </li>
        </NavLink>
        <NavLink className={style.link} to="/Ranking">
          <li>
            {<BiTrophy style={{ fontSize: "20px" }} />}
            Ranking
          </li>
        </NavLink>
        <NavLink className={style.link} to="/StudentReview">
          <li>
            {<BsPeople style={{ fontSize: "20px" }} />}
            Student Review
          </li>
        </NavLink>
        <NavLink className={style.link} to="/UpComingCourses">
          <li>
            {<IoMdDesktop style={{ fontSize: "20px" }} />}
            Upcoming Courses
          </li>
        </NavLink>
        <NavLink className={style.link} to="/Support">
          <li>
            {<BiSupport style={{ fontSize: "20px" }} />}
            Support
          </li>
        </NavLink>
      </div>
    </span>
  );
};

export default Sidebar;
