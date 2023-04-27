import Table from "react-bootstrap/Table";
import Tabs from "../components/TenantTabs";
import { useEffect, useState } from "react";
import axios from "axios";
import Example from "../components/TableOffCanvas";
import TenantWidget from "../components/widget/TenantWidget";
import TenantTabs from "../components/TenantTabs";

function TenantsTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    var response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <TenantWidget></TenantWidget>
      <TenantTabs></TenantTabs>
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
                <td>
                  <div class="form-check fs-0 mb-0">
                    <input
                      // title="Toggle All Rows Selected"
                      type="checkbox"
                      class="form-check-input"
                    />
                    {items.name}
                  </div>
                </td>
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
