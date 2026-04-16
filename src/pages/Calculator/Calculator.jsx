import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [formData, setFormData] = useState({
    volume: "",
    manufacturer: "",
    co2: "no",
    no3: "",
    po4: "",
    fe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <form className="calculator-form" onSubmit={handleSubmit}>
        
        {/* Aquarium Größe */}
        <div className="form-group">
          <label>Aquariumgröße (Liter)</label>
          <input
            type="number"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
          />
        </div>

        {/* Düngesystem */}
        <div className="form-group">
          <label>Düngesystem Hersteller</label>
          <select name="manufacturer" value={formData.manufacturer} onChange={handleChange}>
            <option value="1">Aqua Rebell</option>
            <option value="2">Masterline</option>
            <option value="3">Dennerle</option>
          </select>
        </div>

        {/* CO2 */}
        <div className="form-group">
          <label>CO₂-Zugabe</label>
          <select name="co2" value={formData.co2} onChange={handleChange}>
            <option value="20">20 mg/l</option>
            <option value="30">30 mg/l</option>
            <option value="no">Keine CO2-Zugabe</option>
          </select>
        </div>

        {/* Wasserwerte */}
        <div className="form-group">
          <label>NO3 (Nitrat)</label>
          <input
            type="number"
            name="no3"
            value={formData.no3}
            onChange={handleChange}
            placeholder="mg/l"
          />
        </div>

        <div className="form-group">
          <label>PO4 (Phosphat)</label>
          <input
            type="number"
            name="po4"
            value={formData.po4}
            onChange={handleChange}
            placeholder="mg/l"
          />
        </div>

        <div className="form-group">
          <label>Fe (Eisen)</label>
          <input
            type="number"
            name="fe"
            value={formData.fe}
            onChange={handleChange}
            placeholder="mg/l"
          />
        </div>

        <button type="submit">Berechnen</button>
      </form>
    </div>
  );
}

export default Calculator;