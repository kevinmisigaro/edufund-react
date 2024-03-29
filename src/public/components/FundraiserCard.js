import moment from "moment";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FundraiserCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/fundraiser/${props.fundraiser.id}`}
      >
        <div className="card shadow" style={{ width: "18rem" }}>
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
            <b>{props.fundraiser?.title}</b>
            <br />
            <small>
              {props.fundraiser?.currency} {" "} {props.fundraiser?.scholarship_amount} <br/>
            </small>
            <small>
            Ends in {" "}
            {moment(props.fundraiser?.end_date).toNow(true)}
            </small>
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
