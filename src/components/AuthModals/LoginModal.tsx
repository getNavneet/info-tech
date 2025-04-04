import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getUsers, setCurrentUser } from '../../utils/localStorage';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const users = getUsers();
    const user = users.find(u => u.email === formData.email);

    if (!user) {
      setError('User not found');
      return;
    }

    // In a real app, we would hash passwords and compare properly
    setCurrentUser(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-8 text-orange-500">Login</h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
          >
            Login
          </button>

          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <button 
              onClick={onSwitchToSignup}
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;