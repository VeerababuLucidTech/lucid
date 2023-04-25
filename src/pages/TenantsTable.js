import Table from "react-bootstrap/Table";
import Tabs from "../components/Tabs";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "../components/TableOffCanvas";

function TenantsTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    var response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <Tabs></Tabs>

      <Table responsive hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {data &&
          data.map((items) => (
            <tbody>
              <tr style={{ cursor: "pointer" }}>
                <td>{items.name}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>
                  {" "}
                  <Example></Example>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
}

export default TenantsTable;
