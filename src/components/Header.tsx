import "./Header.scss";

import logo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_linker-logo">
        <Link to="/">
          <img className="header_logo" src={logo} alt="logo_cosandplay" />
        </Link>
      </div>
      <div className="header_tabs">
        <div className="header_tabs_tab">ACCUEIL</div>
        <div className="header_tabs_tab">CONVENTIONS</div>
        <div className="header_tabs_tab">L'ASSOCIATION</div>
        <div className="header_tabs_tab">NOS ACTIVITÉS</div>
      </div>
      <div className="header_contact">
        <button
          className="header_contact-button"
          onClick={() => {
            console.log("CONTACT US");
          }}
        >
          NOUS CONTACTER
        </button>
      </div>
    </div>
  );
};

export default Header;
