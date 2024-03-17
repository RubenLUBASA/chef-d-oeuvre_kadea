import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
let ReviewSection = () => {
  useEffect(() => {
    var swiper = new Swiper(".Review-Slider", {
      SlidesPerView: 1,
      GrabCursor: true,
      Loop: true,
      SpaceBetween: 10,
      Breakpoints: {
        0: {
          SlidesPerView: 1,
        },
        700: {
          SlidesPerView: 2,
        },
        1050: {
          SlidesPerView: 3,
        },
      },
      Autoplay: {
        Delay: 5000,
        DisableOnInteraction: false,
      },
    });

    // return () => {
    //   Swiper.Destroy();
    // };
  }, []);
  return (
    <section className="reivew" id="review">
      <h1 className="heading">avis <span> des clients</span></h1>
      <div className="review-slider swiper-container">
        {<div className="swiper-wrapper">
  <div className="swiper-slide box">
    <i className="fas fa-quote-right" />
    <div className="user">
      <img src="../images/home_9.jpg" alt="" />
      <div className="user-info">
        <h3>ruben lubasa</h3>
        <span>client satisfait</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
      dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam
      iure nisi unde et assumenda perspiciatis voluptatibus nihil.
    </p>
  </div>
  <div className="swiper-slide box">
    <i className="fas fa-quote-right" />
    <div className="user">
      <img src="../images/review_2.jpg" alt="" />
      <div className="user-info">
        <h3>ben busha</h3>
        <span>client satisfait</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
      dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam
      iure nisi unde et assumenda perspiciatis voluptatibus nihil.
    </p>
  </div>
  <div className="swiper-slide box">
    <i className="fas fa-quote-right" />
    <div className="user">
      <img src="../images/review_2.jpg" alt="" />
      <div className="user-info">
        <h3>umberto</h3>
        <span>client satisfait</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
      dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam
      iure nisi unde et assumenda perspiciatis voluptatibus nihil.
    </p>
  </div>
  <div className="swiper-slide box">
    <i className="fas fa-quote-right" />
    <div className="user">
      <img src="../images/home_9.jpg" alt="" />
      <div className="user-info">
        <h3>flavio</h3>
        <span>client satisfait</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor
      dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam
      iure nisi unde et assumenda perspiciatis voluptatibus nihil.
    </p>
  </div>
</div>
}
      </div>
    </section>
  );
};

export default ReviewSection;
