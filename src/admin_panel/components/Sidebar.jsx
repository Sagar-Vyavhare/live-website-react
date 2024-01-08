import React from 'react'
import'./Sidebar.scss'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <span className="title">main</span>
      <NavLink to="/" className="link">
        <span class="material-symbols-outlined">home</span>
        <h2>Home</h2>
      </NavLink>
      <NavLink to="profile" className="link">
        <span class="material-symbols-outlined">person</span>
        <h2>Profile</h2>
      </NavLink>
      <span className="title">list</span>

      <NavLink to="users" className="link">
        <span class="material-symbols-outlined">person</span>
        <h2>users</h2>
      </NavLink>
      <NavLink to="orders" className="link">
        <span class="material-symbols-outlined">inventory</span>
        <h2>Orders</h2>
      </NavLink>
      <NavLink to="products" className="link">
        <span class="material-symbols-outlined">inventory_2</span>
        <h2>products</h2>
      </NavLink>
      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">local_shipping</span>
        <h2>posts</h2>
      </NavLink>
      <span className="title">genral</span>

      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">grid_view</span>{" "}
        <h2>Elements</h2>
      </NavLink>
      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">description</span>{" "}
        <h2>notes</h2>
      </NavLink>
      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">forms_add_on</span>{" "}
        <h2>forms</h2>
      </NavLink>
      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">calendar_month</span>{" "}
        <h2>calender</h2>
      </NavLink>
      <span className="title">maintenance</span>

      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">settings</span>
        <h2>setting</h2>
      </NavLink>
      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">backup</span>
        <h2>Backup</h2>
      </NavLink>
      <span className="title">analytics</span>

      <NavLink to="posts" className="link">
        <span class="material-symbols-outlined">bar_chart</span> <h2>Chart</h2>
      </NavLink>
      <NavLink to="posts" className="link" >
        <span class="material-symbols-outlined">article</span>
        <h2>log</h2>
      </NavLink>
    </div>
  );
}
