"use client";

import React from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.scss";

export default function BestTreatments() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  // Sample data - replace with API data later
  const treatments = [
    {
      id: 1,
      name: "Laser Hair Reduction",
      service_charge: "2999",
      slug: "laser-hair-reduction",
    },
    {
      id: 2,
      name: "Skin Rejuvenation",
      service_charge: "3999",
      slug: "skin-rejuvenation",
    },
    {
      id: 3,
      name: "Hair Treatment",
      service_charge: "4999",
      slug: "hair-treatment",
    },
    {
      id: 4,
      name: "Advanced Laser Facial",
      service_charge: "3499",
      slug: "advanced-laser-facial",
    },
    {
      id: 5,
      name: "PRP Treatment",
      service_charge: "5999",
      slug: "prp-treatment",
    },
    {
      id: 6,
      name: "Chemical Peel",
      service_charge: "2499",
      slug: "chemical-peel",
    },
  ];

  return (
    <section className={styles.bestTreatments}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          An Array Of Beauty Treatments At Siama
        </h3>
        <p className={styles.description}>
          Get the best pampering experience with our exclusive beauty care
          solutions. We want to rejuvenate your senses and restore the glow of
          your skin. Every personalized treatment plan is intended to improve
          your natural beauty. Our luxurious facials will deeply nourish your
          skin. Our well-tested beauty care formula has the transformative power
          to make you look more radiant. Siama is the best destination to get
          non-invasive treatments, from hair mesotherapy to laser facials. We
          aim to provide personalized solutions for clients and help them create
          a tailored skincare regimen.
        </p>

        {treatments.length > 0 && (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1s ease"
            transitionDuration={500}
            slidesToSlide={1}
            containerClass={styles.carouselContainer}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass={styles.carouselItem}
          >
            {treatments.map((elem) => {
              return (
                <div className={styles.treatmentCard} key={elem.id}>
                  <Link
                    href={`/treatments/${elem.slug}`}
                    className={styles.cardLink}
                  >
                    <div className={styles.cardContent}>
                      <h5 className={styles.treatmentName}>{elem.name}</h5>
                      <h5 className={styles.price}>{elem.service_charge}</h5>
                      <button className={styles.bookButton}>Book Now</button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}

