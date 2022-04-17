import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AccountSettings() {
  const [values, setValues] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/countries`)
      .then((value) => setCountries(value.data));
    setValues(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleNameChange = (e) => {
    e.persist();
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    e.persist();
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    e.persist();
    setValues({
      ...values,
      city: e.target.value,
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
    e.preventDefault()
    console.log(values);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.post(`${process.env.REACT_APP_API_URL}/user/update`, values).then(() => {
      toast.success('Details updated')
      setValues({})
      window.location.reload();
    }).catch(() => {
      toast.error('Failed to update details')
    })
  }

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-start my-4">
        <h4 style={{ fontWeight: "bold" }}>Account Settings</h4>
      </div>

      <div className="mt-3 d-flex row justify-content-center">
        <div className="card shadow" style={{ width: "40rem" }}>
          <div className="card-body" style={{ textAlign: "left" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Full name</label>
                <input
                  className="form-control"
                  onChange={handleNameChange}
                  value={values.name || ""}
                />
              </div>

              {/* <div className="form-group mb-3">
                <label>Profile picture</label>
                <input type="file" className="form-control" />
              </div> */}

              <div className="row mb-3">
                <div className="col">
                  <label>Email</label>
                  <input
                    onChange={handleEmailChange}
                    value={values.email || ""}
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label>Phone</label>
                  <input
                    onChange={handlePhoneChange}
                    value={values.phone || ""}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col">
                  <label>City</label>
                  <input
                    onChange={handleCityChange}
                    value={values.city || ""}
                    className="form-control"
                  />
                </div>
                <div className="col">
                  <label>Country</label>
                  <select
                    className="form-control"
                    onChange={handleCountryChange}
                    value={values.country_id || ""}
                  >
                    {countries.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">
                  <b>Save changes</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
