import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Calculator from "./pages/Calculator/Calculator";
import Home from "./pages/Home/Home";
import Impressum from "./pages/Impressum/Impressum";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Home />
          <Calculator />
          <Impressum />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
