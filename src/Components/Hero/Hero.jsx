import React from 'react'
import './Hero.css'
import Maahii1 from '../../assets/Maahii1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id ='home'className='hero'>
    <img src={Maahii1} alt=''/>
    <h1><span>I'am Mahi Khaan </span>I am Full Stack Developer</h1>
    <p>I'am full stack developer and  I have 1 Years exprience and i have done my internship.</p>
    <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className= 'anchor-link' offset ={50} href = '#token'>Connect With Me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
    </div>
      
    </div>
  )
}

export default Hero
