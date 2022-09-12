import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { fundraiserAtom } from "../../store/atoms/NewFundraiserAtom";

export default function StepTwo() {
  const [countries, setCountries] = useState([]);
  const [values, setValues] = useAtom(fundraiserAtom);

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
    "United Kingdom",
    "Tanzania, United Republic of",
    "China",
    "Kenya",
    "United States",
    "South Africa",
    "Nigeria",
    "Uganda",
    "Australia",
    "Ghana",
    "Canada",
  ];

  const schools = [
    {
      countryID: 1,
      name: "Illinois Institude of Technology",
    },
    {
      countryID: 1,
      name: "Carnegie Mellon University",
    },
    {
      countryID: 1,
      name: "Masschusetts Institude of Technology (MIT)",
    },
    {
      countryID: 1,
      name: "Northeastern University",
    },
    {
      countryID: 1,
      name: "Columbia University",
    },
    {
      countryID: 2,
      name: "Univerity of Waterloo",
    },
    {
      countryID: 2,
      name: "University of Calgary",
    },
    {
      countryID: 2,
      name: "University of Ottawa",
    },
    {
      countryID: 2,
      name: "McMaster University",
    },
    {
      countryID: 2,
      name: "University of Alberta",
    },
    {
      countryID: 15,
      name: "The University of Western Australia",
    },
    {
      countryID: 15,
      name: "Griffith University",
    },
    {
      countryID: 15,
      name: "University of Canberra",
    },
    {
      countryID: 15,
      name: "Queensland University of Technology",
    },
    {
      countryID: 15,
      name: "University of Technology Sydney",
    },
    {
      countryID: 45,
      name: "Beijing Language and Culture University (BCLU)",
    },
    {
      countryID: 45,
      name: "University of International Business and Economics (UIBE)",
    },
    {
      countryID: 45,
      name: "Peking University",
    },
    {
      countryID: 45,
      name: "Shanghai Jiaotong University (SJTU)",
    },
    {
      countryID: 45,
      name: "Zhejiang University (ZJU)",
    },
    {
      countryID: 83,
      name: "University of Development Studies",
    },
    {
      countryID: 83,
      name: "University of Cape Coast",
    },
    {
      countryID: 83,
      name: "University of Ghana",
    },
    {
      countryID: 83,
      name: "Kwame Nkrumah University of Science and Technology",
    },
    {
      countryID: 83,
      name: "Asheshi University",
    },
    {
      countryID: 112,
      name: "University of Nairobi",
    },
    {
      countryID: 112,
      name: "Moi University",
    },
    {
      countryID: 112,
      name: "Jomo Kenyatta University of Agriculture and Technology",
    },
    {
      countryID: 112,
      name: "Egerton University",
    },
    {
      countryID: 112,
      name: "Kenyatta University",
    },
    {
      countryID: 158,
      name: "University of Lagos",
    },
    {
      countryID: 158,
      name: "Obafemi Awolowo University",
    },
    {
      countryID: 158,
      name: "University of Ibadan",
    },
    {
      countryID: 158,
      name: "Convenant University",
    },
    {
      countryID: 158,
      name: "University of Nigeria",
    },
    {
      countryID: 197,
      name: "University of Cape Coast (SA)",
    },
    {
      countryID: 197,
      name: "University of Kwazulu-Natal",
    },
    {
      countryID: 197,
      name: "University of Pretoria",
    },
    {
      countryID: 197,
      name: "University of Johannesburg",
    },
    {
      countryID: 197,
      name: "Stellenbosch",
    },
    {
      countryID: 212,
      name: "University of Dar es Salaam",
    },
    {
      countryID: 212,
      name: "Nelson Mandela African Institution of Science and Technology",
    },
    {
      countryID: 212,
      name: "University of Dodoma (UDOM)",
    },
    {
      countryID: 223,
      name: "Kampala International University",
    },
    {
      countryID: 223,
      name: "Makerere University",
    },

    {
      countryID: 226,
      name: "Oxford University",
    },
    {
      countryID:226,
      name:"University of Bristol"
    },
    {
      countryID: 226,
      name: "Cambridge University",
    },
    {
      countryID: 226,
      name: "London School of Economics",
    },
    {
      countryID: 226,
      name: "University of Manchester",
    },
    {
      countryID: 226,
      name: "University College London",
    },
    {
      countryID: 226,
      name: "University of Warwick"
    },
    {
      countryID: 226,
      name: "University of Loughborough"
    },
    {
      countryID: 226,
      name: "University of Sussex"
    },

    {
      countryID: 226,
      name: "University of Surrey"
    },
    {
      countryID: 226,
      name: "University of Edinburgh"
    },
    {
      countryID: 226,
      name: "University of Portsmouth"
    },
    {
      countryID: 226,
      name: "Coventry University"
    },
    {
      countryID: 226,
      name: "University of Herefordshire"
    },
    {
      countryID: 226,
      name: "University of Birmingham"
    },
  ];

  const handleCountryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      country: e.target.value,
    });
  };

  const ageRanges = ["12-18", "18-21", "22-27", "28-35", "36-40"];

  const grades = [
    "First class",
    "Second class",
    "Upper second class",
    "Lower second class",
    "Third class",
  ];

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/countries`).then((value) => {
      setCountries(
        value.data.filter((item) => countryData.includes(item.name))
      );
      console.log(value.data.filter((item) => countryData.includes(item.name)));
    });
  }, []);

  const handleGradeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      grade: e.target.value,
    });
  };

  const handleRangeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      ageRange: e.target.value,
    });
  };

  const handleVideoChange = (e) => {
    e.persist();
    setValues({
      ...values,
      video: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleLevelChange = (e) => {
    e.persist();
    setValues({
      ...values,
      level: e.target.value,
    });
  };

  const handleCurrencyChange = (e) => {
    e.persist();
    setValues({
      ...values,
      currency: e.target.value,
    });
  };

  const handleAmountChange = (e) => {
    e.persist();
    setValues({
      ...values,
      amount: e.target.value,
    });
  };

  const handleTimelineChange = (e) => {
    e.persist();
    setValues({
      ...values,
      timeline: e.target.value,
    });
  };

  const handleDegreeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      degree: e.target.value,
    });
  };

  const handleCourseChange = (e) => {
    e.persist();
    setValues({
      ...values,
      course: e.target.value,
    });
  };

  const handleDestinationChange = (e) => {
    e.persist();
    setValues({
      ...values,
      destination: e.target.value,
    });
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
      <div className="row">
        <div className="col-md-6 mb-4">
          <label>
            Fundraising title <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            onChange={handleTitleChange}
            type="text"
            value={values.title}
          />
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Fundrasing duration <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.timeline}
            onChange={handleTimelineChange}
          >
            {timelines.map((x) => (
              <option value={x.time} key={x.time}>
                {x.text}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label>Upload embedded youtube video link (optional) </label>
          <input
            className="form-control"
            type="text"
            value={values.video}
            onChange={handleVideoChange}
          />
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Your age range
            <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            value={values.ageRange}
            onChange={handleRangeChange}
          >
            {ageRanges.map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label>
          Your final/expected grade
          <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            value={values.grade}
            onChange={handleGradeChange}
          >
            {grades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Your highest level of qualification{" "}
            <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.degree}
            onChange={handleDegreeChange}
          >
            {qualifications.map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 mb-4">
          <label>
            Currency <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.currency}
            onChange={handleCurrencyChange}
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Fundraising target <span className="text-danger">*</span>
          </label>
          <input
            value={values.amount}
            className="form-control"
            onChange={handleAmountChange}
            type="number"
          />
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Proposed Country of Study <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.country}
            onChange={handleCountryChange}
          >
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-4">
          <label>
            University of choice <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            value={values.destination}
            onChange={handleDestinationChange}
          >
            {schools
              .filter((school) => school.countryID == values.country)
              .map((x) => (
                <option value={x.name} key={x.name}>
                  {x.name}
                </option>
              ))}
          </select>
        </div>

        <div className="col-md-6 mb-4">
          <label>
            Proposed course of study <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            value={values.course}
            onChange={handleCourseChange}
          />
        </div>
        <div className="col-md-6 mb-4">
          <label>
            Proposed level of study <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.level}
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
    </div>
  );
}
