import React from 'react';
import './styles.css';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import Click from './Click';
import { useNavigate } from 'react-router-dom';
function Home() {
  
    const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/Signup')
  };

  const handleLogin = () => {
    navigate('/login')
  };

    return (
        <>

            <div className="home-page">

                <RemoveScrollBar />
                <div className="center-container">
                    <span className="centered-span">
                        <h1 className="welcome-text">WELCOME</h1>
                        <h3>Find Your Stuff</h3>
                    </span>
                </div>
                <div>
                    <Click Click={"Login"}
                    handleLogin={handleLogin} />
                </div>
                <div style={{ margin: "6%" }}>
                    <Click Click={"Signup"} handleSignup={handleSignup} />
                </div>
            </div>
        </>
    );
}

export default Home;
