import img1 from "../../assets/river-card-1.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useHorizontalScrollControl from "../../hooks/useHorizontalScollControl.jsx";
import "./index.scss";

const cards = [
  {
    title: "Canal du Midi",
    content:
      "Une région historique, un savoir-faire unique et une expérience inoubliable.",
    img: img1,
  },
  {
    title: "Bourgogne et environs",
    content:
      "Une région historique, un savoir-faire unique et une expérience inoubliable.",
    img: img1,
  },
  {
    title: "Alsace",
    content:
      "Une région historique, un savoir-faire unique et une expérience inoubliable.",
    img: img1,
  },
  {
    title: "Bretagne",
    content:
      "Une région historique, un savoir-faire unique et une expérience inoubliable.",
    img: img1,
  },
  {
    title: "Canal du Midi",
    content:
      "Une région historique, un savoir-faire unique et une expérience inoubliable.",
    img: img1,
  },
];

export default function RiverCards() {
  const { ref: cardsRef, scroll } = useHorizontalScrollControl({
    scrollOffecet: 400,
  });

  return (
    <section className="river-section" as="section">
      <h3>Nos croisières fluviales</h3>
      <div>
        <button onClick={() => scroll("left")} className="navigation">
          <ArrowLeft />
        </button>
        <div className="tags container">
          <div className="wrapper">
            <span data-active className="tag">
              France
            </span>
            <span className="tag"> Allemagne</span>
            <span className="tag"> Pays-Bas </span>
            <span className="tag"> Italie </span>
            <span className="tag"> Irlande </span>
            <span className="tag"> Portugal </span>
            <span className="tag"> Hongrie </span>
          </div>
          <a href="/">
            Toutes nos croisières fluviales <ArrowRight />
          </a>
        </div>
        <div ref={cardsRef} className="cards">
          {[...cards, ...cards].map((c) => (
            <Card {...c} country="France" />
          ))}
        </div>
        <button onClick={() => scroll("right")} className="navigation">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

const Card = ({
  country,
  redirect,
  img,
  alt = "image of the location",
  title,
  content,
}) => {
  return (
    <div className="card">
      <img src={img} alt={alt} />
      <div>
        <span>{country}</span>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <a href={redirect}>
        Découvrir la région <ArrowRight />
      </a>
    </div>
  );
};
