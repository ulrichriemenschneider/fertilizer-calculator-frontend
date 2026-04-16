import CustomBox from "../../components/CustomBox/CustomBox";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <p>Ist Lenny ein ganz großer Stinker mit einem roten Anzug und einem gelben Stirnband?</p>
        <div className="lennys-buttons">
          <button>Ja</button>
          <button>Nein</button>
        </div>
      </div>      
    </>
  );
}

export default Home;
