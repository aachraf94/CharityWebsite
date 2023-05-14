import React, { useEffect, useState } from "react";
import BlogsListadmin from "./BlogsListadmin";
import BlogsListmembre from "./BlogsListmembre";
import BlogsList from "./BlogsList";
import { api } from "../../utils/api";
const Blogs = ({ role }) => {
  console.log("BLOGS ROLE WEWE: ",role)
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("getting blogs");
    api.get("/getBlogs").then((res) => {console.log(res);setBlogs(res.data)});
  }, []);
  if (role === "ADMIN") {
    return <BlogsListadmin blogs={blogs} />;
  } else if (role === "MEMBRE") {
    return <BlogsListmembre blogs={blogs} />;
  } else {
    return <BlogsList blogs={blogs} />;
  }
};

export default Blogs;
