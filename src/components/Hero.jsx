import React from "react";
import LaslesVPN from "../assets/images/svg/LaslesVPN.svg";
import users from "../assets/images/png/user.png";
import location from "../assets/images/png/location.png";
import server from "../assets/images/png/Server.png";
import feature from "../assets/images/svg/manyfeatures.svg";
import green_circle from "../assets/images/png/green_circle.png";
import free from "../assets/images/png/Free.png";
import standard from "../assets/images/png/Standard.png";
import premium from "../assets/images/png/Premium.png";
import green_tick from "../assets/images/png/tick.png";
import map from "../assets/images/png/global_map.png";
import netflix from "../assets/images/svg/netflix.svg";
import reddi from "../assets/images/svg/reddi.svg";
import amarzon from "../assets/images/svg/amazon.svg";
import discord from "../assets/images/svg/discord.svg";
import spotify from "../assets/images/svg/spotify.svg";
import star from "../assets/images/png/yellow_star.png";
import viezh from "../assets/images/svg/viezh_robert.svg";
import yessica from "../assets/images/svg/yessica_christy.svg";
import kim from "../assets/images/svg/kim_young.svg";
import group_dots from "../assets/images/png/group_dots.png";
import left_arrow from "../assets/images/svg/left.svg";
import right_arrow from "../assets/images/svg/right.svg";


const Hero = () => {
  return (
    <div className="my_container">
      {/*  --------------- hero-section ----------------  */}
      <div className="heroMIn d-flex">
        <div className="flex-grow-1 row justify-content-between align-items-center">
          <div className="col-5">
            <p className="fs_50 fw-medium lh_70 text_naviblue">
              Want anything to be easy with{" "}
              <span className="fw-bold">LaslesVPN.</span>
            </p>
            <p className="fs_16 fw-normal text_gray lh_30 mt-3 pt-1">
              Provide a network for all your needs with ease and fun using
              <span className="fw-medium"> LaslesVPN</span> discover interesting
              features from us.
            </p>
            <button className="fs_16 fw-bold lh_25 started mt-5">
              Get Started
            </button>
          </div>
          <div className="col-6">
            <img className="w-100" src={LaslesVPN} alt="LaslesVPN img" />
          </div>
        </div>
      </div>

      <main>
        {/*  --------------- section 1 ----------------  */}
        <section className="my_container ">
          <div className="row align-items-center justify-content-between bg-white rounded_10 pblock_37  p_37">
            <div className="col-4 px-0 border_end_2 pblock_30">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "36px" }}
              >
                <div>
                  <img src={users} alt="users" />
                </div>
                <div>
                  <p className="fs_25 fw-bold text_naviblue">90+</p>
                  <p className="fs_20 fw-normal text_gray">Users</p>
                </div>
              </div>
            </div>
            <div className="col-4 px-0 border_end_2 pblock_30">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "36px" }}
              >
                <div>
                  <img src={location} alt="location" />
                </div>
                <div>
                  <p className="fs_25 fw-bold text_naviblue">30+</p>
                  <p className="fs_20 fw-normal text_gray">location</p>
                </div>
              </div>
            </div>

            <div className="col-4 px-0 pblock_30">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "36px" }}
              >
                <div>
                  <img src={server} alt="server" />
                </div>
                <div>
                  <p className="fs_25 fw-bold text_naviblue">50+</p>
                  <p className="fs_20 fw-normal text_gray">Servers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blur_14 py-3"></div>
        </section>

        {/*  --------------- section 2 ----------------  */}
        <section className="my_container">
          <div className="row align-items-center justify-content-between mt-4 pt-3">
            <div className="col-6">
              <img className="w-100" src={feature} alt="feature" />
            </div>

            <div className="col-4">
              <p className="fs_35 lh_50 fw-medium text_naviblue ">
                We Provide Many Features You Can Use
              </p>
              <p className="fs_16 fw-normal text_gray lh_30 mt-4 pt-1 ">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
              <div
                className="d-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <img src={green_circle} alt="green_circle" />
                <p className="fs_14 fw-normal lh_30 text_gray">
                  Powerfull online protection.
                </p>
              </div>
              <div
                className="d-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <img src={green_circle} alt="green_circle" />
                <p className="fs_14 fw-normal lh_30 text_gray">
                  Internet without borders.
                </p>
              </div>
              <div
                className="d-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <img src={green_circle} alt="green_circle" />
                <p className="fs_14 fw-normal lh_30 text_gray">
                  Supercharged VPN
                </p>
              </div>
              <div
                className="d-flex align-items-center mt-4"
                style={{ gap: "10px" }}
              >
                <img src={green_circle} alt="green_circle" />
                <p className="fs_14 fw-normal lh_30 text_gray">
                  No specific time limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  --------------- section 3 ----------------  */}
        <section className="my_container pt-5 mt-5">
          <div className="text-center mt-5 pt-5">
            <p className="fs_35 fw-medium lh_50 text_naviblue">
              Choose Your Plan
            </p>
            <p className="fs_16 fw-normal text_gray lh_30 mt-3 pt-1 w_40 m-auto">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div className="row justify-content-between mt-5 pt-3 w_85 m-auto">
            <div className="col-4 ">
              <div className="d-flex text-center justify-content-between flex-column h-100 border_hover">
                <div className="d-flex text-center justify-content-center flex-column">
                  <img className="w-100" src={free} alt="free plan" />
                  <p className="fs_18 fw-medium lh_30 text_naviblue mt-4 pt-1">
                    Free Plan
                  </p>
                  <div className="d-flex justify-content-center flex-column m-auto mt-4 pt-1">
                    <div
                      className="d-flex align-item-center "
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Unlimited Bandwitch
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-start mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Encrypted Connection
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        No Traffic Logs
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Works on All Devices
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="fs_25 fw-medium text_naviblue lh_30 text-center">
                    Free
                  </p>
                  <button className="select_btn fs_16 fw-bold mt-3 pt-1 d-inline-block">
                    select
                  </button>
                </div>
              </div>
            </div>

            <div className="col-4 ">
              <div className="d-flex text-center justify-content-between flex-column h-100 border_hover">
                <div className="d-flex text-center justify-content-center flex-column">
                  <img className="w-100" src={standard} alt="free plan" />
                  <p className="fs_18 fw-medium lh_30 text_naviblue mt-4 pt-1">
                    Standard Plan
                  </p>
                  <div className="d-flex justify-content-center flex-column m-auto mt-4 pt-1">
                    <div
                      className="d-flex align-item-center "
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Unlimited Bandwitch
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-start mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Encrypted Connection
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Yes Traffic Logs
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Works on All Devices
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Connect Anyware
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="fs_25 fw-medium text_naviblue lh_30 text-center">
                    $9 <span className="fw-normal">/ mo</span>
                  </p>
                  <button className="select_btn fs_16 fw-bold mt-3 pt-1 d-inline-block">
                    select
                  </button>
                </div>
              </div>
            </div>

            <div className="col-4  ">
              <div className="d-flex text-center justify-content-between flex-column h-100 border_hover">
                <div className="d-flex text-center justify-content-center flex-column">
                  <img className="w-100" src={premium} alt="free plan" />
                  <p className="fs_18 fw-medium lh_30 text_naviblue mt-4 pt-1">
                    Premium Plan
                  </p>
                  <div className="d-flex justify-content-center flex-column m-auto mt-4 pt-1">
                    <div
                      className="d-flex align-item-center "
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Unlimited Bandwitch
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-start mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Encrypted Connection
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Yes Traffic Logs
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Works on All Devices
                      </p>
                    </div>

                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Connect Anyware
                      </p>
                    </div>
                    <div
                      className="d-flex align-item-center mt-2"
                      style={{ gap: "10px" }}
                    >
                      <img src={green_tick} alt="" />
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Get New Features
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="fs_25 fw-medium text_naviblue lh_30 text-center mt-5">
                    $12 <span className="fw-normal">/ mo</span>
                  </p>
                  <button className="select_btn fs_16 fw-bold mt-3 pt-1 d-inline-block">
                    select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  --------------- section 4(global network) ----------------  */}
        <section className="my_container mt-5 pt-5">
          <div className="text-center my-5 py-4">
            <p className="fs_35 fw-medium lh_50 text_naviblue">
              Huge Global Network <span className="d-block">of Fast VPN</span>
            </p>
            <p className="fs_16 fw-normal text_gray lh_30 mt-3 pt-1 w_40 m-auto">
              See <span className="fw-medium">LaslesVPN</span> everywhere to
              make it easier for you when you move locations.
            </p>
          </div>
          <div className="mt-5 pt-5 pb-3">
            <img className="w-100" src={map} alt="map" />
          </div>
          <div className="d-flex align-items-center justify-content-between mt-5 pt-4">
            <img src={netflix} alt="netflix" />
            <img src={reddi} alt="reddi" />
            <img src={amarzon} alt="amarzon" />
            <img src={discord} alt="discord" />
            <img src={spotify} alt="spotify" />
          </div>
        </section>

        {/*  --------------- section 5(Happy customer)---------------- */}
        <section className="my_container mt-5 pt-5">
          <div className="text-center mt-2">
            <p className="fs_35 fw-medium lh_50 text_naviblue">
              Trusted by Thousands of
              <span className="d-block">Happy Customer</span>
            </p>
            <p className="fs_16 fw-normal text_gray lh_30 mt-3 pt-1 w_40 m-auto">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>

          <div className="row justify-content-between mt-5 pt-2">
            <div className="col-4">
              <div className="h-100 box_">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={viezh} alt="viezh" />
                    <div>
                      <p className="fs_18 fw-medium text_naviblue lh_30">
                        Viezh Robert
                      </p>
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Warsaw, Poland
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <p className="fs_16 fw-normal lh_30 text_naviblue">4.5</p>
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="fs_16 fw-normal lh_30 text_naviblue mt-3 pt-1">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="h-100 box_">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={yessica} alt="viezh" />
                    <div>
                      <p className="fs_18 fw-medium text_naviblue lh_30">
                        Yessica Christy
                      </p>
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Shanxi, China
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <p className="fs_16 fw-normal lh_30 text_naviblue">4.5</p>
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="fs_16 fw-normal lh_30 text_naviblue mt-3 pt-1">
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </p>
              </div>
            </div>

            <div className="col-4">
              <div className="h-100 box_">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <img src={kim} alt="viezh" />
                    <div>
                      <p className="fs_18 fw-medium text_naviblue lh_30">
                        Kim Young Jou
                      </p>
                      <p className="fs_14 fw-normal text_gray lh_30">
                        Seoul, South Korea
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <p className="fs_16 fw-normal lh_30 text_naviblue">4.5</p>
                    <img src={star} alt="star" />
                  </div>
                </div>
                <p className="fs_16 fw-normal lh_30 text_naviblue mt-3 pt-1">
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-5 pt-2">
            <div>
              <img src={group_dots} alt="group_dots" />
            </div>
            <div className="d-flex gap-3">
              <img src={left_arrow} alt="left_arrow" />
              <img src={right_arrow} alt="right_arrow" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
