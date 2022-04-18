import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function PublicDonateButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [values, setValues] = useState({
    amount: 0,
    name: "",
    phone: "",
    email: "",
  });

  const handleAmountChange = (e) => {
    e.persist();
    setValues({
      ...values,
      amount: e.target.value,
    });
  };

  const handleNameChange = (e) => {
    e.persist();
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    e.persist();
    setValues({
      ...values,
      phone: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    e.persist();
    setValues({
      ...values,
      email: e.target.value,
    });
  };

  const setNewAmount = (value) => {
    let data = 0;

    switch (value) {
      case "TZS":
        data = 0.00043 * values.amount;
        break;

      case "USD":
        data = 1 * values.amount;
        break;

      case "KES":
        data = 0.0087 * values.amount;
        break;

      case "NGN":
        data = 0.0024 * values.amount;
        break;

      default:
        data = 0.00043 * values.amount;
        break;
    }
    return data;
  };

  const config = {
    public_key: "FLWPUBK-beb8a5a0af5c4343b38e5831d6424963-X",
    tx_ref: Date.now(),
    amount: setNewAmount(props.fundraiser?.currency),
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      name: values.name,
      email: values.email,
      phone: values.phone,
    },
    customizations: {
      title: "Edufund Donation",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary mt-3">
        Donate
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="row form-group mb-2">
              <div className="col">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={handleNameChange}
                />
              </div>
              <div className="col">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className="row form-group mb-4">
              <div className="col">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="col">
                <label>Amount (in {props.fundraiser?.currency})</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleAmountChange}
                />
              </div>
            </div>

            <div className="form-group d-grid mb-3">
              <button
                onClick={() => {
                  console.log(values);
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
                <b>Pay</b>
              </button>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}
