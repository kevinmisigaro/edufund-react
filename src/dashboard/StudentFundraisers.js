import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserFundraiserCard from "./components/UserFundraiserCard";

export default function StudentFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFundraisers = () => {
    setLoading(true);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios.post(`${process.env.REACT_APP_API_URL}/fundraiser/user`).then((res) => {
      console.log(res.data);
      setFundraisers(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchFundraisers();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-between my-4">
        <h4 style={{ fontWeight: "bold" }}>Your fundraisers</h4>

        <Link to="/dashboard/newfundraiser" className="btn btn-primary">
          <FaPlus /> Start your fundraiser
        </Link>
      </div>

      <div className="row">
        {fundraisers.length > 0 ? (
          fundraisers.map((x) => (
            <UserFundraiserCard key={x.id} fundraiser={x} />
          ))
        ) : (
          <div className="col-md-12 text-center mt-3">
            <p>
              {loading ? "Loading fundraisers" : "Currently no fundraisers"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
