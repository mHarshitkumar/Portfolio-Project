import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import profile_img from '../../assets/Harshit_Pro.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Harshit Kumar,</span> Dotnet Developer based in India.</h1>
      <p>I am a seasoned .NET developer with 3.5 years of experience in the industry, having had the privilege of contributing to Product Based Companies Like : <a href="https://www.gingerwebs.com/" target="_blank">Visit</a>.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
