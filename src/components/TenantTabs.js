import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TenantsTable from "../pages/TenantsTable";

function TenantTabs() {
  return (
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-2">
      <Tab eventKey="all" title="All">
      
      </Tab>
      <Tab eventKey="active" title="Active"></Tab>
      <Tab eventKey="inactive" title="Inactive"></Tab>
      <Tab eventKey="expiring" title="Expiring"></Tab>
      <Tab eventKey="expired" title="Expired"></Tab>
    </Tabs>
  );
}

export default TenantTabs;
