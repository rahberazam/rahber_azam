"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const teamMembers = [
  {
    name: "Dr Nidhi Khandelwale",
    role: "Founder",
    image: "/img/assts/nidhi.jpeg",
    description:
      "Nidhi is the visionary behind siama.in. With a background in Doctor, she brought a unique perspective and innovative approach to this.",
  },
  {
    name: "Mr. Manoj Srivastava",
    role: "Co-Founder",
    image: "/img/assts/manoj2.jpeg",
    description:
      "Mr. Manoj brings a complementary set of skills and expertise to Siama.in. With a background in business development and marketing, he has been instrumental in shaping the project's strategy and execution.",
  },
];

export default function TeamSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCards = cardsRef.current;
    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className={styles.teamSection}>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.teamCard}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.cardDecoration}></div>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.memberImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.imageShine}></div>
                </div>
                <div className={styles.imageBorder}></div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.roleBadge}>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

