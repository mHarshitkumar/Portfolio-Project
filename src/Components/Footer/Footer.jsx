import React, { useState } from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import footer_logo from '../../assets/NameLogo.png';
import gitlab_icon from '../../assets/gitlab.png'; // Example paths to social icons
import insta_icon from '../../assets/instagram.png';
import linkedin_icon from '../../assets/linkedin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }

    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];

    if (subscribedEmails.includes(email)) {
      toast.info('You are already subscribed.');
    } else {
      subscribedEmails.push(email);
      localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
      toast.success('Thank you for subscribing!');
    }

    setEmail(''); // Clear the email input field after submission
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" width={50} />
          <p>I am a seasoned .NET developer with 3.5 years of experience in the industry, having had the privilege of contributing to Product Based Companies.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input 
              type="email" 
              placeholder='Enter your email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Harshit Kumar. All rights reserved.</p>
        <div className="footer-bottom-right">
          {/* <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p> */}
          <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/harshit-kumar-8a15261a8" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" width={30} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={insta_icon} alt="Twitter" width={30} />
            </a>
            <a href="https://github.com/mHarshitkumar" target="_blank" rel="noopener noreferrer">
              <img src={gitlab_icon} alt="Facebook" width={30} />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="bottom-center" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
};

export default Footer;
