import { Bath, Car, Home, Moon, Ruler, Store } from "lucide-react";

const Highlight = () => {
    return (
      <section className="py-6 bg-gray-50 font-poppins">
        <div className="container flex flex-wrap justify-center gap-2 mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Home className="mt-2 mb-2 text-3xl"></Home>
            <p className="text-sm font-medium text-gray-600">5 Kamar Tidur</p>
          </div>
  
          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Bath className="mt-2 mb-2 text-3xl">🛁</Bath>
            <p className="text-sm font-medium text-gray-600">3 Kamar Mandi</p>
          </div>
  
          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Car className="mt-2 mb-2 text-3xl"></Car>
            <p className="text-sm font-medium text-gray-600">Garasi (2 Mobil)</p>
          </div>
  
          {/* Item 4 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Ruler className="mt-2 mb-2 text-3xl"></Ruler>
            <p className="text-sm font-medium text-gray-600">Luas Tanah: 330 m²</p>
          </div>
  
          {/* Item 5 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Ruler className="mt-2 mb-2 text-3xl"></Ruler>
            <p className="text-sm font-medium text-gray-600">Luas Bangunan: 330 m²</p>
          </div>
  
          {/* Item 6 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Moon className="mt-2 mb-2 text-3xl"></Moon>
            <p className="text-sm font-medium text-gray-600">Dekat Musholla</p>
          </div>
  
          {/* Item 7 */}
          <div className="flex flex-col items-center text-center p-1 border bg-gradient-to-b from-black/60 via-amber-900/20 to-transparent rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <Store className="mt-2 mb-2 text-3xl"></Store>
            <p className="text-sm font-medium text-gray-600">
              Dekat Pasar Burung Cipinang
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Highlight;
  