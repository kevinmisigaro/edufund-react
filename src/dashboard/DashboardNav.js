import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/edufund-logo.png";

export default function DashboardNav() {
  const navigate = useNavigate();
  const [logoutLoading, setLogout] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = () => {
    setLogout(true);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`)
      .then(() => {
        localStorage.clear();
        setLogout(false);
        navigate("/");
      })
      .catch((err) => {
        setLogout(false);
        console.log(err);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard/fundraisers">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={<span>{user.name}</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="fundraisers">
                Fundraisers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="donations">
                Donations
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="notifications">
                Notifications
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="settings">
                Account settings
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Go Home
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                {logoutLoading ? "Logging out" : "Logout"}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
