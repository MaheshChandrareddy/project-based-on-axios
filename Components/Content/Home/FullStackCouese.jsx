import React from "react";
import { NavLink } from "react-router-dom";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { SiIbmcloud } from "react-icons/si";
import online from "../../assets/images/online.png";
import ofline from "../../assets/images/offiline.png";
import styles from "./FullStackCourse.module.css";
const FullStackCouese = () => {
  return (
    <>
      <section className={styles.IconCon}>
        <article>
          <h2 className={styles.FullStackCon}>FullStack course List</h2>
        </article>
        <article className={styles.IconCard}>
          <div>
            <p>{<DiJava />}</p>
            <p>Java full stack</p>
            <NavLink to="/FullStacks/JavaFullStack">Enroll</NavLink>
          </div>
          <div>
            <p>{<FaPython />}</p>
            <p>Python full stack</p>
            <NavLink to="/FullStacks/PythonFullStack">Enroll</NavLink>
          </div>
          <div>
            <p>{<FaNodeJs />}</p>
            <p>MERN full stack</p>
            <NavLink to="/FullStacks/MernFullStack">Enroll</NavLink>
          </div>
          <div>
            <p>{<SiIbmcloud />}</p>
            <p>IBM full stack</p>
            <NavLink to="/FullStacks/IbmFullStack">Enroll</NavLink>
          </div>
          <div>
            <p>{<SiBmcsoftware />}</p>
            <p>Combo selection</p>
            <NavLink to="/FullStacks/Combo">Select</NavLink>
          </div>
        </article>
      </section>
      <h1 className={styles.Scedule}>Schedule Class</h1>
      <section className={styles.ClassCard}>
        <article className={styles.ClassSubCard}>
          <div>
            <aside>
              <img className={styles.img1} src={online} alt="" />
            </aside>
            <aside>
              <h1>EduxIT</h1>
              <h4>ONLINE</h4>
              <p>
                eduxIT provides online flatForm to learn the courses Specially
                crafted early learning program for young minds
              </p>
              <p>
                <button className={styles.BookToken}>Book Online</button>
              </p>
            </aside>
          </div>
          <div>
            <aside>
              <img className={styles.img2} src={ofline} alt="" />
            </aside>
            <aside>
              <h1>EduxIT</h1>
              <h4>OFFLINE</h4>
              <p>
                EduxIT provides offline flat form Personalised learning program
                for the leaders of tomorrow
              </p>
              <p>
                <button className={styles.BookToken}>Book Online</button>
              </p>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
};

export default FullStackCouese;
