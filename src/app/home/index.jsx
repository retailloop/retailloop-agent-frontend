import React from "react";
import Layout from "../../layout";
import { Container, Details, ProgressBar, BusinessCard } from "./style";
import radar from "../../assets/radar.png";
import ShopIcon from "../../assets/icons/shopIcon";
import Table from "./components/Table";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <Layout>
      <Container>
        <h1>Home</h1>

        <Details>
          <div className="card_n">
            <div className="card_body">
              <div className="circle">
                <img src={radar} alt="radar" />
              </div>
              <div className="left_text">
                <p className="text">Your Daily Target!</p>
                <p id="cont">
                  You have a daily target of 10 new businesses to onboard.
                </p>
                <p className="phase">
                  2/10
                  <small style={{ fontSize: "16px", fontWeight: "600" }}>
                    Left
                  </small>
                </p>
              </div>
            </div>
            <p className="progress_text">80% Complete</p>
            <ProgressBar>
              <div className="inner" />
            </ProgressBar>
          </div>

          <div className={styles.card}>
            <div className={styles.circle}>
              <ShopIcon color="#123FDF" />
            </div>
            <p className={styles.number}>150</p>
            <p className={styles.text}>Total Businesses</p>
          </div>
        </Details>
      </Container>

      <BusinessCard>
        <div className="header">New Businesses</div>

        <div className="body">
          <div
            style={{
              border: "0.5px solid #D9D8DA",
              borderRadius: "10px",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <Table />
          </div>
        </div>
      </BusinessCard>
    </Layout>
  );
};

export default Home;
