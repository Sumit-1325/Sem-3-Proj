import React from 'react';

export default function Card(props) {
  return (
    <div className="col-sm-6 my-3">
      <div className="card">
        <div className="card-body" style={{ marginRight: "5px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div className='Pic' style={{ border: "1px solid black", height: "80px", width: "80px", borderRadius: "50%" }}>
            <img src={props.image} alt='pic' style={{ height: "100%", width: "100%", borderRadius: "50%" }} />
          </div>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content_text}</p>
          <a href="#" className="btn btn-primary" onClick={props.work}>{props.go}</a>
        </div>
      </div>
    </div>
  );
}
