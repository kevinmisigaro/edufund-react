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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiBookmark size={40} />
          <h5 className="mt-3">Create a fundraiser</h5>
          <p style={{ fontSize: "12pt" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiGift size={40} />
          <h5 className="mt-3">Recieve donations</h5>
          <p style={{ fontSize: "12pt" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
}
