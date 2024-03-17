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
            <img src="../images/home_1.jpg" alt="" />
          </div>
          <div className="swiper-slide">
            <img src="../images/home_2.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_3.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_4.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_5.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_6.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_7.jpg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../images/home_8.jpg" alt="" />
          </div>
        </div>
        </div>
    </section>
  );
};

export default HomeSection;
