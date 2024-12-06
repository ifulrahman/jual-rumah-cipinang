const WhatsAppButton = () => {
    const whatsappLink =
      "https://wa.me/6281287104229?text=Halo%20Bpk.%20Syam,%20saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20rumah%20di%20Cipinang%20yang%20sedang%20anda%20jual.";
  
    return (
      <div className="fixed z-50 bottom-4 right-4 font-poppins text-[13px]">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 1.84.405 3.597 1.127 5.17L0 24l6.195-1.61C8.405 23.595 10.162 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.185 22.5a9.24 9.24 0 01-4.785-1.31l-.343-.205-4.09 1.064 1.102-4.003-.22-.394A9.233 9.233 0 1121.2 12c0 5.085-4.14 9.226-9.216 9.226zm5.592-7.96c-.234-.117-1.387-.684-1.603-.76-.216-.077-.374-.117-.533.117-.157.234-.61.76-.747.917-.138.157-.276.176-.51.058-.234-.118-.99-.364-1.884-1.158-.695-.608-1.163-1.36-1.3-1.594-.138-.234-.015-.362.102-.479.108-.107.234-.276.352-.414.118-.138.157-.234.235-.391.077-.157.038-.293-.02-.41-.058-.118-.533-1.282-.73-1.753-.192-.46-.384-.397-.533-.397-.138-.015-.294-.015-.452-.015s-.41.058-.623.293c-.216.234-.82.801-.82 1.953s.841 2.26.957 2.418c.117.157 1.653 2.527 4.013 3.546.56.242.998.387 1.338.5.561.178 1.072.153 1.476.093.45-.068 1.387-.567 1.582-1.115.196-.548.196-1.018.137-1.115-.057-.097-.21-.155-.443-.273z" />
          </svg>
          <span>Tanya Bpk. Syam via WhatsApp</span>
        </a>
      </div>
    );
  };
  
  export default WhatsAppButton;
