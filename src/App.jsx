import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import AiFields from './pages/ai_fields_page/aifields';
import AboutUs from './pages/aboutus_page/aboutus';
import Contact from './pages/contact_page/contact';
import Login from './pages/login_page/login';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/ai-fields" element={<AiFields />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
