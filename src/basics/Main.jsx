import React from 'react'
import './Main.scss'
import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';
export default function Main() {
  return (
    <div className="container">
      <nav className="m-navbar">navbar</nav>
      <aside className="m-sidebar"><Sidebar/></aside>

      <main className="main">
        <Outlet />
      </main>
      <footer className="m-footer">
        this is footer
      </footer>
    </div>
  );
}
