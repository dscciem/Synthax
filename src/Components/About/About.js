import React from 'react'
import './About.css'
import Background from './asset/gdsc.svg'

const About = () => {
  return (
    <div className="container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Glory:ital,wght@1,100&family=Poppins&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
      </style>
      <h1 className="heading">About</h1>
      <span className="line"></span>
      <img className="background" src={Background} style={{ marginLeft: "-12rem" }} height="900" width="900" alt="gdse" />
      <p className="content">The Developer Students Club - CIEM brings to you Synthax 2.0, an open-source program to introduce students to the world of open-source development and demonstrate the power of real-time unified problem-solving. The projects that we will be hosting have been hand-picked to inspire creative thinking and collaboration among all participants.</p>
    </div>
  )
}

export default About