import React from "react";
import NavigationBar from "../NavigationBar";
import bg from '../../assets/img/students-caps-up-50.png'

export default function Register() {
  return (
    <>
      <NavigationBar />
      <div className="container-fluid bg-primary" style={{ height: "100vh",backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover" }}>
        <div className="container d-flex flex-row justify-content-center">
          <div
            className="card shadow p-4"
            style={{ width: "40rem", marginTop: "180px", padding: "20px 0" }}
          >
            <h3 style={{ fontWeight: "bold" }}>Sign up to start fundraising</h3>
            <p>Are you a company? Sign up as a company</p>
            <hr />
            <br />
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Fullname" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Country" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Phone number" />
                </div>
                <div className="col-md-6 mb-3">
                  <input className="form-control" placeholder="Password" />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="d-grid mt-4">
                  <button
                    className="btn btn-primary"
                    style={{ fontWeight: "bold" }}
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
