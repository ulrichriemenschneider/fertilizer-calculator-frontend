import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Fertilizer Calculator</h1>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Calculator</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;