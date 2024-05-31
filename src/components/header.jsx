import "../styles/header.css";
import logo from "../images/logo-color.png";

const Header = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <img src={logo} alt="A colorful game controller" />
        <h1>Pixel Renaissance</h1>
      </div>
    </header>
  );
};

export default Header;
