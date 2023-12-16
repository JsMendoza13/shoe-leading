import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import "../index.css";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="typecentered-nav">
        <a className="brand" href="/">
          <span className="icon">👟</span> Shoe Spectrum
        </a>
        <nav className="nav-container">
          <button className="btn-shop">Shop Now</button>
          <ul id="nav__links" className={isMenuOpen ? "visible" : ""}>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Our Story</a>
            </li>
            <li>
              <a href="/">Designers</a>
            </li>
          </ul>
        </nav>

        <div className="button__container">
          <button
            className="nav__button"
            aria-controls="nav__links"
            aria-expanded={isMenuOpen}
            aria-label="Menú"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
