import "./index.css";
import Hero from "../../components/Home/Hero/index.jsx";
import Location from "../../components/Home/Location/index.jsx";
import Offer from "../../components/Home/Offer/index.jsx";
import MapGrid from "../../components/Home/MapGrid/index.jsx";
import RiverCards from "../../components/Home/RiverCards/index.jsx";
import BindText from "../../components/Home/BindText/index.jsx";
import StayInFrance from "../../components/Home/StayInFrance/index.jsx";
import CurrentFavorites from "../../components/Home/CurrentFavorites/index.jsx";
import Review from "../../components/Home/Review/index.jsx";
import Discover from "../../components/Home/Discover/index.jsx";
import Blog from "../../components/Home/Blog/index.jsx";
import Questions from "../../components/Home/Questions/index.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Location />
      <Offer />
      <MapGrid />
      <RiverCards />
      <BindText />
      <StayInFrance />
      <CurrentFavorites />
      <Review />
      <Discover />
      <Blog />
      <Questions />
    </>
  );
}
