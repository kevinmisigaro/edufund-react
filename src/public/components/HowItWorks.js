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
            fundraiser. Enter all relevant information that will inspire our
            donor community to recommend you for education cover through EduFund
            Scholarship fund
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiBookmark size={40} />
          <h5 className="mt-3">Create a fundraiser</h5>
          <p style={{ fontSize: "12pt" }}>
            Let the world know about your story through well detailed
            information about your campaign. Tell us your captivating story and
            why you are well positioned to receive education fund from EduFund.
            Ensure to use videos and photos to share more about your story.
          </p>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mb-2">
          <FiGift size={40} />
          <h5 className="mt-3">Receive Education Fund</h5>
          <p style={{ fontSize: "12pt" }}>
            Upon shortlisting by EduFund committee for the scholarship fund,
            EduFund will carry out school information verification with your
            nominated university. All school related funds will be paid directly
            to your university and welfare fund will be paid to you upon
            submission semester reports.
          </p>
        </div>
      </div>
    </div>
  );
}
