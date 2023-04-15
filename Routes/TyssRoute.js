import { useRoutes } from "react-router-dom";
import JavaFullStack from "../Components/NavBarComponents/FullStacks/JavaFullStack";

import Home from "../Components/Content/Home/Home";
import Ranking from "../Components/Content/Ranking/Ranking";
import StudentReview from "../Components/Content/StudenReview/StudentReview";
import Support from "../Components/Content/Support/Support";
import UpComingCourses from "../Components/Content/UpComingCourse/UpComingCourses";

import MernFullStack from "../Components/NavBarComponents/FullStacks/MernFullStack";
import PythonFullStack from "../Components/NavBarComponents/FullStacks/PythonFullStack";
import IbmFullStack from "../Components/NavBarComponents/FullStacks/IbmFullStack";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import Profile from "../Components/Auth/user/Profile";
import Logout from "../Components/Auth/Logout";
import AdminEdit from "../Components/Auth/Admin/AdminEdit";
import AddBootCamp from "../Components/Auth/BootCamp/AddBootCamp";
import UpdateBootCamp from "../Components/Auth/BootCamp/UpdateBootCamp";
import DeleteBootCamp from "../Components/Auth/BootCamp/DeleteBootCamp";
import SingleBootCamp from "../Components/Auth/BootCamp/SingleBootCamp";
import AddCourses from "../Components/Auth/Courses/AddCourses";
import UpdateCorses from "../Components/Auth/Courses/UpdateCorses";
import DeleteCourses from "../Components/Auth/Courses/DeleteCourses";
import { useEffect, useState } from "react";
import Course from "../Components/NavBarComponents/Courses/Course";
import axios from "axios";
import DashBoard from "../Components/Auth/BootCamp/DashBoard";
import SingleCourse from "../Components/Auth/Courses/UpdateCorses";
import CourseDashBoard from "../Components/Auth/Courses/CourseDashBoard";
const EduxitRoute = () => {
  let [cpath, setCpath] = useState([]);
  let [p, setP] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    let fetch = async () => {
      let { data } = await axios.get(`http://localhost:5000/api/v1/courses`);
      let res = data.data._id;
      setCpath(res);
      cpath.map(m => {
        setP(m);
      });
    };
    fetch();
  }, []);
  let Routes = useRoutes([
    {
      path: `/Courses/:id`,
      element: <Course />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Ranking",
      element: <Ranking />,
    },
    {
      path: "/StudentReview",
      element: <StudentReview />,
    },
    {
      path: "/Support",
      element: <Support />,
    },
    {
      path: "/UpComingCourses",
      element: <UpComingCourses />,
    },

    {
      path: "/FullStacks/JavaFullStack",
      element: <JavaFullStack />,
    },
    {
      path: "/FullStacks/MernFullStack",
      element: <MernFullStack />,
    },
    {
      path: "/FullStacks/PythonFullStack",
      element: <PythonFullStack />,
    },
    {
      path: "/FullStacks/IbmFullStack",
      element: <IbmFullStack />,
    },
    {
      path: "/Eduxit/Register",
      element: <Register />,
    },
    {
      path: "/Eduxit/Login",
      element: <Login />,
    },
    {
      path: "/Eduxit/Profile",
      element: <Profile />,
    },
    {
      path: "/Eduxit/Logout",
      element: <Logout />,
    },
    {
      path: "/Eduxit/AdminEdit",
      element: <AdminEdit />,
    },
    {
      path: "/BootCamp",
      element: <DashBoard />,
      children: [
        {
          path: ":id",
          element: <SingleBootCamp />,
        },
        {
          path: "AddBootCamp",
          element: <AddBootCamp />,
        },
        {
          path: "UpdateBootCamp/:id",
          element: <UpdateBootCamp />,
        },
        {
          path: "DeleteBootCamp/:id",
          element: <DeleteBootCamp />,
        },
      ],
    },
    {
      path: "/CoursesSection/:id",
      element: <CourseDashBoard />,
    },
    {
      path: ":id",
      element: <SingleCourse />,
    },
    {
      path: "AddCourse/:id",
      element: <AddCourses />,
    },
    {
      path: "UpdateCourse/:id",
      element: <UpdateCorses />,
    },
    {
      path: "DeleteCourse/:id",
      element: <DeleteCourses />,
    },
  ]);
  return Routes;
};
export default EduxitRoute;
