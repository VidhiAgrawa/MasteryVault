import { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/assets/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-white px-3">
        <div className="container-fluid">
          <img src={logo} width="90" height="50" alt="Logo" />

          {/* Toggle button for sidebar */}
          <button
            className="btn navbar-toggler btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar / Offcanvas */}
      <div
        className="offcanvas offcanvas-start text-bg-dark"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Sellers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Buyers
              </a>
            </li>
            <li className="nav-item bg-danger">
              {/* Active / Highlighted item */}
              <a className="nav-link text-white px-3" href="#">
                Valuations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Deal Flow
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Markets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Investments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Geography
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#">
                Advisors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
