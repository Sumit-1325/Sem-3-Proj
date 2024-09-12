import React from 'react'

export default function Catories(props) {
  return ( 
      <div class="HH my-5" style={{width:"18rem",margin:"2%" }}>
      <img src={props.image} class="card-img-top" alt="Card image cap" style={{height:"30vh"}}/>
  <div class="card-body">
    <p class="card-text" style={{textAlign:'center',color:'black',fontSize:"20px"}}>{props.content_text}</p>
  </div>
</div>
  )
}
