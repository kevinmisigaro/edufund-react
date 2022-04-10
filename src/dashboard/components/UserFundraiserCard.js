import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import bg from "../../assets/img/students-standing.jpg"

export default function UserFundraiserCard(props) {
  return (
    <div className="col-md-3">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/dashboard/funddetails/${props.fundraiser?.id}`}
      >
        <div className="card shadow-sm" style={{ width: "100%" }}>
          <div
            style={{
              height: "7rem",
              backgroundImage: `url('${(process.env.REACT_APP_SITE_URL + '/' + props.fundraiser?.image) || bg }')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="card-body">
            <b>{props.fundraiser?.course}</b> fundraiser created{" "}
            {moment(props.fundraiser?.created_at).fromNow()}
            <hr />
            Details
          </div>
        </div>
      </Link>
    </div>
  )
}
