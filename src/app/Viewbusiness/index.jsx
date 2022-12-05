import React from "react";
import Layout from "../../layout";
import { Card, Flex } from "./style";
import { Link } from "react-router-dom";
import right from "../../assets/chevron_right.png";
import ArrowRight from "../../assets/icons/ArrowRight";

const ViewBusiness = () => {
  return (
    <Layout>
      <Flex>
        <div className="flow">
          <div className="right">
            <ArrowRight />
          </div>
          <Link to="/businesses" className="link">
            Businesses
          </Link>
        </div>

        <img src={right} alt="right_arrow" className="arrow" />
        <h1>Business Details</h1>
      </Flex>
      <Card>
        <div className="header">
          <div className="circle">PL</div>
          Plexus
        </div>
        <div className="body">
          <div className="content_box">
            <p className="content_title">Business Owner</p>
            <p className="content_text">Adekunle Ciroma</p>
          </div>

          <div className="content_box">
            <p className="content_title">Email Address</p>
            <p className="content_text">info@plexus.com</p>
          </div>

          <div className="content_box">
            <p className="content_title">Phone Number</p>
            <p className="content_text">+2347023456789</p>
          </div>

          <div className="content_box">
            <p className="content_title">Create</p>
            <p className="content_text">10 Aug 2022 - 9:45AM</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="header">Company Address</div>
        <div className="body">
          <div className="content_box">
            <p className="content_title">Store Address</p>
            <p className="content_text">12, Jaxsn, Street</p>
          </div>

          <div className="content_box">
            <p className="content_title">City</p>
            <p className="content_text">Lagos Island</p>
          </div>

          <div className="content_box">
            <p className="content_title">State</p>
            <p className="content_text">Lagos, State</p>
          </div>

          <div className="content_box">
            <p className="content_title">Postal Code</p>
            <p className="content_text">123456</p>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default ViewBusiness;
