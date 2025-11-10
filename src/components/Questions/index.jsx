import { Accordion, Container } from "react-bootstrap";
import AccordionItem from "../AccordionItem.jsx";
import "./index.scss";
import { ArrowRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Combien coûte la location de bateau ?",
    answer:
      "Les prix varient selon la durée, la saison et le type de bateau. La location commence à environ 1 120 € pour une semaine en basse saison. Pour un tarif précis, consultez le site Riverly ou contactez notre service clientèle.",
    is_open: true,
  },
  {
    id: 2,
    question: "Comment louer un bateau avec Riverly ?",
    answer: "[Placeholder for the answer on how to rent a boat with Riverly]",
    is_open: false,
  },
  {
    id: 3,
    question: "Est-il nécessaire d'avoir un permis pour louer un bateau ?",
    answer:
      "[Placeholder for the answer regarding the need for a boat license/permit]",
    is_open: false,
  },
  {
    id: 4,
    question:
      "Quels sont les équipements inclus avec la location de mon bateau ?",
    answer:
      "[Placeholder for the answer detailing the included equipment and amenities]",
    is_open: false,
  },
];

export default function Questions() {
  return (
    <Container as="section" className="question-section">
      <h3>Les questions fréquentes</h3>

      <Accordion as="div" className="questions">
        {questions.map((q, idx) => {
          return (
            <AccordionItem key={idx} title={q.question} eventKey={q.id}>
              {q.answer}
            </AccordionItem>
          );
        })}
      </Accordion>
      <a className="discover-faq-link" href="/">
        Découvrir la FAQ <ArrowRight size={16} />
      </a>
    </Container>
  );
}
