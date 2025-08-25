// src/pages/Login.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import '../pages/view/Auth.css'; // ✅ Corrected relative path

const Login = () => {
  return (
    <>
      <Header />
      <main className="auth-container" role="main">
        <img
          src={logo}
          alt="Zoho Logo"
          className="auth-logo"
          aria-hidden="true"
        />
        <h1 className="auth-heading">Log in to access Zoho.</h1>
        <button className="auth-button" type="button">
          SIGN IN
        </button>
        <p className="auth-signup">
          Don’t have a Zoho account?{' '}
          <a href="/signup" className="auth-link">
            Sign Up Now
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Login;
