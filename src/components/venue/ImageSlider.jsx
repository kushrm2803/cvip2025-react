import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const images = [
  "/iitropar-pics/iitropar-pic-1.JPG",
  "/iitropar-pics/iitropar-pic-2.jpg",
  "/iitropar-pics/iitropar-pic-3.jpeg",
  "/iitropar-pics/iitropar-pic-4.jpg",
  "/iitropar-pics/iitropar-pic-5.jpeg",
  "/iitropar-pics/iitropar-pic-6.jpg",
  "/iitropar-pics/iitropar-pic-7.jpg",
];

const ImageSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full max-w-5xl mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <motion.div
              animate={{
                scale: isActive ? 1.2 : 0.9,
                opacity: isActive ? 1 : 0.7,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.6 }}
              whileHover={isActive ? { scale: 1.25 } : {}}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={"/cvip2025"+image}
                alt={`Institute ${index + 1}`}
                loading = "lazy"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
