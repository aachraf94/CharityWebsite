import image1 from "../FrontAssets/images1/Group 10.png";
import image2 from "../FrontAssets/images1/About Us.png";
import { Link } from "react-router-dom";
import Slider from "../sliders/Slider";
import Slider2 from "../sliders/Slider2";
import BlogHomepage from "../Blogs/BlogHomepage";
// import BlogHomepage from "../Blogs/BlogHomepage";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
const HP1user = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    api.get("/getBlogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div>
      <div className="float-left mt-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333]  justify-between h-16 px-8 md:px-12 lg:px-16 mb-12 mt-40">
          {" "}
          Un Coeur qui{" "}
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333]  justify-between h-16 px-8 md:px-12 lg:px-16 mb-12">
          {" "}
          bat pour{" "}
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#333333]  justify-between h-16 px-8 md:px-12 lg:px-16 mb-40">
          {" "}
          l'espoir .{" "}
        </h2>
        <Link
          to="/choice"
          className="bg-[#FF0303]  text-[#F9DBBB] rounded-xl py-4 text-l font-semibold md:text-xl lg:text-2xl  h-16 px-4 md:px-8 lg:px-12"
          style={{
            marginLeft: 53,
            transition: "0.2s",
            cursor: "pointer",
            letterSpacing: "0.07rem",
          }}
        >
          Faites Une Donnation
        </Link>
      </div>
      <div className="flex flex-col justify-end ">
        <img src={image1} alt="" className="h-[42rem] mb-8 mt-28"></img>
      </div>
      <div className="flex flex-row justify-start">
        <div className="flex flex-col justify-start w-full ">
          <img src={image2} alt="About us" width="100%"></img>
        </div>
        <div className="w-full mt-4 md:mt-8">
          <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold text-[#2E3840]  justify-between h-16 px-2 md:px-4 lg:px-8 mb-18 ml-8 md:ml-16 mb-2 md:mb-4">
            {" "}
            A Propos De Nous{" "}
          </h2>
          <p
            style={{ lineHeight: 1.8 }}
            className="text-xl md:text-2xl lg:text-4xl font-arial text-[#2E3840]  justify-end h-16 px-2 md:px-3 lg:px-8 mt-4 md:mt-8 ml-8 md:ml-16"
          >
            {" "}
            Nous sommes une association caritative dont la mission est d'aider
            les personnes <strong> les plus vulnérables </strong> de la société.
            Notre objectif est de <strong> contribuer </strong> à un monde plus
            juste et plus équitable en fournissant un soutien aux personnes qui
            en ont le plus besoin.
          </p>
          <div className="mt-[16rem] md:mt-[22rem] lg:mt-[36rem] flex justify-center">
            <Link to="/Apropos">
              <button
                style={{
                  backgroundColor: "#2E3840",
                  transition: "0.2s",
                  cursor: "pointer",
                  letterSpacing: "0.07rem",
                  color: "#F9DBBB",
                }}
                className="font-extrabold lal text-pink-100 rounded-xl flex py-4 text-l md:text-xl lg:text-2xl    px-2 md:px-4 lg:px-4 transition duration-500 ease-in-out mt-8 "
              >
                {" "}
                Voir Plus
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Slider />
        <Slider2 />
        <div className="home">
          {/* {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}
          {blogs.length!=0 && <BlogHomepage blogs={blogs} />}
          <Link to="/Blogs" className=" hover:shadow  transition-all">
            <h2
              style={{ fontSize: 30, fontWeight: 800 }}
              className="titre hover:text-red-200"
            >
              Voir plus de Blogs
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HP1user;
