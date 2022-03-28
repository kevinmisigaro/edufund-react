import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/edufund-logo.png";

export default function NavigationBar() {
  return (
    <Navbar bg="transparent" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/students"
              style={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
              }}
            >
              Students
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/donors"
              style={{
                fontWeight: "bold",
                color: "white",
                textDecoration: "none",
              }}
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
              <NavDropdown.Item
                as={Link}
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/register"
                style={{ color: "black", textDecoration: "none" }}
              >
                Sign up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
