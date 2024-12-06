import { useState } from "react";
import logo from "../assets/logo-black.png";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`bg-[#f2f1ef] shadow-xl sticky top-0 z-50 font-poppins font-semibold text-[14px] transition-all duration-300 ease-in-out ${
        isMenuOpen ? "mb-40" : "mb-0"
      }`}
    >
      <div className="container flex items-center justify-between px-6 py-2 mx-auto">
        {/* Logo dan H1 */}
        <div className="flex items-center space-x-4">
          <img
            src={logo} // Ganti dengan path logo Anda
            alt="Logo"
            className="object-cover w-16 h-16"
          />
          <h1 className="text-[13px] font-bold md:text-[17px] sm:text-[17px]">Residensi Jaktim</h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden space-x-6 md:flex">
          <li
            className="text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => scrollToSection("spesifikasi")}
          >
            Spesifikasi
          </li>
          <li
            className="text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => scrollToSection("foto")}
          >
            Foto
          </li>
          <li
            className="text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => scrollToSection("kontak")}
          >
            Kontak
          </li>
          <li
            className="text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => scrollToSection("lokasi")}
          >
            Lokasi
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="text-gray-600 md:hidden hover:text-amber-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full bg-white border-t border-gray-200 shadow-lg md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li
            className="px-4 py-3 text-center text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => {
              scrollToSection("spesifikasi");
              setIsMenuOpen(false);
            }}
          >
            Spesifikasi
            <hr />
          </li>
          <li
            className="px-4 py-3 text-center text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => {
              scrollToSection("foto");
              setIsMenuOpen(false);
            }}
          >
            Foto
            <hr />
          </li>
          <li
            className="px-4 py-3 text-center text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => {
              scrollToSection("kontak");
              setIsMenuOpen(false);
            }}
          >
            Kontak
            <hr />
          </li>
          <li
            className="px-4 py-3 text-center text-gray-600 cursor-pointer hover:text-amber-800"
            onClick={() => {
              scrollToSection("lokasi");
              setIsMenuOpen(false);
            }}
          >
            Lokasi
            <hr />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
