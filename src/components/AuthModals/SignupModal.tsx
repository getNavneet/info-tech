import React, { useState } from 'react';
import { X } from 'lucide-react';
import { saveUser, setCurrentUser } from '../../utils/localStorage';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    adminCode: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.isAdmin && formData.adminCode !== 'fusion2023') {
      setError('Invalid admin code');
      return;
    }

    const user = {
      id: Date.now().toString(),
      fullName: formData.fullName,
      email: formData.email,
      isAdmin: formData.isAdmin
    };

    saveUser(user);
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

        <h2 className="text-3xl font-bold mb-8 text-orange-500">Sign Up</h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

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

          <div>
            <label className="block text-white mb-2">Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adminRegister"
                checked={formData.isAdmin}
                onChange={e => setFormData({ ...formData, isAdmin: e.target.checked })}
                className="rounded bg-[#2a2a2a] border-gray-700 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="adminRegister" className="text-gray-300">
                Register as Admin
              </label>
            </div>

            {formData.isAdmin && (
              <div>
                <input
                  type="password"
                  placeholder="Enter admin code"
                  value={formData.adminCode}
                  onChange={e => setFormData({ ...formData, adminCode: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-400">
            Already have an account?{' '}
            <button 
              onClick={onSwitchToLogin}
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;