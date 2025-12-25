"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./style.module.scss";

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const testimonialsData = [
    {
      name: "Prachi Verma",
      prof: "Influencer",
      date: "3 months ago",
      comment:
        "I was concerned about losing the radiance of my skin. When all my beauty products failed to deliver the expected results, Siama emerged as the game-changer.",
      img: "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17487.jpg?size=626&ext=jpg&ga=GA1.1.47829334.1716269168&semt=ais_user",
    },
    {
      name: "Neha Singh",
      prof: "Manager",
      date: "2 days ago",
      comment:
        "I felt a bit skeptical about at-home treatments for my hair. However, Siama's team had gone beyond my expectations. With the PRP injection, you solved my hair-thinning problems",
      img: "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261878.jpg?t=st=1718278847~exp=1718282447~hmac=f7732529c15f92d1b2858ce7e910fff68f4cd7286b64b3307210c09e145c37b7&w=740",
    },
    {
      name: "Nidhi Aggrwal",
      prof: "Doctor",
      date: "10 days ago",
      comment:
        "I always stick to my self-care routine to pamper my skin and hair. Still, I have felt the need to have professional treatment without stepping out of my house.",
      img: "https://img.freepik.com/free-photo/medium-shot-woman-front-stairs-looking-camera_23-2148286121.jpg?w=360&t=st=1718278918~exp=1718279518~hmac=3605e21a1f38865c61395c144cba0711bfd1ac502b8186a911ec87b4ab6ae5be",
    },
    {
      name: "Shobha Ojha",
      prof: "Designer",
      date: "6 months ago",
      comment:
        "After three PRP sessions, I'm amazed by the new hair growth. The team was professional and the procedure was much more comfortable than I expected. Highly recommend!",
      img: "https://img.freepik.com/free-photo/medium-shot-woman-front-stairs-looking-camera_23-2148286121.jpg?w=360&t=st=1718278918~exp=1718279518~hmac=3605e21a1f38865c61395c144cba0711bfd1ac502b8186a911ec87b4ab6ae5be",
    },
    {
      name: "Nishi Upadhyay",
      prof: "Youtuber",
      date: "2 months ago",
      comment:
        "The skin rejuvenation treatment significantly reduced my fine lines and improved my skin texture. The staff was knowledgeable and made me feel comfortable throughout.",
      img: "https://img.freepik.com/free-photo/medium-shot-woman-front-stairs-looking-camera_23-2148286121.jpg?w=360&t=st=1718278918~exp=1718279518~hmac=3605e21a1f38865c61395c144cba0711bfd1ac502b8186a911ec87b4ab6ae5be",
    },
    {
      name: "Manish Singh",
      prof: "Influencer",
      date: "3 months ago",
      comment:
        "Game changer for my acne scars! The chemical peel series has dramatically improved my skin tone and texture. Recovery was quick and the results are worth every penny.",
      img: "https://img.freepik.com/free-photo/medium-shot-woman-front-stairs-looking-camera_23-2148286121.jpg?w=360&t=st=1718278918~exp=1718279518~hmac=3605e21a1f38865c61395c144cba0711bfd1ac502b8186a911ec87b4ab6ae5be",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionSubtitle}>
          Real experiences from our satisfied customers
        </p>
      </div>
      <div className={styles.carouselWrapper}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all 1s ease"
          transitionDuration={500}
          slidesToSlide={1}
          containerClass={styles.carouselContainer}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass={styles.carouselItem}
        >
          {testimonialsData.map((elem, id) => {
            return (
              <div className={styles.testimonialCard} key={id}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    <Image
                      src={elem.img}
                      alt={`Portrait of ${elem.name}`}
                      width={48}
                      height={48}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.userInfo}>
                    <h4 className={styles.userName}>{elem.name}</h4>
                    <p className={styles.userProf}>{elem.prof}</p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.starIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.comment}>&quot;{elem.comment}&quot;</p>
                <p className={styles.date}>{elem.date}</p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>98%</div>
          <p className={styles.statLabel}>Client Satisfaction</p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>2k+</div>
          <p className={styles.statLabel}>Happy Clients</p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>2+</div>
          <p className={styles.statLabel}>Years Experience</p>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>4.9</div>
          <p className={styles.statLabel}>Average Rating</p>
        </div>
      </div>
    </div>
  );
}

