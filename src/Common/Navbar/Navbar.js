
import { Link } from "react-router-dom"

import React from 'react'
import './Footer.css'

function Navbar() {
    return (
        <div>
            {/* <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
                <div className="container">
                <Link to ="/" className="navbar-brand">
                        <i className="fas fa-blog"></i> &nbsp;
                        Blog Template
                        </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to ="/" class="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/About" className="nav-link active">About</Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link to ="/Contact" className="nav-link active">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav> */}
            {/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav  justify-content-end">
        <li class="nav-item">
        <Link to ="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        
        <a href="#abt" className="nav-link active">ABOUT</a>
        </li>
        <li class="nav-item">
      
          <Link to ="/Contact" className="nav-link">Contact</Link>
        </li>    
      </ul>
    </div>
  </div>
</nav> */}
<div className="container">
<ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#abt">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact">Contact</a>
    </li>
    
  </ul>
  </div>
        </div>
    )
}

export default Navbar