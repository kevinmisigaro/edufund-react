import React from "react";
import { FiUserPlus, FiBookmark, FiGift } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h3>How it works</h3>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiUserPlus size={40} />
          <h5 className="mt-3">Create an account</h5>
          <p style={{ fontSize: "12pt" }}>
            Set up your account in a few minutes and get started with your
            fundraiser. Enter all relevant information that will inspire donors
            to support your campaign
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiBookmark size={40} />
          <h5 className="mt-3">Create a fundraiser</h5>
          <p style={{ fontSize: "12pt" }}>
            Let the world know about your story through well detailed
            information about your campaign. Fundraisers with photos and video
            raises fund faster.
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiGift size={40} />
          <h5 className="mt-3">Recieve donations</h5>
          <p style={{ fontSize: "12pt" }}>
            Upon successful fundraising, Edufund works with you to verify your
            admission documents and connect with your preferred school for
            disbursement.
          </p>
        </div>
      </div>
    </div>
  );
}
