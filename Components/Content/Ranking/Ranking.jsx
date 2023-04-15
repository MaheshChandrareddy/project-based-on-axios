import React,{useEffect} from "react";
import style from "./Ranking.module.css";
import ranking from "../../assets/images/rankingimg.avif";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiIbmcloud } from "react-icons/si";
import {TbCircleNumber1} from 'react-icons/tb'
import {TbCircleNumber2} from 'react-icons/tb'
import {TbCircleNumber3} from 'react-icons/tb'
import {TbCircleNumber4} from 'react-icons/tb'
import { TbCircleNumber5 } from "react-icons/tb";
import star from '../../assets/images/star.svg'
import Footer from "../../Footer/Footer";
const Ranking = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <div>
        <section className={style.MainCon}>
          <article className={style.SubCon1}>
            <div>
              <aside>
                <img src={ranking} alt="" />
              </aside>
            </div>
          </article>
          <article className={style.hoverImg}></article>
        </section>
        <section className={style.HoverText}>
          <h1>
            Course ranking helps you to evaluate <br></br>the value of job. Over
            the last three months,
          </h1>
        </section>
        <section className={style.MainConBAckIMg}></section>
        <section className={style.CardCon}>
          <article className={style.CardSubCon}>
            <aside className={style.lefttAside}>
              <h1 className={style.h1Head}>
                Rankings Based on the FullStack courses at present{" "}
              </h1>
              <div className={style.Card1}>
                <h2>
                  Java FullStack <span>{<FaJava />}</span>
                </h2>
                <p>java full stack course in the top rank</p>
                <p>
                  <button>Enroll now</button>
                  <button>goto course details</button>
                </p>
              </div>
              <div className={style.Card1}>
                <h2>
                  Python FullStack <span>{<FaPython />}</span>
                </h2>
                <p> Python FullStack course in the top second rank</p>
                <p>
                  <button>Enroll now</button>
                  <button>goto course details</button>
                </p>
              </div>
              <div className={style.Card1}>
                <h2>
                  MERN FullStack<span>{<FaReact />}</span>
                </h2>
                <p>MERN FullStack course in the top third rank</p>
                <p>
                  <button>Enroll now</button>
                  <button>goto course details</button>
                </p>
              </div>
              <div className={style.Card1}>
                <h2>
                  IBM FullStack <span>{<SiIbmcloud />}</span>
                </h2>
                <p>IBM FullStack course in the top fourth rank</p>
                <p>
                  <button>Enroll now</button>
                  <button>goto course details</button>
                </p>
              </div>
            </aside>
            <aside className={style.rightAside}>
              <h1 className={style.h1Head}>
                Top 5 Rankings Based on the student reviews
              </h1>
              <img src={star} alt="" />
              <div className={style.Card2}>
                <p>
                  <h1>javascript</h1>
                  <h4>{<TbCircleNumber1 />}</h4>
                </p>
              </div>
              <div className={style.Card2}>
                <p>
                  <h1>React</h1>
                  <h4>{<TbCircleNumber2 />}</h4>
                </p>
              </div>
              <div className={style.Card2}>
                <p>
                  <h1>Python</h1>
                  <h4>{<TbCircleNumber3 />}</h4>
                </p>
              </div>
              <div className={style.Card2}>
                <p>
                  <h1>Nodejs</h1>
                  <h4>{<TbCircleNumber4 />}</h4>
                </p>
              </div>
              <div className={style.Card2}>
                <p>
                  <h1>java</h1>
                  <h4>{<TbCircleNumber5 />}</h4>
                </p>
              </div>
            </aside>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Ranking;
