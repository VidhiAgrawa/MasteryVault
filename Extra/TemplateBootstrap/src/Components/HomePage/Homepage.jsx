import React from 'react';
import homeImg from "/assets/homeimg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Homepage.css";
import { Button } from 'react-bootstrap'; 
function Homepage() {
  return (
    <>
      <div className='container-fluid p-0 position-relative d-flex justify-content-center align-items-center'>
        <img src={homeImg} className="img-responsive image-con w-100" alt="background" />

        {/* Centered content */}
        <div className="overlay-text text-center">
          <h1>AI Execs</h1>
          <p>Mergers and Acquisitions in Artificial <br />Intelligence and Associated Technologies</p>
          <Button 
            style={{
              backgroundColor: '#FF4512',
              color: '#fff',
              fontWeight: 'bold',
              padding: '12px 24px',   // responsive sizing instead of fixed height/width
              fontSize: '1rem',       // scales with screen size
              borderRadius: '6px',    // optional styling
              width: '100%',          // makes it adapt inside parent container
              maxWidth: '250px',      // prevents it from getting too big
            }}
          >
            Request Report
          </Button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
