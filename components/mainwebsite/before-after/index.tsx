"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "./style.module.scss";

export default function BeforeAfter() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const results = [
    {
      name: "before",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "after",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "before",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "after",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "before",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "after",
      image: "/img/assts/bef-aft.png",
    },
    {
      name: "before",
      image: "/img/assts/bef-aft.png",
    },
  ];

  return (
    <div className={styles.beforeAfter}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Siama Works</h3>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h3 className={styles.contentTitle}>
              Experience the Power of Personalized Care
            </h3>
            <p className={styles.contentText}>
              At Siama, our team of experienced dermatologists and beauty care
              experts is dedicated to delivering exceptional, personalized
              services. We are committed to redefining cosmetic treatments
              through our specially formulated solutions, designed to address a
              wide range of skin concerns.
            </p>
            <p className={styles.contentText}>
              Our advanced facials and bespoke serums are crafted to transform
              your skin with precision and care. At Siama, we believe in a
              science-backed approach — never guesswork — when creating your
              customized skincare plan.
            </p>
            <p className={styles.contentText}>
              When you consult with our dermatologists, we begin with a
              comprehensive skincare consultation to thoroughly understand your
              needs and develop a targeted, effective regimen just for you.
            </p>
            <p className={styles.contentText}>
              Siama is a premier beauty care service provider with a range of
              specialized treatments. We think real beauty emanates from your
              confident look. If you like to indulge in self-care activities,
              our cosmetic solution is the best. With quality products and the
              latest techniques, we provide exceptional care. You will also feel
              beautiful inside and out. Siama offers a cost-effective solution
              without compromising quality. So, start your beauty journey with
              every session. Book a consultation with our experts and have the
              best services from us.
            </p>
          </div>
        </div>

        <div className={styles.resultsSection}>
          <h2 className={styles.resultsTitle}>
            Siama <span className={styles.resultsTitleAccent}>Results</span>
          </h2>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            customTransition="all 1s ease"
            transitionDuration={500}
            slidesToSlide={1}
            containerClass={styles.carouselContainer}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass={styles.carouselItem}
          >
            {results.map((item, index) => (
              <div key={index} className={styles.resultCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name === "before" ? "Before treatment" : "After treatment"}
                    width={300}
                    height={300}
                    className={styles.resultImage}
                  />
                </div>
                <p className={styles.resultLabel}>
                  {item.name === "before" ? "Before" : "After"}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

