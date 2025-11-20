import { useState } from "react";
import { Tab, Nav, Form, Row, Col, Button } from "react-bootstrap";
import { Lighthouse } from "../../../utils/icons.jsx";

function SearchTabNav({ activeTab }) {
  return (
    <Nav variant="pills" className="flex-row">
      <Nav.Item>
        <Nav.Link
          eventKey="itinerary"
          className="tab-btn"
          style={{
            backgroundColor:
              activeTab === "itinerary" ? "#306864" : "rgba(48, 104, 100, 0.5)",
          }}
        >
          <Lighthouse /> Recherche par itinéraire
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="tab-btn"
          eventKey="boat"
          style={{
            backgroundColor:
              activeTab === "boat" ? "#306864" : "rgba(48, 104, 100, 0.5)",
          }}
        >
          Recherche par Bateau
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function SearchInputs() {
  return (
    <>
      <Col md={3} className="pt-2">
        <Form.Label className="fw-bold text-dark">Destination</Form.Label>
        <Form.Select className="tab-input" aria-label="Destination Select">
          <option>Bourgogne et environs</option>
          <option value="1">Other Region 1</option>
          <option value="2">Other Region 2</option>
        </Form.Select>
      </Col>
      <Col md={3} className="pt-2">
        <Form.Label className="fw-bold text-dark">Date de départ</Form.Label>
        <Form.Control
          className="tab-input"
          type="date"
          defaultValue="2025-06-19"
        />
      </Col>
      <Col md={2} className="pt-2">
        <Form.Label className="fw-bold text-dark">Durée du séjour</Form.Label>
        <Form.Select className="tab-input" aria-label="Duration Select">
          <option>Une semaine</option>
          <option value="1">Weekend</option>
          <option value="2">Two weeks</option>
        </Form.Select>
      </Col>
      <Col md={2} className="pt-2">
        <Form.Label className="fw-bold text-dark">Équipage</Form.Label>
        <Form.Select className="tab-input" aria-label="Crew Select">
          <option>2 adultes</option>
          <option value="3">3 adultes</option>
          <option value="4">4 adultes</option>
        </Form.Select>
      </Col>
      <Col md={2}>
        <Button
          type="submit"
          className="w-100 fw-bold"
          style={{
            backgroundColor: "#306864",
            borderColor: "#306864",
            whiteSpace: "nowrap",
            padding: "0.6rem 0.5rem",
          }}
        >
          Lancer ma recherche →
        </Button>
      </Col>
    </>
  );
}

function BoatModelInput() {
  return (
    <Col md={3}>
      <Form.Label className="fw-bold text-dark">Modèle de Bateau</Form.Label>
      <Form.Select>
        <option>Tous les modèles</option>
      </Form.Select>
    </Col>
  );
}

function SearchForm({ children, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Row className="align-items-end g-3">{children}</Row>
    </Form>
  );
}

function SearchFormComponent() {
  const [activeTab, setActiveTab] = useState("itinerary");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted for: ${activeTab}`);
  };

  return (
    <div className="search">
      <div>
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <SearchTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <div
            className="p-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Tab.Content>
              <Tab.Pane eventKey="itinerary">
                <SearchForm onSubmit={handleSubmit}>
                  <SearchInputs />
                </SearchForm>
              </Tab.Pane>
              <Tab.Pane eventKey="boat">
                <SearchForm onSubmit={handleSubmit}>
                  <BoatModelInput />
                  <SearchInputs />
                </SearchForm>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
}

export default SearchFormComponent;
