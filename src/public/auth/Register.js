import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import bg from "../../assets/img/students-caps-up-50.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const [revealPassword, setRevealPassword] = useState(false);

  const changePasswordReveal = () => {
    setRevealPassword(!revealPassword);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/countries`)
      .then((value) => setCountries(value.data));
  }, []);

  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    country: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
  });

  const genders = ["Choose gender", "Male", "Female", "Prefer not to say"];

  const inputStyle = {
    outline: "0",
    borderWidth: "0 0 2px",
  };

  const handleNameChange = (e) => {
    e.persist();
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    e.persist();
    setValues({
      ...values,
      city: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    e.persist();
    setValues({
      ...values,
      gender: e.target.value,
    });
  };

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

  const handleConfirmPasswordChange = (e) => {
    e.persist();
    setValues({
      ...values,
      confirmPassword: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      country: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    e.persist();
    setValues({
      ...values,
      phone: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(values);

    let data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      country_id: values.country,
      password: values.password,
      city: values.city,
      gender: values.gender,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, data)
      .then((res) => {
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
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  };

  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid bg-primary"
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
            <h3 style={{ fontWeight: "bold" }}>Sign up to start fundraising</h3>
            {/* <p>Are you a company? Sign up as a company</p> */}
            <hr />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row" style={{ textAlign: "left" }}>
                <div className="col-md-6 mb-3">
                  <label>Fullname <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    onChange={handleNameChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Email <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Email"
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>City <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={handleCityChange}
                    placeholder="City"
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Country of residence <span className="text-danger">*</span></label>
                  <select
                    className="form-control"
                    onChange={handleCountryChange}
                    style={inputStyle}
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={handlePhoneChange}
                    placeholder="Phone number"
                    style={inputStyle}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Gender <span className="text-danger">*</span></label>
                  <select
                    className="form-control"
                    style={inputStyle}
                    onChange={handleGenderChange}
                  >
                    {genders.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Password <span className="text-danger">*</span></label>
                  <input
                    className="form-control"
                    style={inputStyle}
                    type={revealPassword ? "text" : "password"}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                  {revealPassword ? (
                    <FaEyeSlash
                      className="reveal text-green-700"
                      onClick={changePasswordReveal}
                    />
                  ) : (
                    <FaEye
                      className="reveal text-green-700"
                      onClick={changePasswordReveal}
                    />
                  )}
                </div>

                <div className="d-grid mt-4">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ fontWeight: "bold" }}
                  >
                    {loading ? "Joining" : "JOIN"}
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Already have an account? <Link to="/login">Log in</Link>
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
