import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import foto3 from "../assets/images/2.jpg";
import foto7 from "../assets/images/7.jpg";
import foto10 from "../assets/images/10.jpg";
import foto12 from "../assets/images/12.jpg";
import foto18 from "../assets/images/18.jpg";
import foto20 from "../assets/images/20.jpg";
import foto21 from "../assets/images/21.jpg";
import foto22 from "../assets/images/22.jpg";
import foto26 from "../assets/images/26.jpg";
import foto27 from "../assets/images/27.jpg";
import foto28 from "../assets/images/28.jpg";
import foto29 from "../assets/images/29.jpg";
import foto30 from "../assets/images/30.jpg";
import foto32 from "../assets/images/32.jpg";
import foto34 from "../assets/images/34.jpg";
import foto35 from "../assets/images/35.jpg";
import foto36 from "../assets/images/36.jpg";
import foto37 from "../assets/images/37.jpg";
import foto38 from "../assets/images/38.jpg";
import foto39 from "../assets/images/39.jpg";
import foto40 from "../assets/images/40.jpg";
import foto41 from "../assets/images/41.jpg";
import foto42 from "../assets/images/42.jpg";
import foto43 from "../assets/images/43.jpg";
import foto45 from "../assets/images/45.jpg";
import foto46 from "../assets/images/46.jpg";
import foto47 from "../assets/images/47.jpg";
import foto48 from "../assets/images/48.jpg";
import foto49 from "../assets/images/49.jpg";
import foto51 from "../assets/images/51.jpg";
import foto54 from "../assets/images/54.jpg";

const Images = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    { src: foto3 },
    { src: foto7 },
    { src: foto10 },
    { src: foto12 },
    { src: foto18 },
    { src: foto20 },
    { src: foto21 },
    { src: foto22 },
    { src: foto26 },
    { src: foto27 },
    { src: foto28 },
    { src: foto29 },
    { src: foto30 },
    { src: foto32 },
    { src: foto34 },
    { src: foto35 },
    { src: foto36 },
    { src: foto37 },
    { src: foto38 },
    { src: foto39 },
    { src: foto40 },
    { src: foto41 },
    { src: foto42 },
    { src: foto43 },
    { src: foto45 },
    { src: foto46 },
    { src: foto47 },
    { src: foto48 },
    { src: foto49 },
    { src: foto51 },
    { src: foto54 },
  ];
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-4 top-1/2 hover:bg-gray-600"
      onClick={onClick}
    >
      ❯
    </button>
  );

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-4 top-1/2 hover:bg-gray-600"
      onClick={onClick}
    >
      ❮
    </button>
  );

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    focusOnSelect: true,
    afterChange: (index) => setCurrentSlide(index),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-28 bg-gray-50 font-poppins" id='foto'>
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-semibold text-center">
          Galeri Rumah
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`transition-transform duration-300 ease-in-out relative ${
                  index === currentSlide
                    ? "scale-70 z-10"
                    : "scale-90 opacity-70"
                }`}
                onClick={() => openModal(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="object-cover w-full transition-transform duration-300 ease-in-out rounded-lg shadow-lg h-72"
                />
                <p
                  className={`mt-4 text-[14px] font-medium text-center text-gray-800 ${
                    index === currentSlide ? "z-20" : ""
                  }`}
                >
                  {image.caption}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal untuk gambar besar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <img
            src={currentImage}
            alt="Gambar besar"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Images;
