import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile-3.jpg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} className="logo" alt="logo" />
        <h2>Sagar Admin</h2>
      </div>
      <div className="nav-links">
        <div>
          <span class="material-symbols-outlined">search</span>
          <span className="title">search</span>
        </div>
        <div>
          <span class="material-symbols-outlined">grid_view</span>
          <span className="title">search</span>
        </div>
        <div>
          <span class="material-symbols-outlined">fullscreen</span>{" "}
          <span className="title">search</span>
        </div>
        <div className="notification">
          <span class="material-symbols-outlined">notifications</span>
          <span className="message_count">1</span>
          <span className="title">search</span>
        </div>
        <div className="user">
          <img src={profile} alt="search" />
          <span className="info">sagar</span>
          <span className="title">search</span>
        </div>
        <div>
          <span class="material-symbols-outlined">settings</span>{" "}
          <span className="title">search</span>
        </div>
      </div>
    </div>
  );
}
