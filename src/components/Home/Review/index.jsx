import { Container } from "react-bootstrap";
import { BorderStar, Star } from "../../../utils/icons.jsx";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import useHorizontalScrollControl from "../../../hooks/useHorizontalScollControl.jsx";
import pfp from "../../../assets/review-pfp.png";
import "./index.scss";

const reviews = [
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
  {
    title: "Tout est bien conçu et organisé",
    departure_location: "Départ depuis Glénac",
    reviewer_name: "Josette",
    rating: "5/5",
    text: "La péniche est maniableL'intérieur est propre et bien conçuIl ne manque rien en matière de matériel de cuisine",
  },
];

export default function Review() {
  const { ref, scroll } = useHorizontalScrollControl({ scrollOffecet: 280 });
  return (
    <Container className="reviews-section" as="section">
      <button onClick={() => scroll("left")} className="navigation">
        <ArrowLeft />
      </button>
      <h3>Ils ont voyagé avec nous</h3>
      <div className="ratings">
        <span className="nums">4.4</span>
        <div>
          <p>Excellent sur</p>
          <p>
            <Star /> Trustpilot
          </p>
        </div>
      </div>
      <div ref={ref} className="tiles">
        {reviews.map((r, idx) => {
          return <Tile key={idx} {...r} />;
        })}
      </div>
      <button onClick={() => scroll("right")} className="navigation">
        <ArrowRight />
      </button>
    </Container>
  );
}

const Tile = ({ title, text, departure_location, reviewer_name, rating }) => {
  return (
    <div className="tile">
      <div className="top">
        <h4>{title}</h4>
        <p>{text}</p>
        <p>
          <MapPin />
          {departure_location}
        </p>
      </div>
      <div className="bottom">
        <div>
          <img src={pfp} alt="User placeholder avatar" />
          <span>{reviewer_name}</span>
        </div>
        <span className="rate">
          {rating} <BorderStar />
        </span>
      </div>
    </div>
  );
};
