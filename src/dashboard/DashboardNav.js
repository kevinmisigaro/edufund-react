import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/edufund-logo.png";

export default function DashboardNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard/fundraisers">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Kevin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="fundraisers">
                Fundraisers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="donations">
                Donations
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="settings">
                Account settings
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
