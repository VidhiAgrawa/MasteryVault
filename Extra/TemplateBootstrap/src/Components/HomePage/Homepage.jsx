import React from 'react'
import homeImg from "/assets/homeimg.jpg"
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Homepage() {
  return (
    <>
        <div class="bg-img text-white " style={{position: "relative" ,backgroundImage: `url("/assets/homeimg.jpg")`, minHeight: "50vh", backgroundSize: "cover", 
    }}>
        </div>
        <div className="color-overlay d-flex justify-content-center align-item-center">
          <h1>AI Execs</h1>
        </div>
            {/* <img src={homeImg} alt="..."/> */}
    </>
  )
}

export default Homepage