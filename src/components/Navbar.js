import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar2.css'

export default function Navbar() {
  return (
    <>
     <nav>
        <div className="nav-links" id='navLinks' >
          <ul>
            <li><Link to="/Home"  >Home</Link></li>
            <li><Link to="/founditem"> Found Items</Link></li>
            <li><Link to="/reportfditem">Report Found Items</Link></li>
            <li><Link to="/postitem" >Postitems</Link></li>
          </ul>
        </div>
      </nav>
      </>
  )
}
