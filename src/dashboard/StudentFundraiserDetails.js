import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiUrl from "../config";
import img from "../assets/img/students-standing-40.png";

export default function StudentFundraiserDetails() {
  const [fundraiser, setFundraiser] = useState();
  let params = useParams();

  useEffect(() => {
    axios.get(`${apiUrl}/fundraiser/${params.id}`).then((res) => {
      console.log(res.data);
      setFundraiser(res.data);
    });
  }, [params.id]);

  return (
    <div className="container row" style={{ marginTop: "2rem" }}>
      <div className="col-md-8 mb-3" style={{ textAlign: "left" }}>
        <h3 style={{ fontWeight: "800" }}>{fundraiser?.course} course</h3>
        <img
          src={(process.env.REACT_APP_SITE_URL + '/' + fundraiser?.image)}
          style={{ maxWidth: "30rem", marginBottom: "1rem" }}
          alt="..."
        />
        <hr />
        <p>Created {moment(fundraiser?.created_at).fromNow()}</p>
        <hr />

        <p>{fundraiser?.reason_of_funding}</p>
      </div>
      <div className="col-md-4 mb-3">
          <div className="card shadow" style={{width: '100%'}}>
        
          </div>
      </div>
    </div>
  );
}
