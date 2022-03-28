import React from "react";
import NavigationBar from "../NavigationBar";
import bg from '../../assets/img/students-caps-up-50.png'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <NavigationBar />
      <div className="container-fluid" style={{ height: "100vh",backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", }}>
        <div className="container d-flex flex-row justify-content-center">
          <div
            className="card shadow p-4"
            style={{ width: "40rem", marginTop: "180px", padding: "20px 0" }}
          >
            <h3 style={{ fontWeight: "bold" }}>Login</h3>
            <hr />
            <br />
            <form>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <input className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-12 mb-3">
                  <input className="form-control" placeholder="Password" />
                </div>

                <div className="d-grid mt-4">
                  <Link
                    className="btn btn-primary"
                    to="/dashboard/fundraisers"
                    style={{ fontWeight: "bold" }}
                  >
                    LOG IN
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
