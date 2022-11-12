import React from "react";
import CustomLink from "./CustomLink";
import HeaderLogo from "../Img/btaLogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <CustomLink to="/">
            {" "}
            <img className="bta-logo" src={HeaderLogo} />
          </CustomLink>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink to="/">হোম</CustomLink>
            </li>

            <li className="nav-item">
              <CustomLink to="result">রেজাল্ট</CustomLink>
            </li>

            <li className="nav-item">
              <CustomLink to="course">কোর্স</CustomLink>
            </li>

            <li className="nav-item">
              <CustomLink to="dashboard/allstudent">ড্যাসবোর্ড</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
