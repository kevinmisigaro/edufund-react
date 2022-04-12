import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import bg from "../../assets/img/students-caps-up-50.png";
import axios from "axios";
import apiUrl from "../../config";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/countries`).then((value) => setCountries(value.data));
  }, []);

  const [values, setValues] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    country: "",
    email:"",
    phone: "",
    city: "",
    gender: ""
  });

  const genders = ["Choose gender", "Male", "Female"]

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
      gender: values.gender
    };

    axios
      .post(`${apiUrl}/register`, data)
      .then((res) => {
        
        axios.get(`http://127.0.0.1:8000/sanctum/csrf-cookie`).then(() => {

          axios
            .post(`${apiUrl}/login`, {
              email: values.email,
              password: values.password,
            })
            .then((response) => {
              localStorage.setItem('user', JSON.stringify(response.data.user));
              localStorage.setItem('token',response.data.token)
              setLoading(false);
              navigate("/dashboard/fundraisers");
            });

        })

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
            <p>Are you a company? Sign up as a company</p>
            <hr />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    onChange={handleNameChange}
                    className="form-control"
                    placeholder="Fullname"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    onChange={handleCityChange}
                    placeholder="City"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    className="form-control"
                    onChange={handleCountryChange}
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>


                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    onChange={handlePhoneChange}
                    placeholder="Phone number"
                  />
                </div>

                
                <div className="col-md-6 mb-3">
                  <select className="form-control" onChange={handleGenderChange}>
                      {
                        genders.map(g => <option key={g} value={g}>
                          {g}
                        </option>)
                      }
                  </select>
                </div>


                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                </div>


                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    onChange={handleConfirmPasswordChange}
                    type="password"
                    placeholder="Confirm password"
                  />
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
                <div className="mt-4">
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
