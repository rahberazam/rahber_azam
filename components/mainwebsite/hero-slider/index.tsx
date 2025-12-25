"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./style.module.scss";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/img/assts/home-banner.jpg",
      buttonLink: "/learn-more",
    },
    {
      id: 2,
      image: "/img/assts/home-banner-2.jpg",
      buttonLink: "/learn-more",
    },
    {
      id: 3,
      image: "/img/assts/home-banner-3.jpg",
      buttonLink: "/learn-more",
    },
  ];

  return (
    <section className={styles.heroSlider}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.slideContent}>
              {slide.image && (
                <div className={styles.slideImage}>
                  <Image
                    src={slide.image}
                    alt="Siama Beauty Banner"
                    fill
                    priority={slide.id === 1}
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
              )}
              <div className={styles.slideOverlay}></div>
              <div className={styles.slideButtonContainer}>
                <a href={slide.buttonLink} className={styles.ctaButton}>
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

