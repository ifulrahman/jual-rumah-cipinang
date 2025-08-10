import { useState, useEffect } from "react";
import videoFile from "../assets/videos/video-highlight.mp4";
import thumbnail from "../assets/images/2.jpg";
import { Play, Video } from "lucide-react";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <section
        id="video-highlight"
        className="px-4 py-20 bg-white shadow-md md:px-10 font-poppins rounded-xl"
      >
        <div className="flex flex-col items-center mx-auto max-w-7xl md:flex-row md:space-x-10">
          {/* LEFT: Thumbnail video */}
          <div
            className="relative w-full mb-6 cursor-pointer md:w-1/2 md:mb-0 group"
            onClick={openModal}
          >
            <img
              src={thumbnail}
              alt="Thumbnail Video"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 transition-transform rounded-full bg-black/60 group-hover:scale-110">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* RIGHT: Text & CTA */}
          <div className="w-full text-center md:w-1/2 md:text-left text-[13px]">
            <h2 className="flex items-center justify-center gap-2 mb-4 text-2xl font-bold text-center sm:justify-start sm:text-left sm:text-4xl">
              <Video className="w-8 h-8 text-gray-800" />
              Video Highlight{" "}
              <span className="font-light underline underline-offset-4 decoration-1">
                Properti
              </span>
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Tonton video singkat ini untuk melihat langsung kondisi rumah dan
              lingkungannya. Dapatkan gambaran visual yang jelas sebelum anda
              bertanya.
            </p>
            <button
              onClick={openModal}
              className="px-6 py-3 text-white transition bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
            >
              Tonton Video Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Modal Popup Video */}
      {isOpen && (
        <div className=" font-poppins fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 z-[110] text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition"
            aria-label="Close Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-[90%] max-w-2xl p-4 z-[105]">
            <video controls autoPlay className="w-full rounded-lg shadow-xl">
              <source src={videoFile} type="video/mp4" />
              Browser kamu gak support video HTML5.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
