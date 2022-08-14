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
    ageRange: "",
    grade: "",
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
          ageRange: res.data.age_range,
          grade: res.data.grade,
        });
      });
  }, []);

  const currencies = [
    "Choose currency",
    "TZS",
    "USD",
    "NGN",
    "KES",
    "GBP",
    "EUR",
  ];

  const ageRanges = ["", "12-18", "18-21", "22-27", "28-35", "36-40"];

  const grades = [
    "",
    "First class",
    "Second class",
    "Upper second class",
    "Lower second class",
    "Third class",
  ];

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
      countryID: 226,
      name: "Cambridge University",
    },
    {
      countryID:226,
      name:"University of Bristol"
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
    formData.append("ageRange", values.ageRange);
    formData.append("grade", values.grade);

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
                <div className="col">
                  <label>Your grade if in college (optional)</label>
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
              </div>

              <div className="row mb-3">
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
                <div className="col">
                  <label>University of choice</label>
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
