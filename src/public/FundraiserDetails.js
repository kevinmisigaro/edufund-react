import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import moment from "moment";
import { ProgressBar } from "react-bootstrap";
import PublicDonateButton from "./components/PublicDonateButton";

export default function FundraiserDetails() {
  const [fundraiser, setFundraiser] = useState();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/fundraiser/${params.id}`)
      .then((res) => {
        setFundraiser(res.data);
      });
  }, [params.id]);

  return (
    <>
      <NavigationBar />
      <div className="container row" style={{ marginTop: "6rem" }}>
        <div className="col-md-8" style={{ textAlign: "left" }}>
          <h3 style={{ fontWeight: "800" }}>{fundraiser?.course} course</h3>
          <img
            src={process.env.REACT_APP_SITE_URL + "/" + fundraiser?.image}
            style={{ maxWidth: "30rem", marginBottom: "1rem" }}
            alt="..."
          />
          <p>
            Fundraiser by <b>{fundraiser?.student.name}</b>
          </p>
          <hr />
          <p>Created {moment(fundraiser?.created_at).fromNow()}</p>
          <hr />

          <p>{fundraiser?.reason_of_funding}</p>
        </div>

        <div className="col-md-4">
          <div
            className="card shadow p-4"
            style={{ width: "100%", textAlign: "left" }}
          >
            <p>
              <b>Amount raised:</b> {fundraiser?.currency}{" "}
              {fundraiser?.amount_donated}
            </p>

            <ProgressBar
              variant="info"
              style={{ height: "10px" }}
              now={
                (fundraiser?.amount_donated / fundraiser?.scholarship_amount) *
                100
              }
            />

            <br />

            <p>
              <b>Target amount:</b> <br /> {fundraiser?.currency}{" "}
              {fundraiser?.scholarship_amount.toLocaleString("en-US")}
            </p>

            <br />

            <div className="text-center">
              <PublicDonateButton fundraiser={fundraiser} />
              <br />
              <br />
              {fundraiser?.amount_donated > 0 && (
                <button
                  className="btn btn-outline-info"
                  style={{ fontWeight: "800" }}
                >
                  See all donors
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
