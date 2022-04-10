import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewFundraiser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = useState({
    degreeClassification: "",
    englishMarks: "",
    amount: "",
    course: "",
    destination: "",
    industry: "",
    background: "",
    currency: "",
    country: "",
    reason: "",
    image: "",
    video: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const currencies = ["TZS", "USD"];

  const countries = [
    "Choose country",
    "Tanzania",
    "China",
    "Kenya",
    "USA",
    "South Africa",
    "Nigeria",
    "Uganda",
    "Australia",
    "New Zealand",
    "Canada",
    "Rwanda",
  ];

  const qualifications = [
    "Choose your qualification",
    "Secondary school",
    "Certificate",
    "Bachelor's degree",
    "Masters degree",
    "High School",
  ];

  const offer = ["Have offer", ""];

  const fundraisingReasongs = [
    "Choose your fundrasing reasons",
    "Tuition fees",
    "Accomodation",
    "Living costs",
    "Travel expenses",
    "Visa",
    "Other",
  ];

  const levels = [
    "Choose your level of study",
    "Foundation",
    "Undergraduate",
    "Postgraduate",
    "Study aboard/Exchange program",
    "PhD",
  ];

  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_API_URL}/countries`).then((value) => setCountries(value.data));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleDegreeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      degreeClassification: e.target.value,
    });
  };

  const handleVideoChange = (e) => {
    e.persist();
    setValues({
      ...values,
      video: e.target.value,
    });
  };

  const handleReasonChange = (e) => {
    e.persist();
    setValues({
      ...values,
      reason: e.target.value,
    });
  };

  const handleEnglishMarksChange = (e) => {
    e.persist();
    setValues({
      ...values,
      englishMarks: e.target.value,
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

  const handleIndustryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      industry: e.target.value,
    });
  };

  const handleBackgroundChange = (e) => {
    e.persist();
    setValues({
      ...values,
      background: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      country: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);

    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
    formData.append("user_id", user.id);
    formData.append("degree_classification", values.degreeClassification);
    formData.append("english_marks", values.englishMarks);
    formData.append("industry", values.industry);
    formData.append("study_destination", values.destination);
    formData.append("background", values.background);
    formData.append("amount", values.amount);
    formData.append("currency", values.currency);
    formData.append("country_id", values.country);
    formData.append("course", values.course);
    formData.append("reason_of_funding", values.reason);
    formData.append("video", values.video);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/create`, formData)
      .then((res) => {
        console.log(res);
        navigate("/dashboard/fundraisersuccess");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.message);
      });
  };

  return (
    <div className="container mt-3">
      <h4 style={{ textAlign: "left" }}>Start a fundraiser</h4>
      <br />
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <div className="row mb-4">
          <div className="col-md-6">
            <label>Upload Image</label>
            {selectedImage && (
              <div className="mb-3">
                <img
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </button>
              </div>
            )}

            <input
              type="file"
              name="myImage"
              className="form-control"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-6">
            <label>Upload video link (optional) </label>
            <input
              className="form-control"
              type="text"
              onChange={handleVideoChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Your highest level of qualification</label>
            <select className="form-control" onChange={handleDegreeChange}>
              {qualifications.map((x) => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <label>Proposed level of study</label>
            <select
              className="form-control"
              onChange={handleEnglishMarksChange}
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
            <label>Currency</label>
            <select className="form-control" onChange={handleCurrencyChange}>
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <label>Fundraising target</label>
            <input
              className="form-control"
              onChange={handleAmountChange}
              type="number"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>University of choice</label>
            <input
              className="form-control"
              type="text"
              onChange={handleDestinationChange}
            />
          </div>
          {/* <div className="col">
            <label>Industry/Sector</label>
            <input
              className="form-control"
              onChange={handleIndustryChange}
              type="text"
            />
          </div> */}
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Proposed course of study</label>
            <input
              className="form-control"
              type="text"
              onChange={handleCourseChange}
            />
          </div>
          <div className="col">
            <label>Proposed Country of Study</label>
            <select className="form-control" onChange={handleCountryChange}>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label>Prior academic background</label>
          <textarea
            onChange={handleBackgroundChange}
            className="form-control"
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label>Reason for fundraising</label>
          <select className="form-control">
            {fundraisingReasongs.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label>Tell your story</label>
          <textarea
            onChange={handleReasonChange}
            className="form-control"
            rows="4"
          />
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            {loading ? "Creating fundraiser..." : "Start a new fundraiser"}
          </button>
        </div>
      </form>
    </div>
  );
}
