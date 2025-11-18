import { Globe, Heart } from "lucide-react";
import { Container, Accordion } from "react-bootstrap";
import "./index.scss";
import AccordionItem from "../AccordionItem";
import { Wave } from "../../utils/wave.jsx";

export default function Location() {
  return (
    <section className="location-section">
      <Wave className="wave" />
      <Container className="con" as="div">
        <div className="left">
          <h2>Location de bateau sans permis, avec Riverly.</h2>
          <p>
            Découvrez la richesse culturelle des territoires au côté de ceux qui
            comptent. Riverly, c'est bien plus qu'une croisière, c'est une
            expérience.
          </p>
        </div>
        <div className="right">
          <Accordion>
            <AccordionItem
              eventKey="0"
              title="Vivez l'expérience authentique du tourisme fluvial"
              icon={<Globe className="accordion-icon" />}
            >
              Voyager avec Riverly c'est partager une expérience touristique
              authentique. Les motifs sont la proximité, la découverte et
              l'autonomie. En louant votre bateau, une nouvelle façon de voyager
              s'ouvre à vous : détendu et convivial/e en famille en entre amis
              ou en couple ! Découvrez des paysages authentiques ! Vous
              découvrirez également les différents terroirs par la nature, le
              patrimoine, les vignobles, ou encore par la population locale.
            </AccordionItem>

            <AccordionItem
              eventKey="1"
              title="Des vacances originales et personnalisées avec Riverly"
              icon={<Heart className="accordion-icon" />}
            >
              Une croisière fluviale rime avec liberté ! Vous êtes aux commandes
              de votre bateau et de vos vacances. De la durée de votre séjour
              jusqu'au choix de votre destination, tout est modulable. Faites
              escale quand vous le souhaitez, improvisez une balade à vélo ou
              une visite culturelle, dînez à bord ou au restaurant... Chacun vit
              ses vacances comme il l'entend !
            </AccordionItem>

            <AccordionItem
              eventKey="2"
              title="Des croisières fluviales inoubliables vous attendent"
              icon={<Globe className="accordion-icon" />}
            >
              Avec plus de 200 bateaux dans notre flotte, nous vous proposons
              plusieurs formules de location. Pour une escapade en couple, optez
              pour un bateau compact et cozy comme le Primo®. Pour une croisière
              entre amis ou en famille, préférez un bateau plus spacieux comme
              le Quattro® ou le Vision. La croisière fluviale, c'est des
              vacances insolites et originales, accessibles à tous !
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
