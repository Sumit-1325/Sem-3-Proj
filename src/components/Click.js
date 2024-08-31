import React from 'react'
import './Click.css';
export default function Click(props) {
  return (
    <div>
<button class="Btn" onClick={props.handleLogin||props.handleSignup} >
  {props.Click} 
</button>
      
    </div>
  )
}
