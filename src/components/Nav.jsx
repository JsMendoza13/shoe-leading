import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

export const Nav = () => {
  const [navBtnOpen, setNavBtnOpen] = useState(false);

  return (
    <>
      <header>
        <div className="button__container">
          <div
            className="nav__button"
            aria-controls="nav__links"
            aria-expanded="true"
            aria-label="Menú"
            onClick={() => setNavBtnOpen(!navBtnOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className="nav-container">
          <Link to="/" className="brand">
            <span className="icon">👟</span> Shoe Spectrum
          </Link>
          <ul id="nav__links" className={navBtnOpen ? "open" : ""}>
            <li>
              <NavLink to="/">Store</NavLink>
            </li>
            <li>
              <NavLink to="/">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/">Designers</NavLink>
            </li>
            <li>
              {" "}
              <button className="btn-shop">Shop Now</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
