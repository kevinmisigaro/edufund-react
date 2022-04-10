import moment from "moment";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FundraiserCard(props) {
  return (
    <div className="col-md-3 mb-3">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/fundraiser/${props.fundraiser.id}`}
      >
        <div className="card shadow" style={{ width: "16rem" }}>
          <div
            style={{
              height: "7rem",
              backgroundImage: `url(${
                process.env.REACT_APP_SITE_URL + "/" + props.fundraiser.image
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="card-body">
            <b>{props.fundraiser.course}</b> fundraiser created{" "}
            {moment(props.fundraiser.created_at).fromNow()}
            <hr />
            <div style={{ textAlign: "left" }}>
              <small style={{ fontSize: "12px" }}>
                <b>
                  {props.fundraiser.currency} {props.fundraiser.amount_donated}
                </b>{" "}
                of {props.fundraiser.currency}{" "}
                {props.fundraiser.scholarship_amount.toLocaleString("en-US")}{" "}
                goal
              </small>
            </div>
            <ProgressBar
              variant="info"
              style={{ height: "5px" }}
              now={
                (props.fundraiser.amount_donated /
                  props.fundraiser.scholarship_amount) *
                100
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
