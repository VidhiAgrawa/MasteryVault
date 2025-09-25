import React from 'react'
import home from "./home.jpg"
function Navbar() {
  return (
    <div class="container-fluid text-white">
      <img src={home} class="img-fluid" alt="..."/>
      <div class="card-img-overlay d-flex align-items-center justify-content-center">
        <h3 class="card-title">Your Text Here</h3>
      </div>
    </div>

  )
}

export default Navbar