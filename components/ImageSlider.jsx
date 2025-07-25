"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const images = ["/images/1.png", "/images/A.png", "/images/3.png"];

const ImageSlider = () => {
    const router = useRouter();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white px-4">
          <h1
            className="text-white text-3xl md:text-5xl font-bold mb-2"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)" }}
          >
            Welcome to SXCSF
          </h1>
          <p className="text-white max-w-xl mx-auto">
            Dive into the world of{" "}
            <span className="text-amber-400 font-semibold">innovation</span>,
            discovery, and student-powered creativity.
          </p>

          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <div className="text-center text-white px-4 flex gap-3 pointer-events-auto">
              <button
                className="min-w-[120px] rounded-xl bg-[#FFD700] text-[#161512] px-6 py-2 font-bold tracking-wide hover:bg-[#e0d9c7] transition cursor-pointer"
                onClick={() => alert("Get Started clicked")}
              >
                Get Started
              </button>
              <button
                className="cursor-pointer min-w-[120px] rounded-xl bg-[#35332c] text-white px-6 py-2 font-bold tracking-wide hover:bg-[#4a493e] transition"
                onClick={() => router.push("/results")}
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
