import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import st from "./CourseSideBar.module.css";
const CourseSideBar = () => {
  let { id } = useParams();
  return (
    <section className={st.PrdDashboard}>
      <article>
        <aside className={st.sideBar}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${st.active}` : "inactive"
                }
                to={`/CoursesSection/${id}`}
                end
              >
                Course dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${st.active}` : "inactive"
                }
                to={`/AddCourse/${id}`}
              >
                add Course
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${st.active}` : "inactive"
                }
                to={`/BootCamp/BootCam`}
              >
                Admin Dashboard
              </NavLink>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
};

export default CourseSideBar;
