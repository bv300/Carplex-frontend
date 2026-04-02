import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

const slides = [
  {
    image: '/assets/hero-banner.png', // Premium interior/exterior shot
    subtitle: 'Dubai\'s Trusted Auto Upgrades',
    title: 'Precision & <span>Prestige</span>',
    description: 'Transform your vehicle with our premium range of top-tier accessories. From android systems to custom seat covers.',
    btnText: 'Explore Collection'
  },
  {
    image: '/assets/interior-design.png',
    subtitle: 'Luxury Redefined',
    title: 'Custom <span>Interiors</span>',
    description: 'Bespoke designs tailored to your style. Experience the pinnacle of automotive interior craftsmanship.',
    btnText: 'View Services'
  },
  {
    image: '/assets/camera-360.png',
    subtitle: 'Advanced Technology',
    title: 'Smart <span>Integration</span>',
    description: 'Stay connected and safe on the road with our cutting-edge 360° cameras and OEM-integrated Android screens.',
    btnText: 'Upgrade Now'
  }
];

const HeroSlider = () => {
  return (
    <div className="artistic-parallax-slider">
      <Swiper
        speed={1200}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="parallax-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              data-swiper-parallax="-20%"
            ></div>
            
            <div className="slide-overlay"></div>
            
            <div className="slide-content">
              <div
                className="slide-subtitle"
                data-swiper-parallax="-300"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-scale="0.8"
              >
                {slide.subtitle}
              </div>
              
              <div
                className="slide-title"
                data-swiper-parallax="-500"
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-scale="1.2"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              ></div>
              
              <div 
                data-swiper-parallax="-900"
                data-swiper-parallax-opacity="0"
              >
                <a href="#services" className="slide-btn">
                  {slide.btnText} <ArrowRight size={20} />
                </a>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
