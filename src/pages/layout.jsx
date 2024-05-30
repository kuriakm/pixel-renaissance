import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header />
      <nav id="main-nav">
        <div id="toggle-box" onClick={toggleMenu}>
          <div id="toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <ul
          id="nav-items"
          className={menuOpen ? "columns" : "columns hide-small"}
        >
          <li id="home">
            <Link to="/">Home</Link>
          </li>
          <li id="about">
            <Link to="/about">About</Link>
          </li>
          <li id="blog">
            <Link to="/blog">Blog</Link>
          </li>
          <li id="store">
            <Link to="/store">Store</Link>
          </li>
          <li id="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Outlet displays page links */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
