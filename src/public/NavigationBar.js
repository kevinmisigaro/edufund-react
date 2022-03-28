import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/edufund-logo.png";

export default function NavigationBar() {
  return (
    <Navbar bg="transparent" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{ maxWidth: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ fontWeight: "bold", color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/students"
              style={{ fontWeight: "bold", color: "white" }}
            >
              Students
            </Nav.Link>
            <Nav.Link
              href="/donors"
              style={{ fontWeight: "bold", color: "white" }}
            >
              Donors
            </Nav.Link>
            <NavDropdown
              className="text-white"
              title={
                <span className="text-white" style={{ fontWeight: "bold" }}>
                  Start a fundraiser
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
