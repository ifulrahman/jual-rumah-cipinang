import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsModalOpen(false);
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  const NextArrow = ({ onClick }) => (
    <button
      type="button"
      aria-label="Next"
      className="absolute z-10 p-2 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow right-4 top-1/2 md:p-3 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
      onClick={onClick}
    >
      ❯
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      type="button"
      aria-label="Previous"
      className="absolute z-10 p-2 text-white -translate-y-1/2 bg-gray-800 rounded-full shadow left-4 top-1/2 md:p-3 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
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
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "16px" },
      },
    ],
  };

  return (
    <section className="py-28 bg-gray-50 font-poppins" id='foto'>
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl">
          Galeri{" "}
          <span className="font-light underline underline-offset-4 decoration-1">
            Rumah
          </span>
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {images.map((image, index) => (
            <div
              key={index}
              className={`group relative transition-transform duration-300 ease-in-out ${
                index === currentSlide ? "scale-100 z-10" : "scale-90 opacity-70"
              }`}
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption ?? `Foto ${index + 1}`}
                loading="lazy"
                className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {image.caption && (
                <p
                  className={`mt-4 text-[14px] font-medium text-center text-gray-800 ${
                    index === currentSlide ? "z-20" : ""
                  }`}
                >
                  {image.caption}
                </p>
              )}
            </div>
          ))}

          </Slider>
        </div>
      </div>

      {/* Modal untuk gambar besar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={closeModal} // klik backdrop = close
        >
          <img
            src={currentImage}
            alt="Gambar besar"
            className="max-w-[92vw] max-h-[90vh] rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()} // klik gambar = jangan close
          />
        </div>
      )}
    </section>
  );
};

export default Images;
