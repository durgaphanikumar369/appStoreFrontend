import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SignupForm from './components/signupForm/SignupForm';
import LoginForm from './components/loginForm/LoginForm';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <div style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<> <Header/>    <SignupForm /> </>} />
          <Route path="/login" element={<> <Header/> <LoginForm /></>} />
          <Route path="/signup" element={<> <Header/> <SignupForm /></>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      
        
      
      <Footer />
    </div>
  );
};

export default App;
