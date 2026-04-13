import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Fertilizer Calculator</h3>
          <p>Helping you calculate nutrients efficiently.</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@fertilizer.com</p>
          <p>Phone: +49 123 456789</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fertilizer Calculator. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;