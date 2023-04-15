import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Login";
import styles from './Profile.module.css'
import img from "../../assets/images/default-avatar-profile-icon-vector-39013212.jpg"
const Profile = () => {
  let [user, setUser] = useState([]);
  useEffect(() => {
    let fetchUser = async () => {
      let token = localStorage.getItem("token");
      try {
        let { data } = await axios.get("http://localhost:5000/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data.data)
          setUser(data.data);
          console.log(user);
          console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <section className={styles.mainCon}>
      <article className={styles.subCon}>
        <div>
          {user === null ? (
            <Login />
          ) : (
            <>
              <img src={img} alt="" />
              <h1>user : {user.name}</h1>
              <h1>email : {user.email}</h1>
              <h1>role : {user.role}</h1>
            </>
          )}
        </div>
      </article>
    </section>
  );
};

export default Profile;
