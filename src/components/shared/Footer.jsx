import React from 'react';
import { Link } from 'react-router'; 
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          

          <div>
            <Link to="/" className="text-3xl font-bold text-white font-display">
              Game<span className="text-purple-500">Hub</span>
            </Link>
            <p className="mt-4 text-sm">
              Discover and support indie game developers. Your next obsession is just a click away.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link to="/all-games" className="hover:text-purple-400">All Games</Link></li>
              <li><Link to="/profile" className="hover:text-purple-400">My Profile</Link></li>
             
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 text-2xl"><FaFacebook /></a>
              <a href="#" className="hover:text-purple-400 text-2xl"><FaTwitter /></a>
              <a href="#" className="hover:text-purple-400 text-2xl"><FaYoutube /></a>
              <a href="#" className="hover:text-purple-400 text-2xl"><FaGithub /></a>
            </div>
          </div>

        </div>
        

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;