import { useEffect, useState } from "react";
import logo from "../assets/logo-black.png";

const links = [
  { id: "spesifikasi", label: "Spesifikasi" },
  { id: "foto",        label: "Foto" },
  { id: "video-highlight",      label: "Video" },
  { id: "kontak",      label: "Kontak" },
  { id: "lokasi",      label: "Lokasi" },
];

export default function Navbar({ scrollToSection, active = "spesifikasi" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`sticky top-0 z-50 transition-all ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      <div className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="container flex items-center justify-between px-4 py-3 mx-auto lg:px-8">
          {/* Brand */}
          <a href="#top" onClick={() => scrollToSection?.("top")} className="flex items-center gap-3">
            <img src={logo} alt="Residensi Jaktim" className="object-contain h-12 w-18" />
            <h1 className="text-[14px] md:text-[18px] font-bold">Residensi Jaktim</h1>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-2 font-figtree font-semibold text-[14px]">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(l.id); }}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "cursor-pointer px-4 py-2 rounded-full transition-all",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70",
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-gray-600 hover:text-white hover:bg-gray-700/90"
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="p-2 text-gray-700 rounded-full md:hidden hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
        ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-4 py-2 space-y-1 bg-white/95 backdrop-blur">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(l.id); setIsMenuOpen(false); }}
                  className={[
                    "block text-center w-full px-4 py-3 rounded-full transition-all text-[13px]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70",
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-gray-700 hover:text-white hover:bg-gray-700/90"
                  ].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
