import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import {RainBtn}  from "../RainBtn";

const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <>

  {/* <!-- ======= Header ======= --> */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
    <div className="container">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" onClick={() => setOpen(!open)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={open} aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Collapse in={open} className="navbar-collapse ">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
 
      <li className="dropdown"><a href="#"><span></span>Trade <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>

              </ul>
              
              </li>
              <li className="dropdown"><a href="#"><span>DAO</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>

              </ul>
              
              </li>
              <li className="dropdown"><a href="#"><span>Earn</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>

              </ul>
              
              </li>
              <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>

              </ul>
              
              </li>
              <li className="dropdown"><a href="#"><span>Bridges</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 1</a></li>

              </ul>
              
              </li>
              <li><a className="dropdown scrollto" href="#contact" id="buy-text">Buy ETH</a></li>

              
    </ul>
    <form className="form-inline ms-auto my-2 my-lg-0" id="navbar-form">
    <div className="header-btns">

<RainBtn/>
      
      {/* <i className="bi bi-gear" id="setting-icon"></i> */}
    </div>
    </form>
  </div>
  </Collapse>
  </div>
</nav>
  {/* <!-- End Header --> */}

    </>
  );
};

export default Navbar;