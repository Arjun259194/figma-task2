import flag from "../../assets/flag.png";
import img from "../../assets/cruise-img.png";
import { Button, Container } from "react-bootstrap";
import "./index.scss";
import useHorizontalScrollControl from "../../hooks/useHorizontalScollControl.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

const tiles = [
  {
    region: "France / Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    details: [
      { label: "Départ", value: "Saverne" },
      { label: "Arrivée", value: "Saverne" },
      { label: "Type", value: "Aller - retour" },
      { label: "Duration", value: "1 semaine" },
    ],
    price: "À partir de 670€",
    cta: "Découvrir l'itinéraire",
  },
  {
    region: "France / Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    details: [
      { label: "Départ", value: "Saint-Léger-sur-Dheune" },
      { label: "Arrivée", value: "Saint-Léger-sur-Dheune" },
      { label: "Type", value: "Aller" },
      { label: "Duration", value: "1 semaine" },
    ],
    price: "À partir de 670€",
    cta: "Découvrir l'itinéraire",
  },
  {
    region: "France / Alsace",
    title: "Croisière sur le canal de la Marne au Rhône",
    details: [
      { label: "Départ", value: "Saverne" },
      { label: "Arrivée", value: "Saverne" },
      { label: "Type", value: "Aller - retour" },
      { label: "Duration", value: "1 semaine" },
    ],
    price: "À partir de 670€",
    cta: "Découvrir l'itinéraire",
  },
];

export default function CurrentFavorites() {
  const { ref, scroll } = useHorizontalScrollControl({ scrollOffecet: 410 });
  return (
    <section className="current-favorites">
      <button className="navigation" onClick={() => scroll("left")}>
        <ArrowLeft />
      </button>
      <Container as="div" className="bar">
        <h3> Coups de coeur du moment</h3>
        <Button className="p-3">Demander un devis gratuit</Button>
      </Container>
      <CruiseTiles ref={ref} tiles={tiles} />
      <button className="navigation" onClick={() => scroll("right")}>
        <ArrowRight />
      </button>
    </section>
  );
}

const CruiseTiles = ({ tiles, ref }) => (
  <div ref={ref} className="tiles">
    {[...tiles, ...tiles].map((t) => {
      return <CruiseTile {...{ ...t, img }} />;
    })}
  </div>
);

const CruiseTile = ({ img, region, title, details, price, cta }) => {
  return (
    <div className="tile">
      <img className="banner" src={img} alt="xyz" />
      <div className="content">
        <div className="region">
          <img src={flag} alt="xyz" /> <span>{region}</span>
        </div>
        <h3>{title}</h3>
        <div className="details">
          {details.map((d) => {
            return (
              <div>
                <span>{d.label}</span>:{" "}
                <span>
                  {d.value.length > 10 ? d.value.slice(0, 9) + "..." : d.value}
                </span>
              </div>
            );
          })}
        </div>
        <Button className="price" variant="light">
          {price}
        </Button>
        <Button className="cta">
          {cta}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};
