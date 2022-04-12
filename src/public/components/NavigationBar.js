import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/edufund-logo.png";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} style={{ maxWidth: "100px" }} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <b>Who we are</b>
              </Link>
            </li>
            {localStorage.getItem("token") == null ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <b>Login</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <b>Sign Up</b>
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/fundraisers">
                  <b>Dashboard</b>
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex flex-row justify-content-center">
            <Link
              to="/allfundraisers"
              style={{
                fontWeight: "bold",
                background: "#4992e9",
                color: "white",
                textDecoration: "none",
              }}
              className="btn"
            >
              Donate
            </Link>
            <Link
              to="/login"
              style={{
                fontWeight: "bold",
                background: "#4992e9",
                color: "white",
                textDecoration: "none",
              }}
              className="btn ms-2"
            >
              Start a fundraiser
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
