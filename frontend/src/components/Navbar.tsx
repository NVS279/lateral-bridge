import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, BookOpen, Video, Users, BookCheck, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookCheck className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">Bridge Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-indigo-100 hover:text-white transition-colors duration-200">
              Home
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-indigo-100 hover:text-white transition-colors duration-200">
                  Dashboard
                </Link>
                <Link to="/peer-mentoring" className="text-indigo-100 hover:text-white transition-colors duration-200">
                  Mentoring
                </Link>
                <Link to="/academic-support" className="text-indigo-100 hover:text-white transition-colors duration-200">
                  Academic Support
                </Link>
                <Link to="/video-resources" className="text-indigo-100 hover:text-white transition-colors duration-200">
                  Videos
                </Link>
                <Link to="/community-forum" className="text-indigo-100 hover:text-white transition-colors duration-200">
                  Community
                </Link>
                
                <div className="relative group">
                  <button className="flex items-center text-indigo-100 hover:text-white focus:outline-none transition-colors duration-200">
                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-indigo-100 hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-white text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-indigo-100 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/peer-mentoring" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mentoring
                </Link>
                <Link 
                  to="/academic-support" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Academic Support
                </Link>
                <Link 
                  to="/video-resources" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link 
                  to="/community-forum" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
                <Link 
                  to="/profile" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block text-indigo-100 hover:text-white hover:bg-indigo-600 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;