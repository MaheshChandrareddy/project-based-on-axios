import React from "react";
import st from "./TopNavBar.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const TopNavbar = () => {
  return (
    <section className={st.container}>
      <article className={st.subContainer}>
        <aside className={st.left}>
          <ul>
            <li>
              <a href="">{<HiOutlineMailOpen />} eduxit@global.com</a>
            </li>
          </ul>
        </aside>
        <aside className={st.right}>
          <ul>
            <li>
              <a href="">{<FaFacebookF />}</a>
            </li>
            <li>
              <a href="">{<BsTwitter />}</a>
            </li>
            <li>
              <a href="">{<FiInstagram />}</a>
            </li>
            <li>
              <a href="">{<FaLinkedinIn />}</a>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
};

export default TopNavbar;
