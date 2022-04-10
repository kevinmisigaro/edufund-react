import axios from "axios";
import React, { useEffect, useState } from "react";
import FundraiserCard from "./components/FundraiserCard";
import NavigationBar from "./NavigationBar";

export default function AllFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setFundraisers(true)
    axios.get(`${process.env.REACT_APP_API_URL}/fundraisers`).then((res) => {
      setFundraisers(res.data);
      setLoading(false)
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container" style={{ marginTop: '7rem' }}>
        <h3 style={{ fontWeight: "800", textAlign: "left" }}>
          All fundraisers
        </h3>

        <br />

        <div className="row">
        {fundraisers.length > 0
          ? fundraisers.map((x) => <FundraiserCard key={x.id} fundraiser={x} />)
          : ""}
        </div>
      </div>
    </>
  );
}
