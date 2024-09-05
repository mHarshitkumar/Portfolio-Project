import React, { useRef } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(null); // Create a reference to the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Enter your own Web3 forms access key below
    formData.append("access_key", "dfb3b6b2-f3d3-4977-a66a-e8cec5045786"); // connectwiththeharshit@gmail.com

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success('Thank you for reaching out, Harshit! Your message has been sent successfully.');
        formRef.current.reset(); 
      } else {
        toast.error('There was an error sending your message.');
      }
    } catch (error) {
      toast.error('There was an error sending your message.');
    }
  };

  return (
    <div id='contact' className='contact'>
      <ToastContainer />
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" /> <p>connectwiththeharshit@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" /> <p>+91-8077579601</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /> <p>Noida , India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" ref={formRef}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' id='name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' id='email' required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' id='message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
