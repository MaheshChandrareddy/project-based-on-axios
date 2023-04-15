import React from "react";

const Logout = () => {
  let result = window.confirm("are you want logout");
  switch (result) {
    case true:
      localStorage.removeItem("token");
      window.location.assign("/");
      break;
    case false:
      window.location.assign("/");
  }
  return <div></div>;
};

export default Logout;
