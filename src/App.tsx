import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import PeerMentoringPage from './pages/PeerMentoringPage';
import AcademicSupportPage from './pages/AcademicSupportPage';
import VideoResourcesPage from './pages/VideoResourcesPage';
import CommunityForumPage from './pages/CommunityForumPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/peer-mentoring" 
                element={
                  <ProtectedRoute>
                    <PeerMentoringPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/academic-support" 
                element={
                  <ProtectedRoute>
                    <AcademicSupportPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/video-resources" 
                element={
                  <ProtectedRoute>
                    <VideoResourcesPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/community-forum" 
                element={
                  <ProtectedRoute>
                    <CommunityForumPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;