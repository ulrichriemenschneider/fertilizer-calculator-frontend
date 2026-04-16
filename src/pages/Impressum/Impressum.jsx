import "./Impressum.css";

function Impressum() {
  return (
    <div className="impressum">
      <h1>Impressum</h1>

      <div className="impressum-box">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p>Ulrich Riemenschneider</p>
        <p>Winkelstr. 5</p>
        <p>30890 Barsinghausen</p>
      </div>

      <div className="impressum-box">
        <p><strong>Kontakt</strong></p>
        <p>Telefon: +49 176 80499381</p>
        <p>E-Mail: info@fertilizer-calculator.de</p>
      </div>

      <div className="impressum-box">
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong></p>
        <p>Ulrich Riemenschneider</p>
        <p>Winkelstr. 5</p>
        <p>30890 Barsinghausen</p>
      </div>
    </div>
  );
}

export default Impressum;