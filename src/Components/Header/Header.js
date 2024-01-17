import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="nav-top">
        <h1>
          <Link to="/">Mayank's Directory</Link>
        </h1>
      </div>
      <div className="nav-tabs">
        <Link
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          to="/"
        >
          Add New Person
        </Link>
        <Link
          className={
            location.pathname === "/retrieve" ? "nav-link active" : "nav-link"
          }
          to="/retrieve"
        >
          Retrieve Information
        </Link>
      </div>
    </header>
  );
};

export default Header;
