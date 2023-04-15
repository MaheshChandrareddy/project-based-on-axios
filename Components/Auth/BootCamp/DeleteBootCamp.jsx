import React, { useState,useEffect} from "react";
import AdminEdit from "../Admin/AdminEdit";
import style from './AddBootCamp.module.css'
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DeleteBootCamp = () => {
  let nav=useNavigate()
  let { id } = useParams()
  useEffect(() => {
     let start = async () => {
       let token = localStorage.getItem("token");
       let x = await axios.delete(
         ` http://localhost:5000/api/v1/bootcamps/${id}`,
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
      //  nav("/BootCamp/BootCam");
       toast.success("deleted successfully")
       window.location.assign("/BootCamp/BootCam");

     };
     start();
  })
  return (
    <div className={style.displayBody}>
      <AdminEdit />
    </div>
  );
};

export default DeleteBootCamp;

