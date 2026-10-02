import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar id="Nav" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand id="Nav-brand" as={NavLink} to="/" className="brand-mark">
          <span className="brand-monogram">S.</span>
          <span className="brand-copy">Sanjay <small>MERN STACK DEVELOPER</small></span>
        </Navbar.Brand>        
        <Navbar.Toggle aria-controls="portfolio-navigation" />
        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
            <NavLink to="/project" className="nav-link">Projects</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;