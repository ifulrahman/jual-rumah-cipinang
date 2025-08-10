import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Specs = () => {
  const [expanded, setExpanded] = useState({
    benefits: false,
    detail: false,
    building: false,
    additional: false,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="bg-gray-50 py-8 text-[14px]" id="spesifikasi">
      <div className="container p-6 mx-auto bg-white shadow-lg rounded-2xl sm:p-11">
        <h2 className="text-2xl font-bold text-center mb-11 sm:text-4xl">
          Spesifikasi{" "}
          <span className="font-light underline underline-offset-4 decoration-1">
            Properti
          </span>
        </h2>

        {/* Ringkasan Properti */}
        <div className="grid grid-cols-2 gap-6 mb-6 divide-x divide-gray-200 sm:grid-cols-4">
          {[
            { value: "330 m²", label: "L. Tanah" },
            { value: "330 m²", label: "L. Bangunan" },
            { value: "2", label: "K. Mandi" },
            { value: "5", label: "K. Tidur" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-4">
              <span className="text-xl font-bold text-gray-900">{item.value}</span>
              <span className="text-sm font-light text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Detail Properti */}
        <div className="pb-6 mb-4 border-b-2">
          <button
            className="flex items-center justify-between w-full px-2 py-3 transition-colors rounded-lg hover:bg-gray-50"
            onClick={() => toggleSection("detail")}
          >
            <h3 className="text-lg font-bold text-gray-800">Detail Properti</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expanded.detail ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
              expanded.detail ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Luas Tanah:</strong> 330 m<sup>2</sup>
              </li>
              <li>
                <strong>Luas Bangunan:</strong> 330 m<sup>2</sup>
              </li>
              <li>
                <strong>Kamar Tidur:</strong> 5
              </li>
              <li>
                <strong>Kamar Mandi:</strong> 2
              </li>
              <li>
                <strong>Listrik:</strong> 900 watt (Non Token)
              </li>
              <li>
                <strong>Sertifikat:</strong> Hak Milik (SHM)
              </li>
              <li>
                <strong>Garasi:</strong> Muat 2 Mobil
              </li>
            </ul>
          </div>
        </div>

        {/* Spesifikasi Bangunan */}
        <div className="pb-6 mb-4 border-b-2">
          <button
            className="flex items-center justify-between w-full px-2 py-3 transition-colors rounded-lg hover:bg-gray-50"
            onClick={() => toggleSection("building")}
          >
            <h3 className="text-lg font-bold text-gray-800">Lokasi Investasi Ideal!</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expanded.building ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
              expanded.building
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-gray-700">
              <li>- Dekat Asrama Brimob Polri Cipinang</li>
              <li>- Dekat Pasar Burung Cipinang & Musholla</li>
              <li>- 10 menit ke Stasiun Klender & Jatinegara</li>
              <li>- 10 menit ke RS Persahabatan & Arion Mall</li>
              <li>- 5 menit ke Pasar Induk Beras Cipinang</li>
              <li>
                - Akses langsung ke Jalan Cipinang Kebembem Raya
              </li>
            </ul>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="pb-6 mb-0 ">
          <button
            className="flex items-center justify-between w-full px-2 py-3 transition-colors rounded-lg hover:bg-gray-50"
            onClick={() => toggleSection("additional")}
          >
            <h3 className="text-lg font-bold text-gray-800">Deskripsi</h3>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${expanded.additional ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
              expanded.additional ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-2 text-gray-700">
              Di tengah kawasan Cipinang yang terus berkembang, dengan potensi
              investasi yang sangat menjanjikan. Rumah ini memiliki luas tanah dan
              bangunan 330 m² yang dapat dimanfaatkan untuk tempat tinggal
              eksklusif atau peluang usaha seperti kontrakan dan kos-kosan yang
              banyak diminati di sekitar area Cipinang.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specs;
