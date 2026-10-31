'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  const current = testimonials[currentIndex];

  return (
    <section className="section-testimonials" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div className="badge-pill badge-emerald">
            <span className="pulse-dot" />
            <span>Student Reviews</span>
          </div>
          <h2>What Our Students Say</h2>
          <p>Real feedback from NEBOSH students worldwide.</p>
        </div>

        <div className="testimonial-carousel-wrap">
          {/* Previous Arrow Button */}
          <button
            className="carousel-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Testimonial Card */}
          <div className="testimonial-slide-card">
            <img
              src={current.avatar}
              alt={current.name}
              className="testimonial-avatar"
              width={64}
              height={64}
            />

            <h3 className="testimonial-name">{current.name}</h3>

            {/* 5 Gold Stars */}
            <div className="testimonial-stars" aria-label="5 out of 5 stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="testimonial-quote">
              “{current.feedback}”
            </p>
          </div>

          {/* Next Arrow Button */}
          <button
            className="carousel-nav-btn next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Carousel Indicator Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
