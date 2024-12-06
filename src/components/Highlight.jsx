const Highlight = () => {
    return (
      <section className="bg-gray-50 py-6 font-poppins">
        <div className="container mx-auto flex flex-wrap justify-center gap-2">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">🏡</div>
            <p className="text-gray-600 text-sm font-medium">5 Kamar Tidur</p>
          </div>
  
          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">🛁</div>
            <p className="text-gray-600 text-sm font-medium">3 Kamar Mandi</p>
          </div>
  
          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">🚘</div>
            <p className="text-gray-600 text-sm font-medium">Garasi (2 Mobil)</p>
          </div>
  
          {/* Item 4 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">📏</div>
            <p className="text-gray-600 text-sm font-medium">Luas Tanah: 465 m²</p>
          </div>
  
          {/* Item 5 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">📐</div>
            <p className="text-gray-600 text-sm font-medium">Luas Bangunan: 465 m²</p>
          </div>
  
          {/* Item 6 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">🕌</div>
            <p className="text-gray-600 text-sm font-medium">Dekat Musholla</p>
          </div>
  
          {/* Item 7 */}
          <div className="flex flex-col items-center text-center p-1 border bg-[#f2f1ef] rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 w-[150px]">
            <div className="text-3xl mb-1">🛒</div>
            <p className="text-gray-600 text-sm font-medium">
              Dekat Pasar Burung Cipinang
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Highlight;
  