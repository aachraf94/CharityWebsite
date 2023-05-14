import React, { useEffect, useState } from "react";
import BlogsListadmin from "./BlogsListadmin";
import BlogsListmembre from "./BlogsListmembre";
import BlogsList from "./BlogsList";
import { api } from "../../utils/api";

const Blogs = ({ role }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    api.get("/getBlogs").then((res) => setBlogs(res.data));
  }, []);
  console.log("Role blogs: ",role);
  if (role === "ADMIN") {
    return <BlogsListadmin blogs={blogs} />;
  } else if (role === "MEMBRE") {
    return <BlogsListmembre blogs={blogs} />;
  } else {
    return <BlogsList blogs={blogs} />;
  }
};

export default Blogs;
