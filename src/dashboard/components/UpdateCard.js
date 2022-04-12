import React from "react";

export default function UpdateCard(props) {
  return (
    <div
      style={{
        background: "#eef5f9",
        padding: "1rem",
        marginBottom: "0.5rem",
        color: "black",
      }}
    >
      <b>
        <p>{props.update.title}</p>
      </b>
      <p style={{ textAlign: "justify" }}>{props.update.content}</p>
    </div>
  );
}
