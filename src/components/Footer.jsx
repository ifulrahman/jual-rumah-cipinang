import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 font-poppins text-[14px]">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto space-y-6 sm:flex-row sm:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={logo}
            alt="Logo Residensi Jaktim"
            className="w-32 h-auto mb-4"
          />
          <p className="text-center text-gray-400 sm:text-left">
            ©2024 Residensi Jaktim. All Rights Reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center sm:text-right">
          <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
          <p className="mb-2">
            <span className="font-semibold">Alamat Rumah Terkait:</span> <br />
            Jl. Cipinang Kebembem, Jaktim, Belakang SDELOG POLRI (DKN)
          </p>
          <p className="mb-2">
            <span className="font-semibold">Telepon:</span>{" "}
            <a
              href="tel:081287104229"
              className="text-orange-400 hover:underline"
            >
              0812-8710-4229 (Bpk. Syam)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
