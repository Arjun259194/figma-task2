import { Globe, Tag } from "lucide-react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./index.css";
import Logo from "../Logo.jsx";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          {/* Logo/Brand */}
          {/* Using custom class and standard Bootstrap classes */}
          <Navbar.Brand href="#home" className="riverly-brand fw-bold">
            <Logo />
          </Navbar.Brand>

          {/* Toggler for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Links and Action Items */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Left/Center Navigation Links */}
            <Nav className="mx-auto">
              <Nav.Link href="#destinations" className="riverly-nav-link">
                Destinations
              </Nav.Link>
              <Nav.Link href="#sejours" className="riverly-nav-link">
                Idées séjours
              </Nav.Link>
              <Nav.Link href="#bateaux" className="riverly-nav-link">
                Nos bateaux
              </Nav.Link>
              <Nav.Link href="#experience" className="riverly-nav-link">
                L'expérience Riverly
              </Nav.Link>
            </Nav>

            <Nav>
              <Button
                variant="light"
                className="riverly-btn btn-bons-plans me-2 px-3 py-2"
              >
                Bons plans <Tag className="me-1" size={14} />
              </Button>

              <Button
                variant="success"
                className="riverly-btn btn-devis me-2 px-3 py-2"
              >
                Devis
              </Button>

              <Button
                variant="success"
                className="riverly-btn btn-reservation me-3 px-3 py-2"
              >
                Réservation rapide
              </Button>

              <Nav.Link
                href="tel:+33357777777"
                className="fw-bold"
                style={{ color: "#333", fontSize: "1rem" }}
              >
                +33 35 77 77 77
              </Nav.Link>
              <Nav.Link
                href="#currency"
                className="d-flex align-items-center"
                style={{ color: "#333" }}
              >
                <Globe className="me-1" size={14} /> FR - €
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
