import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import "../index.css";

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="typecentered-nav">
        <a className="brand" href="/">
          <span className="icon">👟</span> Shoe Spectrum
        </a>
        <nav className={`nav-container ${showMenu ? "show" : ""}`}>
          <button className="nav-links">Shop Now</button>
          <div className="nav-links1">
            <div className="nav-link">
              <a className="cta">Store</a>
            </div>
            <div className="nav-link">
              <a className="cta">Our Story</a>
            </div>
            <div className="nav-link">
              <a className="cta">Designers</a>
            </div>
          </div>
        </nav>

        <button onClick={() => setShowMenu(!showMenu)} className="nav--menu">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </header>
    </>
  );
};

export default Nav;
