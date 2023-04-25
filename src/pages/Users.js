import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "../components/Tabs";
// import Tenants from '../components/Tenants.json';

function Users(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    var response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
    console.log(response);
  }, []);
  return (
    <div>
      <Tabs></Tabs>
      <div style={{ margin: "5px 5px" }}>
        {/* {data.map(item => <td key={item.id} style={{ textAlign: "left" }}>{item.userId} <br /> {item.id} <br /> {item.title}</td>)} */}
        <div className="border-3 table-responsive">
          <table className="table table-striped table-hover">
            <thead className="text-bg-primary" style={{ border: "1px solid" }}>
              <tr>
                <th>Tanent ID</th>
                <th>Tanent Name</th>
                <th>Created By</th>
                <th>Email</th>
                <th>options</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <center>:</center>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
