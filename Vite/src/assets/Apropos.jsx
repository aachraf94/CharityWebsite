import image1 from './FrontAssets/images1/photo12.jpg';
import image2 from './FrontAssets/images1/photo11.jpg';
import image3 from './FrontAssets/images1/photo15.png';
import React, { Component } from 'react';
import Slider from './sliders/Slider';
import Partenaires from './Partenaires';

class Apropos extends Component {
    componentDidMount() {
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 6000;
        valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
            startValue += 3;
            valueDisplay.textContent = startValue;
            if (startValue >= endValue) {
                valueDisplay.textContent ='+'+ endValue;
              clearInterval(counter);
            }
          }, duration);
        });
      }
      render() {
    return ( 
        <div>
            <div style={{color: "#2E3840"}} className="flex mt-6">    
    <div className="flex flex-row px-4  ">
        <div className="float-left mt-14 " >
        <h1  className="text-5xl font-popins font-bold px-8 py-4 ml-8 mt-8">Fondation Coeur Espoir</h1>
        <h2  className="text-3xl font-popins px-8 py-2 ml-8 mb-8">Un coeur qui bat pour l'espoir.</h2>
        <p  className="text-2xl font-popins px-8 py-2 ml-8 mb-8">Nous sommes une association caritative dont la mission est d'aider les personnes les plus vulnérables de la société. Notre objectif est de contribuer a un monde plus juste et plus equitable en fournissant un soutien aux personnes qui en ont le plus besoin.
        </p>
        </div>
        <div className="py-12 px-12 mt-16 flex justify-center items-center w-full h-96">
            <img src={image1} className="max-w-full max-h-full rounded-3xl" alt="About us" />
        </div>
</div>
</div>
<div className="mt-8 px-4">
    <p  className="text-2xl font-popins px-8 py-2 ml-8 mb-8">Nous avons cree la Fondation Coeur Espoir pour répondre à un besoin de solidarité et de générosité envers les personnes les plus démunies de notre société. Notre travail consiste à fournir une assistance à ceux qui en ont besoin, en les aidant a surmonter les obstacles qui les empêchent de realiser leur potentiel.
    </p>
</div>
<div className="mt-12 px-4">
    <p  className="text-2xl font-popins px-8 py-2 ml-8 mb-8">Nous avons cree la Fondation Coeur Espoir pour répondre à un besoin de solidarité et de générosité envers les personnes les plus démunies de notre société. Notre travail consiste à fournir une assistance à ceux qui en ont besoin, en les aidant a surmonter les obstacles qui les empêchent de realiser leur potentiel.
    </p>
</div>
<div className="flex mt-6">    
    <div className="flex flex-row px-4  ">
        <div className="py-4 lg-px-12 px-2 flex justify-start items-center w-full h-96">
            <img src={image2} className="max-w-full max-h-full rounded-3xl" alt="About us" />
        </div>
        <div className="float-right mt-24 " >
        <p  className="text-2xl font-popins px-8 py-2 ml-8 mb-8">Nous sommes une association caritative dont la mission est d'aider les personnes les plus vulnérables de la société. Notre objectif est de contribuer a un monde plus juste et plus equitable en fournissant un soutien aux personnes qui en ont le plus besoin.
        </p>
        </div>   
</div>
</div>
<div className="mt-12 mb-24 px-4">
    <p  className="text-2xl font-popins px-8 py-2 ml-8 mb-8">Notre organisation est basée sur des valeurs de compassion, de respect, d'ouverture et de dévouement. Nous sommes fiers de travailler avec des bénévoles dévoués et des partenaires engagés pour aider les personnes dans le besoin. Nous espérons que vous serez inspiré par notre travail et que vous nous rejoindrez dans notre mission pour aider les personnes les plus vulnérables de la société.
    </p>
</div>
<div className="wrapper flex flex-col justify-center ">
  <div className="fond p-4 flex text-center">
    <h2 className="w-full">Fondation Coeur Espoir en chiffre</h2>
  </div>
  <div className="flex flex-row justify-center">
  <div className="container mb-2 mx-4 sm:mx-2">
    <span className="num" data-val="2050">000</span>
    <span className="text">membres</span>
  </div>
  <div className="container mb-2 mx-4 sm:mx-2">
    <span className="num" data-val="90">000</span>
    <span className="text">événements</span>
  </div>
  <div className="container mb-2 mx-4 sm:mx-2">
    <span className="num" data-val="3000">000</span>
    <span className="text">familles</span>
  </div>
  <div className="container mb-2 mx-4 sm:mx-2">
    <span className="num" data-val="300">000</span>
    <span className="text">dons de sang</span>
  </div>
  <div className="container mb-2 mx-4 sm:mx-2">
    <span className="num" data-val="600">000</span>
    <span className="text">kofa de Ramadan</span>
  </div>
  <div className="container mb-4 mx-4 sm:mx-2">
    <span className="num" data-val="200">000</span>
    <span className="text">paquets des affaires scolaires</span>
  </div>
</div>
</div>
<div className="flex flex-col justify-between">
  <div className=" px-8 py-4 ml-12 mt-24">
  <h1   className="text-5xl font-popins font-bold  ">Nos Valeurs</h1>
  </div>
  <div className="flex justify-end w-full  p-12 mt-[-9%]">
    <img className="" src={image3} alt="nos valeurs.png" width="45%" />
  </div>
</div>
<Slider/>
<Partenaires />
        </div>
     );
}
}
export default Apropos;