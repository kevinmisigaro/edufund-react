import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MessageCard from "./MessageCard";

export default function FundraiserComments(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  const [message, setMessage] = useState("");

  console.log(props.fundraiser)
  console.log(props.user)

  const handleMessageChange = (e) => {
    e.persist();
    setMessage(e.target.value);
  };

  const checkAuth = () => {
    if(props.user == null){
      return navigate('/login')
    } 

    return handleShow()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      fundraiser_id: props.fundraiser?.id,
      user_id: props.user.id,
      message: message,
    };

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/comment`, data)
      .then(() => {
        setMessage("");
        window.location.reload();
      });
  };

  return (
    <>
      {props.fundraiser?.comments.length > 0 ?
        props.fundraiser?.comments.map((x) => 
          <MessageCard key={x.id} comment={x} />
        ) : ''}
      <br />
      <button onClick={checkAuth} className="btn btn-outline-primary">
        Add comment
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Enter comment here..."
              onChange={handleMessageChange}
              className="form-control mt-3"
              style={{ width: "100%", height: "10rem" }}
            ></textarea>
            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
