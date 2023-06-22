import "./Header.scss";

import logo from "../assets/logos/logo.svg";
import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <div className="header">
      <div className="header_linker-logo">
        <Link to="/">
          <img className="header_logo" src={logo} alt="logo_cosandplay" />
        </Link>
      </div>
      <div className="header_tabs">
        <Link className="link" to={"/"}>
          <div className={"header_tabs_tab"}>ACCUEIL</div>
        </Link>
        <Link className="link" to={"/conventions"}>
          <div className={"header_tabs_tab"}>CONVENTIONS</div>
        </Link>
        <Link className="link" to={"/association"}>
          <div className={"header_tabs_tab "}>L'ASSOCIATION</div>
        </Link>
        <Link className="link" to={"/activities"}>
          <div className={"header_tabs_tab "}>NOS ACTIVITÉS</div>
        </Link>
      </div>
      {!props.contactus ? (
        <div className="header_contact">
          <Link className="link" to={"/contact"}>
            <button className="header_contact-button">NOUS CONTACTER</button>
          </Link>
        </div>
      ) : (
        <div className="header_contact_hide">
          <Link className="link" to={"/contact"}>
            <button className="header_contact-button">NOUS CONTACTER</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
