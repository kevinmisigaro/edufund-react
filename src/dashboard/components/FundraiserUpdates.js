import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import UpdateCard from "./UpdateCard";

export default function FundraiserUpdates(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const handleTitleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      title: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    e.persist();
    setValues({
      ...values,
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    handleClose();

    let data = {
      fundraiser_id: props.fundraiser?.id,
      title: values.title,
      content: values.content,
    };

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .post(`${process.env.REACT_APP_API_URL}/fundraiser/update`, data)
      .then(() => {
        setValues({
          title: "",
          content: "",
        });
        window.location.reload();
      });
  };

  return (
    <>
      {props.fundraiser?.updates.length > 0 &&
        props.fundraiser?.updates.map((x) => (
          <UpdateCard key={x.id} update={x} />
        ))}
      <br />
      {props.user?.id == props.fundraiser?.student.id && (
        <button onClick={handleShow} className="btn btn-outline-primary">
          Add update
        </button>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter new update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <textarea
              placeholder="Enter details here..."
              onChange={handleContentChange}
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
