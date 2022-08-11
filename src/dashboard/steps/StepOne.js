import { useAtom } from "jotai";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fundraiserAtom } from "../../store/atoms/NewFundraiserAtom";

export default function StepOne() {
  const offers = ["Select option", "Yes", "No"];
  const [showReject, setShowReject] = useState(false);
  const handleCloseReject = () => setShowReject(false);
  const handleShowReject = () => setShowReject(true);
  const navigate = useNavigate();
  const [values, setValues] = useAtom(fundraiserAtom)

  const handleOfferChange = (e) => {
    e.persist();
    setValues({
      ...values,
      offer: e.target.value,
    });

    if (e.target.value == "No") {
      handleShowReject();
    } 
  };

  const goBack = () => {
    handleCloseReject();
    navigate("/dashboard/fundraisers");
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
          defaultValue={values.offer}
        >
          {offers.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      </div>

      <Modal show={showReject} onHide={handleCloseReject} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            We are happy to see your interest in raising funding for your
            studies, but before you can start your fundraiser, be sure to have
            secured admission with your preferred school. You will be required
            to upload your admission letter.</p>
          <button
            type="button"
            onClick={goBack}
            className="btn btn-primary mt-3"
          >
            Go back
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}
