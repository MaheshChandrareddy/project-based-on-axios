import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <section className={style.NavCon}>
      <article className={style.NavSubCon}>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
