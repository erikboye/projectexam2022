import React from "react";
import axios from "axios";
// import Link from "next/link";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:1337/hotels");
  const data = await res.json();

  return {
    props: { hotels: data },
  };
};

function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <button className="dashboard_head_button">Hotels</button>
        <button className="dashboard_head_button">Messages</button>
        <button className="dashboard_head_button">Enquiries</button>
      </div>
      <div className="col-sm-12">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Edit Hotel</th>
              <th scope="col">Delete Product</th>
            </tr>
          </thead>
          <tbody className="dashboard_table"></tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
