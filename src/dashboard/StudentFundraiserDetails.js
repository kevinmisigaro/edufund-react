import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProgressBar, Tabs } from "react-bootstrap";
import { FacebookIcon, LinkedinIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { FaCertificate, FaBuilding, FaMapMarkerAlt, FaNewspaper, FaRegCalendarAlt } from "react-icons/fa";
import { Tab } from "bootstrap";
import FundraiserStory from "./components/FundraiserStory";
import FundraiserUpdates from "./components/FundraiserUpdates";
import FundraiserComments from "./components/FundraiserComments";

export default function StudentFundraiserDetails() {
  const [fundraiser, setFundraiser] = useState();
  const [user, setUser] = useState({})
  let params = useParams();

  useEffect(() => {
    let fundraiserId = params.id

    axios.get(`${process.env.REACT_APP_API_URL}/fundraiser/${fundraiserId}`).then((res) => {
      console.log(res.data);
      setFundraiser(res.data);
    });

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="container row" style={{ marginTop: "2rem", marginBottom: '4rem' }}>
      <div className="col-md-8 col-sm-12 col-xs-12 mb-3" style={{ textAlign: "left" }}>
        
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
          <br/>
        <p>Created {moment(fundraiser?.created_at).fromNow()}</p>

        
        <Tabs defaultActiveKey="story" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="story" title={<span style={{ color: 'black' }}>
            My Story
          </span>}>
            <FundraiserStory fundraiser={fundraiser} />
          </Tab>
          <Tab eventKey="updates" title={<span style={{ color: 'black' }}>
            Updates ({fundraiser?.updates.length})
          </span>}>
            <FundraiserUpdates fundraiser={fundraiser} user={user} />
          </Tab>
          <Tab eventKey="comments" title={<span style={{ color: 'black' }}>
            Comments ({fundraiser?.comments.length})
          </span>}>
          <FundraiserComments fundraiser={fundraiser} user={user} />
          </Tab>
          <Tab eventKey="donors" title={<span style={{ color: 'black' }}>
           Donors ({fundraiser?.donors.length})
          </span>}>
            Donors
          </Tab>
        </Tabs>


      </div>
      <div className="col-md-4 col-sm-12 col-xs-12 mb-3" style={{ textAlign: 'left' }}>

      <h3 style={{ fontWeight: "600" }}>{fundraiser?.title}</h3>

        <small style={{ fontWeight: 'bold' }}>
          {fundraiser?.currency} {fundraiser?.amount_donated} of {fundraiser?.currency} {fundraiser?.scholarship_amount}
        </small>
        <ProgressBar now={
                (fundraiser?.amount_donated /
                  fundraiser?.scholarship_amount) *
                100
              } color="#4992e9" />

        <div className="d-flex flex-row justify-content-between mt-3">
        <FacebookIcon url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`} round="true" size={35} />
        <TwitterIcon url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`} round="true" size={35} />
        <WhatsappIcon url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`} round="true" size={35} />
        <TelegramIcon url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`} round="true" size={35} />
        <LinkedinIcon url={`${process.env.REACT_APP_SITE_URL}/fundraiser/${fundraiser?.id}`} round="true" size={35} />
        </div>

        <hr/>

        <p>
          {user.name} <br/>
          Residing in {user.city} <br/>
          {user.gender == 1 ? 'Male' : 'Female'}
        </p>

        <hr/>

        <h5 style={{color: '#4992e9'}}>
          Prospective degree
        </h5>

        <FaCertificate /> &nbsp; {fundraiser?.course} <br/>
        <FaBuilding /> &nbsp; {fundraiser?.study_destination} <br/>
        <FaMapMarkerAlt /> &nbsp; { fundraiser?.country.name } <br/>
        <FaNewspaper /> &nbsp; {fundraiser?.level}

        <hr/>

        <h5 style={{color: '#4992e9'}}>
          Prior/Current degree
        </h5>
        <FaCertificate /> &nbsp; {fundraiser?.qualification} <br/>

        <hr/>

        <h5 style={{color: '#4992e9'}}>
          End date
        </h5>
        <FaRegCalendarAlt /> &nbsp; {moment(fundraiser?.end_date).format('LL')} <br/>

      </div>
    </div>
  );
}
