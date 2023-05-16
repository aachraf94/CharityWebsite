import React, { useEffect, useState } from "react";
import BlogsListadmin from "./BlogsListadmin";
import BlogsListmembre from "./BlogsListmembre";
import BlogsList from "./BlogsList";
import { api } from "../../utils/api";
const Blogs = ({ role }) => {
  
  const [blogs, setBlogs] = useState([]);
  const [blogswithphoto, setBlogswithphoto] = useState([]);

    
  useEffect(() => {
  
  
    fetch("http://localhost:3030/getBlogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(response => response.json())
    .then(data => {
    
      const promises = data.map(blog => fetchPhotoByTitle(blog));
      Promise.all(promises).then(blogwithphoto => {
        setBlogswithphoto(blogwithphoto);
      });
      

    })
    .catch(error => {
      console.error(error);
    });
      },[])
     
      const fetchPhotoByTitle = (blog) => {
        return fetch(`http://localhost:3030/getphotobyemail`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "email":blog.authorMail
          },
        })
          .then(response => response.json())
          .then(data => {
            return { ...blog, photoUrl: data.url };
          })
          .catch(error => {
            console.error(error);
            return { ...blog, photoUrl: null };
          });
      }
  if (role === "ADMIN") {
    return <BlogsListadmin blogs={blogswithphoto} />;
  } else if (role === "MEMBRE") {
    return <BlogsListmembre blogs={blogswithphoto} />;
  } else {
    return <BlogsList blogs={blogswithphoto} />;
  }
};

export default Blogs;
