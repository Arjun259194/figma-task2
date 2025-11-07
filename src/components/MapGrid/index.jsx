import { ArrowRight } from "lucide-react";
import { Container } from "react-bootstrap";
import map from "../../assets/map.png";
import img1 from "../../assets/map-grid/Image.png";
import img2 from "../../assets/map-grid/Image-1.png";
import img3 from "../../assets/map-grid/Image-2.png";
import img4 from "../../assets/map-grid/Image-3.png";
import img5 from "../../assets/map-grid/Image-4.png";
import img6 from "../../assets/map-grid/Image-5.png";
import "./index.scss";

const grid = [
  { text: "Alsace & Ardeness", img: img1 },
  { text: "Anjou", img: img2 },
  { text: "Bourgogne & Saone", img: img3 },
  { text: "Bretange", img: img4 },
  { text: "Charente", img: img5 },
  { text: "Camargue", img: img6 },
];

export default function MapGrid() {
  return (
    <section className="map-grid">
      <Container className="title" as="div">
        <h3>Nos destinations de location de bateau</h3>
        <a href="/">
          Toutes nos destinations <ArrowRight />
        </a>
      </Container>
      <Container className="content" as="div">
        <div className="frames">
          <div className="left">
            <Frame />
            <Frame />
            <Frame />
            <Frame />
          </div>
          <img className="right" src={map} alt="location-map" />
        </div>
      </Container>
    </section>
  );
}

const Frame = () => {
  return (
    <div className="frame">
      <span>
        Croisière fluviale en France <ArrowRight size={14} />
      </span>
      <div className="boxs">
        {grid.map((g, i) => {
          return <Box key={i} {...g} />;
        })}
      </div>
    </div>
  );
};

const Box = ({ img, text, alt = "location" }) => {
  return (
    <div className="box">
      <img src={img} alt={alt} />
      <span>{text}</span>
    </div>
  );
};
