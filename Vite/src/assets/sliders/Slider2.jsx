import '../style2.css';
import '../swiper-bundle.min.css'
import photo1 from '../FrontAssets/images/image4.jpg';
import photo2 from '../FrontAssets/images/image5.jpg';
import photo3 from '../FrontAssets/images/image7.jpg';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Slider2 = ({ evenements }) => {

  return (
    <div className="slide-content">
      <div className="flex flex-row ">
    <div className="slide-container swiper">
      <div className="slide-content">
          <div className="titre">
              <h1>Nos Besoins</h1>
          </div>
          <div className="card-wrapper swiper-wrapper">
    <Swiper
        slidesPerView={3}
        
        spaceBetween={25}
        pagination={{
          clickable: true 
        }}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
      
          breakpoints={{
              0: {
                  slidesPerView: 1,
              },
              520: {
                  slidesPerView: 2,
              },
              950: {
                  slidesPerView: 3,
              },
          }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        <SwiperSlide><div className="card swiper-slide">
                  <div className="image-content">

                      <div className="card-image">
                          <img src={photo1} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Besoin</h1>
                      <p className="description">The lorem text the section that contains header with having open functionality.</p>
                    <Link to="/Besoins">
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>
                  </div>
              </div></SwiperSlide>
        <SwiperSlide><div className="card swiper-slide">
                  <div className="image-content">

                      <div className="card-image">
                          <img src={photo2} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Besoin</h1>
                      <p className="description">The lorem text the section that contains header with having open functionality.</p>

                      <Link to="/Besoins">
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo3} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Besoin</h1>
                      <p className="description">The lorem text the section that contains header with having open functionality.</p>

                      <Link to="/Besoins">
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo2} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Besoin</h1>
                      <p className="description">The lorem text the section that contains header with having open functionality.</p>

                      <Link to="/Besoins">
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo1} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Besoin</h1>
                      <p className="description">The lorem text the section that contains header with having open functionality.</p>

                      <Link to="/Besoins">
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>                  </div>
              </div></SwiperSlide>
      </Swiper>
  </div>
  </div>
  <Link to="/Besoins">
  <h2 className='titre2 underline underline-offset-8'>Voir plus</h2>
  </Link>
    </div>
    </div>
    </div>
  );
} 
export default Slider2;