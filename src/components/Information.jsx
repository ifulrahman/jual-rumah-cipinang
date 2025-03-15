import investasiImage from "../assets/images.png";

const Information = () => {
    return (
      <section className="py-10 font-poppins text-[14px]">
        <div className="container px-4 mx-auto md:px-8 lg:px-12">
          <div className="flex flex-col gap-8 p-6 md:flex-row md:p-10">
            {/* Bagian Gambar */}
            <div className="flex items-center justify-center md:w-1/2">
              <img
                src={investasiImage}
                alt="Potensi Investasi"
                className="w-[600px] h-[250px] object-contain"
              />
            </div>
            {/* Bagian Teks */}
            <div className="md:w-1/2">
              <h2 className="flex items-center gap-2 mb-4 text-3xl font-bold text-gray-800">
                <span>💰</span> Potensi Investasi
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Lokasi strategis, ideal untuk rumah kontrakan atau usaha kos-kosan.
                  <br />
                  Area berkembang pesat dengan akses transportasi yang mudah.
                </p>
                <p>
                  Dekat fasilitas umum penting dan pusat keramaian.
                  <br />
                  <strong>Harga:</strong>{" "}
                  <span className="font-semibold text-green-600">
                    Rp 4,5 Milyar 💸 (Masih Bisa Nego!)
                  </span>
                </p>
                <p>
                  <strong>Jangan Lewatkan Peluang Investasi Ini! <br></br></strong> Hubungi kami segera untuk
                  detail lebih lanjut{" "}
                </p>
                <p className="font-semibold text-red-600">
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
  
