import { Link } from "@remix-run/react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">Virtual Pocket</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/Transfers">Transfers</Nav.Link>
          <Nav.Link as={Link} to="/Movements">Movements</Nav.Link>
          <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}