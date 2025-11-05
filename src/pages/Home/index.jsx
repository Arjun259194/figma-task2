import { MoveRight } from "lucide-react";
import PromoBar from "../../components/PromoBar";
import { CircleHeart } from "../../utils/icons.jsx";
import "./index.css";
import Hero from "../../components/Hero/index.jsx";
import Location from "../../components/Location/index.jsx";
import Offer from "../../components/Offer/index.jsx";

export default function Home() {
  return (
    <>
      <PromoBar>
        <CircleHeart />
        <span
          style={{
            color: "var(--rvr-surface)",
            marginInline: "0.25rem",
          }}
        >
          Coup de coeur
        </span>{" "}
        La route des Vins de Bourgogne
        <MoveRight />
      </PromoBar>
      <Hero />
      <Location />
      <Offer />
    </>
  );
}
