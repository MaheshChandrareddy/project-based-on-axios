import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import st from "./DashBoardBootCamp.module.css";
const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <section className={st.PrdDashboard}>
        <article>
          <aside className={st.sideBar}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${st.active}` : "inactive"
                  }
                  to="/BootCamp/BootCam"
                  end
                >
                  BootCamp
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${st.active}` : "inactive"
                  }
                  to="/BootCamp/AddBootCamp"
                >
                  AddBootCamp
                </NavLink>
              </li>
            </ul>
          </aside>
          <aside className={st.MainBar}><Outlet /></aside>
        </article>
      </section>
    </>
  );
};
export default DashBoard;
