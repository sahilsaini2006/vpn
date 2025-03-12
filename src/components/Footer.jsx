import React from "react";
import logo from "../assets/images/png/faveicon_vpn.png";
import facebook from "../assets/images/svg/facebook_icon.svg";
import twitter from "../assets/images/svg/twitter_icon.svg";
import instagram from "../assets/images/svg/instagram_icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 pt-5 ">
        <section className="my_container">
          <div className="mt-5 pt-4 position-relative d-block">
            <div className="bg-white rounded_10 subscribe_box row align-items-center justify-content-between">
              <div className="col-5">
                <p className="fs_35 fw-medium lh_50 text_naviblue">
                  Subscribe Now for Get Special Features!
                </p>
                <p className="fs_16 fw-normal lh_30 text_gray mt-3 pt-1">
                  Let's subscribe with us and find the fun.
                </p>
              </div>
              <div className="col-3">
                <div className="text-end">
                  <button className="subscribe_btn fs_16 fw-bold ">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#F8F8F8" }}>
          <div className="footer_box d-flex align-items-center justify-content-center mt-5 pt-2">
            <div className="my_container flex-grow-1">
              <div className="row justify-content-between h-100">
                <div className="col-4">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    <img src={logo} alt="logo" />
                    <p className="fs_20 fw-medium text_naviblue">
                      Lasles<span className="fw-bold">VPN</span>
                    </p>
                  </div>
                  <p className="fs_16 fw-normal text_gray lh_30 mt-3 pt-1 w_85">
                    <span className=" fw-medium">LaslesVPN</span> is a private
                    virtual network that has unique features and has high
                    security.
                  </p>
                  <div className="d-flex gap-3 mt-4 pt-1 justify-content-start">
                    <a href="*">
                      <img src={facebook} alt="facebook" />
                    </a>
                    <a href="*">
                      <img src={twitter} alt="facebook" />
                    </a>
                    <a href="*">
                      <img src={instagram} alt="facebook" />
                    </a>
                  </div>

                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 d-inline-block mt-4 pt-1"
                    style={{ color: "#AFB5C0" }}
                  >
                    ©2020Lasles<span className="fs-medium">VPN</span>
                  </a>
                </div>

                <div className="col-2">
                  <p className="fs_18 fw-medium lh_30 text_naviblue">Product</p>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-3 pt-1 d-block"
                  >
                    Download
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Pricing
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Locations
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Server
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Countries
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Blog
                  </a>
                </div>

                <div className="col-2">
                  <p className="fs_18 fw-medium lh_30 text_naviblue">Engage</p>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-3 pt-1 d-block"
                  >
                    LaslesVPN ?
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    FAQ
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Tutorials
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    About Us
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Terms of Service
                  </a>
                </div>

                <div className="col-2">
                  <p className="fs_18 fw-medium lh_30 text_naviblue">
                    Earn Money
                  </p>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-3 pt-1 d-block"
                  >
                    Affiliate
                  </a>
                  <a
                    href="*"
                    className="fs_16 fw-normal lh_30 text_gray mt-2 d-block"
                  >
                    Become Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
