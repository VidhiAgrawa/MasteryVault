import { useState } from 'react'
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "/assets/logo.png"
import { Button } from 'react-bootstrap'; 
function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-white p-3">
            <div class="container-fluid">
                <img src={logo}  width="135" height="75"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse h-100" id="navbarNav">
                    <div className='d-flex ps-4 justify-content-around align-item-center w-100 '>
                        <div className='flex-fill fw-semibold text-center'>Seller</div>
                        <div className='flex-fill fw-semibold text-center'>Buyers</div>
                        <div className='flex-fill fw-semibold text-center'> Valuations</div>
                        <div className='flex-fill fw-semibold text-center'>Deal Flow</div>
                        <div className='flex-fill fw-semibold text-center'>Markets</div>
                        <div className='flex-fill fw-semibold text-center'>Investment</div>
                        <div className='flex-fill fw-semibold text-center'>Geography</div>
                        <div className='flex-fill fw-semibold text-center'>Advisors</div>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
export default Navbar