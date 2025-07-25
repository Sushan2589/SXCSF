"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import ImageSlider from "@/components/ImageSlider";

const SXCSFHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#161512] font-sans">
      <div
        className={`transition-ease-in-out duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <ImageSlider />
      

      {/* About Section */}
      <section className="px-6 py-12 md:px-20 bg-[#1e1d1b]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            About the Science Fest
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            St. Xavier&apos;s College Science Fest is an annual celebration of
            innovation, creativity, and curiosity. It brings together brilliant
            minds from schools and colleges to showcase scientific experiments,
            technical projects, research ideas, and creative problem-solving.
            Whether you&apos;re here to present, explore, or be inspired — this fest
            is where learning meets excitement.
          </p>
        </div>

       <Card/>
      </section>
      </div>
    </div>
  );
};

export default SXCSFHome;
