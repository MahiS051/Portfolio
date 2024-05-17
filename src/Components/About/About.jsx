import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Mahi2 from '../../assets/Mahi2.jpg'

const About = () => {
  return (
    <div id = 'about'className='about'>
    <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
        
    </div>
    <div className='about-sec'>
        <div className='about-left'>
        <img src={Mahi2} alt=''/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am an exprienced frontend developer with an exprience of 1 year professional expertise in the field. Throughout my career,I have had the privilege of collaborating with prestigious organizations.
                Contributing to their success and growth.</p>

            </div>

            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS </p><hr style={{width :"80"}}/></div>
                <div className='about-skill'><p>Javascript  </p><hr style={{width :"80%"}}/></div>
                <div className='about-skill'><p>React JS </p><hr style={{width :"70%"}}/></div>
                <div className='about-skill'><p>Node js </p><hr style={{width :"50%"}}/></div>
                <div className='about-skill'><p>MongoDB </p><hr style={{width :"40%"}}/></div>
                <div className='about-skill'><p>API Testing </p><hr style={{width :"40%"}}/></div>
            </div>
        </div>
    </div>
    <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>1</h1>
            <p>YEAR OF EXPRIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>10+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
      
    </div>
  )
}

export default About
