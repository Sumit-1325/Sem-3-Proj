import React from 'react'
import './styles/Home.css'
import Content from './Content';
import Catories from './Catories';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';

function App() {


  return (
    <>
    <section className='header'>
      
      <Navbar2/>
      <div className="text-box">
        <h1>Something Lost ??</h1>
        <p>We help our users to find their things they lost.</p>
        <Link to="/learnmore" className='hero-btn'>Visit To Know More</Link>
      </div>
    </section>
    <Content className="my-5"/>
    <h1 style={{ textAlign: "center", color: "#000" , marginTop:"15vh" }} className="underline">CATEGORIES</h1>
    <div className='Difix'>
      
    <Catories  image={'https://th.bing.com/th?id=OIP.AS3D4eXkG2P4hKC8kSnfDQHaGb&w=268&h=232&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Documents" />
    <Catories image={'https://th.bing.com/th?id=OIP.fufgKWaWZfoanNTtnnVN0AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Wallets"/>
    <Catories image={'https://th.bing.com/th/id/OIP.0ZJPPiwU9P0r_jvLLjD8YQHaFU?w=238&h=180&c=7&r=0&o=5&pid=1.7'} content_text="Digital-Devices"/>
    <Catories image={'https://th.bing.com/th/id/OIP.hUaCDuWAqM2zqcHr0RpNqgHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7'} content_text="Books"/>
    </div>
    <div className='Difix'>
    <Catories image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
    <Catories image={'https://security.si.edu/sites/default/files/inline-images/lostandfound.png'} content_text="Others-Items"/>
    </div>
      
    </>
  );
}

export default App;
