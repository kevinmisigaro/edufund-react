import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/edufund-logo.png";

export default function NavigationBar() {
  return (
    <Navbar fixed="top" expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
                as={Link}
                to="/dashboard/fundraisers"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Who we are
              </Nav.Link>
            {localStorage.getItem("token") !== null ? (
              <Nav.Link
                as={Link}
                to="/dashboard/fundraisers"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Dashboard
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="ms-auto d-flex flex-row justify-content-end">
            <Nav.Link
              as={Link}
              to="/allfundraisers"
              className="btn"
              style={{
                fontWeight: "bold",
                color: "white",
                background: "#4992e9",
                textDecoration: "none",
              }}
            >
              Donate
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="btn ms-2"
              style={{
                fontWeight: "bold",
                background: "#4992e9",
                color: "white",
                textDecoration: "none",
              }}
            >
              Start a fundraiser
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
