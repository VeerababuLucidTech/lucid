import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaThLarge,
  BsFillBuildingsFill,
  BsCreditCard2FrontFill,
  FaUserTie,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Overview",
      icon: <FaThLarge />,
    },
    {
      path: "/tenants",
      name: "Tenants",
      icon: <FaUserAlt />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUserTie />,
    },
    {
      path: "/analytics",
      name: "Users",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Address Book",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Payments",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Invoices",
      icon: <FaThList />,
    },
    {
      path: "/login",
      name: "Login Form",
      icon: <FaUserTie />,
    },
  ];
  return (
    <div className="" style={{display:"flex"}}>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Lucid
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;