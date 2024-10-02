import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Home.css'

export default function Navbar() {
  return (
    <>
     <nav>
        <div className="nav-links" id='navLinks' >
          <ul>
            <li><Link to="/Home"  >Home</Link></li>
            <li><Link to="/founditem"> Objects Found</Link></li>
            <li><Link to="/reportfditem">Report FoundItems</Link></li>
            <li><Link to="/postitem" >Report LostItems</Link></li>
            <li><Link to="/AboutUs" >AboutUs</Link></li>   
          </ul>
        </div>
        <li style={{ listStyle: "none", display: "inline-block", paddingBottom: "12px", }}>
  <button style={{ backgroundColor: "#f44336", padding: "10px 20px", display: "flex", justifyContent: "center", alignItems: "center",borderRadius: "25px",border:"black" }}>
    <Link to="/Signup" id="ss" style={{ color: "white", textAlign: "center", width: "100%",textDecoration:"none" }}>Signup</Link>
  </button>
</li>
      </nav>
      </>
  )
}
