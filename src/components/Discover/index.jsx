import { ArrowLeft, ArrowRight } from "lucide-react";
import one from "../../assets/boats-icon/1.png";
import two from "../../assets/boats-icon/2.png";
import boat1 from "../../assets/boats-image/Product image.png";
import boat2 from "../../assets/boats-image/Product image-1.png";
import boat3 from "../../assets/boats-image/Product image-2.png";
import { Button, Container } from "react-bootstrap";
import "./index.scss";
import useHorizontalScrollControl from "../../hooks/useHorizontalScollControl.jsx";

const tiles = [
  {
    type: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    features: ["4 cabines", "3 salles d'eau", "Climatisation"],
    price_from: "À partir de 990€",
    button_text: "Découvrir le bateau",
    img: boat2,
  },
  {
    type: "CONFORT",
    title: "Pénichette Comfort 4/6 pers.",
    features: ["4 cabines", "3 salles d'eau", "Climatisation"],
    price_from: "À partir de 990€",
    button_text: "Découvrir le bateau",
    img: boat1,
  },
  {
    type: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    features: ["4 cabines", "3 salles d'eau", "Climatisation"],
    price_from: "À partir de 990€",
    button_text: "Découvrir le bateau",
    img: boat2,
  },
  {
    type: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    features: ["4 cabines", "3 salles d'eau", "Climatisation"],
    price_from: "À partir de 990€",
    button_text: "Découvrir le bateau",
    img: boat3,
  },
  {
    type: "PREMIUM +",
    title: "Cruiser Premium + 6/8 pers.",
    features: ["4 cabines", "3 salles d'eau", "Climatisation"],
    price_from: "À partir de 990€",
    button_text: "Découvrir le bateau",
    img: boat2,
  },
];

export default function Discover() {
  const { ref, scroll } = useHorizontalScrollControl({
    scrollOffecet: 400,
  });
  return (
    <section className="discover-section">
      <button onClick={() => scroll("left")} className="navigation">
        <ArrowLeft />
      </button>
      <h3>Découvrez nos bateaux sans permis</h3>
      <Filters />
      <Tiles ref={ref} tiles={tiles} />
      <button onClick={() => scroll("right")} className="navigation">
        <ArrowRight />
      </button>
    </section>
  );
}

const Filters = () => {
  return (
    <Container className="filter-and-action">
      <div className="tags">
        <button data-active={true} className="tag">
          Classic
        </button>
        <button className="tag">Comfort</button>
        <button className="tag">Premium</button>
        <button className="tag">Premium +</button>
      </div>
      <div className="filters">
        <button className="filter">
          <img src={one} alt="boat icon" />
          <span>Pénichettes</span>
        </button>
        <button className="filter">
          <img src={two} alt="boat icon" />
          <span>Cruisers</span>
        </button>
      </div>

      <a href="/">
        Tous nos bateaux <ArrowRight size={16} />
      </a>
    </Container>
  );
};

const Tiles = ({ tiles, ref }) => {
  return (
    <div ref={ref} className="tiles">
      {tiles.map((t, idx) => {
        return <Tile key={idx} {...t} />;
      })}
    </div>
  );
};

const Tile = ({ img, type, title, features, price_from, button_text }) => {
  return (
    <div className="tile">
      <img src={img} alt="boat on water" />
      <div className="bottom">
        <h4>{title}</h4>
        <div className="features">
          {features.map((f, idx) => {
            return <span key={idx}>{f}</span>;
          })}
        </div>
        <Button className="price" variant="light">
          {price_from}
        </Button>
        <Button className="action">{button_text}</Button>
      </div>
      <span className="type">{type}</span>
    </div>
  );
};
