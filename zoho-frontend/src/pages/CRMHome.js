import React from 'react';
import { FaSearch, FaGlobe, FaUserCircle } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si"; // for X (Twitter-like)
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
// import { Home, Calendar, FileText, Users, Settings } from "lucide-react";
import logo from '../assets/logo.png';
import zohocrm from '../assets/zohocrm.png';
import '../pages/view/CRMHome.css'; // put footer styles also here OR keep separate CSS
// import heroImage from "../assets/crm-hero.png";
import tafeLogo from "../assets/tafe.png";
import blueStarLogo from "../assets/bluestar.png";
import boseLogo from "../assets/bose.png";
import centerLogo from "../assets/centerpage-image.png";
import footerLogo from "../assets/footer.png";
import hotstarLogo from "../assets/hotstar.png";
import iiflLogo from "../assets/iifl.png";
import marathonLogo from "../assets/marathon.png";
import dashboardLogo from "../assets/dashboard.png";
import minorLogo from "../assets/minor hotel.png";
import simplify from "../assets/simplify.png";
import agappeLogo from "../assets/agappe.png";
import ar7Logo from "../assets/ar7.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import iso1 from "../assets/icon1.png";
import iso2 from "../assets/icon2.png";
import iso3 from "../assets/icon3.png";
import soc from "../assets/soc.png";
import gdpr from "../assets/gppr.png";
import hipaa from "../assets/hipaa.png";

const CRMHome = () => {
  // const navigate = useNavigate();

  return (
    <div>
      {/* Top Navbar */}
      <header className="crm-navbar">
        {/* Left: Logo */}
        <div className="crm-logo">
          <img src={logo} alt="Zoho Logo" />
        </div>

        {/* Middle: Navigation Links */}
        <nav className="crm-navlinks">
          <span>Bigin</span>
          <span>CRM Plus</span>
          <span>Desk</span>
          <span>Campaigns</span>
          <span>RouteIQ</span>
          <span>Mail</span>
          <span>All Products ▾</span>
        </nav>


        {/* Right: Icons */}
        <div className="crm-right">
          <FaSearch className="crm-icon" />
          <div className="crm-lang">
            <FaGlobe className="crm-icon" />
            <span>English (India)</span>
          </div>
          <FaUserCircle className="crm-profile" />
        </div>
      </header>
      


          {/* CRM Main Section */}
          <div className="crm-home">
            <div className="subnav">
              <div></div>
            <div className="subnav-left">
              <img src={zohocrm}alt="Zoho Logo" />
            </div>

            <nav className="subnav-links">
              <ul>
                <li>Features ▾</li>
                <li>Pricing</li>
                <li>Platform ▾</li>
                <li>Verticals ▾</li>
                <li>Customers ▾</li>
                <li>Resources ▾</li>
              </ul>
            </nav>

            <div className="subnav-right">
              <button className="subnav-btn">Access Zoho CRM</button> 
            </div>

        </div>
          {/* Hero Section */}

          <section className="crm-hero">

            <h1>Your great Indian <br /> growth story</h1>
            <p>
              Convert more and grow your business in the world's fastest growing economy,
              with the magic of contextual AI and thoughtful UI.
            </p>
              {/* Right Side: Image */}
              <div className="crm-hero-image">
                <img src={centerLogo} alt="CRM Hero" />
             </div>
          </section>
             
  


     <section className="crm-hero1">
        {/* Trusted by the best */}
      <section className="crm-trusted">
        <h2>Trusted by the best</h2>
        <div className="crm-logos">
          <img src={tafeLogo} alt="TAFE" />
          <img src={blueStarLogo} alt="Blue Star" />
          <img src={boseLogo} alt="Bose" />
          <img src={hotstarLogo} alt="Hotstar" />
          <img src={iiflLogo} alt="iiFl"/>
          <img src={marathonLogo} alt="Marathon" />
        </div>
      </section>



      {/* Teams Section */}
      <section className="crm-teams">
        <h2>
          Teams that work together, <br /> win together
        </h2>
        <p>
          Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, 
          you can build unique, collaborative spaces for each team — all with some AI assistance, of course. 
          Start winning more, together.
        </p>
        {/* <a href="#" className="learn-more">Learn more →</a> */}
        <span className="learn-more">Learn more → </span>
      </section>
      
      <section className="feature-section">

        {/* Pills */}
        <div className="pill-container">
          <button className="pill active">Teamspaces</button>
          <button className="pill">Zia Module Creation</button>
          <button className="pill">Zia Custom Design</button>
        </div>

        {/* Description */}
        <p className="description">
          <h3>Set up a dedicated space for each team. Let teams work with the data
          they need and nothing else.</h3>
          
        </p>
      </section>



      <div className="dashboard-container">
        {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={dashboardLogo} alt="Logo" className="logo" />
        </div>
      </aside>
      </div>




      {/* ===== Testimonials Section ===== */}
      <section className="testimonials">
        <h2>Staying relevant and driving innovation, since 2005</h2>
        <div className="testimonial-cards">
          
          <div className="testimonial-card1">
            <img src={agappeLogo} alt="Agappe Logo" className="company-logo"/>
            <p>
              Zoho CRM offers us technology that allows us to be more proactive and
              insight-driven, with all information in a single place. With our
              complete business under control, our productivity is up by 80% in the
              last year that we have been using Zoho.
            </p>
            <div className="author1">
              <img src="/people/thomas.png" alt="Thomas John" className="author-img"/>
              <div>
                <strong>Thomas John</strong>
                <p>Managing Director, Agappe</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={simplify}  alt="Simplify9 Logo" className="company-logo"/>
            <p>
              Zoho CRM for Everyone is incredibly user-friendly and customizable.
              Its intuitive interface makes it easy to navigate. The reporting tools
              were also a standout, providing clear insights that helped us make
              informed decisions.
            </p>
            <div className="author2">
              <img src="/people/samer.png" alt="Samer Zughul" className="author-img"/>
              <div>
                <strong>Samer Zughul</strong>
                <p>Managing Partner, Simplify9</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card1">
            <img src={minorLogo} alt="Minor Hotels Logo" className="company-logo"/>
            <p>
              Zoho CRM helped us automate our processes after we implemented
              workflow rules. Privacy and security are essential for us, and Zoho
              addressed it all. This was a game changer.
            </p>
            <div className="author3">
              <img src="/people/olga.png" alt="Olga" className="author-img"/>
              <div>
                <strong>Olga Kovshanova</strong>
                <p>Director, Minor Hotels</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={ar7Logo} alt="Ava7 Logo" className="company-logo"/>
              <p>
              I’m overall very satisfied with Zoho. The new CRM4E update has
              significantly enhanced the potential for effective team collaboration.
            </p>
            <div className="author4">
              <img src="/people/ari.png" alt="Ari" className="author-img"/>
              <div className="author-img2">
                <strong>Ari Daniel Hernandez Sanchez</strong>
                <p>Marketing Director, Ava 7</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      </section>
    
      </div>
      










      <footer className="crm-footer">
      {/* Top 4 Columns */}
      <div className="crm-footer-container">
        {/* Promo Banner */}
        <div className="footer-col promo">
          <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
        </div>

        {/* Explore CRM */}
        <div className="footer-col">
          <h3>EXPLORE CRM</h3>
          <ul>
            {[
              "CRM Essentials",
              "CRM Alternatives",
              "CRM for Free",
              "CRM for SMB",
              "Google Workspace CRM",
              "Social CRM",
              "Help Desk CRM",
              "AI-Powered CRM",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3>RESOURCES</h3>
          <ul>
            {[
              "What is CRM?",
              "Solutions & Verticals",
              "Help Center",
              "Guided Tour",
              "Certified Consultants",
              "Customer Forum",
              "Release Notes",
              "Training",
              "CRM Express - Blog",
              "CRM for Enterprises",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Get Started */}
        <div className="footer-col">
          <h3>GET STARTED</h3>
          <ul>
            {[
              "Request Demo",
              "Why Zoho CRM?",
              "Integrations",
              "Compare CRMs",
              "Edition Selector Quiz",
              "Compare Plans",
              "Awards & Titles",
              "Get Price Quote",
              "Contact Sales",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr class="white-line" />

      {/* Contact + Apps + Social */}
      <div className="footer-bottom">
        <p className="email">📧 sales[at]zohocorp[dot]com</p>
        <div className="apps">
          <img src={appstore} alt="App Store" />
          <img src={playstore} alt="Google Play" />
        </div>
        <div className="social-icons">
          <FaLinkedin />
          <SiX />
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
        </div>
      </div>
      <hr class="white-line" />


      {/* Certifications */}
      <div className="certifications">
        <p>Choose Privacy. Choose Zoho.</p>
        <div className="cert-icons">
          <img src={iso1} alt="ISO 27001" />
          <img src={iso2} alt="ISO 27017" />
          <img src={iso3} alt="ISO 27018" />
          <img src={soc} alt="SOC" />
          <img src={gdpr} alt="GDPR" />
          <img src={hipaa} alt="HIPAA" />
        </div>
      </div>
      <hr class="white-line" />


      {/* Bottom Strip */}
      <div className="footer-legal">
        <div className="legal-links">
          <span>Zoho Home</span> | <span>Contact Us</span> | <span>Security</span> |{" "}
          <span>Compliance</span> | <span>IPR Complaints</span> |{" "}
          <span>Anti-spam Policy</span> | <span>Terms of Service</span> |{" "}
          <span>Privacy Policy</span> | <span>Cookie Policy</span> |{" "}
          <span>GDPR Compliance</span> | <span>Abuse Policy</span>
        </div>
        <p>© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
     
    </div>
  );
};

export default CRMHome;
