import { useEffect, useState } from 'react';
import image1 from '../FrontAssets/images1/Chamel.png';
import image2 from '../FrontAssets/images1/hands.png';
import image3 from '../FrontAssets/images1/photo17.png';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';

const BlogsTous = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        api.get("/getBlogs").then(res=>{
            setBlogs(res.data);
        });
    },[]);
    console.log("Blog tous:",blogs);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleBlogExpand = (blogId) => {
    if (blogId === expandedBlogId) {
      setExpandedBlogId(null);
    } else {
      setExpandedBlogId(blogId);
    }
  };

  // Create an array of arrays, with each nested array containing three blogs
  const groupedBlogs = [];
  for (let i = 0; i < blogs.length; i += 3) {
    groupedBlogs.push(blogs.slice(i, i + 3));
  }

  return (
    <div className='flex flex-col '>
      <div className="titre mt-[6rem]">
        <h1>Blogs</h1>
      </div>
      <div className="flex evenement-list evenement-listr justify-between mr-8 ml-8 mb-8">
        {groupedBlogs.map((blogGroup) => (
          <div className="flex flex-row w-full" key={blogGroup[0].id}>
            {blogGroup.map((blog) => (
              <div
                style={{ backgroundColor: "#F9DBBB4C" }}
                className="evenement-preview evenement-previewr p-4 mt-4 rounded-xs ml-2 mr-2 mb-4 w-full"
                key={blog.id}
              >
                <div className="flex flex-row justify-start px-2 w-full">
                  <div className="w-[50px] h-[50px]">
                    <img
                      src={
                        blog.id % 3 === 1
                          ? image1
                          : blog.id % 3 === 2
                          ? image2
                          : image3
                      }
                      alt=""
                      className="py-1  rounded-full"
                    />
                  </div>
                  <p className="font-semibold py-4 px-4 flex">{blog.authorMail}</p>
                  <p className="font-bold py-4 px-4 flex">{blog.timestamp.split(" ")[0]}</p>
                </div>
                <div className="px-2 py-2 w-120">
                  <h2
                    style={{ color: "#2E3840" }}
                    className="text-2xl font-black py-2 w-80 mb-4"
                  >
                    {blog.title}
                  </h2>
                  <Link to="/Blogs">
                    <button
                      style={{ backgroundColor: "#2E3840" }}
                      className="font-extrabold  cart-btnn flex justify-center transition duration-500 ease-in-out px-2 py-2 w-32"
                      onClick={() => handleBlogExpand(blog.id)}
                    >
                      Voir Plus
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsTous;