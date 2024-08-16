/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "Travel makes one modest. You see what a tiny place you occupy in the world. - Gustave Flaubert",
    },
    {
      src: "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote:
        "India is the cradle of the human race, the birthplace of human speech, the mother of history. - Mark Twain",
    },
    {
      src: "https://images.pexels.com/photos/1588032/pexels-photo-1588032.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "To travel is to take a journey into yourself. - Danny Kaye",
    },
    {
      src: "https://images.pexels.com/photos/4614598/pexels-photo-4614598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      quote: "Wherever you go becomes a part of you somehow. - Anita Desai",
    },
    {
      src: "https://images.pexels.com/photos/12317200/pexels-photo-12317200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      quote:
        "India - The land of dreams and romance, of fabulous wealth and fabulous poverty. - Mark Twain",
    },
  ];

  return (
    <div className="container mx-auto p-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-xl font-semibold text-center px-4">
                {image.quote}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
};

export default Gallery;
