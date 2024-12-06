import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Specs from "./components/Specs";
import Images from "./components/Images";
import Parallax from "./components/Parallax";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Information from "./components/Information";
import WhatsApp from "./components/WhatsApp";

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <Navbar scrollToSection={scrollToSection} />

      <Header />

      <Highlight />

      <Specs />

      <Images />

      <Parallax />

      <Information />

      <Maps />

      <WhatsApp />

      <Footer/>
    </div>
  );
};

export default App;
