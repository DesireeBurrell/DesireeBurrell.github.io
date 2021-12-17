import React from 'react'
import {Link}from 'react-router-dom'
function Projects() {
    return (
        <div>
           <div className='link'>    
            <Link to ='/'> Home-</Link>
            <Link to ='/projects'>Projects-</Link>
            <Link to ='/about'>About Me-</Link>
            <Link to ='/contact'>Contact Me</Link>
            </div> 
            <div className='msg'>
                This is my project page....
            </div>
            <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
        </div>
    )
}

export default Projects
