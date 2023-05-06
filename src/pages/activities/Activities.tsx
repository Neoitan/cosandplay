import Header from "../../components/Header";
import "./Activities.scss";

const Activities = () => {
  return (
    <div className="body">
      <Header />
      <div className="activities">
        <div className="activities_title">
          DÉCOUVREZ NOS ACTIVITÉS
          <div className="activities_title_subtitle">
            Découvrez ici les activités et prestations proposées par
            l’association durant les conventions et rassemblements !
          </div>
        </div>

        <div className="activities_pres">
          <div className="activities_pres_text">
            La présentation de son travail est pour beaucoup une étape
            importante dans la conception de son cosplay.
          </div>
          <div className="activities_pres_text">
            Pour cela, il existe de nombreuses façons de le faire : mise en
            valeur, mise en scène, présentation technique ou simplement port de
            son costume lors d’événements. C’est ici que CosAndPlay est active
            dans ce vaste univers.
          </div>
          <div className="activities_pres_text">
            Nous sommes en mesure d’organiser de multiples événements de toutes
            sortes. Cela est fait par des cosplayeurs, pour des cosplayeurs. Que
            ce soit en conventions, en médiéval ou dans les rues, nous sommes et
            pouvons y être présent.
          </div>
        </div>

        <div className="activities_concours">
          <div className="activities_concours_title">Les concours</div>
          <div>
            <div>
              CosAndPlay propose aux organisateurs de conventions ou de
              rassemblements l’organisation d’un concours de cosplay donnant
              l’opportunité à des participants de monter sur scène et d’exposer
              leurs créations devant un jury. De l’inscription au passage sur
              scène, jusqu’à la remise des prix, l’association s’occupe de tout
              !
            </div>
            <div className="activities_concours_process">
              La participation à un concours se fait en 3 étapes
              <div className="activities_concours_prepa">
                Les cosplayeurs préparent leurs cosplays en amont du concours.
                Ils sont libres de choisir le thème, le personnage ou encore la
                méthode de création.
              </div>
              <div className="activities_concours_show">
                Une fois le cosplayeur en lice, il doit présenter sur scène son
                costume. Pour se faire, la/le participant à plusieurs choix.
                Poser et laisser les jurys et le public s’attarder
                particulièrement sur les détails, ou bien faire une prestation
                scénique comprenant une chorégraphie accompagnée d’une musique
                ou d’une vidéo.
              </div>
              <div className="activities_concours_results">
                La dernière étape importante du concours est la remise des prix
                et la review faites par les jurés sur le passage de la/du
                cosplayeur. Ils ont, pour juger négativement comme positivement
                les candidats, leurs costumes (détails, conceptions, etc) mais
                aussi leurs prestations scéniques.
              </div>
            </div>
          </div>
        </div>
        <div className="activities_freeStages">
          <div className="activities_freeStages_title">Les scènes libres</div>
          <div>
            <div>
              De la même façon que pour les concours, CosAndPlay propose aux
              cosplayeurs de faire un passage sur scène sans les enjeux d’un
              concours. Une scène libre comporte une inscription et un passage
              sur scène.
            </div>
            <div className="activities_freeStages_process">
              La scène libre présente moins d’enjeu qu’un concours.
            </div>
            <div className="activities_freeStages_prepa">
              A la façon d’un concours, une scène libre accueil les cosplayeurs
              qui ont préparé un cosplay à présenter. La scène leurs permet de
              le mettre en valeur, de le faire découvrir mais également peut
              servir à se préparer à une éventuelle scène concours.
            </div>
            <div className="activities_freeStages_show">
              Bien qu’une scène libre ait un objectif moins précis, le passage
              sur scène reste important à préparer. Le candidats présente son
              travail ou son cosplay de la manière qu’il souhaite. L’important
              est de faire valoir le travail fourni, dans le cosplay ou la mise
              en scène.
            </div>
          </div>
        </div>
        <div className="activities_secondariesStages">
          <div className="activities_secondariesStages_title">
            Les scènes secondaires
          </div>
          <div className="activities_secondariesStages_contents">
            <div className="contents_description">
              CosAndPlay organise des concours ou des scènes libre pour que les
              cosplayeurs puissent venir exposer leurs travails ou les mettre en
              compétitions. Mais ce n’est pas la seule activité scénique
              proposée par l’association !
            </div>
            <div className="activities_secondariesStages_content">
              <div className="activities_secondariesStages_content_gaming">
                <div className="gaming_title">GAMING</div>
                <div className="gaming_content">
                  Concours Mario Kart ou de combat sur Super Smash Bros
                </div>
              </div>
              <div className="activities_secondariesStages_content_blindtest">
                <div className="blindtest_title">BLIND TEST</div>
                <div className="blindtest_content">
                  Passage d’une musique de film, de séries, d’anime durant un
                  court temps et le publique doit deviner l’origine, l’univers
                  ou même être exacte concernant la provenance du son.
                </div>
              </div>
              <div className="activities_secondariesStages_content_quizz">
                <div className="quizz_title">QUIZZ</div>
                <div className="quizz_content">
                  Des quizz sont organisés pour lesquels tout le monde peut
                  participer. A l’aide de son smartphone chacun peut se
                  connecter et ainsi jouer. Les quizz ont des thèmes variés et
                  un grand éventail de questions.
                </div>
              </div>
              <div className="activities_secondariesStages_content_poses">
                <div className="poses_title">CONCOURS DE POSES</div>

                <div className="poses_content">
                  Dans chaque univers, on connait un personnage ou une personne
                  qui arbore une pose particulière pour se mettre en valeurs. On
                  vous propose ici de reproduire ces poses de la meilleure des
                  façon dans le but d’incarner le personnage de la plus fidèle
                  des façons.
                </div>
              </div>
              <div className="activities_secondariesStages_content_craft">
                <div className="craft_title">CRAFT</div>

                <div className="craft_content">
                  L’association comporte évidemment des cosplayeurs mais surtout
                  qui conçoivent leurs propres tenues. C’est cette compétence
                  qui est mise à l’honneur durant ses sessions sur scène. Avec
                  l’aide d’invités ou avec les membres de CosAndPlay, il y a sur
                  scène durant un temps déterminé un craft/conception qui est
                  fait, accompagné d’une conversation sur l’activité en cours.
                  Cela permet à tous de comprendre ou de découvrir ce domaine
                  très vaste.
                </div>
              </div>
              <div className="activities_secondariesStages_content_interviews">
                <div className="interviews_title">INTERVIEWS</div>

                <div className="interviews_content">
                  D’une manière plus posée, vous pourrez retrouver sur scènes
                  des interviews ou des discussions autour d’un thème ou d’un
                  invité. Pour découvrir la personne ou le domaine dont il
                  provient, c’est toujours intéressant à écouter et d’en
                  apprendre par la même occasion.
                </div>
              </div>
              <div className="activities_secondariesStages_content_karaokes">
                <div className="karaokes_title">KARAOKÉ</div>

                <div className="karaokes_content">
                  Les Karaoké sont une évidence sur scène quand on parle des
                  activités. Convivial et pouvant faire découvrir de vrai
                  talent, le chant est une animation apportant beaucoup. Encore
                  une fois, tous les thèmes confondus peuvent être présent !
                </div>
              </div>
              <div className="activities_secondariesStages_content_justdance">
                <div className="justdance_title">JUST DANCE</div>

                <div className="justdance_content">
                  Après le gaming, et le chant, Just Dance reste une activité
                  très prisée des scènes car elle amène une vraie ambiance
                  commune et une ferveur certaines pour les personnes sur scènes
                  comme pour toute personnes devant ou passant.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activities_procession">
          <div className="activities_procession_title">Les défilés cosplay</div>
          <div>
            Lors des conventions, il y a beaucoup de rassemblements de
            cosplayeurs pour parler, s’amuser, danser, mais une activités très
            plaisante reste de se balader en groupe dans les conventions. C’est
            pour cela que CosAndPlay propose à tous ses cosplayeurs de se réunir
            en nombre et de parader entre les stands pour amener de l’animation
            au quatre coins des conventions ! A l’aide de musique et
            d’instruments à percussions, l’ambiance est propagée !
          </div>
        </div>
        <div className="activities_parade">
          <div className="activities_parade_title">
            Les parades & rassemblements
          </div>
          <div>
            L’organisation de parades ainsi que de rassemblements est également
            une activité que CosAndPlay propose. Les déambulations permettent
            aux participants de se rencontrer, d’exposer leurs travail, mais
            surtout de s’amuser en bonne compagnie Ses évènements sont une bonne
            manière de découvrir cet univers vaste et unique qu’est le cosplay.
            La bonne entente et la convivialité sont en tête de liste.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
