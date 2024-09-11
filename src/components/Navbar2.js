import React,{useState} from 'react'
import './styles/Navbar2.css'
import Content from './Content';

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
            <li><a href=''>Home</a></li>
            <li><a href=''>Report Lost Items</a></li>
            <li><a href=''>Report Found Items</a></li>
            <li><a href=''>Report Found Items</a></li>
            <li><a href=''>Postitems</a></li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={menu}></i>
      </nav>
      <div className="text-box">
        <h1>Something Lost ??</h1>
        <p>We help our users to find their things they lost.</p>
        <a href='' className='hero-btn'>Visit To Know More</a>
      </div>
    </section>
    <Content/>
    </>
  );
}

export default App;
