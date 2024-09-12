import React from 'react';
//  import Navbar from './components/Navbar';
import './App.css';
import Navbar2 from './components/Navbar2';
// import Content from './components/Content';
// import Login from './components/Login';
// import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Lostitem from './components/Lostitem';
// import Uploadpage from './components/Uploadpage';
// import Founditems_List from './components/Founditems_List';
// import PostItems from './components/PostItems';

export default function App() {

  


  return (
<>
    <Router>
      {/* <div> */}
    
     {/* <div> */}
     <Navbar2/>
         {/* </div> */}
         {/* <Navbar /> */}
        
        <Routes>
{/*       
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
         <Route path="Signup" element={<Signup/>} />
        <Route path="Lostitem" element={<Lostitem/>} />
        <Route path="founditem" element={<Uploadpage/>}/>
        <Route path="feed" element={<Founditems_List/>}/>
        <Route path="Postitem" element={<PostItems/>}/>  */}
{/* 
          <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />   */}
        </Routes>
     </Router>  
     </>
  );
}
