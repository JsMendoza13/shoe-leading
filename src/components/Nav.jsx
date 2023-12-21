import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import Burger from "./hamburger/Burger";

export const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    function handleRisize() {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    }
    window.addEventListener("resize", handleRisize);
    return () => window.removeEventListener("resize", handleRisize);
  }, []);

  return (
    <>
      <header>
        <div className="button__container">
          <div className="nav__button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className="nav-container">
          <Link to="/" id="brand">
            <span className="icon">👟</span> Shoe Spectrum
          </Link>
          <ul>
            <span
              id="nav__links"
              className={`initial ${clicked ? "active" : ""} `}
            >
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
            </span>
            <div className="burgerClass ">
              <Burger clicked={clicked} handleClick={handleClick} />
              <div
                className={`Bgdiv initial ${clicked ? "active" : ""} `}
              ></div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
