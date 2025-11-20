import img1 from "../../../assets/Frame 1.png";
import img2 from "../../../assets/Frame 1-1.png";
import img3 from "../../../assets/Frame 1-2.png";
import img4 from "../../../assets/Frame 1-3.png";

import "./index.scss";
import { ArrowRight } from "lucide-react";
import { Wave2 } from "../../../utils/wave.jsx";
import { Container } from "react-bootstrap";

const cards = [
  {
    title: "Oenologie & Gastronomie",
    description:
      "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
    cta: "Découvrir",
    img: img1,
  },
  {
    title: "Baignade",
    description:
      "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
    cta: "Découvrir",
    img: img2,
  },
  {
    title: "100% Nature",
    description:
      "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
    cta: "Découvrir",
    img: img3,
  },
  {
    title: "Patrimoine",
    description:
      "Direction la gastronomie et les cépages dans ces escapades gourmandes et romantiques.",
    cta: "Découvrir",
    img: img4,
  },
];

export default function StayInFrance() {
  return (
    <section className="stay-in-france-section">
      <h3>Idées de séjour en France</h3>
      <Tiles cards={cards} />
      <a className="action" href="/">
        Toutes nos thématiques <ArrowRight size={16} />
      </a>
      <Wave2 className="wave" />
    </section>
  );
}

const Tiles = ({ cards }) => (
  <Container as="div" className="tiles">
    {cards.map((c) => (
      <Tile {...c} />
    ))}
  </Container>
);

const Tile = ({ title, description, cta, img, alt = "location" }) => {
  return (
    <div className="tile">
      <img src={img} alt={alt} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <a href="/">
          {cta} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};
