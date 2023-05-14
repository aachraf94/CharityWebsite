import { useState } from 'react';
import image1 from '../images1/Chamel.png';
import image2 from '../images1/hands.png';
import image3 from '../images1/photo17.png';

const BlogsListmembre = ({ blogs }) => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleBlogExpand = (blogId) => {
    if (blogId === expandedBlogId) {
      setExpandedBlogId(null);
    } else {
      setExpandedBlogId(blogId);
    }
  };

  return (
    <div>
    <div className='bg-[#F9DBBB4C] backdrop-blur-sm Navbar z-1 fixed top-4 left-0 right-0 mt-16 flex flex-row justify-between h-16'>
        <h1 className='text-[50px] font-black color-[#2E3840] ml-16 mb-4 '>Blogs</h1>
    

      <button  style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold  cart-btnn mr-16  py-2  self-center">Ajouter un blog</button>
      </div>
    <div>
    <div className="flex justify-between mt-44 mb-16">
        <div className="flex flex-col w-2/3">
        {expandedBlogId !== null && (
          <div className="expanded-blog p-4 rounded-lg">
            <div
            className="evenement-preview  mt-4 rounded-xl"
            key={blogs.find((blog) => blog.id === expandedBlogId).id}
          >
            <div className="flex flex-row justify-start px-12 w-full">
              <div className='w-[60px] h-[60px] '> 
              <img
                src={
                    blogs.find((blog) => blog.id === expandedBlogId).id % 3 === 1 ? image1 : blogs.find((blog) => blog.id === expandedBlogId).id % 3 === 2 ? image2 : image3
                }
                alt=""
                className="py-1  rounded-full"
              />
              </div>
              <p className="font-semibold py-2 px-4 flex mt-4 text-xl">{blogs.find((blog) => blog.id === expandedBlogId).authorMail}</p>
              <p className="font-bold py-3 px-4 flex mt-3 text-xl">{blogs.find((blog) => blog.id === expandedBlogId).timestamp.split(" ")[0]}</p>
            </div>
            </div>
            <h2 className="text-6xl font-bold  px-8  mb-8 mt-8">
              {blogs.find((blog) => blog.id === expandedBlogId).title}
            </h2>
            <p className="mb-4 text-2xl font-semibold font-popins px-8 py-4">
              {blogs.find((blog) => blog.id === expandedBlogId).content}
            </p>
            <div className='flex justify-center'>
            <button
              style={{ backgroundColor: '#2E3840' }}
              className="font-extrabold mt-6 cart-btn flex justify-center transition duration-500 ease-in-out px-2 py-2 w-24 self-center ml-[30%]"
              onClick={() => handleBlogExpand(expandedBlogId)}
            >
              Masquer
            </button>
          </div>
          </div>
        )}
      </div>
      <div className="flex flex-col evenements-list w-max mr-4">
        {blogs.map((blog) => (
          <div
            style={{ backgroundColor: '#F9DBBB4C' }}
            className="evenement-preview p-4 mt-4 rounded-md"
            key={blog.id}
          >
            <div className="flex flex-row justify-start px-2 w-full">
              <div className='w-[50px] h-[50px]'> 
              <img
                src={
                  blog.id % 3 === 1 ? image1 : blog.id % 3 === 2 ? image2 : image3
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
                style={{ color: '#2E3840' }}
                className="text-2xl font-black py-2 w-80"
              >
                {blog.title}
              </h2>
              <div className='flex justify-center mt-6'>
              <button
                style={{ backgroundColor: '#2E3840' }}
                className="font-extrabold  cart-btn flex  transition duration-500 ease-in-out px-1 py-2 w-36 self-center ml-[30%]"
                onClick={() => handleBlogExpand(blog.id)}
              >
                Voir Plus
              </button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default BlogsListmembre
