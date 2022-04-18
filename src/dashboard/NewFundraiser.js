import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewFundraiser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    qualification: "",
    level: "",
    amount: "",
    course: "",
    destination: "",
    background: "",
    currency: "",
    country: "",
    reason: "",
    image: "",
    video: "",
    offer: false,
    title: "",
    story: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const currencies = ["Choose currency", "TZS", "USD", "NGN", "KES"];

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
  ];

  const qualifications = [
    "Choose your qualification",
    "Secondary school",
    "Certificate",
    "Bachelor's degree",
    "Masters degree",
    "High School",
  ];

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
    axios.get(`${process.env.REACT_APP_API_URL}/countries`).then((value) => {
      setCountries(
        value.data.filter((item) => countryData.includes(item.name))
      );
    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleDegreeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      qualification: e.target.value,
    });
  };

  const handleVideoChange = (e) => {
    e.persist();
    setValues({
      ...values,
      video: e.target.value,
    });
  };

  const handleStoryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      story: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleOfferChange = (e) => {
    e.persist();

    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setValues({
      ...values,
      offer: value,
    });
  };

  const handleReasonChange = (e) => {
    e.persist();
    setValues({
      ...values,
      reason: e.target.value,
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

    if (!values.offer) {
      return toast.error("Please return after you have secured admission");
    }

    if (
      values.qualification === "" ||
      values.reason === "" ||
      values.currency === "" ||
      values.country === "" ||
      values.level === ""
    ) {
      setLoading(false);
      return toast.error("Please fill in all the details");
    }

    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
    formData.append("user_id", user.id);
    formData.append("qualification", values.qualification);
    formData.append("level", values.level);
    formData.append("study_destination", values.destination);
    formData.append("background", values.background);
    formData.append("amount", values.amount);
    formData.append("currency", values.currency);
    formData.append("country_id", values.country);
    formData.append("course", values.course);
    formData.append("reason_of_funding", values.reason);
    formData.append("video", values.video);
    formData.append("title", values.title);
    formData.append("story", values.story);

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
        <div className="mb-3">
          <label>Fundraising title</label>
          <input
            className="form-control"
            onChange={handleTitleChange}
            type="text"
          />
        </div>

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
            <select className="form-control" onChange={handleLevelChange}>
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
                <option key={c.id} value={c.id}>
                  {c.name}
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

        <div className="mb-3 row">
          <div className="col">
            <label>Reason for fundraising</label>
            <select className="form-control" onChange={handleReasonChange}>
              {fundraisingReasongs.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label>Tell your story</label>
          <textarea
            onChange={handleStoryChange}
            className="form-control"
            rows="4"
          />
        </div>

        <div className="mb-5 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={handleOfferChange}
            checked={values.offer}
          />
          <label className="form-check-label">Secured admission</label>
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
