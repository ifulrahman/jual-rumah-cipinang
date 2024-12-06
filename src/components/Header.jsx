import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from "../assets/images/10.jpg";
import foto2 from "../assets/images/2.jpg";
import foto3 from "../assets/images/4.jpg";
import foto4 from "../assets/images/19.jpg";
import foto5 from "../assets/images/29.jpg";

const Header = () => {
  const customArrowStyles =
    "absolute z-10 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md";

  return (
    <header className="bg-gray-50 rounded-b-[50px] overflow-hidden">
      <Carousel
        showArrows
        infiniteLoop
        autoPlay
        showThumbs={false}
        className="w-full"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className={`${customArrowStyles} left-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3} // Untuk mempertebal panah
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className={`${customArrowStyles} right-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3} // Untuk mempertebal panah
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )
        }
      >
        <div>
          <img
            src={foto1}
            alt="Foto 1"
            className="h-[520px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src={foto2}
            alt="Foto 2"
            className="h-[520px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src={foto3}
            alt="Foto 3"
            className="h-[520px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src={foto4}
            alt="Foto 4"
            className="h-[520px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src={foto5}
            alt="Foto 5"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </Carousel>
    </header>
  );
};

export default Header;
