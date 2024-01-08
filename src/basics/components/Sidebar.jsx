import React from 'react'
import './Sidebar.scss'
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="b-sidebar">
      <div className="b-links">
        <NavLink to="/basics" end>
          file reader
        </NavLink>
        <NavLink to="/basics/form-design">form design</NavLink>
        <NavLink to="/basics/change-background">background changer</NavLink>
        <NavLink to="/basics/aa2">file reader</NavLink>
      </div>
    </div>
  );
}
