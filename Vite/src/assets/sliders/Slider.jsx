import '../style2.css';
import '../swiper-bundle.min.css'
import photo1 from '../FrontAssets/images/image1.jpg';
import photo2 from '../FrontAssets/images/image2.jpg';
import photo3 from '../FrontAssets/images/image3.jpg';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Slider = ({ evenements }) => {

  return (
    <div className="slide-content">
      <div className="flex flex-row ">
    <div className="slide-container swiper">
      <div className="slide-content">
          <div className="titre ">
              <h1>Nos Evenements</h1>
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
                      <h1 className="name">Evenement</h1>
                      <p className="description">Rejoignez-nous lors de notre événement spécial de collecte de vêtements d'hiver pour les personnes dans le besoin. Nous sommes conscients que l'hiver peut être une période difficile pour ceux qui sont confrontés à des situations de précarité, et nous cherchons à leur apporter un peu de chaleur et de réconfort.</p>
                        <Link to="/Evenements" >
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
                      <h1 className="name">Evenement</h1>
                      <p className="description">En cette période sacrée du mois de Ramadan, nous vous invitons à participer à notre événement de collecte de produits alimentaires destiné à soutenir ceux qui sont dans le besoin. Ramadan est un mois de générosité, de partage et de solidarité, et nous souhaitons créer une atmosphère bienveillante où personne ne soit laissé de côté.</p>
                      <Link to="/Evenements" >
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>
                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo3} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Evenement</h1>
                      <p className="description">Nous sommes ravis de vous inviter à notre événement spécial de dîner public (Iftar) en ce mois béni de Ramadan. Cet événement vise à rassembler la communauté dans un esprit de partage, de fraternité et de générosité.</p>
                      <Link to="/Evenements" >
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>
                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo2} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Evenement</h1>
                      <p className="description">En cette période sacrée du mois de Ramadan, nous vous invitons à participer à notre événement de collecte de produits alimentaires destiné à soutenir ceux qui sont dans le besoin. Ramadan est un mois de générosité, de partage et de solidarité, et nous souhaitons créer une atmosphère bienveillante où personne ne soit laissé de côté.</p>
                      <Link to="/Evenements" >
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>
                  </div>
              </div></SwiperSlide>
        <SwiperSlide> <div className="card swiper-slide">
                  <div className="image-content">
                      
                      <div className="card-image">
                          <img src={photo1} alt="" className="card-img"></img>
                      </div>
                  </div>

                  <div className="card-content">
                      <h1 className="name">Evenement</h1>
                      <p className="description">Nous sommes ravis de vous inviter à notre événement spécial de dîner public (Iftar) en ce mois béni de Ramadan. Cet événement vise à rassembler la communauté dans un esprit de partage, de fraternité et de générosité.</p>
                      <Link to="/Evenements" >
                      <button className="button  transition duration-500 ease-in-out">Voir plus</button>
                      </Link>
                  </div>
              </div></SwiperSlide>
      </Swiper>
  </div>
  </div>
  <Link to="/Evenements" >
  <h2 className='titre2 underline underline-offset-8'>Voir plus</h2>
  </Link>
    </div>
    </div>
    </div>
  );
} 
export default Slider;