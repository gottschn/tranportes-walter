"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function VehiclesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const vehicleImages = [
    {
      id: 9,
      src: "/photos/transp/9.png",
      alt: "Interior de minibus confort",
    },
    {
      id: 1,
      src: "/photos/transp/1.jpeg",
      alt: "Interior de van con asientos rojos",
    },
    {
      id: 2,
      src: "/photos/transp/2.jpeg",
      alt: "Interior de van con asientos naranjas",
    },
    {
      id: 6,
      src: "/photos/transp/6.jpeg",
      alt: "Interior de van ejecutiva",
    },
    {
      id: 3,
      src: "/photos/transp/3.jpeg",
      alt: "Exterior de minibus beige",
    },
    {
      id: 7,
      src: "/photos/transp/7.jpeg",
      alt: "Exterior de van premium",
    },
    {
      id: 4,
      src: "/photos/transp/4.jpeg",
      alt: "Interior de van con asientos beige",
    },
    {
      id: 5,
      src: "/photos/transp/5.jpeg",
      alt: "Flota de vans blancas",
    },
  ];

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = vehicleImages.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerView, vehicleImages.length]);

  const nextSlide = () => {
    const maxIndex = vehicleImages.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = vehicleImages.length - itemsPerView;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section
      id="unidades"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestras unidades
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contamos con la unidad ideal para todo tipo de trabajos.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {vehicleImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-48 sm:h-56 lg:h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all duration-200 items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all duration-200 items-center justify-center"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({
              length: Math.ceil(vehicleImages.length / itemsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
