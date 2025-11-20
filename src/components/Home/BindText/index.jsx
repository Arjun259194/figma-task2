import { Container } from "react-bootstrap";
import img from "../../../assets/Mother-and-daughter.png";
import "./index.scss";

export default function BindText() {
  return (
    <Container className="bind-text-section" as="section">
      <h3>Riverly, ce qui nous lie</h3>
      <div className="split">
        <div className="text">
          <p>
            Voyager avec Riverly c'est partager une expérience touristique
            authentique. Les maîtres mots sont la proximité, la découverte et
            l'autonomie. En louant votre bateau, vous devenez le capitaine de
            votre croisière fluviale ! Choisissez la convivialité du voyage en
            famille, entre amis ou en couple et découvrez des paysages
            authentiques ! Vous découvrirez également les différents terroirs
            par la nature, le patrimoine, les vignobles, ou encore par la
            population locale.
          </p>
          <p>
            Partir en vacances avec Riverly c'est une façon originale d'observer
            une région au fil de l'eau, votre vie à bord sera chaleureuse et
            ludique. En louant des vélos vous pourrez partir à la découverte de
            merveilles patrimoniales et architecturales. Nous vous aidons à
            établir le parcours en bateau de location qui vous ressemble,
            trouvez la thématique adaptée à vos envies parmi la gastronomie et
            l'œnologie, les escales urbaines et culturelles, le patrimoine et
            l'histoire, grandeur nature et baignade.
          </p>
        </div>
        <img src={img} alt="mother and daughter running" />
      </div>
    </Container>
  );
}
