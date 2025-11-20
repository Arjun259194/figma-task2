import { Button, Container } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import card1 from "../../../assets/card-1.png";
import card2 from "../../../assets/card-2.png";
import card3 from "../../../assets/card-3.png";
import ScrollCard from "./ScrollCard.jsx";
import "./index.scss";
import useHorizontalScrollControl from "../../../hooks/useHorizontalScollControl.jsx";

const cards = [
  {
    title: "Les prix Crazy sur votre été",
    content:
      "Valable sur une sélection de croisières d'une semaine en juillet, août et septembre jusqu'au lundi 26 mai à 23h59.",
    img: card1,
  },
  {
    title: "Last Minute-30% sur tout mai",
    content:
      "Embarquez pour une aventure fluviale en mai.-30% sur tous les séjours de mai",
    img: card2,
  },
  {
    title: "Last Minute-30% sur tout mai",
    content:
      "Embarquez pour une aventure fluviale en mai.-30% sur tous les séjours de mai",
    img: card3,
  },
];

export default function Offer() {
  const { ref, scroll } = useHorizontalScrollControl({ scrollOffecet: 500 });
  return (
    <section>
      <Container className="title">
        <h2>Les offres du moment</h2>
        <Button variant="outline-warning">Toutes les offres spéciales</Button>
      </Container>
      <Container className="offer">
        <ArrowLeft
          size={32}
          className="cursor-pointer navigation"
          onClick={() => scroll("left")}
          style={{ cursor: "pointer" }}
        />
        <div ref={ref}>
          {cards.map((card, index) => (
            <ScrollCard key={index} {...card} />
          ))}
        </div>
        <ArrowRight
          size={32}
          className="cursor-pointer navigation"
          onClick={() => scroll("right")}
          style={{ cursor: "pointer" }}
        />
      </Container>
    </section>
  );
}
