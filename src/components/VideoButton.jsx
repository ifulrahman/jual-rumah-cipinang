import { useState, useEffect } from "react";
import videoFile from "../assets/videos/video-highlight.mp4";

const VideoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Prevent scroll saat modal aktif
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Video Button */}
      <div className="fixed z-50 bottom-16 right-4 font-poppins text-[13px]">
        <button
          onClick={openModal}
          className="flex items-center px-4 py-2 space-x-2 text-white transition-all duration-300 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
          </svg>
          <span>Tonton Video Rumah</span>
        </button>
      </div>

      {/* Modal Popup Video */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
          {/* Close Button - always visible */}
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

          {/* Video Element - responsive size */}
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

export default VideoButton;
