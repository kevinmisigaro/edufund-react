import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  fundraiserAtom,
  fundraiserImageAtom,
} from "../../store/atoms/NewFundraiserAtom";

export default function StepThree() {
  const [selectedImage, setSelectedImage] = useAtom(fundraiserImageAtom);
  const [values, setValues] = useAtom(fundraiserAtom);

  const handleBackgroundChange = (e) => {
    e.persist();
    setValues({
      ...values,
      background: e.target.value,
    });
  };

  const handleReasonChange = (e) => {
    e.persist();
    setValues({
      ...values,
      reason: e.target.value,
    });
  };

  const handleStoryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      story: e.target.value,
    });
  };

  const fundraisingReasongs = [
    "Choose your fundrasing reasons",
    "Tuition fees",
    "Accomodation",
    "Living costs",
    "Travel expenses",
    "Visa",
    "Other",
  ];

  const handleRepayChange = (e) => {
    e.persist();
    setValues({
      ...values,
      repay: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSubmit = () => {
    setLoading(true);

    if (values.offer == "No") {
      return toast.error("Please return after you have secured admission");
    }

    if (
      values.degree === "" ||
      values.reason === "" ||
      values.currency === "" ||
      values.currency === "" ||
      values.level === "" ||
      values.timeline === "" ||
      values.ageRange === "" 
    ) {
      setLoading(false);
      return toast.error("Please fill in all the details");
    }

    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
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
    formData.append("ageRange", values.ageRange);
    formData.append("grade", values.grade);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/create`, formData)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          degree: "",
          grade: "",
          ageRange: "",
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
        setLoading(false);
        navigate("/dashboard/fundraisersuccess");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.message);
      });
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label>
          Upload Image <span className="text-danger">*</span>
        </label>
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
      <div className="mb-3 row">
        <div className="col">
          <label>
            Reason for fundraising <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            defaultValue={values.reason}
            onChange={handleReasonChange}
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
        <label>
          Prior academic background <span className="text-danger">*</span>
        </label>
        <textarea
          onChange={handleBackgroundChange}
          className="form-control"
          value={values.background}
          rows="4"
        />
      </div>
      <div className="mb-3">
        <label>
          Tell your story <span className="text-danger">*</span>
        </label>
        <textarea
          value={values.story}
          onChange={handleStoryChange}
          className="form-control"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label>
          How will you pay foward if you are able to achieve your fundraising
          goal <span className="text-danger">*</span>
        </label>
        <textarea
          onChange={handleRepayChange}
          className="form-control"
          rows="4"
          value={values.repay}
        />
      </div>

      <div className="mb-4 text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {loading ? "Creating fundraiser..." : "Start a new fundraiser"}
        </button>
      </div>
    </div>
  );
}
