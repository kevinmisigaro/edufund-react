import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../Footer";
import bg from "../../assets/img/students-standing-40.png";
import pic1 from "../../assets/img/dig/pic1.png";
import pic2 from "../../assets/img/dig/pic2.png";
import pic3 from "../../assets/img/dig/pic3.png";
import pic4 from "../../assets/img/dig/pic4.png";
import pic5 from "../../assets/img/dig/pic5.png";
import pic6 from "../../assets/img/dig/pic6.png";
import pic7 from "../../assets/img/dig/pic7.png";
import pic8 from "../../assets/img/dig/pic8.png";
import pic9 from "../../assets/img/dig/pic9.png";
import pic10 from "../../assets/img/dig/pic10.png";
import pic11 from "../../assets/img/dig/pic11.png";
import pic12 from "../../assets/img/dig/pic12.png";
import pic13 from "../../assets/img/dig/pic13.png";
import yusuf from "../../assets/img/dig/yusufmata.png";

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
            {"Government Scholarship Opportunity Fair and Stakeholder Forum".toUpperCase()}
          </h3>
          <p className="mt-4">
            Strictly by Invitation <br />
            GreenEarth Academy invites you to the launch of our inaugural
            scholarships powered by EduFund.
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
            Join us in Abuja for two days of celebration, networking and
            business possibilities including an opportunity fair and
            complimentary invitation to a special investiture for First Ladies
            from across West Africa.
          </p>

          <div>
            <p>
              <b>Scholarships Briefing Meeting</b>
            </p>

            <p>When: 2 November 2023</p>

            <p>Where: 4-5pm</p>

            <p>
              Location: Please register for free on{" "}
              <a
                href="https://us06web.zoom.us/meeting/register/tZUvf-CpqTsjEtaNSkrEqxqidNWMC8q94iBS#/"
                target="_blank"
                rel="noreferrer"
              >
                Zoom
              </a>
            </p>

            <p>
              Find out more and prepare in advance for the Opportunity Fair and
              Education Stakeholder Forum. Register for our free pre-event
              briefing to hear from selected government funding bodies
              sponsoring students to UK universities in 2024.
            </p>

            <div className="d-flex flex-row my-5 gap-5">
              <div>
                <img src={yusuf} alt="yusuf" /> 
              </div>
              <div>
                <p>
                <i>
                  "From Kano to the world stage - our scholarship scheme is a testament to the limitless potential of our youth. Join us with EduFund in celebrating the launch of a brighter future for Kano State students.""
                  </i> - Dr. Yusuf Kofar Mata, Hon. Commissioner Ministry of Higher Education, Kano State
                </p>
              </div>
            </div>

            <table className="customers">
              <tr>
                <th>Time</th>
                <th>Speakers</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>4-4.05pm</td>
                <td>Mercy Gilbert (moderator)</td>
                <td>Introductions</td>
              </tr>
              <tr>
                <td>4.05- 4.15pm</td>
                <td>Professor Harriet Chimezie</td>
                <td>Overview of the Opportunity Fair and Awards event</td>
              </tr>
              <tr>
                <td>4.15- 4.20pm</td>
                <td>Tosin Adebisi, Independent Consultant, EduFund</td>
                <td>Working with Edufund and sponsors</td>
              </tr>
              <tr>
                <td>4.20- 4.30pm</td>
                <td>
                  Dr. Yusuf Kofar Mata - Hon. Commissioner Ministry of Higher
                  Education, Kano State
                </td>
                <td>Overview of Kano State Scholarships</td>
              </tr>
              <tr>
                <td>4.30-4.35pm</td>
                <td>
                  Chidebere Okre- Representative of Prof Yakubu Ochefu,
                  Secretary General of Committee of Vice Chancellor of Nigeria
                  (CVC)
                </td>
                <td>Overview of CVC scholarships</td>
              </tr>
              <tr>
                <td>4.35- 4.40pm</td>
                <td>
                  Hon Abdulsalam Ahmed- Representative Osun state Government
                </td>
                <td>Overview of Osun State Scholarships</td>
              </tr>
              <tr>
                <td>4.40- 4.45pm</td>
                <td>
                  Prof.Morris Azuibike- Representative of Rivers State
                  Commissioner of Higher Education
                </td>
                <td>Overview of Rivers State Scholarships</td>
              </tr>
              <tr>
                <td>4.45- 4.55pm</td>
                <td>Mercy Gilbert</td>
                <td>Q&A</td>
              </tr>
              <tr>
                <td>4.55-5pm</td>
                <td>Gbenga Ogunbode, Consultant, The Africa Education Group</td>
                <td>Closing address</td>
              </tr>
            </table>

            <p>How do I register interest?</p>

            <h4
              style={{
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              Scholarships Opportunity Fair and Stakeholder Forum
            </h4>

            <p>
              Register to exhibit your brand, meet prospective students and
              network with key stakeholders.
            </p>

            <p>
              The Opportunity Fair and Education Stakeholder Forum is a unique
              and exclusive opportunity for UK institutions to participate in
              the launch of our inaugural scholarships and to engage with key
              stakeholders including vice-chancellors and West African First
              Ladies.
            </p>

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
              Kano State Government and Association of Vice Chancellors Nigeria
            </p>

            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                WHERE:
              </span>{" "}
              Abuja
            </p>
          </div>
          <h6
            className="mt-4 mb-2"
            style={{
              fontWeight: "bold",
            }}
          >
            Confirmed dignitaries:
          </h6>

          <div className="row mb-5 mt-4">
            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic1})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br /> Remi Asiwaju Tinubu
                <br />
                <b>First Lady of Nigeria</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic2})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellnecy
                <br />
                Claudine Gbenagnon
                <br />
                <b>First Lady of Benin Republic</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic3})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Chantai Biya
                <br />
                <b>First Lady of Cameroon</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic4})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Deborah Katisa Carvalho
                <br />
                <b>First Lady of Cape-Verde</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic5})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Rebecca Naa Okaikor Akufo-Addo
                <br />
                <b>First Lady of Ghana</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic6})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Fatoumatta Bah-Barrow
                <br />
                <b>First Lady of Gambia</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic7})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Lauriane Darboux
                <br />
                <b>First Lady of Guinea</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic8})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Dominique Outtarra
                <br />
                <b>First Lady of Ivory Coast</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic9})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Lala Diallo
                <br />
                <b>First Lady of Mali</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic10})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Clar Weah
                <br />
                <b>First Lady of Liberia</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic11})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Marieme Faye Sall
                <br />
                <b>First Lady of Senegal</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic12})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Fatima Maada Bio
                <br />
                <b>First Lady of Sierra Leaone</b>
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  backgroundImage: `url(${pic13})`,
                  width: "100%",
                  height: "300px",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-center">
                Her Excellency <br />
                Rebecca Naa Okaikor Akufo-Addo
                <br />
                <b>First Lady of Ghana</b>
              </p>
            </div>
          </div>

          <p>
            <b>Other Confirmed Dignitaries:</b>
          </p>
          <ul
            style={{
              fontSize: "1.2rem",
            }}
          >
            <li>Governors and first ladies of 36 states</li>
            <li>First ladies of West Africa Countries</li>
            <li>Committee of Vice Chancellors</li>
            <li>Dangote Foundation </li>
            <li>Bua Foundation </li>
            <li>Ministry of Education </li>
            <li>Tony Elumelu Foundation </li>
            <li>Senate President </li>
            <li>Chairman AirPeace</li>
            <li>AARano Group</li>
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
            10 spaces available on first-come-first-serve basis. Please{" "}
            <a
              href="https://forms.gle/7LPartEGJFVJEgHf6"
              target="_blank"
              rel="noreferrer"
            >
              complete our short registration form
            </a>{" "}
            to book a space for your institution.
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
              Standard - £1,000
              <ul>
                <li>Exhibition booth</li>
                <li>
                  Access to Investiture on 18<sup>th</sup> November
                </li>
                <li>
                  Access to Edufund engagement forum with scholarship boards
                </li>
              </ul>
            </li>
            <li>
              Enhanced - £2,000
              <ul>
                <li>Exhibition booth</li>
                <li>Elevator pitch to dignitaries</li>
                <li>
                  Access to Investiture on 18<sup>th</sup> November
                </li>
                <li>
                  Access to Edufund engagement forum with scholarship boards
                </li>
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
                <li>1-1 exploratory meeting with a scholarship board</li>
              </ul>
            </li>
          </ul>

          <a
            href="https://forms.gle/7LPartEGJFVJEgHf6"
            target="_blank"
            className="mb-5 mt-4 btn btn-primary text-white"
            rel="noreferrer"
          >
            Register Now
          </a>

          <p>
            For any inquiries, please contact us at{" "}
            <u>partnerships@edufunds.co</u>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GreenEarth;
