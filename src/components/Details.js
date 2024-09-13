import React from 'react';
import './styles/Details.css'
export default function Details(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`${process.env.PUBLIC_URL}/backendimpaft.jpg`} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
