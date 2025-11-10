import { Accordion } from "react-bootstrap";

export default function AccordionItem({ eventKey, title, icon, children }) {
  return (
    <Accordion.Item eventKey={eventKey} className="accordion-item">
      <Accordion.Header className="accordion-header">
        <div className="d-flex align-items-center gap-2">
          {!!icon ? icon : null}
          <span>{title}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body className="accordion-body">{children}</Accordion.Body>
    </Accordion.Item>
  );
}
