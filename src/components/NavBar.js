import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <spam className="navbar-brand mb-0 h1">Navbar</spam>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
