import React, { useState } from 'react';
import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './AuthModals/LoginModal';
import SignupModal from './AuthModals/SignupModal';
import logo from '../../img/logo.png';
function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <>
      <nav className="px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
  <img src={logo} alt="" className="w-22 h-10" />
  {/* <span className="text-xl font-bold">Fusion</span> */}
</div>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/events" className="hover:text-orange-500 transition">Events</Link>
          <button 
            onClick={openLogin}
            className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
          >
            Login
          </button>
          <button 
            onClick={openSignup}
            className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={closeModals}
        onSwitchToSignup={openSignup}
      />
      
      <SignupModal
        isOpen={isSignupOpen}
        onClose={closeModals}
        onSwitchToLogin={openLogin}
      />
    </>
  );
}

export default Header;