import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom'
import './Admin.scss'
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
export default function Admin() {
  return (
    <div className="main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="menu">
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
