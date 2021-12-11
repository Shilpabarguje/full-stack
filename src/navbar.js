import React,{useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar =()=>{
 const[show,setShow]=useState()
    return <>
    <section className="navsection-bg">
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" href="#">SaiInfo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <NavLink class="nav-link active"
              aria-current="page" to="/">
                Home
              </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">
          Services 
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/Services">
          About
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">
          Contact 
          </NavLink>
        </li>
     </ul>

        <form class ="d-flex">
        <button class="btn btn-outline-success btn-style" type="submit">
        <NavLink class="nav-link" to="/login">
          Sign Up
          </NavLink>
          </button>
        <button class="btn btn-outline-success btn-style" type="submit">
        <NavLink class="nav-link" to="/register">
          Login
          </NavLink>
        </button>
        </form>
     </div>
  </div>
</nav>
</section>
 </>;
};

export default Navbar;