import React from "react";
import styles from "./AdminEdit.module.css";
import DashBoard from "../BootCamp/DashBoard";
const AdminEdit = () => {
  return (
    <>
      <div className={styles.AppDiv}>
        <DashBoard />
        <article className={styles.RouteCon}>
        </article>
      </div>
    </>
  );
};

export default AdminEdit;
