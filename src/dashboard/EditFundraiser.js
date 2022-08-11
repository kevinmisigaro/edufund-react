import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditFundraiser() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = useState({
    degree: "",
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
    offer: "",
    title: "",
    story: "",
    repay: "",
    timeline: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/countries`).then((value) => {
      setCountries(
        value.data.filter((item) => countryData.includes(item.name))
      );
    });
    setUser(JSON.parse(localStorage.getItem("user")));
    axios
      .get(`${process.env.REACT_APP_API_URL}/fundraiser/${id}`)
      .then((res) => {
        console.log(res.data);
        setValues({
          degree: res.data.qualification,
          level: res.data.level,
          amount: res.data.scholarship_amount,
          course: res.data.course,
          destination: res.data.study_destination,
          background: res.data.background,
          currency: res.data.currency,
          country: res.data.country_id,
          reason: res.data.reason_of_funding,
          image: res.data.image,
          video: res.data.video,
          title: res.data.title,
          story: res.data.story,
          repay: res.data.repay,
        });
      });
  }, []);

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
    "Diploma",
    "Foundation/Pre-degree",
    "Undergraduate",
    "Postgraduate",
    "Study aboard/Exchange program",
    "Professional examination/certification",
    "PhD",
  ];

  const handleDegreeChange = (e) => {
    e.persist();
    setValues({
      ...values,
      degree: e.target.value,
    });
  };

  const handleTimelineChange = (e) => {
    e.persist();
    setValues({
      ...values,
      timeline: e.target.value,
    });
  };

  const handleRepayChange = (e) => {
    e.persist();
    setValues({
      ...values,
      repay: e.target.value,
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
    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("qualification", values.degree);
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
    formData.append("repay", values.repay);
    formData.append("timeline", values.timeline);
    formData.append("id", id);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/updateFund`, formData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid" style={{ background: "#eef5f9" }}>
      <div className="container pt-3" style={{ paddingBottom: "10rem" }}>
        <h4 style={{ textAlign: "left", fontWeight: "700" }}>
          Edit fundraiser
        </h4>
        <br />

        <div className="card shadow" style={{ width: "100%", padding: "20px" }}>
          <div className="card-body">
            <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
              <div className="row mb-4">
                <div className="col">
                  <label>Fundraising title</label>
                  <input
                    value={values.title}
                    className="form-control"
                    onChange={handleTitleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label>Upload Image</label>
                  {selectedImage == null ? (
                    <div
                      style={{
                        backgroundImage: `url(${
                          process.env.REACT_APP_SITE_URL + "/" + values.image
                        })`,
                        backgroundRepeat: "no repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        height: "25rem",
                        width: "100%",
                      }}
                    ></div>
                  ) : (
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
                  <label>Upload embedded youtube video link (optional) </label>
                  <input
                    className="form-control"
                    type="text"
                    value={values.video}
                    onChange={handleVideoChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label>Your highest level of qualification</label>
                  <select
                    className="form-control"
                    onChange={handleDegreeChange}
                    value={values.degree}
                  >
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
                    value={values.level}
                    className="form-control"
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
                  <label>Currency</label>
                  <select
                    className="form-control"
                    onChange={handleCurrencyChange}
                    value={values.currency}
                  >
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
                    value={values.amount}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label>University of choice</label>
                  <input
                    className="form-control"
                    type="text"
                    value={values.destination}
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
                    value={values.course}
                  />
                </div>
                <div className="col">
                  <label>Proposed Country of Study</label>
                  <select
                    className="form-control"
                    onChange={handleCountryChange}
                    value={values.country}
                  >
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
                  value={values.background}
                />
              </div>

              <div className="mb-3 row">
                <div className="col">
                  <label>Reason for fundraising</label>
                  <select
                    className="form-control"
                    onChange={handleReasonChange}
                    value={values.reason}
                  >
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
                  value={values.story}
                  rows="4"
                />
              </div>

              <div className="mb-3">
                <label>
                  How will you pay foward if you are able to achieve your
                  fundraising goal
                </label>
                <textarea
                  onChange={handleRepayChange}
                  value={values.repay}
                  className="form-control"
                  rows="4"
                />
              </div>

              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Updating fundraiser..." : "Edit fundraiser"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
