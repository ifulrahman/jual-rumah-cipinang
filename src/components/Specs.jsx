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
    <section className="bg-gray-50 py-6 font-poppins text-[14px]" id="spesifikasi">
      <div className="container p-4 mx-auto bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-xl font-semibold text-center text-gray-800">
          Spesifikasi Properti
        </h2>

        {/* Ringkasan Properti */}
        <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-gray-800">465 m²</span>
            <span className="text-sm text-gray-600">L. Tanah</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-gray-800">465 m²</span>
            <span className="text-sm text-gray-600">L. Bangunan</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-gray-800">2</span>
            <span className="text-sm text-gray-600">K. Mandi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-gray-800">5</span>
            <span className="text-sm text-gray-600">K. Tidur</span>
          </div>
        </div>

        {/* Detail Properti */}
        <div className="pb-6 mb-4 border-b-2">
          <button
            className="flex items-center justify-between w-full py-2 font-medium text-gray-800"
            onClick={() => toggleSection("detail")}
          >
            <h3 className="text-[16px] font-medium text-gray-800 mb-2">
              Detail Properti
            </h3>
            <span className="text-lg">{expanded.detail ? "▲" : "▼"}</span>
          </button>
          <div
            className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
              expanded.detail ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Luas Tanah:</strong> 465 m<sup>2</sup>
              </li>
              <li>
                <strong>Luas Bangunan:</strong> 465 m<sup>2</sup>
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
            className="flex items-center justify-between w-full py-2 font-medium text-gray-800"
            onClick={() => toggleSection("building")}
          >
            <h3 className="text-[16px] font-medium text-gray-800 mb-2">
              Lokasi Investasi Ideal!
            </h3>
            <span className="text-lg">{expanded.building ? "▲" : "▼"}</span>
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
        <div>
          <h3 className="text-[16px] font-medium text-gray-800 mb-2">
            Deskripsi
          </h3>
          <p className="text-gray-700">
            Di tengah kawasan Cipinang yang terus berkembang, dengan potensi
            investasi yang sangat menjanjikan. Rumah ini memiliki luas tanah dan
            bangunan 465 m² yang dapat dimanfaatkan untuk tempat tinggal
            eksklusif atau peluang usaha seperti kontrakan dan kos-kosan yang
            banyak diminati di sekitar area Cipinang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specs;
