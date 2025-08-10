import { useEffect, useRef, useState } from "react";
import investasiImage from "../assets/images.png";

const Information = () => {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(entry.target); // animasi sekali aja
        }
      },
      { threshold: 0.25 }
    );
    if (wrapRef.current) io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-10 font-poppins text-[14px]">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
        <div
          ref={wrapRef}
          className={`flex flex-col md:flex-row gap-8 p-6 md:p-10 transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Bagian Gambar */}
          <div className="flex items-center justify-center md:w-1/2">
            <img
              src={investasiImage}
              alt="Potensi Investasi"
              className="w-full max-w-[420px] h-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Bagian Teks */}
          <div className="md:w-1/2">
            <h2 className="flex items-center justify-center gap-2 mb-8 text-3xl font-bold text-gray-800 md:justify-start sm:mb-10 sm:text-4xl">
              <span>💰</span>
              Potensi{" "}
              <span className="font-light underline underline-offset-4 decoration-1">
                Investasi
              </span>
            </h2>

            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                Lokasi strategis, ideal untuk rumah kontrakan atau usaha kos-kosan.
                <br />
                Area berkembang pesat dengan akses transportasi yang mudah.
              </p>

              <p>
                Dekat fasilitas umum penting dan pusat keramaian.
                <br />
                <br />
                <strong>Harga: <br /></strong>
                <span className="inline-flex items-center text-green-700 bg-green-50 px-3 py-1 rounded-lg text-[18px] font-semibold shadow-sm">
                  Rp 3,5 Milyar 💸 (Masih Bisa Nego!)
                </span>
              </p>

              <p>
                <strong>Jangan Lewatkan Peluang Investasi Ini! <br /></strong>
                Hubungi kami segera untuk detail lebih lanjut
              </p>

              <p className="px-3 py-2 font-semibold text-red-700 rounded-lg bg-red-50">
                Segera amankan properti dengan lokasi emas ini dan rasakan keuntungan jangka panjang!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
