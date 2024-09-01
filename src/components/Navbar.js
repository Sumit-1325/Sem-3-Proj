import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">FindMyStuff</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Lostitem">Report Lost items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="founditem">Report Found Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="feed">Founditems List</Link>
              </li>
             
            </ul>
            <button className="btn btn-outline-primary " onClick={handleLogin}>Login</button>
          </div>
        </div>
      </nav>
    </>

  )
}
