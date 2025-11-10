import { Globe, PhoneCall, Tag } from "lucide-react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./index.scss";
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
              <button variant="light" className="btn-bons-plans me-2 px-3 py-2">
                Bons plans <Tag className="me-1" size={14} />
              </button>

              <Button className="riverly-btn btn-devis me-2 px-3 py-2">
                Devis
              </Button>

              <Button className="riverly-btn btn-reservation me-3 ">
                Réservation rapide
              </Button>

              <Nav.Link href="tel:+33357777777" className="fw-bold">
                <Button variant="light">
                  <PhoneCall className="me-1" size={14} />
                  +33 35 77 77 77
                </Button>
              </Nav.Link>
              <Nav.Link
                href="#currency"
                className="d-flex align-items-center text-white"
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
