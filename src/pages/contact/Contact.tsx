import "./Contact.scss";

import Header from "../../components/Header";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const Contact = () => {
  return (
    <div className="bodyhp">
      <div className="body">
        <Header selectedTabIndex={0} contactus={true} />
        <div className="homepage">
          <div className="homepage_content">
            <div>
              <div className="homepage_content_subtitle">BIENVENUE CHEZ</div>
              <div className="homepage_content_title">COS AND PLAY</div>
            </div>
            <div className="homepage_content_links">
              <div className="homepage_content_links_sn">
                <img
                  className="homepage_content_links_sn grow"
                  src={facebook}
                  alt=""
                />
                <img
                  className="homepage_content_links_sn grow"
                  src={instagram}
                  alt=""
                />
                <img
                  className="homepage_content_links_sn grow"
                  src={twitter}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
