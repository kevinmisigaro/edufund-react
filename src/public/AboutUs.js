import React from 'react'
import bg from '../assets/img/students-standing-40.png'
import NavigationBar from './components/NavigationBar'
import img from "../assets/img/students-standing.jpg";
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
    <NavigationBar />
      <div
        className="container-fluid text-white"
        style={{
          height: "70vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container"
          style={{ width: "60%", textAlign: "left",  padding: "150px 0" }}
        >
          <h3 style={{ fontWeight: "bold" }}>
          It takes a VILLAGE
to raise a CHILD
          </h3>
          <br />
          <p style={{textAlign: 'justify'}}>
          Over 40% of Africa’s population is living under the poverty line (below
$2 per day) and barely surviving everyday. This size of Africa’s
population sees education as LUXURY as it’s not a primary need base
do n their income.
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <p style={{ textAlign: "justify" }}>
           

Leaving over 200,000,000 young people uneducated will have adverse
effect on Africa’s social and economic development and could cripple
the continent’s growth.

Young people across Africa are smart and are eager to change Africa’s
narratives, but about half of the population lack access to quality higher
education due to financial constraints
              <br />
              <br />
              EduFund is a crowdfunding platform that enables underserved African
youths to raise funding for their higher education. EduFUND is the first
decentralized future-value education funding solution that enables
education enthusiast to offer impact investing in smart and promising
African youth to acquire quality education and get repaid after the
student beneficiary is gainfully employed. The beneficiary student
makes repayment in installments to impact investors that contributed to
their university financial needs. The platform also allows philanthropists
to donate to sponsoring a student to study in their university of choice on
grant basis.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img} style={{ maxWidth: "100%" }} alt="..." />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
