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
            <a href="https://github.com/DesireeBurrell/hw2">Visit myfavoritelink</a> <br/> 
            <a href="https://github.com/DesireeBurrell/design-pad">Visit myDesignPad</a>
        </div>
    )
}

export default Projects
