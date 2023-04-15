import React from "react";
import TopNavBar from "./Components/TopNavbar/TopNavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import style from "./AppCss.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./userContext/UserContext";
import Sidebar from "./Components/SideBar/Sidebar";
import EduxitRoute from "./Routes/TyssRoute";

const App = () => {
  return (
    <>
      <Router>
        <TopNavBar />
        <UserContext>
          <Navbar />
        </UserContext>
        <ToastContainer theme="dark" />
        <div className={style.AppDiv}>
          <Sidebar />
          <article className={style.RouteCon}>
            <EduxitRoute />
          </article>
        </div>
      </Router>
    </>
  );
};

export default App;
