import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import bg from "../../assets/img/students-caps-up-50.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const handleEmailChange = (e) => {
    e.persist();
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    e.persist();
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);
          setLoading(false);
          navigate("/dashboard/fundraisers");
        })
        .catch((err) => {
          console.log(err);
          toast.error('Failed to login')
          setLoading(false);
        });

  };

  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container d-flex flex-row justify-content-center">
          <div
            className="card shadow p-4"
            style={{ width: "40rem", marginTop: "100px", padding: "20px 0" }}
          >
            <h3 style={{ fontWeight: "bold" }}>Login</h3>
            <hr />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control"
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    className="form-control"
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    {loading ? "Logging in..." : "LOG IN"}
                  </button>
                </div>

                <div className="mt-4">
                  <p>
                    Do not have an account? <Link to="/register">Sign up</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
