import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PublicDonateButton(props) {
  const [amount, setAmount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (e) => {
    e.persist();
    setAmount(e.target.value);
  };

  const setNewAmount = (value) => {
    let data = 0;

    switch (value) {
      case "TZS":
        data = 0.00043 * amount;
        break;

      case "USD":
        data = 1 * amount;
        break;

      case "KES":
        data = 0.0087 * amount;
        break;

      case "NGN":
        data = 0.0024 * amount;
        break;

      default:
        data = 0.00043 * amount;
        break;
    }
    return data;
  };

  const config = {
    public_key: "FLWPUBK-beb8a5a0af5c4343b38e5831d6424963-X",
    tx_ref: Date.now(),
    amount: setNewAmount(amount),
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      name: props.user?.name,
      email: props.user?.email,
      phone: props.user?.phone,
    },
    customizations: {
      title: "Edufund Donation",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      {localStorage.getItem("token") !== null ? (
        <button onClick={handleShow} className="btn btn-primary mt-3">
          Donate with card
        </button>
      ) : (
        <Link className="btn btn-primary mt-3" to="/login">
          Login to donate
        </Link>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="form-group mb-2">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                onChange={handleAmountChange}
              />
            </div>
            <div className="form-group mb-3">
              <button
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal();
                    },
                    onClose: () => {
                      console.log("payment complete");
                    },
                  });
                }}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}
