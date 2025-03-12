import React from "react";
import { Link } from "react-router-dom";
import faveicon from "../assets/images/png/faveicon_vpn.png";

const Header = () => {
  return (
    <div className="my_container">
      <div className="d-flex justify-content-between align-items-center pt-5 pb-3">
        <div className="d-flex gap-2 align-items-center">
          <img className="w-100" src={faveicon} alt="LaslesVPN Logo" />
          <p className="fs_20 fw-medium text_naviblue">
            Lasles<span className="fw-bold">VPN</span>
          </p>
        </div>
        
        <nav>
          <ul className="d-flex align-items-center" style={{ gap: "40px" }}>
            <li>
              <Link
                to="/"
                className="nav-link link_btn text_gray fs_16 fw-normal"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Features"
                className="nav-link link_btn text_gray fs_16 fw-normal"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/Pricing"
                className="nav-link link_btn text_gray fs_16 fw-normal"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/Testimonials"
                className="nav-link link_btn text_gray fs_16 fw-normal"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/Help"
                className="nav-link link_btn text_gray fs_16 fw-normal"
              >
                Help
              </Link>
            </li>
          </ul>
        </nav>

        <div className="d-flex align-items-center" style={{ gap: "40px" }}>
          <Link to="/Login" className="fw-medium fs_16 text_naviblue link_btn">
            Sign in
          </Link>
          <Link to="/Register" className="sign_up_btn fw-medium fs_16">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
