// import React from "react";
// import style from "./CourseDashBoard.module.css";
// import CourseSideBar from "./CourseSideBar";
// import SingleCourseCard from "./SingleCourseCard";

// const CourseDashBoard = () => {
//   return (
    // <>
    //   <section className={style.MainCourseCard}>
    //     <article className={style.CourseDashBoard}>
    //       <CourseSideBar />
    //     </article>
    //     <article className={style.SingleCourseCard}>
    //       <SingleCourseCard />
    //     </article>
    //   </section>
    // </>
//   );
// };

// export default CourseDashBoard;

import React from "react";
import CourseSideBar from "./CourseSideBar";
import SingleCourseCard from "./SingleCourseCard";
import style from "./CourseDashBoard.module.css";

const CourseDashBoard = () => {
  return (
    <>
      <section className={style.MainCourseCard}>
        <article className={style.CourseDashBoard}>
          <CourseSideBar />
        </article>
        <article className={style.SingleCourseCard}>
          <SingleCourseCard />
        </article>
      </section>
    </>
  );
};

export default CourseDashBoard;
