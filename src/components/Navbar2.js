import React,{useState} from 'react'
import './styles/Navbar2.css'
import Content from './Content';
import Catories from './Catories';
import Recentlost from './Recentlost'
import { Link } from 'react-router-dom';


function App() {

  

  const [navlinks, setnavlinks] = useState('-200px');

  const menu = () => {
    setnavlinks(prev => (prev === '-200px' ? '0px' : '-200px'));
  };

  return (
    <>
    <section className='header'>
      <nav>
        <div className="nav-links" id='navLinks' style={{ left: navlinks }}>
          <i className="fa fa-times" onClick={menu}></i>
          <ul>
            <li><Link to="Home"  >Home</Link></li>
            <li><Link to="founditem"> Found Items</Link></li>
            <li><Link to="reportfditem">Report Found Items</Link></li>
            <li><Link to="postitem" >Postitems</Link></li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={menu}></i>
      </nav>
      <div className="text-box">
        <h1>Something Lost ??</h1>
        <p>We help our users to find their things they lost.</p>
        <Link to="" className='hero-btn'>Visit To Know More</Link>
      </div>
    </section>
    <Content className="my-5"/>
    <h1 style={{ textAlign: "center", color: "#000" }} className="underline">CATEGORIES</h1>
    <div className='Difix'>
      
    <Catories  image={'https://th.bing.com/th?id=OIP.AS3D4eXkG2P4hKC8kSnfDQHaGb&w=268&h=232&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Identity Cards" />
    <Catories image={'https://th.bing.com/th?id=OIP.fufgKWaWZfoanNTtnnVN0AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Wallets"/>
    <Catories image={'https://th.bing.com/th/id/OIP.0ZJPPiwU9P0r_jvLLjD8YQHaFU?w=238&h=180&c=7&r=0&o=5&pid=1.7'} content_text="Digital Devices"/>
    <Catories image={'https://th.bing.com/th/id/OIP.hUaCDuWAqM2zqcHr0RpNqgHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7'} content_text="Books"/>
    </div>
    <div className='Difix'>
    <Catories image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
    <Catories image={'https://security.si.edu/sites/default/files/inline-images/lostandfound.png'} content_text="Others Items"/>
    </div>
    <h1 style={{ textAlign: "center", color: "#000" }} className="underline  my-2">RECENT LOST</h1>
    <div className='Difix'>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://security.si.edu/sites/default/files/inline-images/lostandfound.png'} content_text="Others Items"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      </div>
      <div className='Difix'>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      </div>
      <h1 style={{ textAlign: "center", color: "#000" }} className="underline  my-2">All LOST</h1>
      <div className='Difix'>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://security.si.edu/sites/default/files/inline-images/lostandfound.png'} content_text="Others Items"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      </div>
      <div className='Difix'>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      <Recentlost image={'https://th.bing.com/th?id=OIP.AtgTEKL9QqyZDbhStschRwHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'} content_text="Toys"/>
      </div>
      
    </>
  );
}

export default App;
