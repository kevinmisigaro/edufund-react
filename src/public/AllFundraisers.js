import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import FundraiserCard from "./components/FundraiserCard";
import NavigationBar from "./components/NavigationBar";

export default function AllFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFundraisers(true);
    axios.get(`${process.env.REACT_APP_API_URL}/fundraisers`).then((res) => {
      setFundraisers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container" style={{ marginTop: "2rem" }}>
        <h3 style={{ fontWeight: "800", textAlign: "left" }}>
          All fundraisers
        </h3>

        <br />

        <Tabs
          defaultActiveKey="featured"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="featured" title="Featured fundraisers">
            <div className="row">
              {fundraisers.length > 0 &&
                fundraisers
                  .filter((x) => x.featured == true)
                  .map((x) => <FundraiserCard key={x.id} fundraiser={x} />)}
            </div>
          </Tab>
          <Tab eventKey="recent" title="Recent fundraisers">
            <div className="row">
              {fundraisers.length > 0
                ? fundraisers.map((x) => (
                    <FundraiserCard key={x.id} fundraiser={x} />
                  ))
                : ""}
            </div>
          </Tab>
          <Tab eventKey="closing" title="Closing fundraisers">
            <div className="row">
              {fundraisers.length > 0
                ? fundraisers.map((x) => (
                    <FundraiserCard key={x.id} fundraiser={x} />
                  ))
                : ""}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
