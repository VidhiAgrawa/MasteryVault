import React from 'react'
import homeImg from "/assets/homeimg.jpg"
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Homepage() {
  return (
    <>
        <div class="position-relative container-fluid p-0 w-100">
            <img src={homeImg} class="img-fluid w-100" alt="..."/>
            <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h1 class="card-title" style={{ fontSize: "xxx-large" }}>AI Execs</h1>
                <p class="card-text fs-4">Mergers and Acquisitions in Artificial<br/> Intelligence and Associated Technologies</p>
                <Button href="#" class="btn text-white py-2 px-4" style={{backgroundColor: "#ff4512"}} >Request Report</Button>
            </div>
        </div>
    
    </>
  )
}

export default Homepage