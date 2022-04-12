import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function FundraiserSuccess() {
  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <h3>Successfully added a fundraiser!</h3>

      <FaCheckCircle color="green" className="my-5" size={70.0} />

      <br />

      <Link to="/dashboard/fundraisers" className="btn btn-primary">
        Return to see all fundraisers
      </Link>
    </div>
  );
}
