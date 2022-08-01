import React from "react";

export default function StepOne({ values, setValues }) {
  const offers = ["Select option", "Yes", "No"];

  const handleOfferChange = (e) => {
    e.persist();
    setValues({
      ...values,
      offer: e.target.value,
    });
    localStorage.setItem("offer", e.target.value);
  };

  return (
    <div>
      <h4 style={{ fontWeight: "700" }}>Start a fundraiser</h4>
      <br />
      <div className="mb-5" style={{ textAlign: "left" }}>
        <label>
          Have You secured admission? <span className="text-danger">*</span>
        </label>
        <select
          className="form-control"
          onChange={handleOfferChange}
          style={{ width: "40%" }}
          defaultValue={localStorage.getItem("offer")}
        >
          {offers.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
