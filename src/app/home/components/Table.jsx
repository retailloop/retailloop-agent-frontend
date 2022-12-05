import React from "react";
import { Flex } from "../style";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table_head">
          <th>Business name</th>
          <th>Business owner</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Date </th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        <tr className="table_body">
          <td>
            <Flex>
              <div className="circle">PL</div>
              Plexus
            </Flex>
          </td>
          <td>Adekunle Ciroma</td>
          <td>adekunleciroma@gmail.com</td>
          <td>+2347023456789</td>
          <td>10 Aug 2022 - 9:45AM</td>
          <td>
            <Link
              to={`/businesses/${1}`}
              style={{
                textDecoration: "none",
                color: "#3F12C4",
                fontWeight: "600",
              }}
            >
              View
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
