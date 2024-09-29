import React from 'react';
//  import Navbar from './components/Navbar';
import './App.css';
import Navbar2 from './components/Navbar2';
//  import Content from './components/Content';
import Login from './components/Login';
 import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//  import Home from './components/Home';
 import Uploadpage from './components/Uploadpage';
 import Founditems_List from './components/Founditems_List';
 import PostItems from './components/PostItems';
 import ProtectedRoute from './components/protectedroutes';
 import Frontpage from './components/Frontpage';
import LearnMore from './components/LearnMore';
import Book_List from './components/Book_List';
import Digital_Devices_List from './components/Digital_Devices_List';
import Identity_Cards_List from './components/Identity_Cards_List';
import Others_Items_List from './components/Others_Items_List';
import Wallets_List from './components/Wallets_List';
import Toys_List from './components/Toys_List';

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}

function Register(){
  localStorage.clear()
  return <Signup />
}


export default function App() {

  


  return (
<>
    <Router>
      {/* <div> */}
    
     {/* <div> */}
     {/* <Navbar2/> */}
         {/* </div> */}
         {/* <Navbar /> */}
        
        <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path='/Home' element={<ProtectedRoute><Navbar2/> </ProtectedRoute> } />
        
         {/* <Route path="Home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />  */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} /> 
         <Route path="/reportfditem" element={ <ProtectedRoute> <Uploadpage/> </ProtectedRoute> } /> 
         <Route path="/founditem" element={ <ProtectedRoute> <Founditems_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Books" element={ <ProtectedRoute> <Book_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Identity-Cards" element={ <ProtectedRoute> <Identity_Cards_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Wallets" element={ <ProtectedRoute> <Wallets_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Digital-Devices" element={ <ProtectedRoute> <Digital_Devices_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Toys" element={ <ProtectedRoute> <Toys_List/> </ProtectedRoute> }/>  
         <Route path="/founditem/Others-Items" element={ <ProtectedRoute> <Others_Items_List/> </ProtectedRoute> }/>  
        <Route path="/postitem" element={ <ProtectedRoute> <PostItems/> </ProtectedRoute> }/>  
        <Route path="/learnmore" element={<LearnMore />} /> 
{/* 
          <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />   */}
        </Routes>
     </Router>  
     </>
  );
}
