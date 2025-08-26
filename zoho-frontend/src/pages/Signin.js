import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import '../pages/view/Auth.css';
import topimageIcon from '../assets/topimage.png';
import googleIcon from '../assets/google.png';
import linkedinIcon from '../assets/linkedin.png';
import microsoftIcon from '../assets/microsoft.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import appleIcon from '../assets/apple.png';
import illustration1 from '../assets/illustration1.png';
import illustration2 from '../assets/illustration2.png';

const SignIn = () => {
  const illustrations = [illustration1, illustration2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % illustrations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [illustrations.length]);

  const handleImageToggle = () => {
    setCurrentIndex(prev => (prev + 1) % illustrations.length);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setStep(2);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });

      if (response.data) {
        setSuccess('Login successful!');
        // Redirect or store token here
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleChangeEmail = () => {
    setStep(1);
    setPassword('');
  };

  return (
    <>
      <div className="sigin-bg-image">
        <main className="auth-containertwo-column-layout">
          <div className="center-box">
            <section className="auth-box">
              <div className="auth-box-centerbox">
                <div className="centerimage">
                  <img src={topimageIcon} alt="Top Icon" />
                </div>
                <h1 className="auth-heading2">Sign in</h1>
                <h3 className="auth-heading23">to access Zoho Home</h3>

                {step === 1 && (
                  <form onSubmit={handleEmailSubmit} className="auth-form2">
                    <div className="auth-field3 input">
                    <input
                      type="text"
                      placeholder="Enter your email or mobile number"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    </div>
                    <button type="submit" className="auth-button3">Next</button>
                    
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleLogin} className="auth-form2">
                    <div className="auth-email-display">
                      <strong>{email}</strong>{' '}
                      <button type="button" onClick={handleChangeEmail} className="auth-change-link">
                        Change
                      </button>
                    </div>
                    <div className="auth-field3 input">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    </div>
                    <button type="submit" className="auth-button3">Sign in</button>
                  </form>
                )}

                {error && <p className="auth-error">{error}</p>}
                {success && <p className="auth-success">{success}</p>}

                <div className="auth-alt-signup2">
                  <p>Sign in using</p>
                  <div className="auth-icons2">
                    <img src={googleIcon} alt="Google" />
                    <img src={microsoftIcon} alt="Microsoft" />
                    <img src={linkedinIcon} alt="LinkedIn" />
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={twitterIcon} alt="Twitter" />
                    <img src={appleIcon} alt="Apple" />
                  </div>
                </div>

                <p className="auth-signup1">
                  Don’t have a Zoho account?{' '}
                  <a href="/signup" className="auth-link">Sign up now</a>
                </p>
              </div>
            </section>

            <aside className="auth-side-info">
              <div className="auth-illustration-wrapper">
                <img
                  src={illustrations[currentIndex]}
                  alt="Security illustration"
                  className="auth-illustration"
                  onClick={handleImageToggle}
                  style={{ cursor: 'pointer' }}
                />
              </div>

              <div className="auth-extra1">
                <h2 className="auth-subheading">MFA for all accounts</h2>
                <p className="auth-note1">
                  Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.
                </p>
                <a href="/signin" className="auth-link2">Learn more</a>
              </div>
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
