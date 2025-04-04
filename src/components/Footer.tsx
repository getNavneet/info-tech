import React from 'react';
import { Github, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="px-12 py-8 bg-black/50">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Twitter size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Facebook size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Instagram size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Linkedin size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition"><Github size={24} /></a>
      </div>
      <p className="text-center text-gray-400">@FusionClub</p>
    </footer>
  );
}

export default Footer;