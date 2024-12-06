import foto1 from "../assets/images/2.jpg";

const Parallax = () => {
  return (
    <section className="relative" id='kontak'>
      {/* Gambar Parallax */}
      <div
        className="bg-fixed bg-center bg-cover h-[500px]"
        style={{
          backgroundImage: `url(${foto1})`,
        }}
      >
        {/* Overlay */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 font-poppins">
          {/* Konten Tulisan */}
          <div className="px-4 text-center text-white">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
              Hubungi Kami Segera
            </h1>
            <p className="text-lg sm:text-xl">
              <span className="font-semibold">📞 0812-8710-4229 (Bpk. Syam)</span> - Bisa WhatsApp
            </p>
            <p className="mt-2 text-md sm:text-lg">
              Tanpa Perantara!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
