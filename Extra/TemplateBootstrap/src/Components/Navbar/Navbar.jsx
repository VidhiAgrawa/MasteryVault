import { useState } from 'react'
// import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "/assets/logo.png"
import { Button } from 'react-bootstrap'; 
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-white ">
            <div class="container-fluid">
                <div class="container">
                    <a class="navbar-brand" href="#">
                    <img src={logo}  width="135" height="75"/>
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link active text-dark fs-5 p-0 "  aria-current="page" href="#">Seller</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Buyer</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Valuation</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Deal Flow</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Markets</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Investment</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark  fs-5 p-0" href="#">Geograpgy</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-end">
                        <a class="nav-link text-dark fs-5 p-0" href="#">Advisors</a>
                    </li>
                </ul>
                </div>
            </div>
            
        </nav>
    )
}
export default Navbar