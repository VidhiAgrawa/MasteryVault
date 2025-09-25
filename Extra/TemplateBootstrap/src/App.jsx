import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/HomePage/Homepage';
function App() {
  

  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  )
}

export default App
