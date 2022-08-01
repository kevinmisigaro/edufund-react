import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StepThree({ values, setValues }) {
  useEffect(() => {
    setValues({
      ...values,
      background: localStorage.getItem("background"),
      reason: localStorage.getItem("reason"),
      story: localStorage.getItem("story"),
      repay: localStorage.getItem("repay"),
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackgroundChange = (e) => {
    e.persist();
    setValues({
      ...values,
      background: e.target.value,
    });
    localStorage.setItem("background", e.target.value);
  };

  const handleReasonChange = (e) => {
    e.persist();
    setValues({
      ...values,
      reason: e.target.value,
    });
    localStorage.setItem("reason", e.target.value);
  };

  const handleStoryChange = (e) => {
    e.persist();
    setValues({
      ...values,
      story: e.target.value,
    });
    localStorage.setItem("story", e.target.value);
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
    localStorage.setItem("repay", e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSubmit = () => {
    setLoading(true);

    if (!localStorage.getItem("offer")) {
      return toast.error("Please return after you have secured admission");
    }

    if (
      localStorage.getItem("degree") === "" ||
      localStorage.getItem("reason") === "" ||
      localStorage.getItem("currency") === "" ||
      localStorage.getItem("country") === "" ||
      localStorage.getItem("level") === "" ||
      localStorage.getItem("timeline") === ""
    ) {
      setLoading(false);
      return toast.error("Please fill in all the details");
    }

    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
    formData.append("user_id", user.id);
    formData.append("qualification", localStorage.getItem("degree"));
    formData.append("level", localStorage.getItem("level"));
    formData.append("study_destination", localStorage.getItem("destination"));
    formData.append("background", localStorage.getItem("background"));
    formData.append("amount", localStorage.getItem("amount"));
    formData.append("currency", localStorage.getItem("currency"));
    formData.append("country_id", localStorage.getItem("country"));
    formData.append("course", localStorage.getItem("course"));
    formData.append("reason_of_funding", localStorage.getItem("reason"));
    formData.append("video", localStorage.getItem("video"));
    formData.append("title", localStorage.getItem("title"));
    formData.append("story", localStorage.getItem("story"));
    formData.append("repay", localStorage.getItem("repay"));
    formData.append("timeline", localStorage.getItem("timeline"));

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/create`, formData)
      .then((res) => {
        console.log(res);

        let keysToRemove = [
          "timeline",
          "repay",
          "story",
          "title",
          "video",
          "reason",
          "course",
          "country",
          "currency",
          "amount",
          "background",
          "destination",
          "level",
          "qualification",
        ];

        keysToRemove.forEach((k) => localStorage.removeItem(k));
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
            defaultValue={localStorage.getItem("reason")}
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
          value={localStorage.getItem("background")}
          rows="4"
        />
      </div>
      <div className="mb-3">
        <label>
          Tell your story <span className="text-danger">*</span>
        </label>
        <textarea
          value={localStorage.getItem("story")}
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
          value={localStorage.getItem("repay")}
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
