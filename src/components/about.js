import React from 'react'
import {Link}from 'react-router-dom'
function About() {
    return (
        <div>
            <div className='link'>    
            <Link to ='/'> Home-</Link>
            <Link to ='/projects'>Projects-</Link>
            <Link to ='/about'>About Me-</Link>
            <Link to ='/contact'>Contact Me</Link>
            </div>
            <div className='msg'>
                Hello, my name is Desiree and right now im majoring in computer science and minoring in math. 
                I would be graduating this semester and one thing I need to work better on is time management. 
                When im not doing school work I am spending time playing video games, playing tennis and enjoying time with my guinea pigs.
            </div>
        </div>
    )
}

export default About
