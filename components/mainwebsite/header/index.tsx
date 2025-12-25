"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../contact-form";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<"Female" | "Male">("Female");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const homeMenuItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const treatmentsMenuItems = [
    { label: "Laser Hair Reduction", href: "/treatments/laser-hair-reduction" },
    { label: "Skin Rejuvenation", href: "/treatments/skin-rejuvenation" },
    { label: "Hair Treatment", href: "/treatments/hair-treatment" },
    { label: "Advanced Laser Facial", href: "/treatments/advanced-laser-facial" },
    { label: "PRP Treatment", href: "/treatments/prp-treatment" },
    { label: "Chemical Peel", href: "/treatments/chemical-peel" },
  ];

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/img/saimalogo.png"
                alt="Siama Logo"
                width={126}
                height={63}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Search Bar */}
          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className={styles.searchIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className={styles.navSection}>
            {/* Gender Selection */}
            <div className={styles.genderSelection}>
              <button
                className={`${styles.genderButton} ${
                  selectedGender === "Female" ? styles.genderButtonActive : ""
                }`}
                onClick={() => setSelectedGender("Female")}
              >
                Female
              </button>
              <button
                className={`${styles.genderButton} ${
                  selectedGender === "Male" ? styles.genderButtonActive : ""
                }`}
                onClick={() => setSelectedGender("Male")}
              >
                Male
              </button>
            </div>

            {/* Navigation Links with Dropdowns */}
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {/* Home Dropdown */}
                <li
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/" className={styles.navLink}>
                    HOME
                    <svg
                      className={styles.dropdownArrow}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>
                  {activeDropdown === "home" && (
                    <ul 
                      className={styles.dropdownMenu}
                      onMouseEnter={() => handleMouseEnter("home")}
                      onMouseLeave={handleMouseLeave}
                    >
                      {homeMenuItems.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.dropdownLink}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Treatments Dropdown */}
                <li
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter("treatments")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/treatments" className={styles.navLink}>
                    TREATMENTS
                    <svg
                      className={styles.dropdownArrow}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>
                  {activeDropdown === "treatments" && (
                    <ul 
                      className={styles.dropdownMenu}
                      onMouseEnter={() => handleMouseEnter("treatments")}
                      onMouseLeave={handleMouseLeave}
                    >
                      {treatmentsMenuItems.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.dropdownLink}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link href="/concerns" className={styles.navLink}>
                    CONCERNS
                  </Link>
                </li>
                <li>
                  <Link href="/men" className={styles.navLink}>
                    MEN
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button 
                className={styles.enquiryButton}
                onClick={() => setIsModalOpen(true)}
              >
                Enquiry now
              </button>
              <button className={styles.loginButton}>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setIsMobileMenuOpen(false)}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <Image
                src="/img/saimalogo.png"
                alt="Siama Logo"
                width={100}
                height={50}
                className={styles.mobileLogo}
              />
              <button
                className={styles.mobileMenuClose}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className={styles.mobileMenuContent}>
              {/* Gender Selection */}
              <div className={styles.mobileGenderSelection}>
                <button
                  className={`${styles.mobileGenderButton} ${
                    selectedGender === "Female" ? styles.mobileGenderButtonActive : ""
                  }`}
                  onClick={() => setSelectedGender("Female")}
                >
                  Female
                </button>
                <button
                  className={`${styles.mobileGenderButton} ${
                    selectedGender === "Male" ? styles.mobileGenderButtonActive : ""
                  }`}
                  onClick={() => setSelectedGender("Male")}
                >
                  Male
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {/* Home Dropdown */}
                  <li className={styles.mobileNavItem}>
                    <button
                      className={styles.mobileNavLink}
                      onClick={() => toggleMobileDropdown("home")}
                    >
                      HOME
                      <svg
                        className={`${styles.mobileDropdownArrow} ${
                          mobileDropdown === "home" ? styles.mobileDropdownArrowOpen : ""
                        }`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {mobileDropdown === "home" && (
                      <ul className={styles.mobileDropdownMenu}>
                        {homeMenuItems.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={styles.mobileDropdownLink}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Treatments Dropdown */}
                  <li className={styles.mobileNavItem}>
                    <button
                      className={styles.mobileNavLink}
                      onClick={() => toggleMobileDropdown("treatments")}
                    >
                      TREATMENTS
                      <svg
                        className={`${styles.mobileDropdownArrow} ${
                          mobileDropdown === "treatments" ? styles.mobileDropdownArrowOpen : ""
                        }`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {mobileDropdown === "treatments" && (
                      <ul className={styles.mobileDropdownMenu}>
                        {treatmentsMenuItems.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={styles.mobileDropdownLink}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <li className={styles.mobileNavItem}>
                    <Link
                      href="/concerns"
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CONCERNS
                    </Link>
                  </li>
                  <li className={styles.mobileNavItem}>
                    <Link
                      href="/men"
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      MEN
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Action Buttons */}
              <div className={styles.mobileActionButtons}>
                <button
                  className={styles.mobileEnquiryButton}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  Enquiry now
                </button>
                <button className={styles.mobileLoginButton}>Login</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} ref={modalRef}>
            <button
              className={styles.modalCloseButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Book Your Consultation</h2>
              <p className={styles.modalSubtitle}>
                Schedule your personalized treatment today
              </p>
            </div>
            <div className={styles.modalBody}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

