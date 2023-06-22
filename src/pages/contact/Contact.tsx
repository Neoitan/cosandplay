import "./Contact.scss";

import Header from "../../components/Header";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const Contact = () => {
  return (
    <div className="bodycontact">
      <div className="body">
        <Header selectedTabIndex={0} contactus={true} />
        <div className="contact">
          <div className="contact_header">
            <div className="contact_header_title">
              Vous souhaitez nous contacter ?
            </div>
            <div className="contact_header_subtitle">
              Vous avez dans l’intention d’organiser un événement, un
              rassemblement, une convention ou même une simple rencontre ? Alors
              n’hésitez pas à remplir le formulaire si joint pour nous contacter
              !
            </div>
          </div>
          <div className="contact_form">
            <div className="contact_form_block">
              <label className="contact_form_block_idName">Votre nom</label>
              <input
                type="text"
                className="contact_form_block_field text"
              ></input>
            </div>
            <div className="contact_form_block">
              <label className="contact_form_block_idName">Votre email</label>
              <input
                type="text"
                className="contact_form_block_field text"
              ></input>
            </div>
            <div className="contact_form_block">
              <label className="contact_form_block_idName">Votre objet</label>
              <input
                type="text"
                className="contact_form_block_field text"
              ></input>
            </div>
            <div className="contact_form_block">
              <label className="contact_form_block_idName">Votre message</label>
              <textarea className="contact_form_block_field message"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
