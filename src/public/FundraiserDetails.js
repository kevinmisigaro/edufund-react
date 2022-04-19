import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { ProgressBar, Tab, Tabs } from "react-bootstrap";
import PublicDonateButton from "./components/PublicDonateButton";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import {
  FaCertificate,
  FaBuilding,
  FaMapMarkerAlt,
  FaNewspaper,
  FaRegCalendarAlt,
} from "react-icons/fa";
import FundraiserStory from "../dashboard/components/FundraiserStory";
import FundraiserUpdates from "../dashboard/components/FundraiserUpdates";
import FundraiserComments from "../dashboard/components/FundraiserComments";
import NavigationBar from "./components/NavigationBar";
import Footer from "./Footer";

export default function FundraiserDetails() {
  const [fundraiser, setFundraiser] = useState();
  const [user, setUser] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/fundraiser/${params.id}`)
      .then((res) => {
        setFundraiser(res.data);
      });

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [params.id]);

  return (
    <>
      <NavigationBar />
      <div className="container row mb-4" style={{ marginTop: "3rem" }}>
        <div
          className="col-md-8 col-sm-12 col-xs-12 mb-3"
          style={{ textAlign: "left" }}
        >
          {fundraiser?.video ? (
            <div style={{ height: "25rem", width: "100%" }}>
              <iframe
                width="100%"
                height="100%"
                src={fundraiser?.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            <div
              style={{
                backgroundImage: `url(${
                  process.env.REACT_APP_SITE_URL + "/" + fundraiser?.image
                })`,
                backgroundRepeat: "no repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "25rem",
                width: "100%",
              }}
            ></div>
          )}
          <br />
          <p>Created {moment(fundraiser?.created_at).fromNow()}</p>

          <Tabs
            defaultActiveKey="story"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab
              eventKey="story"
              title={<span style={{ color: "black" }}>My Story</span>}
            >
              <FundraiserStory fundraiser={fundraiser} />
            </Tab>
            <Tab
              eventKey="updates"
              title={
                <span style={{ color: "black" }}>
                  Updates ({fundraiser?.updates.length})
                </span>
              }
            >
              <FundraiserUpdates fundraiser={fundraiser} user={user} />
            </Tab>
            <Tab
              eventKey="comments"
              title={
                <span style={{ color: "black" }}>
                  Comments ({fundraiser?.comments.length})
                </span>
              }
            >
              <FundraiserComments fundraiser={fundraiser} user={user} />
            </Tab>
            <Tab
              eventKey="donors"
              title={
                <span style={{ color: "black" }}>
                  Donors ({fundraiser?.donors.length})
                </span>
              }
            >
              Donors
            </Tab>
          </Tabs>
        </div>
        <div
          className="col-md-4 col-sm-12 col-xs-12 mb-3"
          style={{ textAlign: "left" }}
        >
          <h3 style={{ fontWeight: "600" }}>{fundraiser?.title}</h3>
          <small style={{ fontWeight: "bold" }}>
            {fundraiser?.currency} {fundraiser?.amount_donated} of{" "}
            {fundraiser?.currency} {fundraiser?.scholarship_amount}
          </small>
          <ProgressBar
            now={
              (fundraiser?.amount_donated / fundraiser?.scholarship_amount) *
              100
            }
            color="#4992e9"
          />
          <PublicDonateButton fundraiser={fundraiser} />
          <div className="d-flex flex-row justify-content-between mt-3">
            <FacebookIcon
              url={fundraiser?.title}
              bgStyle={{ background: "blue" }}
              round="true"
              size={35}
            />
            <TwitterIcon
              url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`}
              round="true"
              size={35}
            />
            <WhatsappIcon
              url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`}
              round="true"
              size={35}
            />
            <TelegramIcon
              url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`}
              round="true"
              size={35}
            />
            <LinkedinIcon
              url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`}
              round="true"
              size={35}
            />
          </div>
          <hr />
          <p>
            {fundraiser?.student.name} <br />
            Residing in {fundraiser?.student.city} <br />
            {fundraiser?.student.gender == 1 ? "Male" : "Female"}
          </p>
          <hr />
          <h5 style={{ color: "#4992e9" }}>Prospective degree</h5>
          <FaCertificate /> &nbsp; {fundraiser?.course} <br />
          <FaBuilding /> &nbsp; {fundraiser?.study_destination} <br />
          <FaMapMarkerAlt /> &nbsp; {fundraiser?.country.name} <br />
          <FaNewspaper /> &nbsp; {fundraiser?.level}
          <hr />
          <h5 style={{ color: "#4992e9" }}>Prior/Current degree</h5>
          <FaCertificate /> &nbsp; {fundraiser?.qualification} <br />
          <hr />
          <h5 style={{ color: "#4992e9" }}>End date</h5>
          <FaRegCalendarAlt /> &nbsp;{" "}
          {moment(fundraiser?.end_date).format("LL")} <br />
        </div>
      </div>
      <Footer />
    </>
  );
}
