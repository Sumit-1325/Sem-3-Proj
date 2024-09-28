import React from 'react'
import learnMore from '../video/learnmore.jpg';
import './styles/LearnMore.css';
export default function LearnMore() {
  return (
    <>
    <div>
          <img src={learnMore} class="background-img"></img>
          
       <div class="content ">
        
        <div class="title my-5">Learn More!!</div>
        <p class="yapping">Losing personal belongings is a common and frustrating experience for Most of  Us. Current solutions for finding lost items are fragmented, inefficient, and fail to provide a centralized, user-friendly platform.
            
            We introduce "FindMyStuff," a website that allows users to upload any missing objects that they have found and search for lost stuff. It has a user-friendly interface and very detailed filtration. It works on the virtual volunteering of netizens. 
            </p>
    </div>
    </div>
    </>
  )
}
