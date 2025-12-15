import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Context
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import Features from './pages/Features';
import Documentation from './pages/Documentation';
import AboutUs from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Wrapper component that uses AuthContext to handle loading and routing
const AppContent = () => {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar 
        isLoggedIn={!!user} 
        user={user} 
        onLogout={logout} 
      />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          
          <Route 
            path="/home" 
            element={
              // FIX: If user is logged in, show Home. 
              // If not (logout), immediately redirect to Landing (/)
              user ? (
                <Home user={user} onLogout={logout} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          
          <Route path="/features" element={<Features />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<AboutUs />} />
          
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider> 
      <ThemeProvider>
        <Router>
           <AppContent />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;