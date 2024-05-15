import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Danny from '../../assets/Danny.jpg'
import google from '../../assets/google.jpg'

import img02 from '../../assets/img02.jpg'
import img04 from '../../assets/img04.jpg'
import img01 from '../../assets/img01.jpg'
import  arrow_icon from '../../assets/arrow_icon.svg'


const Projects = () => {
  return (
    <div id= 'project'className='mywork'>
    <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern}alt=''/>
    </div>

    <div className='mywork-container'>
      
        <img src={Danny} alt=''/>
        <img src={img01} alt=''/>
        <img src={Danny} alt=''/>
        <img src={img04} alt=''/>
        <img src={img02} alt=''/>
        <img src={img04} alt=''/>

      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon}alt=''/>
    </div>
    
      
  
      
    </div>
  )
}

export default Projects
