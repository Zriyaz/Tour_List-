import React from "react"
import logo from "../../logo.svg"
import './navbar.scss'
const Navbar =()=>{
  return(
    <nav className="navbar">
    <img src={logo} alt="city tours" />
    <ul className="nav-link">
      <li> <a href="/" className="nav-link">
       Home
      </a></li>
      <li> <a href="/" className="nav-link">
       About
      </a></li>
      <li> <a href="/" className="nav-link active">
       tours
      </a></li>
    </ul>
    </nav>
  )
}
export default Navbar