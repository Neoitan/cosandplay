import Header from "../../components/Header";
import "./Conventions.scss";

import ConventionTile from "../../components/ConventionTile";

import pics1 from "../../assets/images/pics1.png";
import pics2 from "../../assets/images/pics2.png";
import pics3 from "../../assets/images/pics3.png";
import pics4 from "../../assets/images/pics4.png";

const Conventions = () => {
  return (
    <div className="bodyconv">
      <div className="body">
        <Header selectedTabIndex={1} />
        <div className="conventions">
          <div className="conventions_part1">
            <div className="conventions_part1_title">
              RETROUVER NOUS EN CONVENTION !
            </div>
            <div className="conventions_part1_subtitle">
              Découvrez ici les conventions et rassemblements à laquelle
              CosAndPlay fait parti ! Vous pourrez retrouver une fiche sur la
              convention ainsi que les dossiers d’inscriptions en cas de scène
              libre et concours.
            </div>
            <div className="conventions_part1_tiles">
              <ConventionTile
                props={{
                  tileName: "name of the tile",
                  subtitle: "subtitle of the tile",
                  link: pics1,
                }}
              />
            </div>
          </div>
          <div className="conventions_part2">
            <div className="conventions_part2_title">
              Nos anciennes participations en convention
            </div>
            <div className="conventions_part2_tiles">
              <ConventionTile
                props={{
                  tileName: "second name",
                  subtitle: "subtitle of the tile",
                  link: pics2,
                }}
              />
              <ConventionTile
                props={{
                  tileName: "second name",
                  subtitle: "subtitle of the tile",
                  link: pics3,
                }}
              />
              <ConventionTile
                props={{
                  tileName: "second name",
                  subtitle: "subtitle of the tile",
                  link: pics4,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conventions;
