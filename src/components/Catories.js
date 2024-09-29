import React from 'react'
import { Link } from 'react-router-dom';
export default function Catories(props) {
  return ( 
   
      <div className="HH my-5" style={{width:"18rem",margin:"2%" }}>
         <Link to={`/founditem/${props.content_text}`}>
      <img src={props.image} className="card-img-top" alt="Card image cap" style={{height:"30vh"}}/></Link>
  <div className="card-body">
  <Link to={`/founditem/${props.content_text}`}>
    <p className="card-text" style={{textAlign:'center',color:'black',fontSize:"20px"}}>{props.content_text}</p></Link>
  </div>
</div>

  )
}
