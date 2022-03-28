import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/edufund-logo.png";

export default function NavigationBar() {
  return (
    <Navbar bg="transparent" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/students"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Students
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/donors"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Donors
              </Link>
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
              <NavDropdown.Item>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
