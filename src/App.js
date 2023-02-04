import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Despre from "./Despre/Despre";
import Facilitati from "./Facilitati/Facilitati";
import FilmareDrona from "./FilmareDrona/FilmareDrona";
import GalerieFoto from "./GalerieFoto/GalerieFoto";
import TurVirtual from "./TurVirtual/TurVirtual";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Despre />
        <Facilitati />
        <FilmareDrona />
        <GalerieFoto />
        <TurVirtual />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
