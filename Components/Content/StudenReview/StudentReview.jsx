import React,{useState,useEffect} from "react";
import style from './StudentReview.module.css'
import review1 from '../../assets/images/review2.jpg'
import json from './Reviewjson.json'
import Footer from "../../Footer/Footer";
import images from "../../assets/images/default-avatar-profile-icon-vector-39013212.jpg"
const StudentReview = () => {
  let [reviews, setReview] = useState(json);
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <>
      <div>
        <section className={style.BackImg}>
          <article>
            <img src={review1} alt="" />
          </article>
          <article className={style.HoverText}>
            <h1>
              Reviews can give best impression <br></br> to choose better course
            </h1>
          </article>
          <article className={style.hoverImg}></article>
        </section>
      </div>
      <div className={style.Reviewh1}>
        <h1>REVIEWS</h1>
        <section className={style.ReviewCon}>
          <article className={style.ReviewSub}>
            {reviews.map(review => {
              return (
                <>
                  <div>
                    <img src={images} alt="" />
                    <p>
                      <b>Name </b>:{review.name}
                    </p>
                    <p>
                      <b> Rating</b> : {review.rating}
                    </p>
                    <p>
                      <b> Course</b> : {review.course}
                    </p>
                    <p>
                      <b> Review</b> : {review.review}
                    </p>
                  </div>
                </>
              );
            })}
          </article>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default StudentReview;
