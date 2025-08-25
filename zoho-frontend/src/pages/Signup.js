import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/view/Auth.css'; // Reuse or extend this CSS
import googleIcon from '../assets/google.png';
import linkedinIcon from '../assets/linkedin.png';
import microsoftIcon from '../assets/microsoft.png';


const Signup = () => {
  return (
    <>
      <Header />
      <main className="auth-container1">
        <h1 className="auth-heading1">Start with your free account today.</h1>
        <form className="auth-form1">
          <div className="auth-field1">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" required />
          </div>

          <div className="auth-field1">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" required />
          </div>

          <div className="auth-field1">
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" required />
          </div>

          <div className="auth-checkbox1">
            <label>
              <input type="checkbox" required />
              I agree to the <u><a href="/terms">Terms of Service</a></u> and <u><a href="/privacy">Privacy Policy</a></u>.
            </label>
          </div>

          <button type="submit" className="auth-button1">SIGN UP FOR FREE</button>
        </form>


        <div className="auth-alt-signup1">
          <p>Or sign up using:</p>
          <div className="auth-icons1">
            <img src={googleIcon} alt="Google" />
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={microsoftIcon} alt="Microsoft" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
