import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const Layout = () => {
  return (
    <>
      <Header />
      <nav id="main-nav">
        <ul>
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
