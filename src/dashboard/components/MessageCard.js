import React from 'react'

export default function MessageCard(props) {
  return (
    <div
      style={{
        background: "#eef5f9",
        padding: "0.7rem",
        marginBottom: "0.5rem",
        color: "black",
      }}
    >
      <b>
        <p>{props.comment.user.name}</p>
      </b>
      <p style={{ textAlign: "justify", marginTop: '-1rem' }}>{props.comment.message}</p>
    </div>
  )
}
