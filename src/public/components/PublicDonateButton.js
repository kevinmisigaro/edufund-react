import { useFlutterwave } from "flutterwave-react-v3";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PublicDonateButton(props) {
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const config = {
    public_key: "FLWPUBK-**************************-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: props.fundraiser?.currency,
    payment_options: "card,mobilemoney,ussd",
    // customer: {
    //   name: user?.name,
    //   email: user?.email,
    //   phone: user?.phone,
    // },
    customizations: {
      title: "Edufund Donation",
    },
  };

  const handleAmountChange = (e) => {
    e.persist();
    setAmount(e.target.value);
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      {localStorage.getItem("token") !== null ? (
        <button className="btn btn-outline-info mt-3">Donate with card</button>
      ) : (
        <Link className="btn btn-outline-info mt-3" to="/login">
          Login to donate
        </Link>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={handleAmountChange}
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
