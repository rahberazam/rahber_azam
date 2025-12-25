"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.scss";

export default function TestimonialVideo() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const testimonials = [
    {
      name: "Allena",
      text: "Skin Started glowing back and I am aging backward",
      videoId: "VFuzHSPYVaA",
    },
    {
      name: "Rekha Gupta",
      text: "Skin Started glowing back and I am aging backward",
      videoId: "VFuzHSPYVaA",
    },
    {
      name: "Nidhi Khandelwal",
      text: "Skin Started glowing back and I am aging backward",
      videoId: "VFuzHSPYVaA",
    },
    {
      name: "Allena",
      text: "Skin Started glowing back and I am aging backward",
      videoId: "VFuzHSPYVaA",
    },
    {
      name: "Allena",
      text: "Skin Started glowing back and I am aging backward",
      videoId: "VFuzHSPYVaA",
    },
  ];

  return (
    <div className={styles.testimonialVideo}>
      <div className={styles.container}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={12000}
          arrows={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          containerClass={styles.carouselContainer}
          itemClass={styles.carouselItem}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {testimonials.map((item, index) => (
            <div key={index} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  className={styles.video}
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  allowFullScreen
                  title={`Testimonial from ${item.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className={styles.videoInfo}>
                <p className={styles.testimonialText}>{item.text}</p>
                <p className={styles.testimonialName}>{item.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

