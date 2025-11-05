import Header from "../Header/index.jsx";
import trustpilot from "../../assets/trustpilot.png";
import stars from "../../assets/review-stars.png";
import { ArrowRight } from "lucide-react";
import "./index.scss";
import { Container } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero">
      <Header />
      <Container as="section">
        <h1 className="pt-serif-regular">
          Vivez la croisière fluviale, autrement.
        </h1>
        <div className="content">
          <p>
            Partez sans permis à la découverte des rivières et canaux de France
            et d'Europe. Naviguez à votre rythme, partagez des moments précieux
            en famille ou entre amis, reconnectez-vous à la nature et
            redécouvrez ce qui vous lie.
          </p>
          <div className="review">
            <div>
              <span>Basé sur 2130 avis</span>
              <img src={stars} alt="" />
            </div>
            <img src={trustpilot} alt="" />
          </div>
          <a className="action-btn" href="/">
            Plonger dans l'aventure <ArrowRight />
          </a>
        </div>
      </Container>
    </div>
  );
}
