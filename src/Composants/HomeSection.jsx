import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const HomeSection = () => {
  useEffect(() => {
    var swiper = new Swiper(".home-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []); // Le tableau vide en tant que deuxième argument signifie que cela s'exécute une fois après le montage initial

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          Nous organisons vos événements <br />
          <span>rendez votre événement attractif</span>
        </h3>
        <a href="#" className="btn">
          obtenir un devis
        </a>
      </div>
      <div className="swiper-container home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="Composants/Images/home1.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="Composants/Images/home2.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/FB_IMG_17091215504602866.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/Screenshot_20240209-202837.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/FB_IMG_17090632329086986.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/FB_IMG_17091230183226957.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/FB_IMG_17091230387418972.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="Composants/Images/FB_IMG_17091230096214025.jpg" alt="" />
          </div>
        </div>
        </div>
    </section>
  );
};

export default HomeSection;
