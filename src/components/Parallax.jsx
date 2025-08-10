import { useEffect, useRef, useState } from "react";
import foto1 from "../assets/images/2.jpg";

const Parallax = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // biar cuma sekali animasi
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative" id="kontak" ref={sectionRef}>
      {/* Gambar Parallax */}
      <div
        className="bg-fixed bg-center bg-cover h-[500px]"
        style={{ backgroundImage: `url(${foto1})` }}
      >
        {/* Overlay lebih gelap */}
        <div className="flex items-center justify-center h-full bg-black/60 font-poppins">
          {/* Konten Tulisan */}
          <div
            className={`px-4 text-center text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
              Hubungi Kami Segera
            </h1>
            <p className="text-lg sm:text-xl">
              <span className="font-semibold">
                📞 0812-8710-4229 (Bpk. Syam)
              </span>{" "}
              - Bisa WhatsApp
            </p>
            <p className="mt-2 text-md sm:text-lg">Tanpa Perantara!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
