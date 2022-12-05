import React from "react";
import Layout from "../../layout";
import Table from "../home/components/Table";
import TitleCard from "./components/TitleCard";

const Business = () => {
  return (
    <Layout>
      <TitleCard />
      <div
        style={{
          border: "0.5px solid #D9D8DA",
          borderRadius: "10px",
          width: "100%",
          overflowX: "auto",
          marginTop: " 28px",
        }}
      >
        <Table />
      </div>
    </Layout>
  );
};

export default Business;
