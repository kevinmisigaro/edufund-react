import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../Footer";
import bg from "../../assets/img/students-standing-40.png";

const GreenEarth = () => {
  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid text-white"
        style={{
          height: "40vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container" style={{ paddingTop: "6rem" }}>
          <h3 style={{ fontWeight: "bold" }}>
            OPPORTUNITY FAIR AND EDUCATION STAKEHOLDER FORUM
          </h3>
          <p className="mt-4">
            Strictly by Invitation <br />
            GreenEarth Academy and the Africa Education Group invites you to our
            inaugural scholarships powered by EduFund
          </p>
        </div>
      </div>
      <div className="container py-5">
      

        <div
          style={{
            textAlign: "left",
          }}
        >

<p>
          A unique and exclusive opportunity for UK institutions to participate
          in the launch of our inaugural scholarships and to engage with key
          stakeholders including vice-chancellors and West African First Ladies.
        </p>

        <div>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              WHEN:
            </span>{" "}
            17-18 November 2023
          </p>

          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              FUNDERS:
            </span>{" "}
             Abuja
          </p>

          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              WHERE:
            </span>{" "}
            Kano State Government and Association of Vice Chancellors Nigeria
          </p>
        </div>
        <h6
          className="mt-4 mb-2"
          style={{
            fontWeight: "bold",
          }}
        >
          Expected dignitaries:
        </h6>

          <p>List of some Dignitaries:</p>
          <ul>
            <li>Governors and first ladies of 36 states</li>
            <li>First ladies of west Africa Countries</li>
            <li>Committee of Vice Chancellor</li>
            <li>Dangote Foundation </li>
            <li>Bua Foundation </li>
            <li>Ministry of Education </li>
            <li>Tony Elumelu Foundation </li>
            <li>Senate President </li>
            <li>Chairman Airspace </li>
            <li>A. A RANO</li>
          </ul>

          <h6
            className="mt-4 mb-2"
            style={{
              fontWeight: "bold",
            }}
          >
            Why attend?
          </h6>

          <ul>
            <li>Brand visibility and partnership opportunities.</li>
            <li>Showcase your postgraduate taught courses. </li>
            <li>Meet with Ambassadors and First Ladies Reps from Africa.</li>
            <li>
              Participate in the Kano State Government Sponsorship Scheme for
              5000 students.{" "}
            </li>
            <li>
              Participate in the Association of Vice Chancellors Scholarships
              for top graduating students.
            </li>
            <li>Networking with corporates and key stakeholders</li>
          </ul>

          <p>
            <span
              style={{
                fontWeight: "bold",
                paddingTop: "1rem",
              }}
            >
              STAND:
              <br />
            </span>{" "}
            20 spaces available on first-come-first-serve basis. Pleas complete
            our short registration form to book a space for your institution.
          </p>

          <h6
            className="mt-4 mb-2"
            style={{
              fontWeight: "bold",
            }}
          >
            Participation fee:
          </h6>

          <ul>
            <li>
              Standard - £1,500
              <ul>
                <li>Exhibition booth</li>
                <li>
                  Access to Investiture on 18<sup>th</sup> November
                </li>
                <li>Access to Edufund scholarships information session</li>
              </ul>
            </li>
            <li>
              Enhanced - £2,500
              <ul>
                <li>Exhibition booth</li>
                <li>Elevator pitch to dignitaries</li>
                <li>
                  Access to Investiture on 18<sup>th</sup> November
                </li>
                <li>Access to Edufund scholarships information session</li>
              </ul>
            </li>
            <li>
              Comprehensive- £3,000
              <ul>
                <li>Exhibition booth</li>
                <li>Elevator pitch to dignitaries</li>
                <li>
                  Access to Investiture on 18<sup>th</sup> November
                </li>
                <li>Access to Edufund scholarships information session</li>
                <li>Sponsorship of networking corner</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GreenEarth;
