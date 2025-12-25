"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";

interface ContactFormProps {
  footer?: boolean;
}

export default function ContactForm({ footer = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    city: "",
    gender: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ fullName: "", contactNumber: "", city: "", gender: "" });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <div className={styles.contactFormWrapper}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contactNumber" className={styles.label}>
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={styles.input}
            placeholder="Your phone number"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="city" className={styles.label}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
            placeholder="Your city name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Gender</label>
          <div className={styles.radioGroup}>
            <label
              className={`${styles.radioLabel} ${
                formData.gender === "male" ? styles.radioLabelChecked : ""
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleGenderChange}
                className={styles.radioInput}
                required
              />
              <span className={styles.radioText}>Male</span>
            </label>
            <label
              className={`${styles.radioLabel} ${
                formData.gender === "female" ? styles.radioLabelChecked : ""
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleGenderChange}
                className={styles.radioInput}
                required
              />
              <span className={styles.radioText}>Female</span>
            </label>
            <label
              className={`${styles.radioLabel} ${
                formData.gender === "other" ? styles.radioLabelChecked : ""
              }`}
            >
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleGenderChange}
                className={styles.radioInput}
                required
              />
              <span className={styles.radioText}>Other</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </button>

        <p className={styles.disclaimer}>
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </p>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            Thank you! Your appointment request has been submitted successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}

