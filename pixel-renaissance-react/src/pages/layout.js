import { Outlet, Link } from "react-router-dom";
import "../styles/index.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const Layout = () => {
  return (
    <>
      <Header />
      <nav id="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
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
