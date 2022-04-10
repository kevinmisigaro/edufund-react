import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import axios from "axios";
import FundraiserCard from "./components/FundraiserCard";
import { Link } from "react-router-dom";
import WhatWeOffer from "./components/WhatWeOffer";

export default function Landing() {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL}/fundraisers`).then((res) => {
      setFundraisers(res.data);
      console.log(res.data)
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavigationBar />

      <Hero />

      <div className="container py-5">

        <div className="mb-3" style={{ textAlign: "left" }}>
          <h4 style={{ fontWeight: "700" }}>Featured Fundraisers</h4>
        </div>

        <div className="row">
          {fundraisers.length > 0 ? (
            fundraisers.map((x) => <FundraiserCard fundraiser={x} key={x.id} />)
          ) : (
            <div className="col-md-12 text-center mt-3">
              <p>
                {loading ? "Loading fundraisers" : "Currently no fundraisers"}
              </p>
            </div>
          )}
        </div>

        <div className="mb-3 mt-5" style={{ textAlign: "left" }}>
          <h5 style={{ fontWeight: "700" }}>Recently started fundraisers</h5>
        </div>

        <div className="row">
          {fundraisers.length > 0 ? (
            fundraisers.map((x) => (
              <FundraiserCard fundraiser={x} key={x.id} />
            ))
          ) : (
            <div className="col-md-12 text-center mt-3">
              <p>
                {loading ? "Loading fundraisers" : "Currently no fundraisers"}
              </p>
            </div>
          )}
        </div>

        <div className="mb-3 mt-5" style={{ textAlign: "left" }}>
          <h5 style={{ fontWeight: "700" }}>Almost closing</h5>
        </div>

        <div className="row">
          {fundraisers.length > 0 ? (
            fundraisers.map((x) => <FundraiserCard fundraiser={x} key={x.id} />)
          ) : (
            <div className="col-md-12 text-center mt-3">
              <p>
                {loading ? "Loading fundraisers" : "Currently no fundraisers"}
              </p>
            </div>
          )}
        </div>
        
        {fundraisers.length > 0 && (
          <div className="text-center mt-5">
            <Link className="btn" style={{ background:'#47688E', color: 'white' }} to="/allfundraisers">
              View all fundraisers
            </Link>
          </div>
        )}
      </div>

      <WhatWeOffer />

      <Footer />
    </>
  );
}
