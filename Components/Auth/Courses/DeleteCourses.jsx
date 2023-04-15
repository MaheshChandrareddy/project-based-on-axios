import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BootData } from "./SingleCourseCard";
import { toast } from "react-toastify";

const DeleteCourses = () => {
  let value = useContext(BootData);
  console.log(value);
  let nav = useNavigate();
  let { id } = useParams();
  useEffect(e => {
    axios.delete(`http://localhost:5000/api/v1/courses/${id}`);
    nav(`/BootCamp/BootCam`);
    window.location.assign("/BootCamp/BootCam");
    toast.success("deleted successfully");
  });
  return <div>{/* <CourseSideBar /> */}</div>;
};

export default DeleteCourses;
