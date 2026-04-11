"use client";

import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Rahim Ahmed",
    location: "Dhaka",
    text: "Finding a home was so easy with this platform. The verified listings gave me huge peace of mind. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    name: "Sadia Rahman",
    location: "Chittagong",
    text: "Great experience! Loved the minimalist UI and how fast I found a beautiful rental without any hidden broker fees.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    name: "Imran Hossain",
    location: "Sylhet",
    text: "The 24/7 support was a lifesaver when I needed to adjust my move-in dates quickly. Smooth process overall.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    name: "Kamrul Islam",
    location: "Banani",
    text: "Highly professional service. I rented an office space and the transaction was flawlessly secure and transparent.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    name: "Tania Akter",
    location: "Uttara",
    text: "The property matched the photos exactly. Such a relief to find authentic, high-quality listings without any hassle.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = scrollRef.current.firstElementChild.offsetWidth;
      scrollRef.current.scrollBy({
        left: -(cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = scrollRef.current.firstElementChild.offsetWidth;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-zinc-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Users Say"
          subtitle="Trusted by people across the country"
        />

        {/* CSS-Snap Carousel wrapper */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              className="shrink-0 snap-center sm:snap-start w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            />
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={scrollLeft}
            className="p-4 bg-white border border-zinc-200 hover:border-zinc-950 transition-colors group focus:outline-none cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              className="text-zinc-950 group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="p-4 bg-white border border-zinc-200 hover:border-zinc-950 transition-colors group focus:outline-none cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              className="text-zinc-950 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
