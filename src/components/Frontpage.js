import React from 'react';
import './styles/styles.css';
// import Click from './Click';
 import { useNavigate } from 'react-router-dom';
 import Navbar from './Navbar';

import './styles/style.css';
import backgroundVideo from '../video/backgroundVideo.mp4';



function Frontpage() {


   const navigate = useNavigate();

  const handlelearnmore = () => {
    navigate('/learnmore')
  };

    // const handleLogin = () => {
    //     navigate('/login')
    // };

    return (
        <>

            <div className="video-container">
        <Navbar/>
                <video autoPlay muted loop id="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="center">
                <div className="title">Let's help each other together!</div>
                <div className="sub_title">Lost and found Website.</div>
                <div className="btns">
                    <button onClick={handlelearnmore}><a to="lernmore">Learn More</a></button>
                    <button><a to="login.html">Get started!!</a></button>
                </div>
            </div>
            {/* <div>
                <Click Click={"Login"}
                    handleLogin={handleLogin} />
            </div>
            <div style={{ margin: "6%" }}>
                <Click Click={"Signup"} handleSignup={handleSignup} />
            </div> */}
        </>
    );
}

export default Frontpage;
