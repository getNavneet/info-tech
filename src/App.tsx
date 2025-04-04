import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import AdminDashboard from './pages/AdminDashboard';
import ChatBot from './components/ChatBot';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-black text-white">
        <Header />
        <ChatBot />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;