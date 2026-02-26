"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {

    // ==============================
    // SCROLL ANIMATIONS
    // ==============================
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".fade-in-section")
      .forEach((section) => observer.observe(section));

    // ==============================
    // SMOOTH SCROLL
    // ==============================
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute("href");
      if (!targetId) return;

      const target = document.querySelector(targetId);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  });

    // ==============================
    // PARALLAX HERO
    // ==============================
    const hero = document.querySelector(".hero-content");

    const handleScroll = () => {
      if (!hero) return;
      const scrolled = window.pageYOffset;

      if (scrolled < window.innerHeight) {
        (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
        (hero as HTMLElement).style.opacity = `${1 - scrolled / 800}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return null;
}