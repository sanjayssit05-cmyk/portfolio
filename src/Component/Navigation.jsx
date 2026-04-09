import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar id="Nav" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand id="Nav-brand" className="fw-bold fs-5 text-white alert-danger ">
           Mern <br /> <span className=" fw-bolder fs-5"> stack Developer</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto fw-bolder fs-6">
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