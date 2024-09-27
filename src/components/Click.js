import React from 'react'
import './styles/Click.css';
export default function Click(props) {
  return (
    <div>
<button className="Btn" onClick={props.handleLogin||props.handleSignup} >
  {props.Click} 
</button>
      
    </div>
  )
}
