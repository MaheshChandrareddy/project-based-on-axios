import React,{useEffect} from "react";
import style from './Support.module.css'
import support from '../../assets/images/support.jpg'
import img1 from "./images/in.png";
import img2 from "./images/in2.png";
import img3 from "./images/corr.png";
import img4 from "./images/infinity.png";
import img5 from "./images/all2.png";
import img6 from "./images/track.jpeg";
import Footer from "../../Footer/Footer";
const Support = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <section className={style.BackImg}>
        <article>
          <img src={support} alt="" />
        </article>
        <article className={style.hoverImg}></article>
        <article className={style.HoverText}>
          <h1>
            Reviews can give best impression <br></br> to choose better course
          </h1>
        </article>
      </section>

      <section className={style.mainContainer}>
        <article>
          <div className={style.part}>
            <h2> The Eduxit Edge</h2>
          </div>
          <div className={style.container}>
            <aside className={style.card}>
              <figure>
                <img src={img3} alt="" />
              </figure>
              <h4>Real Time Doubt Resolution</h4>
              <p>with Live Instructors</p>
            </aside>
            <aside className={style.card}>
              <figure>
                <img src={img4} alt="" />
              </figure>
              <h4>Unlimited Access</h4>
              <p>to Online Learning Repository</p>
            </aside>
            <aside className={style.card}>
              <figure className={style.all}>
                <img src={img5} alt="" />
              </figure>
              <h4>Learning Assistants</h4>
              <p>to Guide When You Are Stuck</p>
            </aside>
            <aside className={style.card}>
              <figure>
                <img src={img6} alt="" />
              </figure>
              <h4>Track Your</h4>
              <p>Career Growth</p>
            </aside>
          </div>
          <div className={style.icondiv}>
            <figure>
              <img src={img1} alt="" />
            </figure>
            <figure>
              <img src={img2} alt="" />
            </figure>
          </div>
          <div className={style.quote}>
            <h4>
              Learning in Eduxit will definitely boost your confidence and helps
              to grow your career
            </h4>
          </div>
          <span className={style.anchor}>
            <a href="">Read more</a>
          </span>
        </article>
      </section>
      <Footer/>
    </>
  );
};

export default Support;
