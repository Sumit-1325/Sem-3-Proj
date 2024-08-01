import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="login" element={<Login />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
