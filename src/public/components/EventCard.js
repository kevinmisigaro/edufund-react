import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ title, date, location, link }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 pb-4">
      <div
        style={{
          height: "150px",
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontWeight: "bold",
          width: "100%",
          padding: "2rem",
        }}
      >
        {title}
      </div>
      <div className="mt-2">
        <p>
          {date}
          <br />
          {location}
        </p>
        <div onClick={() => navigate(link)} className="btn btn-primary btn-sm">
          View more
        </div>
      </div>
    </div>
  );
};

export default EventCard;
