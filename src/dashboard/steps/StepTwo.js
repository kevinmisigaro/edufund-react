import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StepTwo({ values, setValues }) {
  const [countries, setCountries] = useState([]);
  const currencies = [
    "Choose currency",
    "TZS",
    "USD",
    "NGN",
    "KES",
    "GBP",
    "EUR",
  ];

  const countryData = [
    "Tanzania, United Republic of",
    "China",
    "Kenya",
    "United States",
    "South Africa",
    "Nigeria",
    "Uganda",
    "Australia",
    "New Zealand",
    "Canada",
    "Rwanda",
    "United Kingdom",
  ];

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/countries`).then((value) => {
      setCountries(
        value.data.filter((item) => countryData.includes(item.name))
      );
    });
    setValues({
      ...values,
      video: localStorage.getItem("video"),
      title: localStorage.getItem("title"),
      level: localStorage.getItem("level"),
      currency: localStorage.getItem("currency"),
      level: localStorage.getItem("level"),
      currency: localStorage.getItem("currency"),
      amount: localStorage.getItem("amount"),
      timeline: localStorage.getItem("timeline"),
      degree: localStorage.getItem("degree"),
      course: localStorage.getItem("course"),
      destination: localStorage.getItem("destination"),
      country: localStorage.getItem("country"),
    });
  }, []);

  const handleVideoChange = (e) => {
    e.persist();
    setValues({
      ...values,
      video: e.target.value,
    });
    localStorage.setItem("video", e.target.value);
  };

  const handleTitleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      title: e.target.value,
    });
    localStorage.setItem("title", e.target.value);
  };

  const handleLevelChange = (e) => {
    e.persist();
    setValues({
      ...values,
      level: e.target.value,
    });
    localStorage.setItem("level", e.target.value);
  };

  const handleCurrencyChange = (e) => {
    e.persist();
    setValues({
      ...values,
      currency: e.target.value,
    });
    localStorage.setItem("currency", e.target.value);
  };

  const handleAmountChange = (e) => {
    e.persist();
    setValues({
      ...values,
      amount: e.target.value,
    });
    localStorage.setItem("amount", e.target.value);
  };

  const handleTimelineChange = (e) => {
    e.persist();
    setValues({
      ...values,
      timeline: e.target.value,
    });
    localStorage.setItem("timeline", e.target.value);
  };

  const handleDegreeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      degree: e.target.value,
    });
    localStorage.setItem("degree", e.target.value);
  };

  const handleCourseChange = (e) => {
    e.persist();
    setValues({
      ...values,
      course: e.target.value,
    });
    localStorage.setItem("course", e.target.value);
  };

  const handleDestinationChange = (e) => {
    e.persist();
    setValues({
      ...values,
      destination: e.target.value,
    });
    localStorage.setItem("destination", e.target.value);
  };

  const handleCountryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      country: e.target.value,
    });
    localStorage.setItem("country", e.target.value);
  };

  const qualifications = [
    "Choose your qualification",
    "Secondary school",
    "Certificate",
    "Bachelor's degree",
    "Masters degree",
    "High School",
  ];

  const timelines = [
    {
      time: 0,
      text: "Choose timelines",
    },
    {
      time: 1,
      text: "1 month",
    },
    {
      time: 3,
      text: "3 months",
    },
    {
      time: 6,
      text: "6 months",
    },
    {
      time: 9,
      text: "9 months",
    },
    {
      time: 12,
      text: "12 months",
    },
  ];

  const levels = [
    "Choose your level of study",
    "Diploma",
    "Foundation/Pre-degree",
    "Undergraduate",
    "Postgraduate",
    "Study aboard/Exchange program",
    "Professional examination/certification",
    "PhD",
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <div className="row mb-4">
        <div className="col">
          <label>
            Fundraising title <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            onChange={handleTitleChange}
            type="text"
            value={localStorage.getItem("title")}
          />
        </div>
        <div className="col">
          <label>
            Fundrasing duration <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={localStorage.getItem("timeline")}
            onChange={handleTimelineChange}
          >
            {timelines.map((x) => (
              <option value={x.time} key={x.time}>
                {x.text}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-4">
       
        <div className="col-md-12">
          <label>Upload embedded youtube video link (optional) </label>
          <input
            className="form-control"
            type="text"
            value={localStorage.getItem("video")}
            onChange={handleVideoChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>
            Your highest level of qualification{" "}
            <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={localStorage.getItem("degree")}
            onChange={handleDegreeChange}
          >
            {qualifications.map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label>
            Proposed level of study <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={localStorage.getItem("level")}
            onChange={handleLevelChange}
          >
            {levels.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>
            Currency <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={localStorage.getItem("currency")}
            onChange={handleCurrencyChange}
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <label>
            Fundraising target <span className="text-danger">*</span>
          </label>
          <input
            value={localStorage.getItem("amount")}
            className="form-control"
            onChange={handleAmountChange}
            type="number"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>
            University of choice <span className="text-danger">*</span>
          </label>
          <input
            value={localStorage.getItem("destination")}
            className="form-control"
            type="text"
            onChange={handleDestinationChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>
            Proposed course of study <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            value={localStorage.getItem("course")}
            onChange={handleCourseChange}
          />
        </div>
        <div className="col">
          <label>
            Proposed Country of Study <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={localStorage.getItem("country")}
            onChange={handleCountryChange}
          >
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
