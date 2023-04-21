import "./Homepage.scss";

import Header from "../../components/Header";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

import member from "../../assets/icons/person.svg";
import swords from "../../assets/icons/sword.svg";

import picture_homepage from "../../assets/images/draft.png";

const Homepage = () => {
  return (
    <div className="body">
      <Header />
      <div className="homepage">
        <div className="homepage_content">
          <div>
            <div className="homepage_content_subtitle">BIENVENUE CHEZ</div>
            <div className="homepage_content_title">COS AND PLAY</div>
          </div>
          <div className="homepage_content_links">
            <div className="homepage_content_links_internals">
              <button>
                <img src={member} alt="" /> Découvrir nos membres
              </button>
              <button>
                <img src={swords} alt="" /> Nos conventions
              </button>
            </div>
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
        <div className="homepage_picture">
          <img src={picture_homepage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
